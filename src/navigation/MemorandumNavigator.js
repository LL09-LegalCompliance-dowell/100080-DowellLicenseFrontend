import {View, Text} from 'react-native';
import React from 'react';
import MOU1 from '../screens/PolicyGenerator/MOU/MOU1';
import MOU2 from '../screens/PolicyGenerator/MOU/MOU2';
import MOU3 from '../screens/PolicyGenerator/MOU/MOU3';
import MOU4 from '../screens/PolicyGenerator/MOU/MOU4';
import MOU5 from '../screens/PolicyGenerator/MOU/MOU5';
import MOUIndex from '../screens/PolicyGenerator/MOU/MOUIndex';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MemorandumNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="MOU1">
        <Stack.Screen
          name="MOU1"
          component={MOU1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MOU2"
          component={MOU2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MOU3"
          component={MOU3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MOU4"
          component={MOU4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MOU5"
          component={MOU5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MOUIndex"
          component={MOUIndex}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MemorandumNavigator;
