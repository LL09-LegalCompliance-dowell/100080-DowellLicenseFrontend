import {Alert, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';

const PrivacyPolicy = ({navigation}) => {
  const [session_id, setSession_id] = useState(null)
  const getSessionId = async() =>{
    try{
      const session_id = await AsyncStorage.getItem('session_id');
      if(!session_id){
        Alert.alert("You need to login first!")
        navigation.navigate("EmbededLogin")
      }
      console.log(session_id)
      setSession_id(session_id)

    }catch(error){
      console.log(error)
    }
  }
  
  const URL = `https://100087.pythonanywhere.com/legalpolicies/FB1010000000001665306290565391/app-privacy-policy/policies/?redirect_url=http://127.0.0.1:8000/callbackurl&session_id=${session_id}`

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url, "URL")
    try {
      if (url == `http://127.0.0.1:8000/callbackurl`) {
        navigation.navigate('Loading');
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };

  useEffect(() => {
    getSessionId();
  }, [])
  

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: URL,
        }}
        startInLoadingState
        onNavigationStateChange={NavigationHandler}
      />
    </>
  );
};

export default PrivacyPolicy;