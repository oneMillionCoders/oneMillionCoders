// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.js';
import Login from './pages/Login';

// Excel pages
import Excel from './pages/Excel';
import ExcelIntroduction from './pages/Excelintroduction';
import ExcelGetStarted from './pages/Excelgetstarted';
import ExcelOverview from './pages/Exceloverview';
import ExcelSyntax from './pages/Excelsyntax';
import ExcelRanges from './pages/Excelranges';
import FillingPage from './pages/Fillingpage';
import DoubleClickFillPage from './pages/Doubleclickpage';

// placeholders for SQL/Python until you build them
const Placeholder = ({ label }) => <h2>{label} coming soon…</h2>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default route → Login */}
          <Route path="/" element={<Login />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          <Route path="careers/data-analyst-associate">
            <Route index element={<Navigate to="excel" replace />} />

            {/* Excel path */}
            <Route path="excel">
              <Route index element={<Excel />} />
              <Route path="introduction" element={<ExcelIntroduction />} />
              <Route path="getstarted" element={<ExcelGetStarted />} />
              <Route path="overview" element={<ExcelOverview />} />
              <Route path="syntax" element={<ExcelSyntax />} />
              <Route path="ranges" element={<ExcelRanges />} />
              <Route path="fill/filling" element={<FillingPage />} />
              <Route path="fill/double-click" element={<DoubleClickFillPage />} />
            </Route>
          </Route>

          {/* SQL path */}
          <Route path="sql" element={<Placeholder label="SQL" />} />

          {/* Python path */}
          <Route path="python" element={<Placeholder label="Python" />} />

          {/* Power BI path */}
          <Route path="power BI" element={<Placeholder label="Power BI" />} />

          {/* Cybersecurity Professional */}
          <Route path="careers/cybersecurity-professional">
            <Route index element={<Navigate to="network-security" replace />} />
            <Route path="network-security" element={<Placeholder label="Network Security" />} />
            <Route path="cryptography" element={<Placeholder label="Cryptography" />} />
            <Route path="incident-response" element={<Placeholder label="Incident Response" />} />
            <Route path="ethical-hacking" element={<Placeholder label="Ethical Hacking" />} />
          </Route>

          {/* Network Support Technician */}
          <Route path="careers/network-support-technician">
            <Route index element={<Navigate to="networking-basics" replace />} />
            <Route path="networking-basics" element={<Placeholder label="Networking Basics" />} />
            <Route path="networking-devices" element={<Placeholder label="Networking Devices and Initial Configuration" />} />
            <Route path="network-addressing" element={<Placeholder label="Network Addressing and Basic Troubleshooting" />} />
            <Route path="network-support-security" element={<Placeholder label="Network Support and Security" />} />
          </Route>

          {/* catch‑all */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
