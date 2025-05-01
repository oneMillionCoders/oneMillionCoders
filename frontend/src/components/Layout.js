/* Layout.jsx */
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../App.css';  // use your existing App.css

// Define the ordered list of sidebar pages
const navItems = [
  { to: '/excel', label: 'Excel Home' },
  { to: '/excel/introduction', label: 'Excel Introduction' },
  { to: '/excel/getstarted', label: 'Excel Get Started' },
  { to: '/excel/overview', label: 'Excel Overview' },
];

export default function Layout({ children }) {
  const location = useLocation();
  const currentIndex = navItems.findIndex(item => item.to === location.pathname);
  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  // Render pagination controls
  const Pagination = () => (
    <div className="d-flex justify-content-between mb-4">
      {prevItem ? (
        <Link to={prevItem.to} className="btn btn-outline-primary">
          &larr; Previous
        </Link>
      ) : <div />}
      {nextItem ? (
        <Link to={nextItem.to} className="btn btn-outline-primary">
          Next &rarr;
        </Link>
      ) : <div />}
    </div>
  );

  return (
    <div className="container-fluid p-0">
      {/* Top navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="/">OneMillionCoders</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
          aria-controls="navBar"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/excel">Excel</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row g-0 min-vh-100">
        {/* Sidebar */}
        <aside className="col-md-2 bg-light border-end p-3 d-none d-md-block" style={{ minHeight: '100vh' }}>
          <ul className="nav nav-pills flex-column">
            {navItems.map(item => (
              <li key={item.to} className="nav-item mb-2">
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active-link' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content and pagination */}
        <main className="col-md-10 p-4 d-flex flex-column" style={{ minHeight: '100vh' }}>
          {/* Top pagination */}
          <Pagination />

          {/* Page content */}
          <div className="flex-grow-1">
            {children}
          </div>

          {/* Bottom pagination */}
          <Pagination />
        </main>
      </div>
    </div>
  );
}
