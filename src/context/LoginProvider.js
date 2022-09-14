import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContext = createContext();

const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('token');
    const username = await AsyncStorage.getItem('username');
    const password = await AsyncStorage.getItem('password');

    if (token !== null) {
      const signInRes = await axios.post(
        'https://100014.pythonanywhere.com/api/token/',
        {username: username, password: password},
      );
      if (signInRes.data) {
        setIsLoggedIn(true);
        // const token = signInRes.data.access;
      } else {
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <LoginContext.Provider
      value={{isLoggedIn, setIsLoggedIn, profile, setProfile}}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
