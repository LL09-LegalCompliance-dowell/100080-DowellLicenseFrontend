import React from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import PolicyGenerator from './PolicyGenerator1';
import PolicyGenerator2 from './PolicyGenerator2';
import PolicyGenerator3 from './policyGenerator3';


function ProgressStepper() {
  return (
    <View style={{flex: 1}}>
    <ProgressSteps style={{width:'100px'}}>
        <ProgressStep >
            <View style={{ alignItems: 'center' }}>
                <PolicyGenerator/>
            </View> 
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <PolicyGenerator2/>
            </View>
        </ProgressStep>
        
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <PolicyGenerator3/>
            </View>
        </ProgressStep>
       
        <ProgressStep >
            <View style={{ alignItems: 'center' }}>
                <Text>5</Text>
            </View>
        </ProgressStep>
        
    </ProgressSteps>

</View>
  )
}

export default ProgressStepper