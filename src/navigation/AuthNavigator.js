import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroductionScreen from '../screens/IntroductionScreen';
// import Login from '../screens/Login';
// import SignUp from '../screens/SignUp';
import PrivacyPolicy from '../screens/PrivacyPolicy';
// import FullSignUp from '../screens/SignUp/FullSignUp';
import Loading from '../screens/PrivacyPolicy/Loading';
import EmbededLogin from '../screens/Login/EmbededLogin';
import WebView from '../screens/Login/WebView';
import RootNavigator from "./RootNavigator";

Loading;
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
          name="RootNavigator"
          component={RootNavigator}
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
        {/* <Auth.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Auth.Screen
          name="FullSignUp"
          component={FullSignUp}
          options={{
            headerShown: false,
          }}
        /> */}
        <Auth.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="EmbededLogin"
          component={EmbededLogin}
          options={{
            headerShown: false,
          }}
        />
        <Auth.Screen
          name="WebView"
          component={WebView}
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
