import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import R1 from './R1';
import LicenseImage from './LicenseImage';
import ReturnAndRefundPolicyNav from './ReturnAndRefundPolicyNav';
import FAQ from '../FAQ';
const Stack = createNativeStackNavigator();
const ReturnsAndRefund = () => {
  return (
    <Stack.Navigator initialRouteName="r1">
      <Stack.Screen
        name="r1"
        component={R1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="return_and_refund_policy_nav"
        component={ReturnAndRefundPolicyNav}
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

export default ReturnsAndRefund;
