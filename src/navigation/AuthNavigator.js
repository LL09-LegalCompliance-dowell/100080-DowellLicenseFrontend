import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroductionScreen from '../screens/IntroductionScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import PrivacyPolicy from '../screens/PrivacyPolicy';


const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Auth.Navigator
        initialRouteName="IntroductionScreen"
        screenOptions={{gestureEnabled: true}}>
        <Auth.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            headerShown: false,
          }}
        />  
        <Auth.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Auth.Navigator>
    </>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
