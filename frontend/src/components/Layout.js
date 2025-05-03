// src/components/Layout.js
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../App.css';

const careers = [
  { to: '/careers/data-analyst-associate', label: 'Data Analyst Associate', key: 'daa' },
];

const careerPaths = {
  daa: [
    { to: 'excel',  label: 'Excel' },
    { to: 'sql',    label: 'SQL' },
    { to: 'python', label: 'Python' },
  ]
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
  const segs = pathname.split('/').filter(Boolean);

  const inDAA       = segs[0] === 'careers' && segs[1] === 'data-analyst-associate';
  const currentPath = segs.slice(2).join('/');
  const inExcel     = currentPath.startsWith('excel');
  const sidebarItems= inDAA && inExcel ? excelTopics : careerPaths.daa;

  // only include children of any item that has children
  const flatItems = sidebarItems.flatMap(item =>
    item.children ? item.children : [item]
  );

  const currentIndex = flatItems.findIndex(item => item.to === currentPath);
  const prevItem     = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const nextItem     = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  const H1 = 56, H2 = inDAA ? 40 : 0;
  const buildLink = item => `/careers/data-analyst-associate/${item.to}`;

  const [openMenus, setOpenMenus] = useState({});

  // auto‑open exactly those menus whose child matches the currentPath,
  // and collapse all others
  useEffect(() => {
    const newOpen = {};
    sidebarItems.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          if (child.to === currentPath) {
            newOpen[item.to] = true;
          }
        });
      }
    });
    setOpenMenus(newOpen);
  }, [currentPath, sidebarItems]);

  // after every navigation, wait until paint, then jump to top
  useEffect(() => {
    const t = setTimeout(() => window.scrollTo(0, 0), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const toggleMenu = key =>
    setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      {/* Primary navbar */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4" style={{ height: H1 }}>
        <Link className="navbar-brand" to="/">OneMillionCoders</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {careers.map(c => (
              <li key={c.key} className="nav-item">
                <NavLink to={c.to} className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}>
                  {c.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sub‑navbar */}
      {inDAA && (
        <nav className="navbar navbar-light bg-light px-4" style={{
          position: 'fixed', top: H1, height: H2, width: '100%',
          zIndex: 1030, borderBottom: '1px solid #ddd'
        }}>
          <ul className="navbar-nav flex-row">
            {careerPaths.daa.map(p => (
              <li key={p.to} className="nav-item me-3">
                <NavLink
                  to={`/careers/data-analyst-associate/${p.to}`}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
                >
                  {p.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Layout grid */}
      <div className="container-fluid p-0" style={{ marginTop: H1 + H2 }}>
        <div className="row g-0">
          {/* Sidebar */}
          {inDAA && (
            <aside className="d-none d-md-block bg-light border-end p-3" style={{
              position: 'fixed', top: H1 + H2, bottom: 0,
              width: '16.666667%', overflowY: 'auto',
            }}>
              <ul className="nav nav-pills flex-column">
                {sidebarItems.map(item => {
                  const hasChildren = Array.isArray(item.children);
                  const isOpen = openMenus[item.to];
                  return (
                    <li key={item.to} className="nav-item mb-2">
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
                              {item.children.map(child => (
                                <li key={child.to}>
                                  <NavLink
                                    to={buildLink(child)}
                                    className={({ isActive }) => 'nav-link small' + (isActive ? ' active-link' : '')}
                                  >
                                    {child.label}
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

          {/* Main content */}
          <main className={inDAA ? 'col-md-10 offset-md-2 p-4' : 'col-12 p-4'} style={{ minHeight: '100vh' }}>
            {/* Top nav */}
            <div className="d-flex justify-content-between mb-4">
              {prevItem
                ? <Link to={buildLink(prevItem)} className="btn btn-outline-primary">&larr; {prevItem.label}</Link>
                : <div />}
              {nextItem
                ? <Link to={buildLink(nextItem)} className="btn btn-outline-primary">{nextItem.label} &rarr;</Link>
                : <div />}
            </div>

            {children}

            {/* Bottom nav */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              {currentPath === 'excel'
                ? <Link to={buildLink({ to: 'excel/introduction' })} className="btn btn-primary btn-lg">Begin Lesson →</Link>
                : prevItem && <Link to={buildLink(prevItem)} className="btn btn-outline-primary">&larr; {prevItem.label}</Link>}
              {nextItem
                ? <Link to={buildLink(nextItem)} className="btn btn-outline-primary">{nextItem.label} &rarr;</Link>
                : <div />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
