import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import N1 from './N1.js';
import LicenseImage from './LicenseImage';
import NDAPolicyNav from './NDAPolicyNav';
const Stack = createNativeStackNavigator() ;
const NDA = () => {
    return (
        <Stack.Navigator initialRouteName='n1'>
        <Stack.Screen
            name="n1"
            component={N1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NDA_policy_nav"
            component={NDAPolicyNav}
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

export default NDA