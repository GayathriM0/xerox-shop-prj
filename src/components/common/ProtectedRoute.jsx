import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ allowedRole, children }) {
  const { currentUser } = useAuth();

  // If not logged in at all, redirect to respective login
  if (!currentUser) {
    if (allowedRole === 'student') {
      return <Navigate to="/student/login" replace />;
    }
    return <Navigate to="/owner-login" replace />;
  }

  // If logged in as student attempting to access owner area
  if (allowedRole === 'owner' && currentUser.role !== 'owner') {
    return <Navigate to="/student/dashboard" replace />;
  }

  // If logged in as owner attempting to access student area
  if (allowedRole === 'student' && currentUser.role !== 'student') {
    return <Navigate to="/owner/dashboard" replace />;
  }

  return children ? children : <Outlet />;
}

