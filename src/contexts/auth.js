import React, {createContext, useEffect, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userToken, setToken] = useState('');

  useEffect(() => {
    const loadStorage = async () => {
      const storageUser = await AsyncStorage.getItem('@finApp:token');

      if (storageUser) {
        const response = await api
          .get('me', {
            headers: {
              'Authorization': `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
        });
        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }

      setLoading(false);
    };

    loadStorage();
  }, []);

  const navigation = useNavigation();

  const signUp = async (email, password, name) => {
    setLoadingAuth(true);
    try {
      const response = await api.post('users', {
        email: email,
        password: password,
        name: name,
      });

      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      console.log('Error while sign up', error.message);
      setLoadingAuth(false);
    }
  };

  const signIn = async (email, password) => {
    setLoadingAuth(true);
    try {
      const response = await api.post('login', {
        email: email,
        password: password,
      });

      const {id, name, token} = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@finApp:token', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });

      setLoadingAuth(false);
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear()
    .then(() => {
        setUser(null);
    })
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, loadingAuth, loading, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
