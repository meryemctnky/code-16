import { useState, useEffect, useContext, createContext } from 'react';
import { fetchLogout, fetchMe } from '../services';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setIsLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);

    localStorage.setItem('access-token', data.accessToken);
    localStorage.setItem('refresh-token', data.refreshToken);
  };

  const logout = async (callback) => {
    setIsLoggedIn(false);
    setUser(null);

    fetchLogout();

    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    callback();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const contextValue = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
