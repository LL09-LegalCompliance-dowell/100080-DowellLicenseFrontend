import {Alert, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './style';

const CreatePortfolio = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const {session_id} = route.params;
  const URL = `https://100093.pythonanywhere.com/?session_id=${session_id}`;
  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url);
    try {
      if (
        url.startsWith(
          'https://play.google.com/store/apps/details?id=com.legalzard.policies',
        )
      ) {
        getPortfolio();
      } else {
        console.log('Still exploring Client Admin!');
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };

  const getPortfolio = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://100093.pythonanywhere.com/api/userinfo/',
        {session_id: session_id},
      );
      //console.log("Portfolio Data",response.data)
      const portfolio = response.data.portfolio_info.filter(
        item => item.product === 'Legalzard',
      );
      const username = await AsyncStorage.getItem('username');
      if (!portfolio.length) {
        Alert.alert(
          'No portfolio detected. Try to refresh. Or try Click connect in the Legalzard Icon',
        );
        navigation.navigate('NoPortfolio', {
          session_id: session_id,
          username: username,
        });
        setLoading(false);
      }
      const {owner_name, member_type, org_name, portfolio_name, role} =
        portfolio[0];
      console.log(member_type, org_name, portfolio_name, role);
      member_type && (await AsyncStorage.setItem('member_type', member_type));
      org_name && (await AsyncStorage.setItem('org_name', org_name));
      portfolio_name &&
        (await AsyncStorage.setItem('portfolio_name', portfolio_name));
      role && (await AsyncStorage.setItem('role', role));

      navigation.navigate('RootNavigator');
      setLoading(false);
    } catch (error) {
      console.log('Fetching portfolio Error!', error);
      setLoading(false);
    }
  };

  const fetchPortfolio = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://100014.pythonanywhere.com/api/userinfo/',
        {session_id: session_id},
      );
      //console.log("Portfolio Data",response.data)
      const portfolio = response.data.portfolio_info.filter(
        item => item.product === 'Legalzard',
      );
      const username = await AsyncStorage.getItem('username');
      console.log('Portfolio', portfolio);
      if (!portfolio.length) {
        Alert.alert(
          'No portfolio detected. Try to refresh. Or try Click connect in the Legalzard Icon',
        );
        navigation.navigate('NoPortfolio', {
          session_id: session_id,
          username: username,
        });
        setLoading(false);
      }
      const {member_type, org_name, portfolio_name, role} = portfolio[0];
      console.log(member_type, org_name, portfolio_name, role);
      member_type && (await AsyncStorage.setItem('member_type', member_type));
      org_name && (await AsyncStorage.setItem('org_name', org_name));
      portfolio_name &&
        (await AsyncStorage.setItem('portfolio_name', portfolio_name));
      role && (await AsyncStorage.setItem('role', role));

      navigation.navigate('RootNavigator');
      setLoading(false);
    } catch (error) {
      console.log('Fetching portfolio Error!', error);
      setLoading(false);
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
      <TouchableOpacity
        style={[styles.createPortfolio, {marginTop: 0}]}
        onPress={fetchPortfolio}>
        <Text style={[styles.createPortfolioText, {fontSize: 16}]}>
          {loading ? 'Checking Portfolio...' : 'Done Creating Portfolio?'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CreatePortfolio;
