import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgressStepper from "./PolicyGenerator/progressSteps";
import PolicyGenerator from "./PolicyGenerator/PolicyGenerator1";


const Stack = createNativeStackNavigator();

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Generator" >
                <Stack.Screen name="Generator" component={ProgressStepper} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screens;