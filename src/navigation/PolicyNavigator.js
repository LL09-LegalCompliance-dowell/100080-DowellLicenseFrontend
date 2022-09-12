import { View, Text } from 'react-native'
import React from 'react'
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
  } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// agreement compliance screens
import CompanyEntity from '../screens/PolicyGenerator/CompanyEntity';
import Gdpr from '../screens/PolicyGenerator/GDPR';
import Gdpr1 from '../screens/PolicyGenerator/GDPR1';
import Gdpr2 from '../screens/PolicyGenerator/GDPR2';
import PolicyGenerator from '../screens/PolicyGenerator/PolicyGenerator1';
import PolicyGenerator2 from '../screens/PolicyGenerator/PolicyGenerator2';
import PolicyGenerator3 from '../screens/PolicyGenerator/PolicyGenerator3';
import PolicyGenerator4 from '../screens/PolicyGenerator/PolicyGenerator4';
import PolicyGenerator5 from '../screens/PolicyGenerator/PolicyGenerator5';
import Memorandum from '../screens/PolicyGenerator/MemorandumUnderstanding';
import Memorandum1 from '../screens/PolicyGenerator/MemorandumUnderstanding1';
import Memorandum2 from '../screens/PolicyGenerator/MemorandumUnderstanding2';
import FAQPolicy from '../screens/FAQsPrivacyPolicy';
import Termsofuse from '../screens/PolicyGenerator/Termsofuse';
import Termofuse1 from '../screens/PolicyGenerator/Termsofuse1';
import Termsofuse2 from '../screens/PolicyGenerator/Termsofuse3';
import NonDisclosure from '../screens/PolicyGenerator/NonDisclosure';
import Nondisclosure1 from '../screens/PolicyGenerator/NonDisclosure1';
import Nondisclosure2 from '../screens/PolicyGenerator/Nondisclosure2';
import Test from '../screens/PolicyGenerator/Test';

const Stack = createNativeStackNavigator() ;

const PolicyNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName='PolicyGenerator5'>
        <Stack.Screen
          name="PolicyGenerator"
          component={PolicyGenerator}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CompanyEntity"
          component={CompanyEntity}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Gdpr"
          component={Gdpr}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Gdpr1"
          component={Gdpr1}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Gdpr2"
          component={Gdpr2}
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
        /> 
      </Stack.Navigator>
    </>
  )
}

export default PolicyNavigator;