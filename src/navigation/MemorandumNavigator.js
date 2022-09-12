import { View, Text } from 'react-native'
import React from 'react'
import Memorandum from '../screens/PolicyGenerator/MemorandumUnderstanding';
import Memorandum1 from '../screens/PolicyGenerator/MemorandumUnderstanding1';
import Memorandum2 from '../screens/PolicyGenerator/MemorandumUnderstanding2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator() ;

const MemorandumNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='Memorandum'>
      <Stack.Screen
          name="Memorandum"
          component={Memorandum}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Memorandum1"
          component={Memorandum1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Memorandum2"
          component={Memorandum2}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default MemorandumNavigator