import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Excel from './pages/Excel';
import Layout from './components/Layout';
import ExcelIntroduction from './pages/Excelintroduction';
import ExcelGetStarted from './pages/Excelgetstarted';
import ExcelOverview from './pages/Exceloverview';
import './App.css'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/excel" replace />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/excel/introduction" element={<ExcelIntroduction />} />
          <Route path="/excel/getstarted" element={<ExcelGetStarted />} />
          <Route path="/excel/overview" element={<ExcelOverview />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
