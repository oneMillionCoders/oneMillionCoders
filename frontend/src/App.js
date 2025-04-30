import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Excel from './pages/Excel';
import Layout from './components/Layout';
import Excelintroduction from './pages/Excelintroduction';
import './App.css'; // Ensure this line is present

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/excel" replace />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/excel/introduction" element={<Excelintroduction />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
