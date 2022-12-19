
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import C1 from './C1';
import CookiesPolicyNav from './CookiesPolicyNav';
import PolicyImage from './PolicyImage';

const Stack = createNativeStackNavigator() ;


const CookiesPolicy = () => {
  return (
    <Stack.Navigator initialRouteName='c1'>
    <Stack.Screen
        name="c1"
        component={C1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cookies_policy_nav"
        component={CookiesPolicyNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="policy_image"
        component={PolicyImage}
        options={{
          headerShown: false,
        }}
      />
      

    </Stack.Navigator>
  )
}

export default CookiesPolicy


