import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import D1 from './D1';
import AppDisclaimerPolicyNav from './AppDisclaimerPolicyNav';
import LicenseImage from './LicenseImage';
import FAQ from '../FAQ';

const Stack = createNativeStackNavigator();
const AppDisclaimer = () => {
  return (
    <Stack.Navigator initialRouteName="d1">
      <Stack.Screen
        name="d1"
        component={D1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="app_disclaimer_policy_nav"
        component={AppDisclaimerPolicyNav}
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

export default AppDisclaimer;
