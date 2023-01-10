import { Alert, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect} from 'react';

import {WebView} from 'react-native-webview';

const URL = "https://100014.pythonanywhere.com/?redirect_url=http://127.0.0.1:8000/callbackurl";

const LoginWebView = ({navigation}) => {

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url)
    try {
      if (url.startsWith("http://127.0.0.1:8000/callbackurl")) {
      navigation.navigate('Saving', {url});
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };

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

export default LoginWebView;
