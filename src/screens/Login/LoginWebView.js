import { Alert, StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useRef, useEffect, useState}from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import Loading from '../../components/Loading';

const URL = "https://100014.pythonanywhere.com/?redirect_url=http://127.0.0.1:8000/";
//?redirect_url=https://100093.pythonanywhere.com/

const LoginWebView = ({navigation}) => {
  const [session_id, setSession_id] = useState("")
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false);

  //const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url)
    try {
      if (url.startsWith("http://127.0.0.1:8000/?session_id=")) {
        setLoading(true)
        //navigation.navigate('Saving', {url});
        const session_id = await url.substring(34, 66);
        console.log("Session_Id",session_id)
        setSession_id(session_id)
        await AsyncStorage.setItem("session_id",session_id)
        session_id && navigation.navigate("ClientAdminView", {"session_id":session_id})        
        //setLoading(false)
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };
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
          //ref={webViewRef}
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
export default LoginWebView;