import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import StudentLogin from '../pages/StudentLogin';
import OwnerLogin from '../pages/OwnerLogin';
import StudentDashboard from '../pages/StudentDashboard';
import OwnerDashboard from '../pages/OwnerDashboard';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../components/common/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Pages within MainLayout (Navbar + Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        
        {/* Protected Student Dashboard Route */}
        <Route element={<ProtectedRoute allowedRole="student" />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>

        {/* Protected Owner Dashboard Route */}
        <Route element={<ProtectedRoute allowedRole="owner" />}>
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Auth Pages within AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner/login" element={<Navigate to="/owner-login" replace />} />
      </Route>
    </Routes>
  );
}
