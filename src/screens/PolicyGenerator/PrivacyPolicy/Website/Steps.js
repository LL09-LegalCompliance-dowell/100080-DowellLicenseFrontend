import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import Header from '../../../../components/Header';
import Policy1 from './Policy1';
import Policy4 from '../../Cookies/Policy4';
import {empty_validation, email_validation} from '../../validations';

const generate_date = date => {
  const temp = date.split('/');
  return '20' + temp[2] + '-' + temp[0] + '-' + temp[1];
};

const Steps = () => {
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
  const [input_7, setInput_7] = useState('');
  const handle_input_7 = state => setInput_7(state);
  const [input_8, setInput_8] = useState('');
  const handle_input_8 = state => setInput_8(state);
  const [input_9, setInput_9] = useState('');
  const handle_input_9 = state => setInput_9(state);
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
    input_7,
    handle_input_7,
    input_8,
    handle_input_8,
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
    input_7,
    input_8,
    // input_9,
    // 10
  ];
  // 4
  const [input_1_4, setInput_1_4] = useState('');
  const handle_input_1_4 = state => setInput_1_4(state);
  const states_4 = [input_1_4, handle_input_1_4];

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

  const request_object = {
    agreement_compliance_type: 'website-privacy-policy',
    last_updated: generate_date(date.toLocaleDateString()),
    company_name: input_1,
    company_address: input_2,
    registration_number: input_3,
    country: input_4,
    website_name: input_5,
    website_url: input_6,
    website_contact_page_url: input_7,
    website_contact_email: input_8,
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
              const y = email_validation(input_8);
              setError_1(!(x & y));
            }}>
            <View>
              <Policy1 list={states} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            finishBtnText="Done"
            previousBtnStyle={previousButton}
            onSubmit={() => {
              const y = email_validation(input_1_4);
              const z = !y;
              if (z) {
                alert('please enter valid email');
              } else {
                //api
              }
            }}>
            <View>
              <Policy4 list={states_4} object={request_object} />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
