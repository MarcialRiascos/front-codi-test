import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Usamos useNavigate para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://proyecto-codisert-back-end-sequialize.onrender.com/auth/login', {
        NumeroDocumento: numeroDocumento,
        Password: password,
      }, {
        withCredentials: true, // Esto asegura que la cookie se envíe con la respuesta
      });

      // Guarda el token y el rol en localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);

      // Redirigir a la página del Dashboard
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Error en el login');
      } else {
        setError('Error de red o del servidor');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Iniciar sesión</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="NumeroDocumento">Número de Documento</label>
                <input
                  type="text"
                  id="NumeroDocumento"
                  className="form-control"
                  value={numeroDocumento}
                  onChange={(e) => setNumeroDocumento(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
            </form>
            <div className="mt-3 text-center">
              <p>No tienes una cuenta? <a href="/registro">Regístrate</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;