import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Login from "../features/Auth/pages/Login";
import { DashboardRouter } from "../features/Dashboard/router/DashboardRouter";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthStore } from "../store/authStore";
import PublicRoute from "./PublicRoute";
export const AppRouter = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    return (_jsxs(Routes, { children: [_jsx(Route, { element: _jsx(PublicRoute, { isAuthenticated: isAuthenticated }), children: _jsx(Route, { path: "/", element: _jsx(Login, {}) }) }), _jsx(Route, { element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated }), children: _jsx(Route, { path: "/dashboard/*", element: _jsx(DashboardRouter, {}) }) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }));
};
