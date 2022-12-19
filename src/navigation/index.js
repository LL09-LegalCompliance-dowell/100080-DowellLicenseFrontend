import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';

const index = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      setUser(username);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return user ? <RootNavigator /> : <AuthNavigator />;
};
export default index;
