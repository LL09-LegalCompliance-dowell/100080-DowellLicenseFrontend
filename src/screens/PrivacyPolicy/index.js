import {StyleSheet, Alert, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect} from 'react';
import jwt from 'jwt-decode';
import axios from 'axios';
import AppLoader from '../../components/AppLoader';
import {useLogin} from '../../context/LoginProvider';

import {WebView} from 'react-native-webview';
import {View} from 'react-native';
const URL =
  'https://100087.pythonanywhere.com/tkr-policy/FB1010000000001665306290565391/app-privacy-policy/?redirect_url=http://127.0.0.1:8000/callbackurl&policy_request_id=FB101000000000166530629056539143455595959';

const PrivacyPolicy = ({navigation}) => {
  const {setIsLoggedIn, loading, setLoading} = useLogin();

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    try {
      // const getSearchParamFromURL = (url, param) => {
      //   const include = url.includes(param);

      //   if (!include) return null;

      //   const params = url.split(/([?,=])/);
      //   const index = params.indexOf(param);
      //   const value = params[index + 2];
      //   return value;
      // };

      if (url == 'http://127.0.0.1:8000/callbackurl') {
        // const token = getSearchParamFromURL(url, 'token');
        // const decodedToken = jwt(token);

        // const id = decodedToken.isSuccess;
        // const successValue = decodedToken.app_event_id;
        // await setLoading(true);

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
          onNavigationStateChange={NavigationHandler}
          // originWhitelist={['*']}
          // javaScriptEnabledAndroid={true}
          // javaScriptEnabled={true}
        />
    </>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
