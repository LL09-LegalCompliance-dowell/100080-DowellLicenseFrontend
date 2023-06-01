import {React, useState, useMemo} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy4 from '../Cookies/Policy4';
import moment from 'moment';

import {
  empty_validation,
  email_validation,
  url_validation,
} from '../validations';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const generate_date = date => {
//   const temp = date.split('/');
//   return '20' + temp[2] + '-' + temp[0] + '-' + temp[1];
// };
const generate_date = date => {
  const formattedDate = date;
  const momentDate = moment(formattedDate, 'MM/DD/YYYY');
  const formattedMomentDate = momentDate.format('YYYY-MM-DD');
  return formattedMomentDate;
};
// const generate_date = date => {
//   const temp = date.split('/');
//   const year = temp[2];
//   const month = temp[0];
//   const day = temp[1];

//   const formattedDate = `${year}-${month}-${day}`;

//   if (moment(formattedDate, 'YYYY-MM-DD', true).isValid()) {
//     if (Platform.OS === 'ios') {
//       return formattedDate.substring(2); // Remove '20' prefix for iOS
//     } else {
//       return formattedDate; // Keep the original formatted date for other platforms
//     }
//   } else {
//     // Handle invalid date case according to your needs
//     return null;
//   }
// };
const Steps = () => {
  const [orgId, setOrgId] = useState('');
  const getOrgId = async () => {
    const org_id = await AsyncStorage.getItem('org_id');
    setOrgId(org_id);
  };
  useMemo(() => getOrgId(), []);

  const navigation = useNavigation();
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
  const [error_1, setError_1] = useState(false);
  const [empty_validationn, setempty_validation] = useState(true);
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
    empty_validationn,
  ];
  const inputs = [input_1, input_2, input_3, input_4, input_5];

  const request_object = {
    agreement_compliance_type: 'website-security-policy',
    last_updated: generate_date(date.toLocaleDateString()),
    organization_id: orgId,
    company_name: input_1,
    website_name: input_2,
    jurisdiction: input_3,
    website_url: input_4,
    website_contact_email: input_5,
    website_or_app_name: input_2,
  };
  console.log('Original Date:', date.toLocaleDateString());
  console.log('Converted Date:', request_object.last_updated);

  return (
    <>
      <PolicyHeader title="Generator" />
      <View
        style={{
          flex: 1,
          paddingTop: 45,
          backgroundColor: 'white',
          paddingHorizontal: 15,
          marginBottom: -25,
          marginTop: Platform.OS === 'ios' ? 40 : 0,
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
              const y = email_validation(input_5);
              const z = url_validation(input_4);
              setError_1(!(x & y & z));
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
            previousBtnDisabled={true}
            onSubmit={() => {
              navigation.navigate('HomeScreen');
            }}>
            <View>
              <Policy4 l object={request_object} />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
