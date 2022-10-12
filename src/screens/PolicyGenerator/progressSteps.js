import React from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PolicyGenerator from './PolicyGenerator1';
import PolicyGenerator2 from './PolicyGenerator2';
import PolicyGenerator3 from './PolicyGenerator3';
import PolicyGenerator4 from './PolicyGenerator4';
import PolicyGenerator5 from './PolicyGenerator5';

import Header from '../../components/Header';

function ProgressStepper() {
  const buttonTextStyle = {
    color: 'red',
  };

  const nextButton = {
    backgroundColor: '#489503',
    paddingHorizontal: 5,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    elevation: 3,
    alignSelf: 'center',
  };

  const previousButton = {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderColor: '#489503',
    borderWidth: 2,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    alignSelf: 'center',
  };

  return (
    <>
      <Header title="Generator" />
      <View
        style={{
          flex: 1,
          paddingTop: 45,
          backgroundColor: 'white',
          paddingHorizontal: 15,
        }}>
        <ProgressSteps
          style={{width: '100px'}}
          marginBottom={15}
          nextBtnTextStyle={{color: 'white', fontSize: 18}}>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <PolicyGenerator />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}

            previousBtnStyle={previousButton}>
            <View style={{alignItems: 'center'}}>
              <PolicyGenerator2 />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}

            previousBtnStyle={previousButton}>
            <View style={{alignItems: 'center'}}>
              <PolicyGenerator3 />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}

            previousBtnStyle={previousButton}>
            <View style={{alignItems: 'center'}}>
              <PolicyGenerator4 />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}>
            <View style={{alignItems: 'center'}}>
              <PolicyGenerator5 />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
}

export default ProgressStepper;
