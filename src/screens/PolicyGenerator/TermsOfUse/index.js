import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import T1 from './T1';
import TermsOfUsePolicyNav from './TermsOfUsePolicyNav';
import LicenseImage from './LicenseImage';
import FAQ from '../FAQ';

const Stack = createNativeStackNavigator() ;

const TermsOfUse = () => {
    return (
        <Stack.Navigator initialRouteName='t1'>
        <Stack.Screen
            name="t1"
            component={T1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="terms_of_use_policy_nav"
            component={TermsOfUsePolicyNav}
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
      )
}

export default TermsOfUse