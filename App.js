import 'react-native-gesture-handler';
import * as React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/index';
import Toast from 'react-native-toast-message';

const App = () => {
  const scheme = useColorScheme();

  return (
    // <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
    <NavigationContainer>
      <Navigation />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
