import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContext = createContext();
const LicensesContext = createContext();

const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [licenses, setLicenses] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUserAndLicense = async () => {
    const LicensesData = await axios.get(
      'https://100080.pythonanywhere.com/api/licenses/',
    );
    if (LicensesData.data) {
      setLicenses(LicensesData.data.data);
    }

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
    fetchUserAndLicense();
  }, []);

  return (
    <>
      <LoginContext.Provider
        value={{isLoggedIn, setIsLoggedIn, loading, setLoading}}>
        <LicensesContext.Provider value={{licenses, setLicenses}}>
          {children}
        </LicensesContext.Provider>
      </LoginContext.Provider>
    </>
  );
};

export const useLogin = () => useContext(LoginContext);
export const useLicenses = () => useContext(LicensesContext);

export default LoginProvider;
