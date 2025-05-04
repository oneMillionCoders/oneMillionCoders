// src/components/Layout.js
import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../App.css';

const careers = [
  { to: '/careers/data-analyst-associate', label: 'Data Analyst Associate', key: 'daa' },
  { to: '/careers/cybersecurity-professional', label: 'Cybersecurity Professional', key: 'csp' },
  { to: '/careers/network-support-technician', label: 'Network Support Technician', key: 'nst' }, // New section
];

const careerPaths = {
  daa: [
    { to: 'excel',    label: 'Excel'    },
    { to: 'sql',      label: 'SQL'      },
    { to: 'python',   label: 'Python'   },
    { to: 'Power BI', label: 'Power BI' },
  ],
  csp: [ // New career path
    { to: 'network-security', label: 'Network Security' },
    { to: 'cryptography', label: 'Cryptography' },
    { to: 'incident-response', label: 'Incident Response' },
    { to: 'ethical-hacking', label: 'Ethical Hacking' },
  ],
  nst: [ // New career path
    { to: 'networking-basics', label: 'Networking Basics' },
    { to: 'networking-devices', label: 'Networking Devices and Initial Configuration' },
    { to: 'network-addressing', label: 'Network Addressing and Basic Troubleshooting' },
    { to: 'network-support-security', label: 'Network Support and Security' },
  ],
};

const excelTopics = [
  { to: 'excel',               label: 'Excel Home' },
  { to: 'excel/introduction',  label: 'Excel Introduction' },
  { to: 'excel/getstarted',    label: 'Excel Get Started' },
  { to: 'excel/overview',      label: 'Excel Overview' },
  { to: 'excel/syntax',        label: 'Excel Syntax' },
  { to: 'excel/ranges',        label: 'Excel Ranges' },
  {
    to: 'excel/fill',
    label: 'Excel Fill',
    children: [
      { to: 'excel/fill/filling',      label: 'Filling' },
      { to: 'excel/fill/double-click', label: 'Double Click to Fill' },
    ],
  },
];

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // 1) split & decode so "%20" → " "
  const segs = pathname
    .split('/')
    .filter(Boolean)
    .map(s => decodeURIComponent(s));

  // 2) detect that we're in DAA, CSP, or NST
  const inDAA = segs[0] === 'careers' && segs[1] === 'data-analyst-associate';
  const inCSP = segs[0] === 'careers' && segs[1] === 'cybersecurity-professional';
  const inNST = segs[0] === 'careers' && segs[1] === 'network-support-technician';

  // 3) the full “sub‑path” for prev/next logic
  const currentPath = segs.slice(2).join('/');

  // 4) look only at the top‑level section name
  const section = segs[2] || '';
  const sectionLower = section.toLowerCase();

  const inExcel = sectionLower === 'excel';
  const inSQL = sectionLower === 'sql';
  const inPython = sectionLower === 'python';
  const inPowerBI = sectionLower === 'power bi';

  // 5) sidebarItems logic
  const sidebarItems = useMemo(() => {
    if (inDAA) {
      if (inExcel) return excelTopics;
      if (inPowerBI) return [{ to: 'power BI', label: 'Power BI' }];
      if (inSQL) return [{ to: 'sql', label: 'SQL' }];
      if (inPython) return [{ to: 'python', label: 'Python' }];
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
  const flatItems = sidebarItems.flatMap(item =>
    item.children ? item.children : [item]
  );

  // Find the current index in flatItems
  const currentIndex = flatItems.findIndex(item => item.to === currentPath);

  // Determine prevItem and nextItem
  const prevItem = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const nextItem = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  // Heights & link builder (encoding on output)
  const H1 = 56, H2 = inDAA || inCSP || inNST ? 47 : 0;
  const buildLink = item => {
    if (inDAA) return `/careers/data-analyst-associate/${item.to}`;
    if (inCSP) return `/careers/cybersecurity-professional/${item.to}`;
    if (inNST) return `/careers/network-support-technician/${item.to}`;
    return '#';
  };

  // Sidebar menu‑open state
  const [openMenus, setOpenMenus] = useState({});
  useEffect(() => {
    const newOpen = {};
    sidebarItems.forEach(item => {
      if (item.children) {
        item.children.forEach(ch => {
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

  const toggleMenu = key => setOpenMenus(m => ({ ...m, [key]: !m[key] }));

  return (
    <>
      {/* primary nav */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4" style={{ height: H1 }}>
        <Link className="navbar-brand" to="/">OneMillionCoders</Link>
        <ul className="navbar-nav">
          {careers.map(c => (
            <li key={c.key} className="nav-item">
              <NavLink to={c.to} className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}>
                {c.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* sub‑navbar */}
      {(inDAA || inCSP || inNST) && (
        <nav className="navbar navbar-light bg-light px-4" style={{
          position: 'fixed', top: H1, height: H2, width: '100%', zIndex: 1030, borderBottom: '1px solid #ddd'
        }}>
          <ul className="navbar-nav flex-row">
            {(inDAA ? careerPaths.daa : inCSP ? careerPaths.csp : careerPaths.nst).map(p => (
              <li key={p.to} className="nav-item me-3">
                <NavLink
                  to={buildLink(p)}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
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
            <aside className="d-none d-md-block bg-light border-end p-3" style={{
              position: 'fixed', top: H1 + H2, bottom: 0, width: '15%', overflowY: 'auto'
            }}>
              <ul className="nav nav-pills flex-column">
                {sidebarItems.map(item => {
                  const hasChildren = Array.isArray(item.children);
                  const isOpen = openMenus[item.to];
                  return (
                    <li key={item.to} className="nav-item">
                      {hasChildren ? (
                        <>
                          <button
                            className={'nav-link w-100 text-start' + (isOpen ? ' active-link' : '')}
                            onClick={() => toggleMenu(item.to)}
                          >
                            {item.label} {isOpen ? '▲' : '▼'}
                          </button>
                          {isOpen && (
                            <ul className="nav flex-column ms-3 mt-2">
                              {item.children.map(ch => (
                                <li key={ch.to}>
                                  <NavLink
                                    to={buildLink(ch)}
                                    className={({ isActive }) => 'nav-link small' + (isActive ? ' active-link' : '')}
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
                          className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
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
          <main className={inDAA || inCSP || inNST ? 'col-md-10 offset-md-2 p-4' : 'col-12 p-4'} style={{ minHeight: '100vh' }}>
            {/* top prev/next */}
            <div className="d-flex justify-content-between mb-4">
              {prevItem
                ? <Link to={buildLink(prevItem)} className="btn btn-outline-primary">← {prevItem.label}</Link>
                : <div />}
              {nextItem
                ? <Link to={buildLink(nextItem)} className="btn btn-outline-primary">{nextItem.label} →</Link>
                : <div />}
            </div>

            {children}

            {/* bottom prev/next or begin */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              {currentPath === 'excel' ? (
                <Link to={buildLink({ to: 'excel/introduction' })} className="btn btn-primary btn-lg">
                  Begin Lesson →
                </Link>
              ) : (
                prevItem && (
                  <Link to={buildLink(prevItem)} className="btn btn-outline-primary">
                    ← {prevItem.label}
                  </Link>
                )
              )}
              {nextItem && (
                <Link to={buildLink(nextItem)} className="btn btn-outline-primary">
                  {nextItem.label} →
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
