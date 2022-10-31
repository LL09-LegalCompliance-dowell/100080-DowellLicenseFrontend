import {StyleSheet, Alert} from 'react-native';
import React, {useRef, useEffect} from 'react';
import jwt from 'jwt-decode';

import {WebView} from 'react-native-webview';
const URL =
  'https://100087.pythonanywhere.com/policy/FB1010000000001665306290565391/website-privacy-policy/?redirect_url=http://127.0.0.1/callback';

const PrivacyPolicy = ({navigation}) => {
  const webViewRef = useRef();

  const NavigationHandler = async ({url}) => {
    try {
      const getSearchParamFromURL = (url, param) => {
        const include = url.includes(param);

        if (!include) return null;

        const params = url.split(/([?,=])/);
        const index = params.indexOf(param);
        const value = params[index + 2];
        return value;
      };

      if (
        url ==
        'http://127.0.0.1/callback?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZXZlbnRfaWQiOiJGQjEwMTAwMDAwMDAwMDE2NjUzMDYyOTA1NjUzOTEiLCJpc1N1Y2Nlc3MiOnRydWV9.sEuCedT9mUQqtbg--7e5E6SIgWoT_MGksVMl-RLBL3c'
      ) {
        const token = getSearchParamFromURL(url, 'token');
        const decodedToken = jwt(token);

        const id = decodedToken.isSuccess;
        const successValue = decodedToken.app_event_id;

        navigation.navigate('Login', {id, successValue});
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
        originWhitelist={['*']}
        javaScriptEnabledAndroid={true}
        javaScriptEnabled={true}
      />
    </>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
