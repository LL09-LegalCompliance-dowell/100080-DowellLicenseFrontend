import { View, Text } from 'react-native'
import React from 'react'
import Termsofuse from '../screens/PolicyGenerator/Termsofuse';
import Termofuse1 from '../screens/PolicyGenerator/Termsofuse1';
import Termsofuse2 from '../screens/PolicyGenerator/Termsofuse3';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator() ;

const TermsOfUseNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='Termsofuse'>
      <Stack.Screen
          name="Termsofuse"
          component={Termsofuse}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Termofuse1"
          component={Termofuse1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Termsofuse2"
          component={Termsofuse2}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default TermsOfUseNavigator