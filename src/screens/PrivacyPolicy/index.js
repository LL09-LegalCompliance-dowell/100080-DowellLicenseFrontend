import {Alert, ActivityIndicator} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {WebView} from 'react-native-webview';

const URL =
  'https://100087.pythonanywhere.com/tkr-policy/FB1010000000166626444054399016/app-privacy-policy/?redirect_url=http://127.0.0.1:8000/callbackurl&policy_request_id=FB101000000000166530629056539143455595959';

const PrivacyPolicy = ({navigation}) => {

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    try {
      if (url == 'http://127.0.0.1:8000/callbackurl') {
        navigation.navigate('Loading');
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

export default PrivacyPolicy;