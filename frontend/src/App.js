import Excelif from './pages/Excelif';
import Excelifs from './pages/Excelifs';
import Excelmax from './pages/Excelmax';
import Excelmedian from './pages/Excelmedian';
import Excelmin from './pages/Excelmin';
import Excelmode from './pages/Excelmode';
import Excelor from './pages/Excelor';
import Excelsum from './pages/Excelsum';
import Excelsumif from './pages/Excelsumif';
import Excelsumifs from './pages/Excelsumifs';
import Exceltrim from './pages/Exceltrim';
import Excelvlookup from './pages/Excelvlookup';
import Excelpivottable from './pages/Excelpivottable';
import Exceland from './pages/Exceland';
import Excelaverage from './pages/Excelaverage';
import Excelaverageif from './pages/Excelaverageif';
import Excelaverageifs from './pages/Excelaverageifs';
import Excelconcat from './pages/Excelconcat';
import Excelcount from './pages/Excelcount';
import Excelcounta from './pages/Excelcounta';
import Excelcountblank from './pages/Excelcountblank';
import Excelcountif from './pages/Excelcountif';
import Excelcountifs from './pages/Excelcountifs';
import Excelconditionalformatting from './pages/Excelconditionalformatting';
import Excelcharts from './pages/Excelcharts';
import Excelsort from './pages/Excelsort';
import Excelfilter from './pages/Excelfilter';
import Exceltable from './pages/Exceltable';
import Exceltableresize from './pages/Exceltableresize';
import Exceltableremoveduplicates from './pages/Exceltableremoveduplicates';
import Exceltablestyle from './pages/Exceltablestyle';
// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "./ThemeContext";
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
import ExcelMoveCellsPage from './pages/Excelmovecells';
import ExcelAddCellsPage from './pages/Exceladdcells';
import ExcelDeleteCellsPage from './pages/Exceldeletecells';
import ExcelUndoRedoPage from './pages/Excelundoredo';

import ExcelFormulas from './pages/Excelformulas';
import ExcelReferences from './pages/Excelreferences';
import Exceladdition from './pages/Exceladdition';
import Excelsubtraction from './pages/Excelsubtraction';
import Excelmultiplication from './pages/Excelmultiplication';
import Exceldivision from './pages/Exceldivision';
import Excelparentheses from './pages/Excelparentheses';
import Excelfunctions from './pages/Excelfunctions';

// placeholders for SQL/Python until you build them
const Placeholder = ({ label }) => <h2>{label} coming soon…</h2>;

function App() {
  return (
    <ThemeProvider>
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
                <Route path="move-cells" element={<ExcelMoveCellsPage />} />
                <Route path="add-cells" element={<ExcelAddCellsPage />} />
                <Route path="delete-cells" element={<ExcelDeleteCellsPage />} />
                <Route path="undo-redo" element={<ExcelUndoRedoPage />} />
                <Route path="formulas" element={<ExcelFormulas />} />
                <Route path="references" element={<ExcelReferences />} />
                <Route path="addition" element={<Exceladdition />} />
                <Route path="subtraction" element={<Excelsubtraction />} />
                <Route path="multiplication" element={<Excelmultiplication />} />
                <Route path="division" element={<Exceldivision />} />
                <Route path="parentheses" element={<Excelparentheses />} />
                <Route path="functions" element={<Excelfunctions />} />
                <Route path="sort" element={<Excelsort />} />
                <Route path="filter" element={<Excelfilter />} />
                <Route path="table" element={<Exceltable />} />
                <Route path="table-resize" element={<Exceltableresize />} />
                <Route path="table-remove-duplicates" element={<Exceltableremoveduplicates />} />
                <Route path="table-style" element={<Exceltablestyle />} />
                <Route path="conditional-formatting" element={<Excelconditionalformatting />} />
                <Route path="charts" element={<Excelcharts />} />
                <Route path="pivottable" element={<Excelpivottable />} />
                <Route path="and" element={<Exceland />} />
                <Route path="average" element={<Excelaverage />} />
                <Route path="averageif" element={<Excelaverageif />} />
                <Route path="averageifs" element={<Excelaverageifs />} />
                <Route path="concat" element={<Excelconcat />} />
                <Route path="count" element={<Excelcount />} />
                <Route path="counta" element={<Excelcounta />} />
                <Route path="countblank" element={<Excelcountblank />} />
                <Route path="countif" element={<Excelcountif />} />
                <Route path="countifs" element={<Excelcountifs />} />
                <Route path="if" element={<Excelif />} />
                <Route path="ifs" element={<Excelifs />} />
                <Route path="max" element={<Excelmax />} />
                <Route path="median" element={<Excelmedian />} />
                <Route path="min" element={<Excelmin />} />
                <Route path="mode" element={<Excelmode />} />
                <Route path="or" element={<Excelor />} />
                <Route path="sum" element={<Excelsum />} />
                <Route path="sumif" element={<Excelsumif />} />
                <Route path="sumifs" element={<Excelsumifs />} />
                <Route path="trim" element={<Exceltrim />} />
                <Route path="vlookup" element={<Excelvlookup />} />
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
            <Route path="*" element={<h1>Comming Soon...</h1>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;