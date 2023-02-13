import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';

const index = () => {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [org_id, setOrgId] = useState('');
  const [session_id, setSession_id] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [role, setRole] = useState('');

  const fetchUser = async () => {
    setLoading(true);
    try {
      const username = await AsyncStorage.getItem('username');
      const email = await AsyncStorage.getItem('email');
      const session_id = await AsyncStorage.getItem('session_id');
      const org = await AsyncStorage.getItem('org_name');
      const org_id = await AsyncStorage.getItem('org_id');
      const portfolio = await AsyncStorage.getItem('portfolio_name');
      const role = await AsyncStorage.getItem('role');
      setUsername(username);
      setEmail(email);
      setSession_id(session_id);
      setOrg(org);
      setOrgId(org_id);
      setPortfolio(portfolio);
      setRole(role);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if(!username || !email || session_id){
    return <AuthNavigator />;
  }else if (!portfolio || !org ||!org_id){
    return <AuthNavigator />;
  }else{
    return <RootNavigator />
  }
  // if (!username || !email || session_id) {
  //   return <RootNavigator />;
  // }
};
export default index;
