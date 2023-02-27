import { Alert, StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useRef, useEffect, useState}from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import Loading from '../../components/Loading';


const ClientAdminView = ({navigation, route}) => {
  const {session_id} = route.params;
  console.log("client admin view", session_id)
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false);
  const URL = `https://100093.pythonanywhere.com/?session_id=${session_id}`;
  console.log("URL",URL)

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url)
    try {
      if (url === "https://100093.pythonanywhere.com/" || url === "https://100093.pythonanywhere.com/home"
          || url === "https://100093.pythonanywhere.com/admintest/") {
        if(!session_id){
          Alert.alert("Some Error Occured. Try Again!")
          navigation.navigate("IntroductionScreen")
        }
      }
      if (url.startsWith("https://play.google.com/store/apps/details?id=com.legalzard.policies")) {
        setLoading(true)
        if(session_id){
          getPortfolio();
        }else{
          Alert.alert("Some Error Occured. Try Again!")
          navigation.navigate("IntroductionScreen")
        }
        setLoading(false)
        }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };

  const getPortfolio = async () => {
    try{
      const response = await axios.post("https://100093.pythonanywhere.com/api/userinfo/", {session_id: session_id});
      const responseUser = await axios.post('https://100014.pythonanywhere.com/api/profile/', {key: session_id});
      console.log("Portfolio Data",response.data)
      //console.log("User Details",responseUser.data)
      const {username,email, first_name, id} = responseUser.data;
      id && await AsyncStorage.setItem('user_id', id);
      username && await AsyncStorage.setItem('username', username);
      email && await AsyncStorage.setItem('email', email);
      first_name && await AsyncStorage.setItem('first_name', first_name);
      session_id && await AsyncStorage.setItem('session_id', session_id);
      const portfolio = response.data.portfolio_info.filter((item) => item.product === "Legalzard")
      if(!portfolio.length){
        Alert.alert("No portfolio detected. Try to refresh. Or try Click connect in the Legalzard Icon")
      }
      const {member_type, data_type, org_id, org_name, portfolio_name, role} = portfolio[0];
      console.log(member_type, org_name, portfolio_name, role, org_id)
      member_type && await AsyncStorage.setItem('member_type', member_type);
      data_type && await AsyncStorage.setItem('data_type', data_type);
      org_name && await AsyncStorage.setItem('org_name', org_name);
      org_id && await AsyncStorage.setItem('org_id', org_id);
      portfolio_name && await AsyncStorage.setItem('portfolio_name', portfolio_name);
      role && await AsyncStorage.setItem('role', role);
      navigation.navigate("RootNavigator")

    }catch(error){
      console.log("Getting portfolio Error!",error);
      setLoading(false)
    }
    
  }
  if(loading){
    return(
    <Loading/>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <WebView
          style={{ flex: 1 }}
          ref={webViewRef}
          renderLoading={<Loading/>}
          //Loading URL
          source={{ uri: URL }}
          onNavigationStateChange={NavigationHandler}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <Loading /> : null}
      </View>
    </SafeAreaView>
  )  
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
});
export default ClientAdminView;