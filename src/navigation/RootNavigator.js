import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  TransitionPrese,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useColorScheme, Alert} from 'react-native';
import LicenseCompatibility from '../screens/LicenseCompatibility';
import ResultsDetailsScreen from '../screens/LicenseCompatibility/ResultsDetailsScreen';

import ApacheLicense from '../screens/ApacheLicense';

import FAQsPrivacyPolicy from '../screens/FAQsPrivacyPolicy';
import DrawerNavigator from './DrawerNavigator';
import SoftwereLicensePolicy from '../screens/SoftwereLicensePolicy';
import GDPRNavigator from './GDPRNavigator';
import MemorandumNavigator from './MemorandumNavigator';
import TermsOfUseNavigator from './TermsOfUseNavigator';
import CookiesPolicy from '../screens/PolicyGenerator/Cookies';
import Eula from '../screens/PolicyGenerator/EULA';
import TermsOfUse from '../screens/PolicyGenerator/TermsOfUse';
import EmploymentContract from '../screens/PolicyGenerator/EmploymentContract';
import DisclaimerForWeb from '../screens/PolicyGenerator/DisclaimerForWeb';
import NDA from '../screens/PolicyGenerator/NDA';
import ReturnsAndRefund from '../screens/PolicyGenerator/ReturnsAndRefund';
import PPA from '../screens/PolicyGenerator/PrivacyPolicy/Application';
import PPW from '../screens/PolicyGenerator/PrivacyPolicy/Website';
import StatementOfWork from '../screens/PolicyGenerator/StatementOfWork';
import NonCompetAgreement from '../screens/PolicyGenerator/NCA';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const scheme = useColorScheme();
  return (
    <>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          gestureEnabled: true,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
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
          name="ResultsDetailsScreen"
          component={ResultsDetailsScreen}
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
          component={NDA}
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
        <Stack.Screen
          name="NonCompetAgreement"
          component={NonCompetAgreement}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CookiesPolicy"
          component={CookiesPolicy}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Eula"
          component={Eula}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TermsOfUse"
          component={TermsOfUse}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PrivacyPolicyApp"
          component={PPA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PrivacyPolicyWeb"
          component={PPW}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DisclaimerForWeb"
          component={DisclaimerForWeb}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EmploymentContract"
          component={EmploymentContract}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StatementOfWork"
          component={StatementOfWork}
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
