import {React, useState, useMemo} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {empty_validation, email_validation} from '../validations';
const generate_date = date => {
  const temp = date.split('/');
  return '20' + temp[2] + '-' + temp[0] + '-' + temp[1];
};
const Steps = () => {
  const navigation = useNavigation();
  const [orgId, setOrgId] = useState('');
  const getOrgId = async () => {
    const org_id = await AsyncStorage.getItem('org_id');
    setOrgId(org_id);
  };
  useMemo(() => getOrgId(), []);

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
  ///////////////////////////////////////////////////////////////////////////1
  const [empty_validationn, setempty_validation] = useState(true);
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
  const [date, setDate] = useState(new Date());
  const handle_date = state => setDate(state);
  const [input_7, setInput_7] = useState('');
  const handle_input_7 = state => setInput_7(state);
  const [input_8, setInput_8] = useState('');
  const handle_input_8 = state => setInput_8(state);
  const [input_9, setInput_9] = useState('');
  const handle_input_9 = state => setInput_9(state);
  const states = [
    empty_validationn,
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
    date,
    handle_date,
    input_7,
    handle_input_7,
    input_8,
    handle_input_8,
    input_9,
    handle_input_9
  ];
  const [error_1, setError_1] = useState(false);
  const inputs = [
    input_1,
    input_2,
    input_3,
    input_4,
    input_5,
    input_6,
    input_7,
    input_8,
  ];
  ////////////////////////////////////////////////////////////////////////////2
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Hourly',
      value: 'Hourly',
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
      label: 'Daily',
      value: 'Daily',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '3',
      label: 'Weekly',
      value: 'Weekly',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '4',
      label: 'Monthly',
      value: 'Monthly',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  let a;
  if (radioButtons[0].selected === true) {
    a = 'Hourly';
  } else if (radioButtons[1].selected === true) {
    a = 'Daily';
  } else if (radioButtons[1].selected === true) {
    a = 'Weekly';
  } else {
    a = 'Monthly';
  }

  const [empty_validationn_1, setempty_validation_1] = useState(true);
  const [input_1_1, setInput_1_1] = useState('');
  const handle_input_1_1 = state => setInput_1_1(state);
  const handle_radiobuttons = state => setRadioButtons(state);
  const [input_3_1, setInput_3_1] = useState('');
  const handle_input_3_1 = state => setInput_3_1(state);
  const [input_4_1, setInput_4_1] = useState('EUR');
  const handle_input_4_1 = state => setInput_4_1(state);
  const [error_2, setError_2] = useState(false);
  const [valid_number, setValid_number] = useState(true);
  const handle_valid_number = state => setValid_number(state);
  const states_1 = [
    empty_validationn_1,
    input_1_1,
    handle_input_1_1,
    radioButtons,
    handle_radiobuttons,
    input_3_1,
    handle_input_3_1,
    input_4_1,
    handle_input_4_1,
    valid_number,
    handle_valid_number,
  ];
  const inputs_1 = [input_1_1, input_3_1];
  /////////////////////////////////////////////////////////////////////////////3
  const [empty_validationn_2, setempty_validation_2] = useState(true);
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
  const [date1, setDate1] = useState(new Date());
  const handle_date1 = state => setDate1(state);
  const [input_6_2, setInput_6_2] = useState('');
  const handle_input_6_2 = state => setInput_6_2(state);
  const [input_7_2, setInput_7_2] = useState('');
  const handle_input_7_2 = state => setInput_7_2(state);
  const [date2, setDate2] = useState(new Date());
  const handle_date2 = state => setDate2(state);
  const [error_3, setError_3] = useState(false);
  const states_2 = [
    empty_validationn_2,
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
    date1,
    handle_date1,
    input_6_2,
    handle_input_6_2,
    input_7_2,
    handle_input_7_2,
    date2,
    handle_date2,
  ];
  const inputs_2 = [
    input_1_2,
    input_2_2,
    input_3_2,
    input_4_2,
    input_5_2,
    input_6_2,
    input_7_2,
  ];

  const request_object = {
    agreement_compliance_type: 'employment-contract',
    website_or_app_name: input_9,
    organization_id: orgId,
    company_name: input_1,
    company_address_line_1: input_2,
    company_address_line_2: input_3,
    company_address_line_3: input_4,
    employee_full_name: input_5,
    type_of_business_the_company_engaged: input_6,
    start_date: generate_date(date.toLocaleDateString()),
    company_state: input_7,
    company_country: input_8,
    duties_of_employee: input_1_1,
    time_frame_of_the_compensation: a,
    amount: input_3_1,
    amount_currency: input_4_1,
    full_name_of_company_signatory: input_4_2,
    company_signatory_scanned_copy_detail: {
      filename: input_5_2,
    },
    company_signatory_date: generate_date(date1.toLocaleDateString()),
    full_name_of_employee_signatory: input_6_2,
    employee_signatory_scanned_copy_detail: {
      filename: input_7_2,
    },
    employee_signatory_date: generate_date(date2.toLocaleDateString()),
    jurisdiction: input_1_2,
    employee_state: input_2_2,
    employee_country: input_3_2,
  };
  return (
    <>
      <PolicyHeader title="Generator" />
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
              // const y= email_validation(input_3)
              // const z= email_validation(input_4)
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
              const x = empty_validation(inputs_1);
              setError_2(!(x & valid_number));
            }}>
            <View>
              <Policy2 list={states_1} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}
            errors={error_3}
            onNext={() => {
              setempty_validation_2(empty_validation([input_1_2]));
              const x = empty_validation(inputs_2);
              // const y = email_validation(input_1_2);
              setError_3(!x);
            }}>
            <View>
              <Policy3 list={states_2} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            finishBtnText="Done"
            previousBtnStyle={previousButton}
            onSubmit={() => {
              navigation.navigate('HomeScreen');
              // const y= email_validation(input_1_3)
              // const z= ( !y)
              // if (z){
              //   alert("please enter valid email")
              // }
              // else{
              //   //api
              // }
            }}>
            <View>
              <Policy4 object={request_object} />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
