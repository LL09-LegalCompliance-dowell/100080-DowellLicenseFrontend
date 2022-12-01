import React from 'react';
import NCA1 from '../screens/PolicyGenerator/NCA/NCA1';
// import NCA2 from '../screens/PolicyGenerator/NCA/NCA2';
// import NCA3 from '../screens/PolicyGenerator/NCA/NCA3';
// import NCA4 from '../screens/PolicyGenerator/NCA/NCA4';
// import NCA5 from '../screens/PolicyGenerator/NCA/NCA5';
import MOUIndex from '../screens/PolicyGenerator/NCA/NCAIndex';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MemorandumNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="NCA1">
        <Stack.Screen
          name="NCA1"
          component={NCA1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NCA2"
          component={NCA2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NCA3"
          component={NCA3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NCA4"
          component={NCA4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NCA5"
          component={NCA5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NCAIndex"
          component={NCAIndex}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MemorandumNavigator;
