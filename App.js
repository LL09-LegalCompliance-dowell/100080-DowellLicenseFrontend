/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import { NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Introduction from './components/Introduction';
Icon.loadFont();

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Introduction" component={Introduction} options={{
            headerShown: false,
            }} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
