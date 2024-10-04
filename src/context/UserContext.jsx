import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    return false;
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, fetchProfile }}>
      {children}
    </UserContext.Provider>
  );
};
