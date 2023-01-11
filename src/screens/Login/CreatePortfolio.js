import {Alert, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import styles from './style';

const CreatePortfolio = ({navigation, route}) => {
  const {session_id}= route.params;
  const URL = `https://100093.pythonanywhere.com/new/?session_id=${session_id}`

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log("URL:",url)
    try {
      if (url == `http://127.0.0.1:8000/callbackurl`) {
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
      <TouchableOpacity style={styles.createPortfolio}>
        <Text style={[styles.createPortfolioText, {fontSize:16}]}>Done Creating Portfolio</Text>
      </TouchableOpacity>      
    </>
  );
};

export default CreatePortfolio;