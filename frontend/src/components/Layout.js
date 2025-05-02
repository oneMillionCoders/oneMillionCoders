/* Layout.jsx */
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../App.css';

// sidebar tree
const navItems = [
  { to: '/excel', label: 'Excel Home' },
  { to: '/excel/introduction', label: 'Excel Introduction' },
  { to: '/excel/getstarted', label: 'Excel Get Started' },
  { to: '/excel/overview', label: 'Excel Overview' },
  { to: '/excel/syntax', label: 'Excel Syntax' },
  { to: '/excel/ranges', label: 'Excel Ranges' },
  {
    to: '/excel/fill',               // parent group base
    label: 'Excel Fill',
    children: [
      { to: '/excel/fill/filling', label: 'Filling' },
      { to: '/excel/fill/double-click', label: 'Double Click to Fill' },
    ],
  },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [openGroup, setOpenGroup] = useState(null);

  // Auto-open the “Excel Fill” group when on one of its child routes
  useEffect(() => {
    const grp = navItems.find(item =>
      item.children?.some(c => c.to === location.pathname)
    );
    setOpenGroup(grp?.to || null);
  }, [location.pathname]);

  // Build a flat list of *leaf* pages for pagination
  const pages = navItems.reduce((acc, item) => {
    return item.children ? acc.concat(item.children) : acc.concat(item);
  }, []);

  const idx  = pages.findIndex(p => p.to === location.pathname);
  const prev = idx > 0               ? pages[idx - 1] : null;
  const next = idx < pages.length-1 ? pages[idx + 1] : null;

  const toggleGroup = key => {
    setOpenGroup(openGroup === key ? null : key);
  };

  const renderNavItem = item => {
    if (!item.children) {
      return (
        <li key={item.to} className="nav-item mb-2">
          <NavLink
            to={item.to}
            end
            className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
          >
            {item.label}
          </NavLink>
        </li>
      );
    }

    const open = openGroup === item.to;
    return (
      <li key={item.to} className="nav-item mb-2">
        <button
          className={`btn btn-toggle w-100 text-start${open ? '' : ' collapsed'}`}
          onClick={() => toggleGroup(item.to)}
          aria-expanded={open}
        >
          {item.label}
        </button>
        <div className={`collapse${open ? ' show' : ''}`}>
          <ul className="btn-toggle-nav list-unstyled ps-3">
            {item.children.map(c => (
              <li key={c.to}>
                <NavLink
                  to={c.to}
                  end
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
                >
                  {c.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  const Pagination = () => (
    <div className="d-flex justify-content-between mb-4">
      {prev ? (
        <Link to={prev.to} className="btn btn-outline-primary">
          &larr; {prev.label}
        </Link>
      ) : <div />}
      {next ? (
        <Link to={next.to} className="btn btn-outline-primary">
          {next.label} &rarr;
        </Link>
      ) : <div />}
    </div>
  );

  return (
    <div className="container-fluid p-0">
      {/* top nav */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">OneMillionCoders</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/excel">Excel</Link></li>
          </ul>
        </div>
      </nav>

      <div className="row g-0 min-vh-100">
        {/* sidebar */}
        <aside className="col-md-2 bg-light border-end p-3 d-none d-md-block">
          <ul className="nav nav-pills flex-column">
            {navItems.map(renderNavItem)}
          </ul>
        </aside>

        {/* main */}
        <main className="col-md-10 p-4 d-flex flex-column">
          <Pagination />
          <div className="flex-grow-1">{children}</div>
          <Pagination />
        </main>
      </div>
    </div>
  );
}
