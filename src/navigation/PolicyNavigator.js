import {View, Text} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// agreement compliance screens
import PolicyGenerator1 from '../screens/PolicyGenerator/PolicyGenerator1';
import PolicyGenerator2 from '../screens/PolicyGenerator/PolicyGenerator2';
import PolicyGenerator3 from '../screens/PolicyGenerator/PolicyGenerator3';
import PolicyGenerator4 from '../screens/PolicyGenerator/PolicyGenerator4';
import PolicyGenerator5 from '../screens/PolicyGenerator/PolicyGenerator5';

const Stack = createNativeStackNavigator();

const PolicyNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="PolicyGenerator1">
        <Stack.Screen
          name="PolicyGenerator1"
          component={PolicyGenerator1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator2"
          component={PolicyGenerator2}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator3"
          component={PolicyGenerator3}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator4"
          component={PolicyGenerator4}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator5"
          component={PolicyGenerator5}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default PolicyNavigator;
