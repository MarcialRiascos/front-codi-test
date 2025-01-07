import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Si tienes estilos globales
import App from './App';  // Importamos el componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Renderiza el componente App */}
  </React.StrictMode>
);