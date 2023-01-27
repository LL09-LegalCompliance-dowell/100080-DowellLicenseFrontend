import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Loading = ({navigation, route}) => {
  const session_id = route.params.session_id;
  const fetchIAgree = async () => {
    const res = await axios.get(
      `https://100087.pythonanywhere.com/api/legalpolicies/${session_id}/iagreestatus/`
    );
    console.log("API response",res.data.data)
    const {i_agree, isSuccess, policy_request_id, i_agreed_datetime} = res.data.data.filter((item) => item.legal_policy_type === "app-privacy-policy" )[0];
    await AsyncStorage.setItem('previouslyAgreedDate', i_agreed_datetime);
    await AsyncStorage.setItem('iAgree', JSON.stringify(i_agree));
    navigation.navigate('IntroductionScreen');
  
  }

  useEffect(() => {
    fetchIAgree();
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.indicator} size="large" color="#00ff00" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground: 'white',
    zIndex: 10,
    flex: 1,
  },
  indicator: {
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 12
  },
});
