import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import G1 from './G1';
import GDBRPolicyNav from './GDBRPolicyNav';
import LicenseImage from './LicenseImage';
import FAQ from '../FAQ';

const Stack = createNativeStackNavigator();

const GDPR = () => {
  return (
    <Stack.Navigator initialRouteName="g1">
      <Stack.Screen
        name="g1"
        component={G1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GDPR_Policy_Nav"
        component={GDBRPolicyNav}
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

export default GDPR;
