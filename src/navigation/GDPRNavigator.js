import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Gdpr from '../screens/PolicyGenerator/GDPR';
import Gdpr1 from '../screens/PolicyGenerator/GDPR1';
import Gdpr2 from '../screens/PolicyGenerator/GDPR2';

const Stack = createNativeStackNavigator()

const GDPRNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Gdpr'>
      <Stack.Screen
          name="Gdpr"
          component={Gdpr}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Gdpr1"
          component={Gdpr1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Gdpr2"
          component={Gdpr2}
          options={{
            headerShown: true,
          }}
        />
    </Stack.Navigator>
  )
}

export default GDPRNavigator