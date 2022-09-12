import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Navigation from './src/navigation/index';
import AgreementNavigator from "./src/navigation/AgreementNavigator"

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
    <>
      <AgreementNavigator />
    </>
  );
};

export default App;
