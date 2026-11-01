import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Default demo credentials as specified in project requirements
export const DEMO_STUDENT = {
  fullName: 'Demo Student',
  email: 'student@college.com',
  password: 'Student@123',
  department: 'Computer Science & Engineering',
  mobile: '9876543210',
  role: 'student',
};

export const DEMO_OWNER = {
  fullName: 'College Xerox Operator',
  email: 'owner@xerox.com',
  password: 'Owner@123',
  role: 'owner',
};

const USER_STORAGE_KEY = 'campus_xerox_user';
const STUDENTS_STORAGE_KEY = 'campus_xerox_registered_students';

export function AuthProvider({ children }) {
  // Initialize current user from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Ensure default demo student exists in localStorage
  useEffect(() => {
    try {
      const storedStudents = localStorage.getItem(STUDENTS_STORAGE_KEY);
      if (!storedStudents) {
        localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify([DEMO_STUDENT]));
      } else {
        const parsed = JSON.parse(storedStudents);
        const exists = parsed.some(
          (s) => s.email.toLowerCase() === DEMO_STUDENT.email.toLowerCase()
        );
        if (!exists) {
          parsed.unshift(DEMO_STUDENT);
          localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(parsed));
        }
      }
    } catch (err) {
      console.error('Error initializing demo students store:', err);
    }
  }, []);

  // Helper to retrieve registered students from localStorage
  const getRegisteredStudents = () => {
    try {
      const raw = localStorage.getItem(STUDENTS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [DEMO_STUDENT];
    } catch {
      return [DEMO_STUDENT];
    }
  };

  // Student Login Function
  const studentLogin = (email, password) => {
    const students = getRegisteredStudents();
    const normalizedEmail = email.trim().toLowerCase();

    const student = students.find(
      (s) => s.email.toLowerCase() === normalizedEmail
    );

    if (!student || student.password !== password) {
      return {
        success: false,
        error: 'Invalid email ID or password. Please check your credentials.',
      };
    }

    const userData = {
      fullName: student.fullName,
      email: student.email,
      department: student.department || 'General',
      mobile: student.mobile || '',
      role: 'student',
    };

    setCurrentUser(userData);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
    return { success: true, user: userData };
  };

  // Student Registration Function
  const studentRegister = ({ fullName, email, department, mobile, password }) => {
    const students = getRegisteredStudents();
    const normalizedEmail = email.trim().toLowerCase();

    // Check if email already registered
    const alreadyExists = students.some(
      (s) => s.email.toLowerCase() === normalizedEmail
    );

    if (alreadyExists) {
      return {
        success: false,
        error: 'This email is already registered. Please login instead.',
      };
    }

    const newStudent = {
      fullName: fullName.trim(),
      email: email.trim(),
      department: department.trim(),
      mobile: mobile.trim(),
      password,
      role: 'student',
      registeredAt: new Date().toISOString(),
    };

    const updatedStudents = [...students, newStudent];
    localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(updatedStudents));

    const userData = {
      fullName: newStudent.fullName,
      email: newStudent.email,
      department: newStudent.department,
      mobile: newStudent.mobile,
      role: 'student',
    };

    setCurrentUser(userData);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
    return { success: true, user: userData };
  };

  // Owner Login Function
  const ownerLogin = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (
      normalizedEmail !== DEMO_OWNER.email.toLowerCase() ||
      password !== DEMO_OWNER.password
    ) {
      return {
        success: false,
        error: 'Invalid Owner Email ID or password. Please verify operator credentials.',
      };
    }

    const userData = {
      fullName: DEMO_OWNER.fullName,
      email: DEMO_OWNER.email,
      role: 'owner',
    };

    setCurrentUser(userData);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
    return { success: true, user: userData };
  };

  // Logout Function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isStudent: currentUser?.role === 'student',
    isOwner: currentUser?.role === 'owner',
    studentLogin,
    studentRegister,
    ownerLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

