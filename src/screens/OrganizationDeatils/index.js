import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './profile';
import Policy_Web_View from './policy_web_view';
const Stack = createNativeStackNavigator() ;
const Navindex = () => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Policy_Web_View"
            component={Policy_Web_View}
            options={{
              headerShown: false,
            }}
          />
        
    
        </Stack.Navigator>
      )
}

export default Navindex