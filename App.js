import React from 'react';
import { useColorScheme} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import IntroductionScreen from "./src/screens/IntroductionScreen"
Icon.loadFont();

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme();

  return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Introduction" component={IntroductionScreen} options={{
            headerShown: false,
            }} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
