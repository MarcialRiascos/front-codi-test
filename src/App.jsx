import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AdminManagement from './AdminManagement';  // Importa el componente que contiene la lógica de gestión de administradores

const BeneficiaryManagement = () => <h2>Gestión de Beneficiarios</h2>;
const BillingManagement = () => <h2>Gestión de Facturación</h2>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-management" element={<AdminManagement />} /> {/* Aquí se usa el componente AdminManagement */}
        <Route path="/beneficiary-management" element={<BeneficiaryManagement />} />
        <Route path="/billing-management" element={<BillingManagement />} />
      </Routes>
    </Router>
  );
}

export default App;