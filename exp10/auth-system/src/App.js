import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import './App.css';

// Loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

// Auth wrapper component
const AuthWrapper = () => {
  const { isAuthenticated, loading } = useAuth();
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  if (loading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div className="auth-wrapper">
      {authMode === 'login' ? (
        <Login switchToSignUp={() => setAuthMode('signup')} />
      ) : (
        <SignUp switchToLogin={() => setAuthMode('login')} />
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AuthWrapper />
      </div>
    </AuthProvider>
  );
}

export default App;
