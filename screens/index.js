import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gdp2 from "./PolicyGenerator/GDPR2";
import Login from './Login/index';
import Home from "./HomeScreen/index";
import IntroductionScreen from "./IntroductionScreen";
import PrivacyPolicy from "./PrivacyPolicy/index";
import PolicyGenerator1 from "./PolicyGenerator/PolicyGenerator1";
import PolicyGenerator2 from "./PolicyGenerator/PolicyGenerator2";
import PolicyGenerator3 from "./PolicyGenerator/policyGenerator3";
import PolicyGenerator4 from "./PolicyGenerator/PolicyGenerator4";
import PolicyGenerator5 from "./PolicyGenerator/PolicyGenerator5";
import LincenceCompatibility from "./LicenseCompatibility/index";
import { TailwindProvider } from 'tailwindcss-react-native';
import PolicyGenerator6 from "./PolicyGenerator/PolicyGenerator6";
import Memorandum1 from "./PolicyGenerator/MemorandumUnderstanding1";
import Memorandum from "./PolicyGenerator/MemorandumUnderstanding";
import Memorandum2 from "./PolicyGenerator/MemorandumUnderstanding2";
import NonDisclosure from "./PolicyGenerator/NonDisclosure";
import Nondisclosure1 from "./PolicyGenerator/NonDisclosure1";
import Nondisclosure2 from "./PolicyGenerator/Nondisclosure2";
const Stack = createNativeStackNavigator();
const Screens = () => {

    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator initialRouteName="introduction" >
                    <Stack.Screen name="PolicyGenerator1" component={PolicyGenerator1} />
                    <Stack.Screen name="PolicyGenerator2" component={PolicyGenerator2} />
                    <Stack.Screen name="PolicyGenerator3" component={PolicyGenerator3} />
                    <Stack.Screen name="PolicyGenerator4" component={PolicyGenerator4} />
                    <Stack.Screen name="PolicyGenerator5" component={PolicyGenerator5} />
                    {/* <Stack.Screen name="PolicyGenerator6" component={PolicyGenerator6} /> */}
                    <Stack.Screen name="Memorandum" component={Memorandum} />
                    <Stack.Screen name="Memorandum1" component={Memorandum1} />
                    <Stack.Screen name="Memorandum2" component={Memorandum2} />
                    <Stack.Screen name="NonDisclosure" component={NonDisclosure} />
                    <Stack.Screen name="Nondisclosure1" component={Nondisclosure1} />
                    <Stack.Screen name="Nondisclosure2" component={Nondisclosure2} />
                    {/* 
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="policy" component={Gdp2} />
                <Stack.Screen name="introduction" component={IntroductionScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />*/}
                    <Stack.Screen name="LincenceCompatibility" component={LincenceCompatibility} />
                </Stack.Navigator></TailwindProvider>

        </NavigationContainer>
    );
}

export default Screens;