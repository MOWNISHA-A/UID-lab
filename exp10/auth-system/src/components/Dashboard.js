import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {user?.name}!</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome to your Dashboard!</h2>
          <p>You have successfully logged in to your account.</p>
          
          <div className="user-details">
            <h3>Your Account Information:</h3>
            <div className="info-item">
              <strong>Name:</strong> {user?.name}
            </div>
            <div className="info-item">
              <strong>Email:</strong> {user?.email}
            </div>
            <div className="info-item">
              <strong>User ID:</strong> {user?.id}
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🔒 Secure Authentication</h3>
            <p>Your account is protected with secure authentication.</p>
          </div>
          
          <div className="feature-card">
            <h3>👤 User Profile</h3>
            <p>Manage your personal information and preferences.</p>
          </div>
          
          <div className="feature-card">
            <h3>🔐 Session Management</h3>
            <p>Your session is automatically managed and secured.</p>
          </div>
          
          <div className="feature-card">
            <h3>🚀 Ready to Expand</h3>
            <p>This system is ready for additional features and functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;