import React, {useMemo, useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
// import Policy4 from './Policy4';
// import Policy5 from './Policy5';
import Policy4 from '../Cookies/Policy4';
import {empty_validation, email_validation} from '../validations';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  let a;
  if (radioButtons[0].selected === true) {
    a = 'Individual';
  } else if (radioButtons[1].selected === true) {
    a = 'Company';
  } else if (radioButtons[1].selected === true) {
    a = 'Partnership';
  } else {
    a = 'Other';
  }

  const [radioButtons2, setRadioButtons2] = useState([
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

  let b;
  if (radioButtons2[0].selected === true) {
    b = 'Individual';
  } else if (radioButtons2[1].selected === true) {
    b = 'Company';
  } else if (radioButtons2[1].selected === true) {
    b = 'Partnership';
  } else {
    b = 'Other';
  }
  const [radioButtons2_2, setRadioButtons2_2] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'Days',
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
      label: 'Mon',
      value: 'Months',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '3',
      label: 'Year',
      value: 'Years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  let c;
  if (radioButtons2_2[0].selected === true) {
    c = 'Days';
  } else if (radioButtons2_2[1].selected === true) {
    c = 'Months';
  } else {
    c = 'Years';
  }
  const [radioButtons2_3, setRadioButtons2_3] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'Days',
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
      label: 'Mon',
      value: 'Months',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '3',
      label: 'Year',
      value: 'Years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  let d;
  if (radioButtons2_3[0].selected === true) {
    d = 'Days';
  } else if (radioButtons2_3[1].selected === true) {
    d = 'Months';
  } else {
    d = 'Years';
  }
  const [empty_validationn, setempty_validation] = useState(true);
  const [date, setDate] = useState(new Date());
  const handle_date = state => setDate(state);
  const handle_radiobuttons = state => setRadioButtons(state);
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
  const handle_radiobuttons2_2 = state => setRadioButtons2_2(state);

  // perty 2 starts here
  const handle_radiobuttons2 = state => setRadioButtons2(state);
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
  const [input_15, setInput_15] = useState('');
  const handle_input_15 = state => setInput_15(state);
  const [input_16, setInput_16] = useState('');
  const handle_input_16 = state => setInput_16(state);
  const handle_radiobuttons2_3 = state => setRadioButtons2_3(state);

  const [error_1, setError_1] = useState(false);
  const states = [
    empty_validationn,
    date,
    handle_date,
    radioButtons,
    handle_radiobuttons,
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
    radioButtons2_2,
    handle_radiobuttons2_2,
    // party2
    radioButtons2,
    handle_radiobuttons2,
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
    input_15,
    handle_input_15,
    input_16,
    handle_input_16,
    radioButtons2_3,
    handle_radiobuttons2_3,
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
    input_13,
    input_14,
    input_15,
    input_16,
  ];
  //2
  const [radioButtons_1, setRadioButtons_1] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'Days',
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
      label: 'Mon',
      value: 'Months',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '3',
      label: 'Year',
      value: 'Years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  let e;
  if (radioButtons_1[0].selected === true) {
    e = 'Days';
  } else if (radioButtons_1[1].selected === true) {
    e = 'Months';
  } else {
    e = 'Years';
  }
  const [error_2, setError_2] = useState(false);
  const [empty_validationn_1, setempty_validation_1] = useState(true);
  const [input_1_1, setInput_1_1] = useState('');
  const handle_input_1_1 = state => setInput_1_1(state);
  const [input_2_1, setInput_2_1] = useState('');
  const handle_input_2_1 = state => setInput_2_1(state);
  const [date_1, setDate_1] = useState(new Date());
  const handle_date_1 = state => setDate_1(state);
  const [date_1_1, setDate_1_1] = useState(new Date());
  const handle_date_1_1 = state => setDate_1_1(state);
  const [input_3_1, setInput_3_1] = useState('');
  const handle_input_3_1 = state => setInput_3_1(state);
  const handle_radiobuttons_1 = state => setRadioButtons_1(state);

  const states_1 = [
    empty_validationn_1,
    input_1_1,
    handle_input_1_1,
    input_2_1,
    handle_input_2_1,
    date_1,
    handle_date_1,
    date_1_1,
    handle_date_1_1,
    input_3_1,
    handle_input_3_1,
    radioButtons_1,
    handle_radiobuttons_1,
  ];
  const inputs_1 = [input_1_1, input_2_1, input_3_1];
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
  let f;
  if (radioButtons_5[0].selected === true) {
    f = true;
  } else {
    f = false;
  }

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
  let g;
  if (radioButtons_5[0].selected === false) {
    g = true;
  } else {
    g = false;
  }

  const [radioButtons_6_3, setRadioButtons_6_3] = useState([
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
  let h;
  if (radioButtons_5[0].selected === true) {
    h = true;
  } else {
    h = false;
  }

  const [radioButtons_7_3, setRadioButtons_7_3] = useState([
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
  let i;
  if (radioButtons_5[0].selected === true) {
    i = true;
  } else {
    i = false;
  }

  const [radioButtons_8_3, setRadioButtons_8_3] = useState([
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
  let j;
  if (radioButtons_5[0].selected === true) {
    j = true;
  } else {
    j = false;
  }

  const [empty_validationn_2, setempty_validation_2] = useState(true);
  const [error_3, setError_3] = useState(false);
  const handle_radiobuttons_5 = state => setRadioButtons_5(state);
  const handle_radiobuttons_6 = state => setRadioButtons_6(state);
  const handle_radiobuttons_6_3 = state => setRadioButtons_6_3(state);
  const handle_radiobuttons_7_3 = state => setRadioButtons_7_3(state);
  const handle_radiobuttons_8_3 = state => setRadioButtons_8_3(state);
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

  const states_2 = [
    empty_validationn_2,
    input_1_2,
    handle_input_1_2,
    input_2_2,
    handle_input_2_2,
    input_3_2,
    handle_input_3_2,
    radioButtons_5,
    handle_radiobuttons_5,
    radioButtons_6,
    handle_radiobuttons_6,
    date_2,
    handle_date_2,
    radioButtons_6_3,
    handle_radiobuttons_6_3,
    radioButtons_7_3,
    handle_radiobuttons_7_3,
    radioButtons_8_3,
    handle_radiobuttons_8_3,
    input_4_2,
    handle_input_4_2,
    input_5_2,
    handle_input_5_2,
    input_6_2,
    handle_input_6_2
  ];
  const inputs_2 = [input_1_2, input_2_2, input_3_2, input_4_2, input_5_2];

  const request_object = {
    agreement_compliance_type: 'mou',
    website_or_app_name: input_6_2,
    organization_id: orgId,
    date_of_execution_of_document: generate_date(date.toLocaleDateString()),
    party_1_entity_type: a,
    party_1_full_name: input_1,
    party_1_address_line_1: input_2,
    party_1_address_line_2: input_3,
    party_1_address_line_3: input_4,
    party_1_zipcode: input_5,
    party_1_state: input_6,
    party_1_country: input_7,
    party_1_period_mentioned: input_8,
    // party_1_period_mentioned_unit: c,
    party_1_period_mentioned_unit: 'Days',
    party_2_entity_type: b,
    party_2_full_name: input_9,
    party_2_address_line_1: input_10,
    party_2_address_line_2: input_11,
    party_2_address_line_3: input_12,
    party_2_zipcode: input_13,
    party_2_state: input_14,
    party_2_country: input_15,
    party_2_period_mentioned: input_16,
    party_2_period_mentioned_unit: 'Days',
    // party_2_period_mentioned_unit: d,
    // screen 2
    what_will_be_the_purpose_of_this_mou: input_1_1,
    what_is_the_objective_of_this_mou: input_2_1,
    date_of_commencement: generate_date(date_1.toLocaleDateString()),
    date_of_termination: generate_date(date_1_1.toLocaleDateString()),
    period_for_notice_in_case_of_cancellation_or_amendment: input_3_1,
    // period_for_notice_in_case_of_cancellation_or_amendment_unit: e,
    period_for_notice_in_case_of_cancellation_or_amendment_unit: 'Days',
    // screen 3
    state_of_laws_use_as_governing_laws: input_1_2,
    state_of_laws_for_governing_laws_in_case_of_reimbursement: input_2_2,
    // number_of_parties_enter_this_mou: input_3_2,
    number_of_parties_enter_this_mou: 3,
    mou_include_confidentiality: f,
    mou_retrict_working_with_competitors: g,
    period_mou_retrict_working_with_competitors: 50,
    period_mou_retrict_working_with_competitors_unit: 'Days',
    date_for_legally_binding_definitive_agreement: generate_date(
      date_2.toLocaleDateString(),
    ),
    should_the_parties_agree_to_refrain_from_negotiating_with_third_parties: h,
    will_mou_agreement_be_terminated_in_case_of_force_majeure: i,
    any_other_contracts_entered_between_parties_together_with_this_mou: j,
    project_name: input_4_2,
    project_detail: input_4_2,
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
            errors={error_2}
            onNext={() => {
              setempty_validation_1(empty_validation(inputs_1));
              const x = empty_validation(inputs_1);
              setError_2(!x);
            }}>
            <View>
              <Policy2 list={states_1} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            errors={error_3}
            onNext={() => {
              setempty_validation_2(empty_validation(inputs_2));
              const x = empty_validation(inputs_2);
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
              // const y = email_validation(input_1_4);
              // const z = !y;
              // if (z) {
              //   alert('please enter valid email');
              // } else {
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
