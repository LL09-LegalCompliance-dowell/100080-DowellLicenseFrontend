import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProgressStepper from "./PolicyGenerator/progressSteps";
import { TailwindProvider } from "tailwindcss-react-native";
const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName="Generator">
          <Stack.Screen name="Generator" component={ProgressStepper} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default Screens;
