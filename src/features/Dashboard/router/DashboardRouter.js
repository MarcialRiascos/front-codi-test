import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Beneficiario from "../pages/Beneficiario";
import Admin from "../pages/Admin";
import CreateUser from "../pages/CreateUser";
import Account from "../pages/Account";
import { useAuthStore } from "../../../store/authStore";
import ProtectedRoute from "../../../router/ProtectedRoute";
import Permissions from "../pages/Permissions";
export const DashboardRouter = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated, children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "beneficiario", element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated, requiredRoles: ['admin_lector', 'admin_registrador', 'admin_super'], children: _jsx(Beneficiario, {}) }) }), _jsx(Route, { path: "create-user", element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated, requiredRoles: ['admin_super', 'admin_registrador'], children: _jsx(CreateUser, {}) }) }), _jsx(Route, { path: "administradores", element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated, requiredRoles: ['admin_super'], children: _jsx(Admin, {}) }) }), _jsx(Route, { path: "permisos", element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated, requiredRoles: ['admin_super'], children: _jsx(Permissions, {}) }) }), _jsx(Route, { path: "account", element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated, requiredRoles: ['admin_super', 'admin_lector', 'admin_registrador'], children: _jsx(Account, {}) }) })] }));
};
