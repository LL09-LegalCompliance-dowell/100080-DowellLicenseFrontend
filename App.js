import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import IntroductionScreen from './src/screens/IntroductionScreen';
import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import SoftwereLicense from './src/screens/SoftwereLicense';
import LicenseCompatibility from './src/screens/LicenseCompatibility';
import AgreementComplience from './src/screens/AgreementComplience';

import PrivacyPolicy from './src/screens/PrivacyPolicy';

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const scheme = useColorScheme();

  {
    /* Drawer */
  }
  // const DrawerNavigation = () => {
  //   <Drawer.Navigator screenOptions={{headerShown: false}}>
  //     <Drawer.Screen name="Home" component={HomeScreen} />
  //     <Drawer.Screen name="About" component={AboutUs} />
  //     <Drawer.Screen name="SoftwereLicense" component={SoftwereLicense} />
  //   </Drawer.Navigator>;
  // };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="AgreementComplience"
        screenOptions={{gestureEnabled: true}}>
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LicenseCompatibility"
          component={LicenseCompatibility}
          options={{title: 'License Compatibility'}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{title: 'Privacy Policy and T&C'}}
        />
        <Stack.Screen
          name="SoftwereLicense"
          component={SoftwereLicense}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AgreementComplience"
          component={AgreementComplience}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
