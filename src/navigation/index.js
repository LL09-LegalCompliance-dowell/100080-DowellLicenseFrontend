import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {useColorScheme, Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import RootNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';
import {useLogin} from '../context/LoginProvider';

const index = () => {
  return <AuthNavigator />;
};
export default index;
