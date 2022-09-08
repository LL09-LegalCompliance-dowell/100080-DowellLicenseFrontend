import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import Login from '../screens/Login';
import AboutUs from '../screens/AboutUs';
import SoftwereLicense from '../screens/SoftwereLicense';
import LicenseCompatibility from '../screens/LicenseCompatibility';
import AgreementComplience from '../screens/AgreementComplience';
import ApacheLicense from '../screens/ApacheLicense';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import FAQsPrivacyPolicy from '../screens/FAQsPrivacyPolicy';
import DrawerNavigator from './DrawerNavigator';
import SoftwereLicensePolicy from '../screens/SoftwereLicensePolicy';
// import PolicyGenerator from '../screens/PolicyGenerator/PolicyGenerator1';
// import PolicyGenerator2 from '../screens/PolicyGenerator/PolicyGenerator2';
// import PolicyGenerator3 from '../screens/PolicyGenerator/PolicyGenerator3';
// import PolicyGenerator4 from '../screens/PolicyGenerator/PolicyGenerator4';
// import PolicyGenerator5 from '../screens/PolicyGenerator/PolicyGenerator5';
// import policyGenerator6 from '../screens/PolicyGenerator/PolicyGenerator6';
// import Memorandum from '../screens/PolicyGenerator/MemorandumUnderstanding';
// import Memorandum1 from '../screens/PolicyGenerator/MemorandumUnderstanding1';
// import Memorandum2 from '../screens/PolicyGenerator/MemorandumUnderstanding2';
// import FAQPolicy from '../screens/FAQsPrivacyPolicy';
// import Termsofuse from '../screens/PolicyGenerator/Termsofuse';
// import Termofuse1 from '../screens/PolicyGenerator/Termsofuse1';
// import Termsofuse2 from '../screens/PolicyGenerator/Termsofuse2';
// import NonDisclosure from '../screens/PolicyGenerator/NonDisclosure';
// import Nondisclosure1 from '../screens/PolicyGenerator/NonDisclosure1';
// import Nondisclosure2 from '../screens/PolicyGenerator/Nondisclosure2';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="IntroductionScreen"
        screenOptions={{gestureEnabled: true}}>
        <Stack.Screen
          name="IntroductionScreen"
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
        <Stack.Screen
          name="SoftwereLicensePolicy"
          component={SoftwereLicensePolicy}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="PolicyGenerator"
          component={PolicyGenerator}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator2"
          component={PolicyGenerator2}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator3"
          component={PolicyGenerator3}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator4"
          component={PolicyGenerator4}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PolicyGenerator5"
          component={PolicyGenerator5}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Memorandum"
          component={Memorandum}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Memorandum1"
          component={Memorandum1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Memorandum2"
          component={Memorandum2}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FAQPolicy"
          component={FAQPolicy}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Termsofuse"
          component={Termsofuse}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Termofuse1"
          component={Termofuse1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Termsofuse2"
          component={Termsofuse2}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="NonDisclosure"
          component={NonDisclosure}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Nondisclosure1"
          component={Nondisclosure1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Nondisclosure2"
          component={Nondisclosure2}
          options={{
            headerShown: true,
          }}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
