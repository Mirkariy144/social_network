import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from 'react';
import { axiosGetProfile } from '../../API/API';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()


  const loadUser = useCallback(async () => {
    const data = await axiosGetProfile();
    if (data.resultCode === 0) {
      if (location.pathname === '/login') {
        navigate(`/profile/${data.data.id}`);
      }
      setUser(data.data);
    } else {
      navigate('/login');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
      loadUser();
  }, []);

  const value = {
    user,
    loading,
    loadUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
