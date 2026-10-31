import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import StudentLogin from '../pages/StudentLogin';
import OwnerLogin from '../pages/OwnerLogin';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Auth Layout Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner/login" element={<Navigate to="/owner-login" replace />} />
      </Route>
    </Routes>
  );
}
