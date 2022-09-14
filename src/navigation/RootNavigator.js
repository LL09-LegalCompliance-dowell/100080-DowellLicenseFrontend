import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme, Alert} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AboutUs from '../screens/AboutUs';
import SoftwereLicense from '../screens/SoftwereLicense';
import LicenseCompatibility from '../screens/LicenseCompatibility';
import AgreementComplience from '../screens/AgreementComplience';
import ApacheLicense from '../screens/ApacheLicense';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import FAQsPrivacyPolicy from '../screens/FAQsPrivacyPolicy';
import DrawerNavigator from './DrawerNavigator';
import SoftwereLicensePolicy from '../screens/SoftwereLicensePolicy';
import GDPRNavigator from './GDPRNavigator';
import MemorandumNavigator from "./MemorandumNavigator"
import NonDisclosureNavigator from "./NonDisclosureNavigator"
import TermsOfUseNavigator from "./TermsOfUseNavigator"

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const scheme = useColorScheme();
  return (
  <>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{gestureEnabled: true}}>

        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator}
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
        <Stack.Screen
          name="SoftwereLicensePolicy"
          component={SoftwereLicensePolicy}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GDPR Privacy Policy"
          component={GDPRNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MOU"
          component={MemorandumNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NDA"
          component={NonDisclosureNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Terms of Use"
          component={TermsOfUseNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

      </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
