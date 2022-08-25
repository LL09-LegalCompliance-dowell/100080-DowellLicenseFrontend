import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import IntroductionScreen from './src/screens/IntroductionScreen';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import SoftwereLicense from './src/screens/SoftwereLicense';
import LicenseCompatibility from './src/screens/LicenseCompatibility';
import AgreementComplience from './src/screens/AgreementComplience';
import ApacheLicense from './src/screens/ApacheLicense';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import FAQsPrivacyPolicy from './src/screens/FAQsPrivacyPolicy';
import screen1 from './src/screens/screen1';
import screen2 from './src/screens/screen2';

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const scheme = useColorScheme();

  {
    /* Drawer */
  }
  const DrawerNavigation = () => {
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Softwere License"
        component={SoftwereLicense}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Agreement Complience"
        component={AgreementComplience}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>;
  };

  const Logout = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        // onPress: () => console.log('OK Pressed')
      },
    ]);
  };
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Introduction"
        screenOptions={{gestureEnabled: true}}>
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
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
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ApacheLicense"
          component={ApacheLicense}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FAQsPrivacyPolicy"
          component={FAQsPrivacyPolicy}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
