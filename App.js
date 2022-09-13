import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Navigation from './src/navigation/index';
import LoginProvider from './src/context/LoginProvider';

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
    <>
      <LoginProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigation />
        </NavigationContainer>
      </LoginProvider>
    </>
  );
};

export default App;
