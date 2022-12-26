import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import P1 from './P1';
import PrivacyPolicyNav from './PrivacyPolicyNav';
import LicenseImage from './LicenseImage';

const Stack = createNativeStackNavigator();

const PPA = () => {
  return (
    <Stack.Navigator initialRouteName="P1">
      <Stack.Screen
        name="P1"
        component={P1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="eula_policy_nav"
        component={PrivacyPolicyNav}
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
    </Stack.Navigator>
  );
};

export default PPA;
