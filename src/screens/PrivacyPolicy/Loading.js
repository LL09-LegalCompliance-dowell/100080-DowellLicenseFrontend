import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Loading = ({navigation, route}) => {
  const [loading, setLoading] = useState(false)
  const session_id = route.params.session_id;
  const fetchIAgree = async () => {
    setLoading(true)
    try{
      const res = await axios.get(
        `https://100087.pythonanywhere.com/api/legalpolicies/${session_id}/iagreestatus/`
      );
      console.log("API response",res.data.data)
      const {i_agree, legal_policy_type, i_agreed_datetime} = res.data.data.filter((item) => item.legal_policy_type === "app-privacy-policy" )[0];
      await AsyncStorage.setItem('previouslyAgreedDate', i_agreed_datetime);
      await AsyncStorage.setItem('iAgree', JSON.stringify(i_agree));
      navigation.navigate('RootNavigator');
      setLoading(false)
    }catch(error){
      console.log("Error!", error)
      setLoading(false)
      navigation.navigate('RootNavigator');
    }
  
  }

  useEffect(() => {
    fetchIAgree();
  });
  return (
    <View style={styles.container}>
      {
        loading && <ActivityIndicator style={styles.indicator} size="large" color="#00ff00" />
      }      
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
