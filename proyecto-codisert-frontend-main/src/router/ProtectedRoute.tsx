import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '../store/authStore';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  requiredRoles?: Array<'admin_super' | 'admin_lector' | 'admin_registrador'>;
  children?: React.ReactNode;
}

const ProtectedRoute = ({ isAuthenticated, requiredRoles, children }: PrivateRouteProps) => {
  const userRole = useAuthStore((state) => state.userRole)

  if (!isAuthenticated) return <Navigate to="/" replace />;

  if (requiredRoles && !requiredRoles.includes(userRole!)) {
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;

}

export default ProtectedRoute;
