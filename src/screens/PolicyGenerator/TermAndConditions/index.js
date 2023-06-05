import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import E1 from './E1';
import EulaPolicyNav from './EulaPolicyNav';
import LicenseImage from './LicenseImage';
import FAQ from '../FAQ';

const Stack = createNativeStackNavigator();

const Eula = () => {
  return (
    <Stack.Navigator initialRouteName="e1">
      <Stack.Screen
        name="e1"
        component={E1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="eula_policy_nav"
        component={EulaPolicyNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="license_image"
        component={LicenseImage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Eula;
