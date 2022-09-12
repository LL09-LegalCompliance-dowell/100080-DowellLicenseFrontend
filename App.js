import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, Alert} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  const scheme = useColorScheme();

  return (
    <>
      <RootNavigator />
    </>
  );
};

export default App;
