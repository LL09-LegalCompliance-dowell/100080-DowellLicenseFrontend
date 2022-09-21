import React, {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContext = createContext();
const LicensesContext = createContext();
let a;

const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [licenses, setLicenses] = useState({});

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

  // const fetchLicenses = async () => {
  //   const a = await axios.get(
  //     'https://100080.pythonanywhere.com/api/licenses/',
  //   );
  //   // if (a.data) {
  //   //   setLicenses(a);
  //   //   // console.log(LicensesData.data);
  //   // }
  // };

  useEffect(() => {
    fetchUser();
    // fetchLicenses();
  }, []);

  return (
    <>
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <LicensesContext.Provider value={{licenses, setLicenses, a}}>
          {children}
        </LicensesContext.Provider>
      </LoginContext.Provider>
    </>
  );
};

export const useLogin = () => useContext(LoginContext);
export const useLicenses = () => useContext(LicensesContext);

export default LoginProvider;
