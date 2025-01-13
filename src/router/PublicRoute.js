import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
const PublicRoute = ({ isAuthenticated, children }) => {
    if (isAuthenticated)
        return _jsx(Navigate, { to: "/dashboard", replace: true });
    return children ? children : _jsx(Outlet, {});
};
export default PublicRoute;
