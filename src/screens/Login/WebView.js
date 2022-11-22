import { Alert, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect} from 'react';

import {WebView} from 'react-native-webview';

const URL = "https://100014.pythonanywhere.com/";

const WebWiew = ({navigation}) => {

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    try {

      if (url == 'http://127.0.0.1:8000/callbackurl') {
        // setLoading(false);
        navigation.navigate('Loading');
        //
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
        //   onNavigationStateChange={NavigationHandler}
          // originWhitelist={['*']}
          // javaScriptEnabledAndroid={true}
          // javaScriptEnabled={true}
        />
    </>
  );
};

export default WebWiew;
