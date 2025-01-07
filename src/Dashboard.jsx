
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  // Obtener datos del usuario desde el localStorage
  const userName = localStorage.getItem('name') || 'Usuario';
  const userRole = localStorage.getItem('role') || 'Invitado';

  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar los datos de autenticación
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    // Redirigir al login
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        padding: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1>Dashboard</h1>
          <p>Bienvenido, <strong>{userName}</strong></p>
          <p>Rol: <strong>{userRole}</strong></p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: '10px 15px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Cerrar sesión
        </button>
      </header>

      {/* Navegación */}
      <nav style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd'
      }}>
        <ul style={{
          listStyleType: 'none',
          display: 'flex',
          gap: '20px',
          padding: 0,
          margin: 0
        }}>
          <li>
            <button
              onClick={() => navigate('/admin-management')}
              style={buttonStyle}
            >
              Gestionar Administradores
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/beneficiary-management')}
              style={buttonStyle}
            >
              Gestionar Beneficiarios
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/billing-management')}
              style={buttonStyle}
            >
              Gestionar Facturación
            </button>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <main style={{ padding: '20px', flex: 1 }}>
        <p>Selecciona una opción del menú para comenzar.</p>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #ddd'
      }}>
        <p>&copy; {new Date().getFullYear()} Proyecto Codisert</p>
      </footer>
    </div>
  );
};

// Estilo para los botones de navegación
const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textTransform: 'uppercase',
};

export default Dashboard;