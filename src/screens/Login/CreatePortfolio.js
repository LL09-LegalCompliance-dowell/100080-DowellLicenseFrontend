import {Alert, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import styles from './style';

const CreatePortfolio = ({navigation, route}) => {
  const {session_id}= route.params;
  const URL = `https://100093.pythonanywhere.com/new/?session_id=${session_id}`
  console.log(URL)

  const webViewRef = useRef();
  const gotToMainScreen = () => {
    navigation.navigate("RootNavigator")
  }

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: URL,
        }}
        startInLoadingState
        //onNavigationStateChange={NavigationHandler}
      />
      <TouchableOpacity style={[styles.createPortfolio, {marginTop: 0,}]} onPress={gotToMainScreen}>
        <Text style={[styles.createPortfolioText, {fontSize:16}]}>Done Creating Portfolio</Text>
      </TouchableOpacity>      
    </>
  );
};

export default CreatePortfolio;