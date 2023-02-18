import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';
import Loading from '../components/Loading';

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
      username && setUsername(username);
      email && setEmail(email);
      session_id && setSession_id(session_id);
      org && setOrg(org);
      org_id && setOrgId(org_id);
      portfolio && setPortfolio(portfolio);
      role && setRole(role);
      setLoading(false)
      //console.log("User Found!")
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if(loading){
    <Loading />
  }else if (!username || !email || !session_id){
    return <AuthNavigator />;
  }else if (!portfolio || !org ||!org_id){
    return <AuthNavigator />;
  }else{
    return <RootNavigator />
  }
};
export default index;
