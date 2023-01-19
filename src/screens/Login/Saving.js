import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Saving = ({navigation, route}) => {
  const url= route.params.url;
  const session_id = url.substring(45);
  const fetchUser = async () => {
    try{
      const response = await axios.post(
        'https://100014.pythonanywhere.com/api/profile/',
        {key: session_id},
      );
    console.log("response from API",response.data)
    const {
      id,
      username,
      email,
      phone,
      first_name,
      last_name,
      role,
      teamcode,
      phonecode,
      profile_image,
    } = response.data;
    if(!username | !email | !first_name){
      navigation.navigate("webView")
    }
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('first_name', first_name);
    await AsyncStorage.setItem('session_id', session_id);
    fetchPortfolio();
    
  }catch(error){console.log(error)}
  };

  const fetchPortfolio = async () => {
    try{
      const response = await axios.post("https://100014.pythonanywhere.com/api/userinfo/", {session_id: session_id});
      console.log("Portfolio Data",response.data)
      const portfolio = response.data.portfolio_info;
      console.log(portfolio, portfolio.length)
      const username = await AsyncStorage.getItem("username");

      if(!portfolio.length){
        navigation.navigate("NoPortfolio", {"session_id":session_id, "username":username})
      }else{
        navigation.navigate("RootNavigator")
      }

    }catch(error){console.log("Fetching portfolio Error!",error)}
    
  }
  useEffect(() => {
    fetchUser();
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.indicator} size="large" color="#00ff00" />
      <Text>Logging In...</Text>
      <Text>Checking Portfolio...</Text>
    </View>
  );
};

export default Saving;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground: 'white',
    zIndex: 10,
    flex: 1,
  },
  indicator: {
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 12
  },
});
