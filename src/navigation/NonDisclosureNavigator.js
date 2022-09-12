import { View, Text } from 'react-native'
import React from 'react'

import NonDisclosure from '../screens/PolicyGenerator/NonDisclosure';
import Nondisclosure1 from '../screens/PolicyGenerator/NonDisclosure1';
import Nondisclosure2 from '../screens/PolicyGenerator/Nondisclosure2';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator() ;

const NonDisclosureNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='NonDisclosure'>
        <Stack.Screen
          name="NonDisclosure"
          component={NonDisclosure}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Nondisclosure1"
          component={Nondisclosure1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Nondisclosure2"
          component={Nondisclosure2}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default NonDisclosureNavigator