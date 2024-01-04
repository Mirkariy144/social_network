import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from 'react';
import { axiosGetProfile } from '../../API/API';
import { useLocation, useNavigate } from 'react-router-dom';

export interface AuthUser {
  id: number;
  email: string;
  login: string;
}

interface AuthContextProps {
  user: AuthUser | null;
  loading: boolean;
  loadUser: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    user,
    loading,
    loadUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
