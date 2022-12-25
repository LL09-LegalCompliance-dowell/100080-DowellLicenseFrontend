import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DFW from './DFW';
import DFWPolicyNav from './DFWPolicyNav';
import LicenseImage from './LicenseImage';

const Stack = createNativeStackNavigator();

const DisclaimerForWeb = () => {
  return (
    <Stack.Navigator initialRouteName="DFW">
      <Stack.Screen
        name="DFW"
        component={DFW}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dfw_policy_nav"
        component={DFWPolicyNav}
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

export default DisclaimerForWeb;
