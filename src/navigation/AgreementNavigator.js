import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PolicyGenerator1 from "../screens/PolicyGenerator/PolicyGenerator1"
const Stack = createNativeStackNavigator() ;

const AgreementNavigator = () => {
  return (
    <View>
      <PolicyGenerator1 />
    </View>
  )
}

export default AgreementNavigator