import {StyleSheet} from 'react-native';
import React, {useRef, useEffect} from 'react';

import {WebView} from 'react-native-webview';
const URL =   'https://100014.pythonanywhere.com';
const FullSignUp = ({navigation}) => {
  
  return (
      <WebView
      startInLoadingState
        source={{
          uri: URL,
        }}
      />
  );
};

export default FullSignUp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
