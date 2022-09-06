import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useColorScheme, Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import StackNavigator from './StackNavigator';

const index = () => {
  const scheme = useColorScheme();

  return (
    <>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
