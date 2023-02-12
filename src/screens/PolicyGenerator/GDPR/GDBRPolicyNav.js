import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavIndex from './NavIndex';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import Policy5 from './Policy5';
import Policy6 from './Policy6';
import Policy7 from './Policy7';
const Stack = createNativeStackNavigator();

const GDBRPolicyNav = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="nav_index">
        <Stack.Screen
          name="nav_index"
          component={NavIndex}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy1"
          component={Policy1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy2"
          component={Policy2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy3"
          component={Policy3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy4"
          component={Policy4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy5"
          component={Policy5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy6"
          component={Policy6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Policy7"
          component={Policy7}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default GDBRPolicyNav;
