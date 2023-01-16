import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from './Policy4';
import Policy5 from './Policy5';

import {empty_validation, email_validation} from '../validations';

const Steps = () => {
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

  //1
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Individual',
      value: 'Individual',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'Company',
      value: 'Company',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '3',
      label: 'Partnership',
      value: 'Partnership',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '4',
      label: 'Other',
      value: 'Other',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  const [date, setDate] = useState(new Date());
  const handle_date = state => setDate(state);
  const [input_1, setInput_1] = useState('');
  const handle_input_1 = state => setInput_1(state);
  const [input_2, setInput_2] = useState('');
  const handle_input_2 = state => setInput_2(state);
  const [input_3, setInput_3] = useState('');
  const handle_input_3 = state => setInput_3(state);
  const [input_4, setInput_4] = useState('');
  const handle_input_4 = state => setInput_4(state);
  const [input_5, setInput_5] = useState('');
  const handle_input_5 = state => setInput_5(state);
  const [input_6, setInput_6] = useState('');
  const handle_input_6 = state => setInput_6(state);
  const [input_7, setInput_7] = useState('');
  const handle_input_7 = state => setInput_7(state);
  const [input_8, setInput_8] = useState('');
  const handle_input_8 = state => setInput_8(state);
  const [input_9, setInput_9] = useState('');
  const handle_input_9 = state => setInput_9(state);
  const [input_10, setInput_10] = useState('');
  const handle_input_10 = state => setInput_10(state);
  const [input_11, setInput_11] = useState('');
  const handle_input_11 = state => setInput_11(state);
  const [input_12, setInput_12] = useState('');
  const handle_input_12 = state => setInput_12(state);
  const [input_13, setInput_13] = useState('');
  const handle_input_13 = state => setInput_13(state);
  const [input_14, setInput_14] = useState('');
  const handle_input_14 = state => setInput_14(state);
  const [error_1, setError_1] = useState(false);
  const [empty_validationn, setempty_validation] = useState(true);
  const handle_radiobuttons = state => setRadioButtons(state);

  const states = [
    date,
    handle_date,
    input_1,
    handle_input_1,
    input_2,
    handle_input_2,
    input_3,
    handle_input_3,
    input_4,
    handle_input_4,
    input_5,
    handle_input_5,
    input_6,
    handle_input_6,
    input_7,
    handle_input_7,
    input_8,
    handle_input_8,
    input_9,
    handle_input_9,
    input_10,
    handle_input_10,
    input_11,
    handle_input_11,
    input_12,
    handle_input_12,
    input_13,
    handle_input_13,
    input_14,
    handle_input_14,
    empty_validationn,
    radioButtons,
    handle_radiobuttons,
  ];
  const inputs = [
    input_1,
    input_2,
    input_3,
    input_4,
    input_5,
    input_6,
    input_7,
    input_8,
    input_9,
    input_10,
    input_11,
    input_12,
    // input_13,
    // input_14,
  ];
  //2
  const [radioButtons_1, setRadioButtons_1] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_2, setRadioButtons_2] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_3, setRadioButtons_3] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_4, setRadioButtons_4] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  const [error_2, setError_2] = useState(false);
  const [empty_validationn_1, setempty_validation_1] = useState(true);
  const [input_1_1, setInput_1_1] = useState('');
  const handle_input_1_1 = state => setInput_1_1(state);
  const [input_2_1, setInput_2_1] = useState('');
  const handle_input_2_1 = state => setInput_2_1(state);
  const [date_1, setDate_1] = useState(new Date());
  const handle_date_1 = state => setDate_1(state);
  const [input_3_1, setInput_3_1] = useState('');
  const handle_input_3_1 = state => setInput_3_1(state);
  const handle_radiobuttons_1 = state => setRadioButtons_1(state);
  const [input_4_1, setInput_4_1] = useState('');
  const handle_input_4_1 = state => setInput_4_1(state);
  const handle_radiobuttons_2 = state => setRadioButtons_2(state);
  const [input_5_1, setInput_5_1] = useState('');
  const handle_input_5_1 = state => setInput_5_1(state);
  const handle_radiobuttons_3 = state => setRadioButtons_3(state);
  const [input_6_1, setInput_6_1] = useState('');
  const handle_input_6_1 = state => setInput_6_1(state);
  const [input_7_1, setInput_7_1] = useState('');
  const handle_input_7_1 = state => setInput_7_1(state);
  const handle_radiobuttons_4 = state => setRadioButtons_4(state);
  const [input_8_1, setInput_8_1] = useState('');
  const handle_input_8_1 = state => setInput_8_1(state);

  const states_1 = [
    empty_validationn_1,
    input_1_1,
    handle_input_1_1,  
    input_2_1,
    handle_input_2_1,  
    date_1,
    handle_date_1,
    input_3_1,
    handle_input_3_1,
    radioButtons_1,
    handle_radiobuttons_1,
    input_4_1,
    handle_input_4_1,
    radioButtons_2,
    handle_radiobuttons_2,
    input_5_1,
    handle_input_5_1,
    radioButtons_3,
    handle_radiobuttons_3,
    input_6_1,
    handle_input_6_1,
    input_7_1,
    handle_input_7_1,
    radioButtons_4,
    handle_radiobuttons_4,
    input_8_1,
    handle_input_8_1,
  ];
  const inputs_1 = [input_1_1, input_2_1, input_3_1, input_4_1, input_5_1, input_6_1, input_7_1, input_8_1];
  //3
  const [radioButtons_5, setRadioButtons_5] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_6, setRadioButtons_6] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [error_3, setError_3] = useState(false);
  const [empty_validationn_2, setempty_validation_2] = useState(true);
  const handle_radiobuttons_5 = state => setRadioButtons_5(state);
  const handle_radiobuttons_6 = state => setRadioButtons_6(state);
  const [date_2, setDate_2] = useState(new Date());
  const handle_date_2 = state => setDate_2(state);
  const [input_1_2, setInput_1_2] = useState('');
  const handle_input_1_2 = state => setInput_1_2(state);
  const [input_2_2, setInput_2_2] = useState('');
  const handle_input_2_2 = state => setInput_2_2(state);
  const [input_3_2, setInput_3_2] = useState('');
  const handle_input_3_2 = state => setInput_3_2(state);
  const [input_4_2, setInput_4_2] = useState('');
  const handle_input_4_2 = state => setInput_4_2(state);
  const [input_5_2, setInput_5_2] = useState('');
  const handle_input_5_2 = state => setInput_5_2(state);
  const [input_6_2, setInput_6_2] = useState('');
  const handle_input_6_2 = state => setInput_6_2(state);
  const [input_7_2, setInput_7_2] = useState('');
  const handle_input_7_2 = state => setInput_7_2(state);
  const [date_3, setDate_3] = useState(new Date());
  const handle_date_3 = state => setDate_3(state);
  const [input_8_2, setInput_8_2] = useState('');
  const handle_input_8_2 = state => setInput_8_2(state);
  const [date_4, setDate_4] = useState(new Date());
  const handle_date_4 = state => setDate_4(state);
  const [input_9_2, setInput_9_2] = useState('');
  const handle_input_9_2 = state => setInput_9_2(state);
  const [input_10_2, setInput_10_2] = useState('');
  const handle_input_10_2 = state => setInput_10_2(state);

  const states_2 = [
    empty_validationn_2,
    radioButtons_5,
    handle_radiobuttons_5,
    radioButtons_6,
    handle_radiobuttons_6,
    date_2,
    handle_date_2,
    input_1_2,
    handle_input_1_2,  
    input_2_2,
    handle_input_2_2,  
    input_3_2,
    handle_input_3_2,  
    input_4_2,
    handle_input_4_2,  
    input_5_2,
    handle_input_5_2, 
    input_6_2,
    handle_input_6_2, 
    input_7_2,
    handle_input_7_2, 
    date_3,
    handle_date_3,
    input_8_2,
    handle_input_8_2, 
    date_4,
    handle_date_4,
    input_9_2,
    handle_input_9_2, 
    input_10_2,
    handle_input_10_2, 
  ];
  const inputs_2 = [input_1_2, input_2_2, input_3_2, input_4_2, input_5_2, input_6_2, input_7_2, input_8_2, input_9_2, input_10_2];
  //4
  const [radioButtons_7, setRadioButtons_7] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_8, setRadioButtons_8] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_9, setRadioButtons_9] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_10, setRadioButtons_10] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_11, setRadioButtons_11] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#585858',
      selected: true,
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);


  const [error_4, setError_4] = useState(false);
  const [empty_validationn_3, setempty_validation_3] = useState(true);
  const [input_1_3, setInput_1_3] = useState('');
  const handle_input_1_3 = state => setInput_1_3(state);
  const handle_radiobuttons_7 = state => setRadioButtons_7(state);
  const [input_2_3, setInput_2_3] = useState('');
  const handle_input_2_3 = state => setInput_2_3(state);
  const [input_3_3, setInput_3_3] = useState('');
  const handle_input_3_3 = state => setInput_3_3(state);
  const [input_4_3, setInput_4_3] = useState('');
  const handle_input_4_3 = state => setInput_4_3(state);
  const [input_5_3, setInput_5_3] = useState('');
  const handle_input_5_3 = state => setInput_5_3(state);
  const handle_radiobuttons_8 = state => setRadioButtons_8(state);
  const handle_radiobuttons_9 = state => setRadioButtons_9(state);
  const [input_6_3, setInput_6_3] = useState('');
  const handle_input_6_3 = state => setInput_6_3(state);
  const handle_radiobuttons_10 = state => setRadioButtons_10(state);
  const handle_radiobuttons_11 = state => setRadioButtons_11(state);
  const [input_7_3, setInput_7_3] = useState('');
  const handle_input_7_3 = state => setInput_7_3(state);
  const [input_8_3, setInput_8_3] = useState('');
  const handle_input_8_3 = state => setInput_8_3(state);
  const [input_9_3, setInput_9_3] = useState('');
  const handle_input_9_3 = state => setInput_9_3(state);
  const [input_10_3, setInput_10_3] = useState('');
  const handle_input_10_3 = state => setInput_10_3(state);
  const [input_11_3, setInput_11_3] = useState('');
  const handle_input_11_3 = state => setInput_11_3(state);
  const [input_12_3, setInput_12_3] = useState('');
  const handle_input_12_3 = state => setInput_12_3(state);
  const [input_13_3, setInput_13_3] = useState('');
  const handle_input_13_3 = state => setInput_13_3(state);


  const states_3 = [
    empty_validationn_3,
    input_1_3,
    handle_input_1_3, 
    radioButtons_7,
    handle_radiobuttons_7, 
    input_2_3,
    handle_input_2_3,
    input_3_3,
    handle_input_3_3,
    input_4_3,
    handle_input_4_3,
    input_5_3,
    handle_input_5_3,
    radioButtons_8,
    handle_radiobuttons_8, 
    radioButtons_9,
    handle_radiobuttons_9,
    input_6_3,
    handle_input_6_3,
    radioButtons_10,
    handle_radiobuttons_10,
    radioButtons_11,
    handle_radiobuttons_11,
    input_7_3,
    handle_input_7_3,
    input_8_3,
    handle_input_8_3,
    input_9_3,
    handle_input_9_3,
    input_10_3,
    handle_input_10_3,
    input_11_3,
    handle_input_11_3,
    input_12_3,
    handle_input_12_3,
    input_13_3,
    handle_input_13_3,
  ];
  const inputs_3 = [input_1_3, input_2_3, input_3_3, input_4_3, input_5_3, input_6_3, input_7_3, input_8_3, input_9_3, input_10_3, input_11_3, input_12_3, input_13_3];
  //5
  const [error_5, setError_5] = useState(false);
  const [empty_validationn_4, setempty_validation_4] = useState(true);
  const [input_1_4, setInput_1_4] = useState('');
  const handle_input_1_4 = state => setInput_1_4(state);
  const states_4 = [
    empty_validationn_4,
    input_1_4,
    handle_input_1_4, 
    
  ];
  const inputs_4 = []
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
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            errors={error_1}
            onNext={() => {
              setempty_validation(empty_validation(inputs));
              const x = empty_validation(inputs);
              setError_1(!x);
            }}>
            <View>
              <Policy1 list={states} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}
            errors={error_2}
            onNext={() => {
              setempty_validation_1(empty_validation(inputs_1));
              const y = empty_validation(inputs_1);
              setError_2(!y);
            }}>
            <View>
              <Policy2 list={states_1}/>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}
            errors={error_3}
            onNext={() => {
              setempty_validation_2(empty_validation(inputs_2));
              const y = empty_validation(inputs_2);
              setError_3(!y);
            }}>
            <View>
              <Policy3 list={states_2}/>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}
            errors={error_4}
            onNext={() => {
              setempty_validation_3(empty_validation(inputs_3));
              const y = empty_validation(inputs_3);
              setError_4(!y);
            }}>
            <View>
              <Policy4 list={states_3}/>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}
            errors={error_5}
            onNext={() => {
              setempty_validation_4(empty_validation(inputs_4));
              const y = empty_validation(inputs_4);
              setError_5(!y);
            }}>
            <View>
              <Policy5 list={states_4}/>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}>
            <View>
              <Policy5 />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
