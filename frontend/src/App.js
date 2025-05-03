// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.js';

// Excel pages
import Excel          from './pages/Excel';
import ExcelIntroduction from './pages/Excelintroduction';
import ExcelGetStarted   from './pages/Excelgetstarted';
import ExcelOverview     from './pages/Exceloverview';
import ExcelSyntax       from './pages/Excelsyntax';
import ExcelRanges       from './pages/Excelranges';
import FillingPage       from './pages/Fillingpage';
import DoubleClickFillPage from './pages/Doubleclickpage';

// placeholders for SQL/Python until you build them
const Placeholder = ({ label }) => <h2>{label} coming soon…</h2>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* default → DAA Excel */}
          <Route path="/" element={<Navigate to="/careers/data-analyst-associate/excel" replace />} />

          <Route path="careers/data-analyst-associate">
            <Route index element={<Navigate to="excel" replace />} />

            {/* Excel path */}
            <Route path="excel">
              <Route index element={<Excel />} />
              <Route path="introduction" element={<ExcelIntroduction />} />
              <Route path="getstarted"   element={<ExcelGetStarted />} />
              <Route path="overview"     element={<ExcelOverview />} />
              <Route path="syntax"       element={<ExcelSyntax />} />
              <Route path="ranges"       element={<ExcelRanges />} />
              <Route path="fill">
                <Route index element={<Navigate to="filling" replace />} />
                <Route path="filling"      element={<FillingPage />} />
                <Route path="double-click" element={<DoubleClickFillPage />} />
              </Route>
            </Route>

            {/* SQL path */}
            <Route path="sql" element={<Placeholder label="SQL" />} />

            {/* Python path */}
            <Route path="python" element={<Placeholder label="Python" />} />
          </Route>

          {/* catch‑all */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
