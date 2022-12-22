import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import W1 from './W1';
import LicenseImage from './LicenseImage';
import WebsiteSecurityPolicyNav from './WebsiteSecurityPolicyNav';
const Stack = createNativeStackNavigator() ;
const WebsiteSecurityPolicy = () => {
    return (
        <Stack.Navigator initialRouteName='w1'>
        <Stack.Screen
            name="w1"
            component={W1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="website_security_policy_nav"
            component={WebsiteSecurityPolicyNav}
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
      )
}

export default WebsiteSecurityPolicy