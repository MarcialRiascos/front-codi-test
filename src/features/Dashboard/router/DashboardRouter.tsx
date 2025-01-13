import { Route, Routes } from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Beneficiario from "../pages/Beneficiario"
import Admin from "../pages/Admin"
import CreateUser from "../pages/CreateUser"
import Account from "../pages/Account"
import { useAuthStore } from "../../../store/authStore"
import ProtectedRoute from "../../../router/ProtectedRoute"
import Permissions from "../pages/Permissions"



export const DashboardRouter = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="beneficiario"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} requiredRoles={['admin_lector', 'admin_registrador', 'admin_super']}>
            <Beneficiario />
          </ProtectedRoute>
        }
      />
      <Route
        path="create-user"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} requiredRoles={['admin_super', 'admin_registrador']}>
            <CreateUser />
          </ProtectedRoute>
        }
      />
      <Route
        path="administradores"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} requiredRoles={['admin_super']}>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="permisos"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} requiredRoles={['admin_super']}>
            <Permissions />
          </ProtectedRoute>
        }
      />
      <Route
        path="account"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated} requiredRoles={['admin_super', 'admin_lector', 'admin_registrador']}>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}