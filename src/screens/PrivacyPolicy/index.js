import {Alert, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';

const PrivacyPolicy = ({navigation}) => {
  const [session_id, setSession_id] = useState(null)
  const checksessionID = async () =>{
    const session_id = await AsyncStorage.getItem("session_id");
    if(!session_id){
      navigation.navigate("EmbededLogin")
      Alert.alert("You need to Login First!")
    }else{
      setSession_id(session_id)
    }
  }
  const URL = `https://100087.pythonanywhere.com/legalpolicies/FB1010000000001665306290565391/app-privacy-policy/policies/?redirect_url=http://127.0.0.1:8000/callbackurl&session_id=${session_id}`

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url, "URL")
    try {
      if (url == `http://127.0.0.1:8000/callbackurl`) {
        navigation.navigate('Loading', {"session_id":session_id});
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };
  
  useEffect(() => {
    checksessionID();
  }, [])
  console.log("session_id", session_id)

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