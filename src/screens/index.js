import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PolicyGenerator from "./PolicyGenerator";

const Stack = createNativeStackNavigator();

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Generator" >
                <Stack.Screen name="Generator" component={PolicyGenerator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screens;