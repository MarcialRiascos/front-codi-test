import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
const ProtectedRoute = ({ isAuthenticated, requiredRoles, children }) => {
    const userRole = useAuthStore((state) => state.userRole);
    if (!isAuthenticated)
        return _jsx(Navigate, { to: "/", replace: true });
    if (requiredRoles && !requiredRoles.includes(userRole)) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    return children ? _jsx(_Fragment, { children: children }) : _jsx(Outlet, {});
};
export default ProtectedRoute;
