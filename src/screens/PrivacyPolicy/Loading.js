import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const Loading = ({navigation}) => {
  const fetchIAgree = async () => {
    const res = await axios.get(
      'https://100087.pythonanywhere.com/api/tkr-legalpolicies/FB101000000000166530629056539143455595959/',
    );
    const {i_agree, isSuccess, policy_request_id} = res.data;
    navigation.navigate('EmbededLogin', {
      i_agree,
      isSuccess,
      policy_request_id,
    });
  };

  useEffect(() => {
    fetchIAgree();
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
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
});
