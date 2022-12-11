import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Saving = ({navigation, route}) => {
  const url = route.params.url
  const session_id = url.substring(45)
  const fetchUser = async () => {
    const response = await axios.post("https://100014.pythonanywhere.com/api/profile/", {"key": session_id} );
    const {id, username,email,phone,first_name,last_name,role,teamcode,phonecode,profile_image} =response.data
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('first_name', first_name);
    navigation.navigate('RootNavigator');
  };

  useEffect(() => {
    fetchUser();
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text>Logging In...</Text>

    </View>
  );
};

export default Saving;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground: 'white',
    zIndex: 10,
    flex: 1,
  },
});
