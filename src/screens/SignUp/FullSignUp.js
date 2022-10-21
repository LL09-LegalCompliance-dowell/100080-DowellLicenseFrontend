import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import AppLoader from '../../components/AppLoader';
import {useLogin} from '../../context/LoginProvider';

const FullSignUp = () => {
  const {loading, setLoading} = useLogin();

  return (
    <>
      {loading ? <AppLoader /> : null}
      <WebView
        source={{uri: 'https://100014.pythonanywhere.com/register'}}
        onLoadStart={()=>setLoading(true)}
        onLoadEnd={()=>setLoading(false)}
      />
    </>
  );
};

export default FullSignUp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
