import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import {empty_validation, email_validation} from '../validations';
import RadioGroup from 'react-native-radio-buttons-group';

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
  const [empty_validationn, setempty_validation] = useState(true);
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
  const [error_1, setError_1] = useState(false);
  const states = [
    empty_validationn,
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
    // input_7,
    // handle_input_7,
    // input_8,
    // handle_input_8,
    // input_9,
    // handle_input_9,
  ];
  const inputs = [
    input_1,
    input_2,
    input_3,
    input_4,
    input_5,
    input_6,
    // input_7,
    // input_8,
    // input_9,
    // 10
  ];
  //2
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Sole proprietorship',
      value: 'Sole proprietorship',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'Partnership',
      value: 'Partnership',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '3',
      label: 'Limited liability company',
      value: 'Limited liability company',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '4',
      label: 'Corporation',
      value: 'Corporation',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);

  const [radioButtons1, setRadioButtons1] = useState([
    {
      id: '1',
      label: 'Days',
      value: 'days',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'Months',
      value: 'months',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);

  const [radioButtons2, setRadioButtons2] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);

  const [radioButtons3, setRadioButtons3] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'yes',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'No',
      value: 'no',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '3',
      label: 'other',
      value: 'other',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);

  const [empty_validationn_1, setempty_validation_1] = useState(true);
  const handle_radiobuttons = state => setRadioButtons(state);
  const [input_1_1, setInput_1_1] = useState('');
  const handle_input_1_1 = state => setInput_1_1(state);
  const [date1, setDate1] = useState(new Date());
  const handle_date1 = state => setDate1(state);
  const [input_2_1, setInput_2_1] = useState('');
  const handle_input_2_1 = state => setInput_2_1(state);
  const handle_radiobuttons1 = state => setRadioButtons1(state);
  const [input_3_1, setInput_3_1] = useState('');
  const handle_input_3_1 = state => setInput_3_1(state);
  const handle_radiobuttons2 = state => setRadioButtons2(state);
  const [input_4_1, setInput_4_1] = useState('');
  const handle_input_4_1 = state => setInput_4_1(state);
  const handle_radiobuttons3 = state => setRadioButtons3(state);
  const [input_5_1, setInput_5_1] = useState('');
  const handle_input_5_1 = state => setInput_5_1(state);
  const [error_2, setError_2] = useState(false);
  const [valid_number, setValid_number] = useState(true);
  const handle_valid_number = state => setValid_number(state);
  const states_1 = [
    empty_validationn_1,
    radioButtons,
    handle_radiobuttons,
    input_1_1,
    handle_input_1_1,
    date1,
    handle_date1,
    input_2_1,
    handle_input_2_1,
    radioButtons1,
    handle_radiobuttons1,
    input_3_1,
    handle_input_3_1,
    radioButtons2,
    handle_radiobuttons2,
    input_4_1,
    handle_input_4_1,
    radioButtons3,
    handle_radiobuttons3,
    input_5_1,
    handle_input_5_1,
    empty_validationn_1,
    valid_number,
    handle_valid_number,
  ];
  const inputs_1 = [input_1_1, input_2_1, input_3_1, input_4_1];
  //3
  const [empty_validationn_2, setempty_validation_2] = useState(true);
  const [input_1_2, setInput_1_2] = useState('');
  const handle_input_1_2 = state => setInput_1_2(state);
  const [input_2_2, setInput_2_2] = useState('');
  const handle_input_2_2 = state => setInput_2_2(state);
  const [error_3, setError_3] = useState(false);
  const states_2 = [
    empty_validationn_2,
    input_1_2,
    handle_input_1_2,
    input_2_2,
    handle_input_2_2,
  ];
  const inputs_2 = [input_1_2, input_2_2];
  //4
  const [input_1_4, setInput_1_4] = useState('');
  const handle_input_1_4 = state => setInput_1_4(state);
  const states_3 = [input_1_4, handle_input_1_4];

  const request_object = {
    agreement_compliance_type: 'non-compete-agreement',
    date_of_execution_of_document: '2025-10-20',
    party_full_name: 'Individual and Company',
    company_name: 'Dowell Research 1',
    company_address_line_1: 'P.O.BOX 45, India',
    company_address_line_2: 'sample law',
    company_address_line_3: 'RS5428888',
    company_zipcode: 'India',
    type_of_company: 'India',
    restricted_area: 'RT455',
    date_of_termination: '2025-10-20',
    duration_for_solicit: 54,
    duration_for_solicit_unit: 'Days',
    governing_laws_country: 'Sample 2',
    will_there_be_a_litigation_matter_in_case_of_dispute: false,
    which_state_should_abide_litigation_matter: '',
    will_electronic_notices_be_allowed: 'yes',
    name_of_witnesses: 'Seth',
    signature_of_witnesses_detail: {
      filename: 'img_47dbffd8-50c1-4f5c-af54-819db6d902ab.png',
      actual_filename: 'AFL.png',
      file_extension: 'png',
    },
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
            previousBtnStyle={previousButton}
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
            previousBtnStyle={previousButton}>
            <View>
              <Policy4 list={states_3} object={request_object} />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
