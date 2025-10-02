import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Authentication actions
const authActions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null
};

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOGIN_SUCCESS:
    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    case authActions.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
    case authActions.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case authActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case authActions.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check if user is logged in on app start
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        try {
          const user = JSON.parse(userData);
          dispatch({ type: authActions.LOGIN_SUCCESS, payload: user });
        } catch (error) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
          dispatch({ type: authActions.SET_LOADING, payload: false });
        }
      } else {
        dispatch({ type: authActions.SET_LOADING, payload: false });
      }
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = (email, password) => {
    dispatch({ type: authActions.SET_LOADING, payload: true });
    dispatch({ type: authActions.CLEAR_ERROR });

    // Simulate API call - in real app, this would be an actual API request
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        const userData = { id: user.id, email: user.email, name: user.name };
        const token = 'mock-jwt-token-' + Date.now();
        
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(userData));
        
        dispatch({ type: authActions.LOGIN_SUCCESS, payload: userData });
      } else {
        dispatch({ type: authActions.SET_ERROR, payload: 'Invalid email or password' });
      }
    }, 1000);
  };

  // Signup function
  const signup = (name, email, password) => {
    dispatch({ type: authActions.SET_LOADING, payload: true });
    dispatch({ type: authActions.CLEAR_ERROR });

    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === email);

      if (existingUser) {
        dispatch({ type: authActions.SET_ERROR, payload: 'User already exists with this email' });
      } else {
        const newUser = {
          id: Date.now(),
          name,
          email,
          password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        const userData = { id: newUser.id, email: newUser.email, name: newUser.name };
        const token = 'mock-jwt-token-' + Date.now();
        
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(userData));
        
        dispatch({ type: authActions.SIGNUP_SUCCESS, payload: userData });
      }
    }, 1000);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    dispatch({ type: authActions.LOGOUT });
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: authActions.CLEAR_ERROR });
  };

  const value = {
    ...state,
    login,
    signup,
    logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;