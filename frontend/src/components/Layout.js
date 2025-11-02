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
  { to: "excel/fill/filling", label: "Filling" },
  { to: "excel/fill/double-click", label: "Double Click to Fill" },
  { to: "excel/move-cells", label: "Move Cells" },
  { to: "excel/add-cells", label: "Add Cells" },
  { to: "excel/delete-cells", label: "Delete Cells" },
  { to: "excel/undo-redo", label: "Undo and Redo" },
  { to: "excel/formulas", label: "Excel Formulas" },
  { to: "excel/references", label: "Excel References" },
  { to: "excel/addition", label: "Addition Operator" },
  { to: "excel/subtraction", label: "Subtraction Operator" },
  { to: "excel/multiplication", label: "Multiplication Operator" },
  { to: "excel/division", label: "Division Operator" },
  { to: "excel/parentheses", label: "Parentheses" },
  { to: "excel/functions", label: "Functions" },
  { to: "excel/sort", label: "Sort" },
  { to: "excel/filter", label: "Filter" },
  { to: "excel/table", label: "Table" },
  { to: "excel/table-resize", label: "Table Resizing" },
  { to: "excel/table-remove-duplicates", label: "Remove Duplicates" },
  { to: "excel/table-style", label: "Table Style" },
  { to: "excel/conditional-formatting", label: "Conditional Formatting" },
  { to: "excel/charts", label: "Charts" },
  { to: "excel/pivottable", label: "PivotTable" },
  { to: "excel/and", label: "AND Function" },
  { to: "excel/average", label: "AVERAGE Function" },
  { to: "excel/averageif", label: "AVERAGEIF Function" },
  { to: "excel/averageifs", label: "AVERAGEIFS Function" },
  { to: "excel/concat", label: "CONCAT Function" },
  { to: "excel/count", label: "COUNT Function" },
  { to: "excel/counta", label: "COUNTA Function" },
  { to: "excel/countblank", label: "COUNTBLANK Function" },
  { to: "excel/countif", label: "COUNTIF Function" },
  { to: "excel/countifs", label: "COUNTIFS Function" },
  { to: "excel/if", label: "IF Function" },
  { to: "excel/ifs", label: "IFS Function" },
  { to: "excel/max", label: "MAX Function" },
  { to: "excel/median", label: "MEDIAN Function" },
  { to: "excel/min", label: "MIN Function" },
  { to: "excel/mode", label: "MODE Function" },
  { to: "excel/or", label: "OR Function" },
  { to: "excel/sum", label: "SUM Function" },
  { to: "excel/sumif", label: "SUMIF Function" },
  { to: "excel/sumifs", label: "SUMIFS Function" },
  { to: "excel/trim", label: "TRIM Function" },
  { to: "excel/vlookup", label: "VLOOKUP Function" },
  ];

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [completedSections, setCompletedSections] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Lock body scroll when mobile career menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileNavOpen || mobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prev || '';
    }
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [mobileNavOpen, mobileSidebarOpen]);

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
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login", { replace: true });
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
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-3 px-md-4"
        style={{ height: 'auto', minHeight: H1 }}
      >
        <Link className="navbar-brand" to="/">
          OneMillionCoders
        </Link>
        {!isLoginPage && isLoggedIn && (
          <>
            {/* Desktop careers list */}
            <ul className="navbar-nav ms-3 d-none d-lg-flex">
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

            <div className="d-flex flex-row align-items-center gap-2 ms-auto">
                {/* Mobile: burger and logout on the right */}
                <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <button
                  type="button"
                  className="btn btn-danger d-lg-none"
                  onClick={handleLogout}
                  aria-label="Logout"
                >
                  Logout
                </button>
                {/* Desktop: theme toggle and logout */}
                <button
                  onClick={toggleTheme}
                  className="btn btn-secondary d-none d-lg-inline-flex"
                  aria-label="Toggle dark/light mode"
                  style={{ minWidth: 160 }}
                >
                  Switch to {theme === "light" ? "Dark" : "Light"} Mode
                </button>
                <button className="btn btn-danger d-none d-lg-inline-flex" onClick={handleLogout}>
                  Logout
                </button>
              </div>
          </>
        )}
      </nav>

      {/* Mobile careers full-screen overlay menu */}
      {mobileNavOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose a career"
          style={{
            position: 'fixed',
            top: H1,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--navbar-bg, rgba(0,0,0,0.96))',
            zIndex: 1100,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
          className="d-lg-none"
        >
          <div className="container py-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0" style={{ color: 'var(--navbar-text, #fff)' }}>Choose a career</h5>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
              >
                ✕ Close
              </button>
            </div>

            <div className="list-group">
              {careers.map((c) => (
                <NavLink
                  key={c.key}
                  to={c.to}
                  onClick={() => setMobileNavOpen(false)}
                  className={({ isActive }) =>
                    "list-group-item list-group-item-action py-3" + (isActive ? " active" : "")
                  }
                  style={{
                    background: 'transparent',
                    color: 'var(--navbar-text, #fff)',
                    borderColor: 'rgba(255,255,255,0.15)'
                  }}
                >
                  {c.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* sub‑navbar */}
      {(inDAA || inCSP || inNST) && (
        <nav
          className="navbar career-path-row px-3 px-md-4"
          style={{
            position: "fixed",
            top: H1,
            height: 'auto',
            minHeight: H2,
            width: "100%",
            zIndex: 1030,
            borderBottom: "1px solid #444",
            flexWrap: 'wrap'
          }}
        >
          {/* Inline opener for course contents on mobile, appears before Excel/SQL list */}
          <button
            className="btn btn-sm d-md-none me-2"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open course contents"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'var(--navbar-text, #fff)',
              padding: '0.4rem 0.6rem',
              fontSize: '1rem'
            }}
          >
            ☰
          </button>

          <ul className="navbar-nav flex-row flex-wrap">
            {(inDAA
              ? careerPaths.daa
              : inCSP
              ? careerPaths.csp
              : careerPaths.nst
            ).map((p) => (
              <li key={p.to} className="nav-item me-2 me-md-3 mb-1">
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
      <div className="container-fluid p-0" style={{ marginTop: H1 + H2, paddingTop: '1rem' }}>
        <div className="row g-0">
          {/* Mobile sidebar toggle button removed in favor of floating opener */}

          {/* sidebar (desktop) */}
          {(inDAA || inCSP || inNST) && (
            <aside
              className={`border-end p-3 d-none d-md-block`}
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
                        style={{ justifyContent: "flex-start" }}
                      >
                        <div className={`checkmark ${isCompleted ? "alive" : ""}`} />
                        <div
                          className="vertical-line"
                          style={{ visibility: isLastItem ? "hidden" : "visible" }}
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
                                      "nav-link small" + (isActive ? " active-link" : "")
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
                            "nav-link d-flex align-items-center" + (isActive ? " active-link" : "")
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
                ? "col-12 col-md-10 offset-md-2 p-3 p-md-4"
                : "col-12 p-3 p-md-4"
            }
            style={{
              minHeight: "100vh",
              background: "var(--card-bg)",
              color: "var(--card-text)",
              transition: "background 0.3s, color 0.3s"
            }}
          >
            {/* top prev/next */}
            <div className="d-flex flex-column flex-sm-row justify-content-between mb-3 mb-md-4 gap-2">
              {prevItem ? (
                <Link
                  to={buildLink(prevItem)}
                  className="btn btn-outline-primary btn-sm"
                >
                  ← {prevItem.label}
                </Link>
              ) : (
                <div />
              )}
              {nextItem ? (
                <Link
                  to={buildLink(nextItem)}
                  className="btn btn-outline-primary btn-sm"
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
              <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mt-4">
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

      {/* Mobile Course Drawer (left side with checkmarks) */}
      {mobileSidebarOpen && (inDAA || inCSP || inNST) && (
        <div className="d-md-none" style={{ position: 'fixed', top: H1 + H2, left: 0, right: 0, bottom: 0, zIndex: 1100, display: 'flex' }}>
          {/* Drawer */}
          <div
            style={{
              width: '80vw',
              maxWidth: 320,
              background: 'var(--card-bg)',
              color: 'var(--card-text)',
              borderRight: '1px solid rgba(0,0,0,0.2)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              boxShadow: '2px 0 12px rgba(0,0,0,0.3)'
            }}
          >
            <div className="p-3 d-flex justify-content-between align-items-center border-bottom">
              <strong>Course Contents</strong>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setMobileSidebarOpen(false)} aria-label="Close course menu">✕</button>
            </div>
            <ul className="nav nav-pills flex-column position-relative p-3">
              {sidebarItems.map((item, index) => {
                const hasChildren = Array.isArray(item.children);
                const isCompleted = completedSections.includes(item.to);
                const isLastItem = index === sidebarItems.length - 1;
                return (
                  <li key={item.to} className="nav-item d-flex align-items-center position-relative mb-1">
                    <div className="checkmark-container" style={{ justifyContent: 'flex-start' }}>
                      <div className={`checkmark ${isCompleted ? 'alive' : ''}`} />
                      <div className="vertical-line" style={{ visibility: isLastItem ? 'hidden' : 'visible' }} />
                    </div>
                    {hasChildren ? (
                      <>
                        <button
                          className={"nav-link w-100 text-start" + (openMenus[item.to] ? " active-link" : "")}
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
                                  className={({ isActive }) => "nav-link small" + (isActive ? " active-link" : "")}
                                  onClick={() => setMobileSidebarOpen(false)}
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
                        className={({ isActive }) => "nav-link d-flex align-items-center" + (isActive ? " active-link" : "")}
                        onClick={() => setMobileSidebarOpen(false)}
                        end
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Backdrop */}
          <div style={{ flex: 1, background: 'rgba(0,0,0,0.35)' }} onClick={() => setMobileSidebarOpen(false)} />
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setShowLogoutModal(false)}
        >
          <div
            className="card p-4 shadow-lg"
            style={{
              maxWidth: 400,
              width: '90%',
              background: 'var(--card-bg, #fff)',
              color: 'var(--card-text, #222)',
              borderRadius: 12,
              animation: 'fadeIn 0.2s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="mb-3">Confirm Logout</h5>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="d-flex gap-2 justify-content-end">
              <button
                className="btn btn-secondary"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={confirmLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}