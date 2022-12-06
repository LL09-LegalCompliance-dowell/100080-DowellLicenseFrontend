import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProgressStepper from './PolicyGenerator/ProgressSteps';
import PolicyGenerator from './PolicyGenerator/PolicyGenerator1';
import EndUserLincenceAgreement from './PolicyGenerator/EndUserLincenceAgreement';
import PolicyTemplate from './PolicyGenerator/PolicyTemplate';
import PolicyTemplate2 from './PolicyGenerator/PolicyTemplate2';
import MemorandumUnderstanding from './PolicyGenerator/MemorandumUnderstanding';
import Memorandum1 from './PolicyGenerator/MemorandumUnderstanding1';
import Memorandum2 from './PolicyGenerator/MemorandumUnderstanding2';
import NonDisclosure from './PolicyGenerator/NonDisclosure';
import Nondisclosure1 from './PolicyGenerator/NonDisclosure1';
import Nondisclosure2 from './PolicyGenerator/Nondisclosure2';
import Term1 from './PolicyGenerator/Termsofuse1';
import Term from './PolicyGenerator/Termsofuse';
import Term2 from './PolicyGenerator/Termsofuse3';
import Gdp from './PolicyGenerator/GDPR';
import Gdp1 from './PolicyGenerator/GDPR1';
import Gdp2 from './PolicyGenerator/GDPR2';
const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Generator">
        {/* <Stack.Screen name="Generator" component={ProgressStepper} /> */}
        <Stack.Screen name="policy" component={Gdp2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
