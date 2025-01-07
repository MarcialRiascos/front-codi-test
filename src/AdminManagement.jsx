import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]); // Almacena los datos de los administradores
  const [error, setError] = useState(''); // Maneja errores
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Función para obtener los datos de los administradores
    const fetchAdmins = async () => {
      try {
        // Obtener el token del localStorage
        const token = localStorage.getItem('token');
        console.log('Token antes del if:', token);
        // Verificar si el token está presente
        if (!token) {
            console.log('Token dentro dle if:', token);
            throw new Error(`Token no proporcionado: ${token}`);
        }

        // Realizar la solicitud incluyendo el token en los encabezados
        const response = await axios.get(
          'https://proyecto-codisert-back-end-sequialize.onrender.com/api/v1/admin/search-alls',
          {
            headers: {
              Authorization: `Bearer ${token}`, // Añadir el token al encabezado Authorization
            },
            withCredentials: true, // Si necesitas enviar cookies o credenciales adicionales
          }
        );
        
        setAdmins(response.data.admins); // Guarda los datos en el estado
      } catch (err) {
        // Manejo de errores detallados
        if (err.response) {
          // Si hay un error en la respuesta (ej. 401 Unauthorized)
          setError(err.response?.data?.message || 'No se pudo obtener la lista de administradores.');
        } else {
          // Si hay otro tipo de error (ej. problemas de conexión)
          setError(err.message || 'No se pudo obtener la lista de administradores.');
        }
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };

    fetchAdmins();
  }, []);

  // Renderización condicional basada en los estados
  if (loading) {
    return <div className="text-center">Cargando administradores...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Gestión de Administradores</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {admins.length === 0 ? (
        <div className="text-center">No hay administradores registrados.</div>
      ) : (
        <table className="table table-bordered mt-4">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.idAdministrador}>
                <td>{admin.idAdministrador}</td>
                <td>{admin.Nombre}</td>
                <td>{admin.Apellido}</td>
                <td>{admin.Correo}</td>
                <td>{admin.Role?.Rol || 'Sin rol'}</td>
                <td>{admin.Estado?.Estado || 'Sin estado'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminManagement;