import {StyleSheet} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  TransitionPrese,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import IntroductionScreen from '../screens/IntroductionScreen';
import PrivacyPolicy from '../screens/PrivacyPolicy';
// import FullSignUp from '../screens/SignUp/FullSignUp';
import Loading from '../screens/PrivacyPolicy/Loading';
import EmbededLogin from '../screens/Login/EmbededLogin';
import WebView from '../screens/Login/WebView';
import RootNavigator from './RootNavigator';
import Saving from "../screens/Login/Saving"

Loading;
const Auth = createStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Auth.Navigator
        initialRouteName="IntroductionScreen"
        screenOptions={{
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
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
        <Auth.Screen
          name="Saving"
          component={Saving}
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
