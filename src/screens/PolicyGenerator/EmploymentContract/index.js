import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EC from './EC';
import EulaPolicyNav from './EulaPolicyNav';
import LicenseImage from './LicenseImage';

const Stack = createNativeStackNavigator();

const EmploymentContract = () => {
  return (
    <Stack.Navigator initialRouteName="e1">
      <Stack.Screen
        name="EC"
        component={EC}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ec_policy_nav"
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
    </Stack.Navigator>
  );
};

export default EmploymentContract;
