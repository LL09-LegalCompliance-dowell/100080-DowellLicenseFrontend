import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import Navigation from './src/navigation/index';
import LoginProvider from './src/context/LoginProvider';

const App = () => {
  const scheme = useColorScheme();

  return (
    <>
      <LoginProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigation />
        </NavigationContainer>
      </LoginProvider>
    </>
  );
};

export default App;
