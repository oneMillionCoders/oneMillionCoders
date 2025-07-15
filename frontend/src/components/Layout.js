// src/components/Layout.js
import React, { useState, useEffect, useMemo, useContext } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { ThemeContext } from "../ThemeContext";

const careers = [
  {
    to: "/careers/data-analyst-associate",
    label: "Data Analyst Associate",
    key: "daa",
  },
  {
    to: "/careers/cybersecurity-professional",
    label: "Cybersecurity Professional",
    key: "csp",
  },
  {
    to: "/careers/network-support-technician",
    label: "Network Support Technician",
    key: "nst",
  }, // New section
];

const careerPaths = {
  daa: [
    { to: "excel", label: "Excel" },
    { to: "sql", label: "SQL" },
    { to: "python", label: "Python" },
    { to: "Power BI", label: "Power BI" },
  ],
  csp: [
    // New career path
    { to: "network-security", label: "Network Security" },
    { to: "cryptography", label: "Cryptography" },
    { to: "incident-response", label: "Incident Response" },
    { to: "ethical-hacking", label: "Ethical Hacking" },
  ],
  nst: [
    // New career path
    { to: "networking-basics", label: "Networking Basics" },
    {
      to: "networking-devices",
      label: "Networking Devices and Initial Configuration",
    },
    {
      to: "network-addressing",
      label: "Network Addressing and Basic Troubleshooting",
    },
    { to: "network-support-security", label: "Network Support and Security" },
  ],
};

