import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import index from './'
import Help from './Help';
const Stack = createStackNavigator();
const Navigator = () => {
    return (
        
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
              name="HomeScreen"
              component={index}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{
                headerShown: false,
              }}
            />
            </Stack.Navigator>
            )

}

export default Navigator
