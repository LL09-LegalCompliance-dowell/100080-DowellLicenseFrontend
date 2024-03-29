import {Alert, StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import Loading from '../../components/Loading';

const ClientAdminView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [session_id, setSession_id] = useState('')
  const mainURL = "https://100014.pythonanywhere.com/";

  const webViewRef = useRef();
  const NavigationHandler = async ({url}) => {
    console.log(url);
    const urlPrefix = "https://ll09-legalcompliance-dowell.github.io/100080-dowelllegalzardWeb/?"
    try {
      if (
        url.startsWith(urlPrefix)
      ) {
        setLoading(true);
        const params = url.replace(urlPrefix, '');
        const sessionParam = params.split("&")[0]
        const sess_id = sessionParam.replace("session_id=", "")
        console.log("session ID: ", sess_id)
        setSession_id(sess_id)
        setLoading(true);
        if (session_id || sess_id) {
          console.log("session_id: ", session_id)
          getPortfolio(sess_id);
        } else {
          Alert.alert('Some Error Occured. Try Again!');
          navigation.navigate('IntroductionScreen');
        }
        setLoading(false);
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };

  const getPortfolio = async (sess_id) => {
    try {
      const response = await axios.post(
        'https://100093.pythonanywhere.com/api/userinfo/',
        {session_id: session_id || sess_id},
      );
      const responseUser = await axios.post(
        'https://100014.pythonanywhere.com/api/profile/',
        {key: session_id || sess_id},
      );
      // console.log('Portfolio Data', response.data);
      // console.log("User Details",responseUser.data)
      const {username, email, first_name, id} = responseUser.data;
      id && (await AsyncStorage.setItem('user_id', id.toString()));
      username && (await AsyncStorage.setItem('username', username));
      email && (await AsyncStorage.setItem('email', email));
      first_name && (await AsyncStorage.setItem('first_name', first_name));
      session_id && (await AsyncStorage.setItem('session_id', session_id));
      const portfolio = response.data.portfolio_info.filter(
        item => item.product === 'Legalzard',
      );
      if (!portfolio.length) {
        Alert.alert(
          'No portfolio detected. Try to refresh. Or try Click connect in the Legalzard Icon',
        );
      }
      const {member_type, data_type, org_id, org_name, portfolio_name, role} =
        portfolio[0];
      console.log(member_type, org_name, portfolio_name, role, org_id);
      member_type && (await AsyncStorage.setItem('member_type', member_type));
      data_type && (await AsyncStorage.setItem('data_type', data_type));
      org_name && (await AsyncStorage.setItem('org_name', org_name));
      org_id && (await AsyncStorage.setItem('org_id', org_id));
      portfolio_name &&
        (await AsyncStorage.setItem('portfolio_name', portfolio_name));
      role && (await AsyncStorage.setItem('role', role));
      navigation.replace('RootNavigator');
    } catch (error) {
      console.log('Getting portfolio Error!', error);
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <WebView
          style={{flex: 1}}
          ref={webViewRef}
          renderLoading={<Loading />}
          //Loading mainURL
          source={{uri: mainURL}}
          onNavigationStateChange={NavigationHandler}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <Loading /> : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
});
export default ClientAdminView;