const excelTopics = [
  { to: "excel", label: "Excel Home" },
  { to: "excel/introduction", label: "Excel Introduction" },
  { to: "excel/getstarted", label: "Excel Get Started" },
  { to: "excel/overview", label: "Excel Overview" },
  { to: "excel/syntax", label: "Excel Syntax" },
  { to: "excel/ranges", label: "Excel Ranges" },
  { to: "excel/fill/filling", label: "Filling" }, // Removed child structure
  { to: "excel/fill/double-click", label: "Double Click to Fill" }, // Removed child structure
];

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [completedSections, setCompletedSections] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Fetch completed sections from the backend on app load
  useEffect(() => {
    const fetchCompletedSections = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/completed-sections`, // Updated URL
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.ok) {
          const data = await response.json();
          //console.log("Fetched completed sections:", data.completed_sections); // Debug log
          setCompletedSections(data.completed_sections);
        } else {
          console.error("Failed to fetch completed sections");
        }
      } catch (error) {
        console.error("Error fetching completed sections:", error);
      }
    };

    if (isLoggedIn) {
      fetchCompletedSections();
    }
  }, [isLoggedIn]);

  // Sync `isLoggedIn` state with `localStorage`
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange); // Listen for changes in localStorage
    return () => window.removeEventListener("storage", handleStorageChange); // Cleanup listener
  }, []);

  // Redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn && pathname !== "/login") {
      navigate("/login", { replace: true }); // Redirect to login page
    }
  }, [isLoggedIn, pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setIsLoggedIn(false); // Update state
    navigate("/login", { replace: true }); // Redirect to login page and replace history
  };

  // Determine if the current page is the login page
  const isLoginPage = pathname === "/login";

  // 1) split & decode so "%20" → " "
  const segs = pathname
    .split("/")
    .filter(Boolean)
    .map((s) => decodeURIComponent(s));

  // 2) detect that we're in DAA, CSP, or NST
  const inDAA = segs[0] === "careers" && segs[1] === "data-analyst-associate";
  const inCSP =
    segs[0] === "careers" && segs[1] === "cybersecurity-professional";
  const inNST =
    segs[0] === "careers" && segs[1] === "network-support-technician";

  // 3) the full “sub‑path” for prev/next logic
  const currentPath = segs.slice(2).join("/");

  // 4) look only at the top‑level section name
  const section = segs[2] || "";
  const sectionLower = section.toLowerCase();

  const inExcel = sectionLower === "excel";
  const inSQL = sectionLower === "sql";
  const inPython = sectionLower === "python";
  const inPowerBI = sectionLower === "power bi";

  // 5) sidebarItems logic
  const sidebarItems = useMemo(() => {
    if (inDAA) {
      if (inExcel) return excelTopics;
      if (inPowerBI) return [{ to: "power BI", label: "Power BI" }];
      if (inSQL) return [{ to: "sql", label: "SQL" }];
      if (inPython) return [{ to: "python", label: "Python" }];
      return careerPaths.daa;
    }
    if (inCSP) {
      return careerPaths.csp; // Use the CSP topics
    }
    if (inNST) {
      return careerPaths.nst; // Use the NST topics
    }
    return [];
  }, [inDAA, inCSP, inNST, inExcel, inPowerBI, inSQL, inPython]);

  // Flatten sidebarItems for prev/next logic
  const flatItems = sidebarItems.flatMap((item) =>
    item.children ? item.children : [item]
  );

  // Find the current index in flatItems
  const currentIndex = flatItems.findIndex((item) => item.to === currentPath);

  // Determine prevItem and nextItem
  const prevItem = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  // Heights & link builder (encoding on output)
  const H1 = 56,
    H2 = inDAA || inCSP || inNST ? 47 : 0;
  const buildLink = (item) => {
    if (inDAA) return `/careers/data-analyst-associate/${item.to}`;
    if (inCSP) return `/careers/cybersecurity-professional/${item.to}`;
    if (inNST) return `/careers/network-support-technician/${item.to}`;
    return "#";
  };

  // Sidebar menu‑open state
  const [openMenus, setOpenMenus] = useState({});
  useEffect(() => {
    const newOpen = {};
    sidebarItems.forEach((item) => {
      if (item.children) {
        item.children.forEach((ch) => {
          if (ch.to === currentPath) newOpen[item.to] = true;
        });
      }
    });
    setOpenMenus(newOpen);
  }, [currentPath, sidebarItems]);

  // Scroll‑to‑top on nav
  useEffect(() => {
    const t = setTimeout(() => window.scrollTo(0, 0), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const toggleMenu = (key) => setOpenMenus((m) => ({ ...m, [key]: !m[key] }));

  const handleNextClick = async () => {
    // Mark the current section as completed
    if (!completedSections.includes(currentPath)) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/complete-section`, // Updated URL
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ section: currentPath }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          /*console.log("Updated completed sections from backend:",
            data.completed_sections
          );*/
          setCompletedSections(data.completed_sections);
        } else {
          console.error("Failed to update completed section.");
        }
      } catch (error) {
        console.error("Error updating completed section:", error);
      }
    }

    // Navigate to the next page
    if (nextItem) {
      navigate(buildLink(nextItem));
    }
  };

  const handleComplete = async () => {
    if (!completedSections.includes(currentPath)) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/complete-section`, // Use environment variable
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ section: currentPath }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCompletedSections(data.completed_sections);
        }
      } catch (err) {
        console.error("Error marking complete:", err);
      }
    }
  };

  return (
    <>
      {/* primary nav */}
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4"
        style={{ height: H1 }}
      >
        <Link className="navbar-brand" to="/">
          OneMillionCoders
        </Link>
        {!isLoginPage && isLoggedIn && (
          <>
            <ul className="navbar-nav">
              {careers.map((c) => (
                <li key={c.key} className="nav-item">
                  <NavLink
                    to={c.to}
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active-link" : "")
                    }
                  >
                    {c.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="d-flex ms-auto align-items-center">
              <button
                onClick={toggleTheme}
                className="btn btn-secondary ms-3"
                aria-label="Toggle dark/light mode"
                style={{ minWidth: 160 }}
              >
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
              </button>
              <button className="btn btn-danger ms-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}
      </nav>

      {/* sub‑navbar */}
      {(inDAA || inCSP || inNST) && (
        <nav
          className="navbar career-path-row px-4"
          style={{
            position: "fixed",
            top: H1,
            height: H2,
            width: "100%",
            zIndex: 1030,
            borderBottom: "1px solid #444"
            // Remove background and color inline, let CSS handle it
          }}
        >
          <ul className="navbar-nav flex-row">
            {(inDAA
              ? careerPaths.daa
              : inCSP
              ? careerPaths.csp
              : careerPaths.nst
            ).map((p) => (
              <li key={p.to} className="nav-item me-3">
                <NavLink
                  to={buildLink(p)}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active-link" : "")
                  }
                >
                  {p.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* layout grid */}
      <div className="container-fluid p-0" style={{ marginTop: H1 + H2 }}>
        <div className="row g-0">
          {/* sidebar */}
          {(inDAA || inCSP || inNST) && (
            <aside
              className="d-none d-md-block border-end p-3"
              style={{
                position: "fixed",
                top: H1 + H2,
                bottom: 0,
                width: "15%",
                overflowY: "auto",
                background: "var(--card-bg)",
                color: "var(--card-text)",
                transition: "background 0.3s, color 0.3s"
              }}
            >
              <ul className="nav nav-pills flex-column position-relative">
                {sidebarItems.map((item, index) => {
                  const hasChildren = Array.isArray(item.children);
                  const isCompleted = completedSections.includes(item.to);
                  const isLastItem = index === sidebarItems.length - 1;

                  return (
                    <li
                      key={item.to}
                      className="nav-item d-flex align-items-center position-relative"
                    >
                      {/* Checkmark */}
                      <div
                        className="checkmark-container"
                        style={{ justifyContent: "flex-start" }} // ← force top‑alignment
                      >
                        <div
                          className={`checkmark ${isCompleted ? "alive" : ""}`}
                        />
                        {/* always render the line, but hide it on the last item */}
                        <div
                          className="vertical-line"
                          style={{
                            visibility: isLastItem ? "hidden" : "visible",
                          }}
                        />
                      </div>

                      {/* Sidebar Link */}
                      {hasChildren ? (
                        <>
                          <button
                            className={
                              "nav-link w-100 text-start" +
                              (openMenus[item.to] ? " active-link" : "")
                            }
                            onClick={() => toggleMenu(item.to)}
                          >
                            {item.label}
                          </button>
                          {openMenus[item.to] && (
                            <ul className="nav flex-column ms-3 mt-2">
                              {item.children.map((ch) => (
                                <li key={ch.to}>
                                  <NavLink
                                    to={buildLink(ch)}
                                    className={({ isActive }) =>
                                      "nav-link small" +
                                      (isActive ? " active-link" : "")
                                    }
                                  >
                                    {ch.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={buildLink(item)}
                          className={({ isActive }) =>
                            "nav-link d-flex align-items-center" +
                            (isActive ? " active-link" : "")
                          }
                          end
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}

          {/* main */}
          <main
            className={
              inDAA || inCSP || inNST
                ? "col-md-10 offset-md-2 p-4"
                : "col-12 p-4"
            }
            style={{
              minHeight: "100vh",
              background: "var(--card-bg)",
              color: "var(--card-text)",
              transition: "background 0.3s, color 0.3s"
            }}
          >
            {/* top prev/next */}
            <div className="d-flex justify-content-between mb-4">
              {prevItem ? (
                <Link
                  to={buildLink(prevItem)}
                  className="btn btn-outline-primary"
                >
                  ← {prevItem.label}
                </Link>
              ) : (
                <div />
              )}
              {nextItem ? (
                <Link
                  to={buildLink(nextItem)}
                  className="btn btn-outline-primary"
                >
                  {nextItem.label} →
                </Link>
              ) : (
                <div />
              )}
            </div>

            {children}

            {/* bottom prev/next/completed */}
            {!isLoginPage && (
              <div className="d-flex align-items-center mt-4">
                {/* ← Previous if it exists */}
                {prevItem && (
                  <Link
                    to={buildLink(prevItem)}
                    className="btn btn-outline-primary"
                  >
                    ← {prevItem.label}
                  </Link>
                )}

                {/* Next → or, when nextItem is null, Completed */}
                {nextItem ? (
                  <button
                    className="btn btn-outline-primary ms-auto"
                    onClick={handleNextClick}
                  >
                    {nextItem.label} →
                  </button>
                ) : (
                  <button
                    className="btn btn-success ms-auto"
                    onClick={handleComplete}
                  >
                    Completed
                  </button>
                )}
              </div>
            )}
          </main>
        </div>
      </div>


    </>
  );
}