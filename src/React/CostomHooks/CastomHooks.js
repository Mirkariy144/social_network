import React, { useState, useContext, useEffect, createContext, useCallback } from 'react';
import { axiosGetProfile } from '../../API/API';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadUser = useCallback(async () => {
    const data = await axiosGetProfile();
    if (data.resultCode === 0) {
      setUser(data.data)
      navigate(`/profile/${data.data.id}`)
    } else {
      navigate('/login')
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    loadUser()
  }, [])


  const value = {
    user,
    loading,
    loadUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}