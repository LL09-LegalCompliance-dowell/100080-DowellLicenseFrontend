import {React, useState, useMemo} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import Policy5 from './Policy5';
import Policy6 from './Policy6';
import Policy7 from './Policy7';
import moment from 'moment';

import {
  empty_validation,
  email_validation,
  number_validation_1,
  url_validation,
} from '../validations';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generate_date} from '../../../utils/dateUtils';

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
  //////////////////////////////////////1
  const [input_1, setInput_1] = useState('');
  const handle_input_1 = state => setInput_1(state);
  const [input_2, setInput_2] = useState('');
  const handle_input_2 = state => setInput_2(state);
  const [error_1, setError_1] = useState(false);
  const [empty_validationn, setempty_validation] = useState(true);
  const states = [
    input_1,
    handle_input_1,
    input_2,
    handle_input_2,
    empty_validationn,
  ];
  const inputs = [input_1, input_2];
  //////////////////////////////////////2
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Mobile App',
      value: 'Mobile App',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'Website',
      value: 'Website',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '3',
      label: 'Both',
      value: 'Both',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons = state => setRadioButtons(state);
  const [radioButtons_1, setRadioButtons_1] = useState([
    {
      id: '1',
      label: 'Yes, I would like to create a premium privacy policy.',
      value: 'Yes, I would like to create a premium privacy policy.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, basic policy is fine.',
      value: 'No, basic policy is fine.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_1 = state => setRadioButtons_1(state);
  const [radioButtons_2, setRadioButtons_2] = useState([
    {
      id: '1',
      label: 'Yes, it’s operated under a company name.',
      value: 'Yes, it’s operated under a company name.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, it’s operated by an individual.',
      value: 'No, it’s operated by an individual.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_2 = state => setRadioButtons_2(state);
  const [input_1_2, setInput_1_2] = useState('');
  const handle_input_1_2 = state => setInput_1_2(state);
  const [radioButtons_3, setRadioButtons_3] = useState([
    {
      id: '1',
      label: 'Yes, the company has a different short or trade name.',
      value: 'Yes, the company has a different short or trade name.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, the company doesn’t have a trade name.',
      value: 'No, the company doesn’t have a trade name.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_3 = state => setRadioButtons_3(state);
  const [input_2_2, setInput_2_2] = useState('');
  const handle_input_2_2 = state => setInput_2_2(state);
  const [radioButtons_4, setRadioButtons_4] = useState([
    {
      id: '1',
      label: 'Yes, users can sign up for an account.',
      value: 'Yes, users can sign up for an account.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, users can’t sign up or create an account.',
      value: 'No, users can’t sign up or create an account.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_4 = state => setRadioButtons_4(state);
  const [radioButtons_5, setRadioButtons_5] = useState([
    {
      id: '1',
      label: 'Yes, users can sign up using third-party services.',
      value: 'Yes, users can sign up using third-party services.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, users can’t sign up using third-party services.',
      value: 'No, users can’t sign up using third-party services.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_5 = state => setRadioButtons_5(state);
  const [radioButtons_6, setRadioButtons_6] = useState([
    {
      id: '1',
      label: 'Yes, users have full access to their personal information.',
      value: 'Yes, users have full access to their personal information.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, users don’t have access to their information.',
      value: 'No, users don’t have access to their information.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_6 = state => setRadioButtons_6(state);
  const [radioButtons_7, setRadioButtons_7] = useState([
    {
      id: '1',
      label:
        'Yes, users can delete their accounts and personal information at any time.',
      value:
        'Yes, users can delete their accounts and personal information at any time.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, user accounts and personal information cannot be deleted.',
      value: 'No, user accounts and personal information cannot be deleted.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_7 = state => setRadioButtons_7(state);
  const [radioButtons_8, setRadioButtons_8] = useState([
    {
      id: '1',
      label: 'They can log in to their account settings page to delete it.',
      value: 'They can log in to their account settings page to delete it.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'They can contact us to submit a deletion request.',
      value: 'They can contact us to submit a deletion request.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_8 = state => setRadioButtons_8(state);
  const [radioButtons_9, setRadioButtons_9] = useState([
    {
      id: '1',
      label: 'Yes, users can submit and publish their own content.',
      value: 'Yes, users can submit and publish their own content.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, users can’t publish anything.',
      value: 'No, users can’t publish anything.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_9 = state => setRadioButtons_9(state);
  const [flag, setflag] = useState(false);
  const handle_flag = state => setflag(state);
  const [flag_1, setflag_1] = useState(false);
  const handle_flag_1 = state => setflag_1(state);
  const [flag_2, setflag_2] = useState(false);
  const handle_flag_2 = state => setflag_2(state);

  const [error_2, setError_2] = useState(false);
  const [empty_validationn_2, setempty_validation_2] = useState(true);
  const states_2 = [
    radioButtons,
    handle_radiobuttons,
    radioButtons_1,
    handle_radiobuttons_1,
    radioButtons_2,
    handle_radiobuttons_2,
    input_1_2,
    handle_input_1_2,
    radioButtons_3,
    handle_radiobuttons_3,
    input_2_2,
    handle_input_2_2,
    radioButtons_4,
    handle_radiobuttons_4,
    radioButtons_5,
    handle_radiobuttons_5,
    radioButtons_6,
    handle_radiobuttons_6,
    radioButtons_7,
    handle_radiobuttons_7,
    radioButtons_8,
    handle_radiobuttons_8,
    radioButtons_9,
    handle_radiobuttons_9,
    flag,
    handle_flag,
    flag_1,
    handle_flag_1,
    flag_2,
    handle_flag_2,
    empty_validationn_2,
  ];
  ///////////////////////////////////////////////////////////////////3
  const [radioButtons_1_3, setRadioButtons_1_3] = useState([
    {
      id: '1',
      label: 'Yes, content can be shared on social networks.',
      value: 'Yes, content can be shared on social networks.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, users can’t share content on social networks.',
      value: 'No, users can’t share content on social networks.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_1_3 = state => setRadioButtons_1_3(state);
  const [radioButtons_2_3, setRadioButtons_2_3] = useState([
    {
      id: '1',
      label:
        'Yes, users can interact with each other (via comments, messages, etc).',
      value:
        'Yes, users can interact with each other (via comments, messages, etc).',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, users cannot interact with each other.',
      value: 'No, users cannot interact with each other.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_2_3 = state => setRadioButtons_2_3(state);

  const [radioButtons_3_3, setRadioButtons_3_3] = useState([
    {
      id: '1',
      label: 'Yes, personally identifiable information may be displayed.',
      value: 'Yes, personally identifiable information may be displayed.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, users remain completely anonymous.',
      value: 'No, users remain completely anonymous.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_3_3 = state => setRadioButtons_3_3(state);
  const [radioButtons_4_3, setRadioButtons_4_3] = useState([
    {
      id: '1',
      label:
        'Yes, our target audience or users may include residents of California (required for the CCPA compliance).',
      value:
        'Yes, our target audience or users may include residents of California (required for the CCPA compliance).',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, we don’t target anyone in California.',
      value: 'No, we don’t target anyone in California.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_4_3 = state => setRadioButtons_4_3(state);
  const [radioButtons_5_3, setRadioButtons_5_3] = useState([
    {
      id: '1',
      label:
        'Yes, our target audience or users may include residents in the European Union (required for the GDPR compliance).',
      value:
        'Yes, our target audience or users may include residents in the European Union (required for the GDPR compliance).',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, we don’t target anyone in the European Union.',
      value: 'No, we don’t target anyone in the European Union.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_5_3 = state => setRadioButtons_5_3(state);
  const [radioButtons_6_3, setRadioButtons_6_3] = useState([
    {
      id: '1',
      label:
        'Yes, our target audience or users may include those under the age of 18.',
      value:
        'Yes, our target audience or users may include those under the age of 18.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t target anyone under the age of 18.',
      value: 'No, we don’t target anyone under the age of 18.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_6_3 = state => setRadioButtons_6_3(state);
  const [flag_1_3, setflag_1_3] = useState(false);
  const handle_flag_1_3 = state => setflag_1_3(state);
  const [radioButtons_7_3, setRadioButtons_7_3] = useState([
    {
      id: '1',
      label:
        'Yes, our target audience or users may include children under the age of 13.',
      value:
        'Yes, our target audience or users may include children under the age of 13.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t target anyone under the age of 13.',
      value: 'No, we don’t target anyone under the age of 13.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_7_3 = state => setRadioButtons_7_3(state);
  const [radioButtons_8_3, setRadioButtons_8_3] = useState([
    {
      id: '1',
      label: 'Yes, we may collect certain information from children.',
      value: 'Yes, we may collect certain information from children.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t collect anything from children.',
      value: 'No, we don’t collect anything from children.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_8_3 = state => setRadioButtons_8_3(state);
  const [radioButtons_9_3, setRadioButtons_9_3] = useState([
    {
      id: '1',
      label: 'Yes, submitted information will be publicly available to anyone.',
      value: 'Yes, submitted information will be publicly available to anyone.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, submitted information will not be publicly available.',
      value: 'No, submitted information will not be publicly available.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_9_3 = state => setRadioButtons_9_3(state);
  const [radioButtons_10_3, setRadioButtons_10_3] = useState([
    {
      id: '1',
      label: 'Yes, submitted information can be hidden from public access.',
      value: 'Yes, submitted information can be hidden from public access.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, there’s no such option available.',
      value: 'No, there’s no such option available.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_10_3 = state => setRadioButtons_10_3(state);
  var [isPress1, setIsPress1] = useState(false);
  var [isPress2, setIsPress2] = useState(false);
  var [isPress3, setIsPress3] = useState(false);

  const handle_isPress1 = state => setIsPress1(state);
  const handle_isPress2 = state => setIsPress2(state);
  const handle_isPress3 = state => setIsPress3(state);

  const [radioButtons_11_3, setRadioButtons_11_3] = useState([
    {
      id: '1',
      label: 'Yes, we sell products or services or plan to sell in the future.',
      value: 'Yes, we sell products or services or plan to sell in the future.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we do not and will not sell anything.',
      value: 'No, we do not and will not sell anything.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_11_3 = state => setRadioButtons_11_3(state);
  const [radioButtons_12_3, setRadioButtons_12_3] = useState([
    {
      id: '1',
      label:
        'Yes, we offer products or services provided by third-party companies.',
      value:
        'Yes, we offer products or services provided by third-party companies.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, all products and services are provided by us.',
      value: 'No, all products and services are provided by us.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_12_3 = state => setRadioButtons_12_3(state);
  const [radioButtons_13_3, setRadioButtons_13_3] = useState([
    {
      id: '1',
      label:
        'Yes, we’ve taken all the necessary measures to keep sensitive payment information secure.',
      value:
        'Yes, we’ve taken all the necessary measures to keep sensitive payment information secure.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label:
        'No, some of the sensitive payment information may not be processed or stored securely (not recommended).',
      value:
        'No, some of the sensitive payment information may not be processed or stored securely (not recommended).',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_13_3 = state => setRadioButtons_13_3(state);
  const [radioButtons_14_3, setRadioButtons_14_3] = useState([
    {
      id: '1',
      label:
        'Yes, we may store payment information for future purchases or recurring billing (such as credit card numbers or tokens).',
      value:
        'Yes, we may store payment information for future purchases or recurring billing (such as credit card numbers or tokens).',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t store any sensitive payment information.',
      value: 'No, we don’t store any sensitive payment information.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_14_3 = state => setRadioButtons_14_3(state);
  const [radioButtons_15_3, setRadioButtons_15_3] = useState([
    {
      id: '1',
      label: 'Yes, we may perform credit checks.',
      value: 'Yes, we may perform credit checks.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t perform credit checks.',
      value: 'No, we don’t perform credit checks.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_15_3 = state => setRadioButtons_15_3(state);
  const [radioButtons_16_3, setRadioButtons_16_3] = useState([
    {
      id: '1',
      label: 'Yes, we use third-party analytics tools.',
      value: 'Yes, we use third-party analytics tools.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t use any third-party analytics tools.',
      value: 'No, we don’t use any third-party analytics tools.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_16_3 = state => setRadioButtons_16_3(state);

  const states_3 = [
    radioButtons_1_3,
    handle_radiobuttons_1_3,
    radioButtons_2_3,
    handle_radiobuttons_2_3,
    radioButtons_3_3,
    handle_radiobuttons_3_3,
    radioButtons_4_3,
    handle_radiobuttons_4_3,
    radioButtons_5_3,
    handle_radiobuttons_5_3,
    radioButtons_6_3,
    handle_radiobuttons_6_3,
    flag_1_3,
    handle_flag_1_3,
    radioButtons_7_3,
    handle_radiobuttons_7_3,
    radioButtons_8_3,
    handle_radiobuttons_8_3,
    radioButtons_9_3,
    handle_radiobuttons_9_3,
    radioButtons_10_3,
    handle_radiobuttons_10_3,
    isPress1,
    handle_isPress1,
    isPress2,
    handle_isPress2,
    isPress3,
    handle_isPress3,
    radioButtons_11_3,
    handle_radiobuttons_11_3,
    radioButtons_12_3,
    handle_radiobuttons_12_3,
    radioButtons_13_3,
    handle_radiobuttons_13_3,
    radioButtons_14_3,
    handle_radiobuttons_14_3,
    radioButtons_15_3,
    handle_radiobuttons_15_3,
    radioButtons_16_3,
    handle_radiobuttons_16_3,
  ];

  ////////////////////////////////////////////////////////////4
  const [radioButtons_1_4, setRadioButtons_1_4] = useState([
    {
      id: '1',
      label:
        'Yes, user’s personal information is anonymized to prevent analytics tools from linking it to an individual person.',
      value:
        'Yes, user’s personal information is anonymized to prevent analytics tools from linking it to an individual person.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label:
        'No, analytics tools are able to link user’s personal information to an individual person.',
      value:
        'No, analytics tools are able to link user’s personal information to an individual person.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_1_4 = state => setRadioButtons_1_4(state);

  const [radioButtons_2_4, setRadioButtons_2_4] = useState([
    {
      id: '1',
      label: 'Yes, there may be affiliate links.',
      value: 'Yes, there may be affiliate links.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, there are no affiliate links.',
      value: 'No, there are no affiliate links.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_2_4 = state => setRadioButtons_2_4(state);
  const [radioButtons_3_4, setRadioButtons_3_4] = useState([
    {
      id: '1',
      label: 'Yes, there may be ads displayed.',
      value: 'Yes, there may be ads displayed.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, there are no ads.',
      value: 'No, there are no ads.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_3_4 = state => setRadioButtons_3_4(state);
  const [radioButtons_4_4, setRadioButtons_4_4] = useState([
    {
      id: '1',
      label:
        'Yes, we may do targeted advertising to users based on collected data.',
      value:
        'Yes, we may do targeted advertising to users based on collected data.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t collect user data for remarketing.',
      value: 'No, we don’t collect user data for remarketing.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_4_4 = state => setRadioButtons_4_4(state);
  const [radioButtons_5_4, setRadioButtons_5_4] = useState([
    {
      id: '1',
      label: 'Yes, users can opt to receive email newsletters from us.',
      value: 'Yes, users can opt to receive email newsletters from us.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t send any newsletters.',
      value: 'No, we don’t send any newsletters.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_5_4 = state => setRadioButtons_5_4(state);
  const [radioButtons_6_4, setRadioButtons_6_4] = useState([
    {
      id: '1',
      label: 'Yes, users can opt to receive push notifications from us.',
      value: 'Yes, users can opt to receive push notifications from us.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t send push notifications.',
      value: 'No, we don’t send push notifications.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_6_4 = state => setRadioButtons_6_4(state);
  const [radioButtons_7_4, setRadioButtons_7_4] = useState([
    {
      id: '1',
      label: 'Yes, we use a third-party provider to send push notifications.',
      value: 'Yes, we use a third-party provider to send push notifications.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we send push notifications using our own servers.',
      value: 'No, we send push notifications using our own servers.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_7_4 = state => setRadioButtons_7_4(state);
  var [isPress1_4, setIsPress1_4] = useState(false);
  var [isPress2_4, setIsPress2_4] = useState(false);
  var [isPress3_4, setIsPress3_4] = useState(false);
  var [isPress4_4, setIsPress4_4] = useState(false);
  var [isPress5_4, setIsPress5_4] = useState(false);
  var [isPress6_4, setIsPress6_4] = useState(false);
  var [isPress7_4, setIsPress7_4] = useState(false);
  var [isPress8_4, setIsPress8_4] = useState(false);
  var [isPress9_4, setIsPress9_4] = useState(false);

  const handle_isPress1_4 = state => setIsPress1_4(state);
  const handle_isPress2_4 = state => setIsPress2_4(state);
  const handle_isPress3_4 = state => setIsPress3_4(state);
  const handle_isPress4_4 = state => setIsPress4_4(state);
  const handle_isPress5_4 = state => setIsPress5_4(state);
  const handle_isPress6_4 = state => setIsPress6_4(state);
  const handle_isPress7_4 = state => setIsPress7_4(state);
  const handle_isPress8_4 = state => setIsPress8_4(state);
  const handle_isPress9_4 = state => setIsPress9_4(state);

  const [radioButtons_8_4, setRadioButtons_8_4] = useState([
    {
      id: '1',
      label: 'Yes, we may request access to geolocation.',
      value: 'Yes, we may request access to geolocation.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we won’t be requesting access to geolocation.',
      value: 'No, we won’t be requesting access to geolocation.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_8_4 = state => setRadioButtons_8_4(state);
  const [radioButtons_9_4, setRadioButtons_9_4] = useState([
    {
      id: '1',
      label: 'Yes, we may request access to certain features.',
      value: 'Yes, we may request access to certain features.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we won’t be requesting access to any features.',
      value: 'No, we won’t be requesting access to any features.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_9_4 = state => setRadioButtons_9_4(state);
  const [radioButtons_10_4, setRadioButtons_10_4] = useState([
    {
      id: '1',
      label: 'Yes, we may collect derivative data of our users.',
      value: 'Yes, we may collect derivative data of our users.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '2',
      label: 'No, we don’t collect any derivative data.',
      value: 'No, we don’t collect any derivative data.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_10_4 = state => setRadioButtons_10_4(state);
  const states_4 = [
    radioButtons_1_4,
    handle_radiobuttons_1_4,
    radioButtons_2_4,
    handle_radiobuttons_2_4,
    radioButtons_3_4,
    handle_radiobuttons_3_4,
    radioButtons_4_4,
    handle_radiobuttons_4_4,
    radioButtons_5_4,
    handle_radiobuttons_5_4,
    radioButtons_6_4,
    handle_radiobuttons_6_4,
    radioButtons_7_4,
    handle_radiobuttons_7_4,
    isPress1_4,
    handle_isPress1_4,
    isPress2_4,
    handle_isPress2_4,
    isPress3_4,
    handle_isPress3_4,
    isPress4_4,
    handle_isPress4_4,
    isPress5_4,
    handle_isPress5_4,
    isPress6_4,
    handle_isPress6_4,
    isPress7_4,
    handle_isPress7_4,
    isPress8_4,
    handle_isPress8_4,
    isPress9_4,
    handle_isPress9_4,
    radioButtons_8_4,
    handle_radiobuttons_8_4,
    radioButtons_9_4,
    handle_radiobuttons_9_4,
    radioButtons_10_4,
    handle_radiobuttons_10_4,
  ];

  //////////////////////////////////////////////////////5
  const [radioButtons_1_5, setRadioButtons_1_5] = useState([
    {
      id: '1',
      label: 'Yes, we may collect personal information from third parties.',
      value: 'Yes, we may collect personal information from third parties.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'No, we don’t collect any personal information from third parties',
      value: 'No, we don’t collect any personal information from third parties',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_1_5 = state => setRadioButtons_1_5(state);

  var [isPress1_5, setIsPress1_5] = useState(false);
  var [isPress2_5, setIsPress2_5] = useState(false);
  var [isPress3_5, setIsPress3_5] = useState(false);
  var [isPress4_5, setIsPress4_5] = useState(false);
  var [isPress5_5, setIsPress5_5] = useState(false);
  var [isPress6_5, setIsPress6_5] = useState(false);
  var [isPress7_5, setIsPress7_5] = useState(false);
  var [isPress8_5, setIsPress8_5] = useState(false);
  var [isPress9_5, setIsPress9_5] = useState(false);
  var [isPress10_5, setIsPress10_5] = useState(false);
  var [isPress11_5, setIsPress11_5] = useState(false);
  var [isPress12_5, setIsPress12_5] = useState(false);
  var [isPress13_5, setIsPress13_5] = useState(false);
  var [isPress14_5, setIsPress14_5] = useState(false);
  var [isPress15_5, setIsPress15_5] = useState(false);
  var [isPress16_5, setIsPress16_5] = useState(false);

  const handle_isPress1_5 = state => setIsPress1_5(state);
  const handle_isPress2_5 = state => setIsPress2_5(state);
  const handle_isPress3_5 = state => setIsPress3_5(state);
  const handle_isPress4_5 = state => setIsPress4_5(state);
  const handle_isPress5_5 = state => setIsPress5_5(state);
  const handle_isPress6_5 = state => setIsPress6_5(state);
  const handle_isPress7_5 = state => setIsPress7_5(state);
  const handle_isPress8_5 = state => setIsPress8_5(state);
  const handle_isPress9_5 = state => setIsPress9_5(state);
  const handle_isPress10_5 = state => setIsPress10_5(state);
  const handle_isPress11_5 = state => setIsPress11_5(state);
  const handle_isPress12_5 = state => setIsPress12_5(state);
  const handle_isPress13_5 = state => setIsPress13_5(state);
  const handle_isPress14_5 = state => setIsPress14_5(state);
  const handle_isPress15_5 = state => setIsPress15_5(state);
  const handle_isPress16_5 = state => setIsPress16_5(state);
  const [radioButtons_2_5, setRadioButtons_2_5] = useState([
    {
      id: '1',
      label:
        'Yes, we combine different bits of personal information to create consumer profiles.',
      value:
        'Yes, we combine different bits of personal information to create consumer profiles.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, no we don’t combine any personal information.',
      value: 'No, no we don’t combine any personal information.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_2_5 = state => setRadioButtons_2_5(state);
  const [radioButtons_3_5, setRadioButtons_3_5] = useState([
    {
      id: '1',
      label:
        'Yes, we may disclose personal information to business affiliates.',
      value:
        'Yes, we may disclose personal information to business affiliates.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label:
        'No, personal information will not be disclosed to business affiliates.',
      value:
        'No, personal information will not be disclosed to business affiliates.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_3_5 = state => setRadioButtons_3_5(state);
  const [radioButtons_4_5, setRadioButtons_4_5] = useState([
    {
      id: '1',
      label: 'Yes, we may disclose personal information to third parties.',
      value: 'Yes, we may disclose personal information to third parties.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, personal information will not be disclosed.',
      value: 'No, personal information will not be disclosed.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_4_5 = state => setRadioButtons_4_5(state);
  var [isPress1_5_, setIsPress1_5_] = useState(false);
  var [isPress2_5_, setIsPress2_5_] = useState(false);
  var [isPress3_5_, setIsPress3_5_] = useState(false);
  var [isPress4_5_, setIsPress4_5_] = useState(false);
  var [isPress5_5_, setIsPress5_5_] = useState(false);
  var [isPress6_5_, setIsPress6_5_] = useState(false);
  var [isPress7_5_, setIsPress7_5_] = useState(false);
  var [isPress8_5_, setIsPress8_5_] = useState(false);
  var [isPress9_5_, setIsPress9_5_] = useState(false);
  var [isPress10_5_, setIsPress10_5_] = useState(false);
  var [isPress11_5_, setIsPress11_5_] = useState(false);
  var [isPress12_5_, setIsPress12_5_] = useState(false);
  var [isPress13_5_, setIsPress13_5_] = useState(false);
  var [isPress14_5_, setIsPress14_5_] = useState(false);
  var [isPress15_5_, setIsPress15_5_] = useState(false);
  var [isPress16_5_, setIsPress16_5_] = useState(false);

  const handle_isPress1_5_ = state => setIsPress1_5_(state);
  const handle_isPress2_5_ = state => setIsPress2_5_(state);
  const handle_isPress3_5_ = state => setIsPress3_5_(state);
  const handle_isPress4_5_ = state => setIsPress4_5_(state);
  const handle_isPress5_5_ = state => setIsPress5_5_(state);
  const handle_isPress6_5_ = state => setIsPress6_5_(state);
  const handle_isPress7_5_ = state => setIsPress7_5_(state);
  const handle_isPress8_5_ = state => setIsPress8_5_(state);
  const handle_isPress9_5_ = state => setIsPress9_5_(state);
  const handle_isPress10_5_ = state => setIsPress10_5_(state);
  const handle_isPress11_5_ = state => setIsPress11_5_(state);
  const handle_isPress12_5_ = state => setIsPress12_5_(state);
  const handle_isPress13_5_ = state => setIsPress13_5_(state);
  const handle_isPress14_5_ = state => setIsPress14_5_(state);
  const handle_isPress15_5_ = state => setIsPress15_5_(state);
  const handle_isPress16_5_ = state => setIsPress16_5_(state);

  const [radioButtons_5_5, setRadioButtons_5_5] = useState([
    {
      id: '1',
      label: 'Yes, some personally identifiable information may be disclosed.',
      value: 'Yes, some personally identifiable information may be disclosed.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label:
        'No, only aggregate data and non-personally identifiable information may be disclosed.',
      value:
        'No, only aggregate data and non-personally identifiable information may be disclosed.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_5_5 = state => setRadioButtons_5_5(state);
  const [radioButtons_6_5, setRadioButtons_6_5] = useState([
    {
      id: '1',
      label: 'Yes, we will disclose personal information with the purchaser.',
      value: 'Yes, we will disclose personal information with the purchaser.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, we will retain and not disclose personal information.',
      value: 'No, we will retain and not disclose personal information.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_6_5 = state => setRadioButtons_6_5(state);
  const [radioButtons_7_5, setRadioButtons_7_5] = useState([
    {
      id: '1',
      label: 'Yes, we’ll disclose personal information upon lawful request.',
      value: 'Yes, we’ll disclose personal information upon lawful request.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, we will never disclose anything.',
      value: 'No, we will never disclose anything.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_7_5 = state => setRadioButtons_7_5(state);
  const states_5 = [
    radioButtons_1_5,
    handle_radiobuttons_1_5,
    isPress1_5,
    handle_isPress1_5,
    isPress2_5,
    handle_isPress2_5,
    isPress3_5,
    handle_isPress3_5,
    isPress4_5,
    handle_isPress4_5,
    isPress5_5,
    handle_isPress5_5,
    isPress6_5,
    handle_isPress6_5,
    isPress7_5,
    handle_isPress7_5,
    isPress8_5,
    handle_isPress8_5,
    isPress9_5,
    handle_isPress9_5,
    isPress10_5,
    handle_isPress10_5,
    isPress11_5,
    handle_isPress11_5,
    isPress12_5,
    handle_isPress12_5,
    isPress13_5,
    handle_isPress13_5,
    isPress14_5,
    handle_isPress14_5,
    isPress15_5,
    handle_isPress15_5,
    isPress16_5,
    handle_isPress16_5,
    radioButtons_2_5,
    handle_radiobuttons_2_5,
    radioButtons_3_5,
    handle_radiobuttons_3_5,
    radioButtons_4_5,
    handle_radiobuttons_4_5,
    isPress1_5_,
    handle_isPress1_5_,
    isPress2_5_,
    handle_isPress2_5_,
    isPress3_5_,
    handle_isPress3_5_,
    isPress4_5_,
    handle_isPress4_5_,
    isPress5_5_,
    handle_isPress5_5_,
    isPress6_5_,
    handle_isPress6_5_,
    isPress7_5_,
    handle_isPress7_5_,
    isPress8_5_,
    handle_isPress8_5_,
    isPress9_5_,
    handle_isPress9_5_,
    isPress10_5_,
    handle_isPress10_5_,
    isPress11_5_,
    handle_isPress11_5_,
    isPress12_5_,
    handle_isPress12_5_,
    isPress13_5_,
    handle_isPress13_5_,
    isPress14_5_,
    handle_isPress14_5_,
    isPress15_5_,
    handle_isPress15_5_,
    isPress16_5_,
    handle_isPress16_5_,
    radioButtons_5_5,
    handle_radiobuttons_5_5,
    radioButtons_6_5,
    handle_radiobuttons_6_5,
    radioButtons_7_5,
    handle_radiobuttons_7_5,
  ];
  /////////////////////////////////////////////////////////6

  const [radioButtons_1_6, setRadioButtons_1_6] = useState([
    {
      id: '1',
      label: 'As long as necessary to comply with the regulations.',
      value: 'As long as necessary to comply with the regulations.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
    {
      id: '2',
      label: 'As long as the user account remains active.',
      value: 'As long as the user account remains active.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '3',
      label: 'Until the purchase order or services are fulfilled.',
      value: 'Until the purchase order or services are fulfilled.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '4',
      label: 'Until our or our partners’ obligations are fulfilled.',
      value: 'Until our or our partners’ obligations are fulfilled.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
    {
      id: '5',
      label: 'All information will be deleted after a certain time.',
      value: 'All information will be deleted after a certain time.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: false,
    },
  ]);
  const handle_radiobuttons_1_6 = state => setRadioButtons_1_6(state);
  const [input_1_6, setInput_1_6] = useState('');
  const handle_input_1_6 = state => setInput_1_6(state);
  const [validno, setvalidno] = useState(true);
  const handlevalidno = state => setvalidno(state);
  const [radioButtons_2_6, setRadioButtons_2_6] = useState([
    {
      id: '1',
      label: 'Yes, a different person or company is responsible for it.',
      value: 'Yes, a different person or company is responsible for it.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label: 'No, it’s the same person or company.',
      value: 'No, it’s the same person or company.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_2_6 = state => setRadioButtons_2_6(state);

  const [flag_1_6, setflag_1_6] = useState(false);
  const handle_flag_1_6 = state => setflag_1_6(state);
  const [input_2_6, setInput_2_6] = useState('');
  const handle_input_2_6 = state => setInput_2_6(state);
  var [isPress1_6, setIsPress1_6] = useState(false);
  var [isPress2_6, setIsPress2_6] = useState(false);
  var [isPress3_6, setIsPress3_6] = useState(false);
  const handle_isPress1_6 = state => setIsPress1_6(state);
  const handle_isPress2_6 = state => setIsPress2_6(state);
  const handle_isPress3_6 = state => setIsPress3_6(state);
  const [input_3_6, setInput_3_6] = useState('');
  const handle_input_3_6 = state => setInput_3_6(state);
  const [radioButtons_3_6, setRadioButtons_3_6] = useState([
    {
      id: '1',
      label:
        'Yes, we’ve taken all the necessary measures to keep personal information secure.',
      value:
        'Yes, we’ve taken all the necessary measures to keep personal information secure..',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
    },
    {
      id: '2',
      label:
        'No, some of the personal information may not be processed or stored securely (not recommended).',
      value:
        'No, some of the personal information may not be processed or stored securely (not recommended).',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle: {color: '#585858'},
      selected: true,
    },
  ]);
  const handle_radiobuttons_3_6 = state => setRadioButtons_3_6(state);

  var [isPress4_6, setIsPress4_6] = useState(false);
  var [isPress5_6, setIsPress5_6] = useState(false);
  var [isPress6_6, setIsPress6_6] = useState(false);
  var [isPress7_6, setIsPress7_6] = useState(false);
  var [isPress8_6, setIsPress8_6] = useState(false);
  var [isPress9_6, setIsPress9_6] = useState(false);
  var [isPress10_6, setIsPress10_6] = useState(false);
  const handle_isPress4_6 = state => setIsPress4_6(state);
  const handle_isPress5_6 = state => setIsPress5_6(state);
  const handle_isPress6_6 = state => setIsPress6_6(state);
  const handle_isPress7_6 = state => setIsPress7_6(state);
  const handle_isPress8_6 = state => setIsPress8_6(state);
  const handle_isPress9_6 = state => setIsPress9_6(state);
  const handle_isPress10_6 = state => setIsPress10_6(state);
  const [input_4_6, setInput_4_6] = useState('');
  const handle_input_4_6 = state => setInput_4_6(state);
  const [input_5_6, setInput_5_6] = useState('');
  const handle_input_5_6 = state => setInput_5_6(state);
  const [input_6_6, setInput_6_6] = useState('');
  const handle_input_6_6 = state => setInput_6_6(state);

  var [isPress11_6, setIsPress11_6] = useState(false);
  var [isPress12_6, setIsPress12_6] = useState(false);
  var [isPress13_6, setIsPress13_6] = useState(false);
  const handle_isPress11_6 = state => setIsPress11_6(state);
  const handle_isPress12_6 = state => setIsPress12_6(state);
  const handle_isPress13_6 = state => setIsPress13_6(state);
  const [date, setDate] = useState(new Date());
  const handle_date = state => setDate(state);
  const [input_7_6, setInput_7_6] = useState('');
  const handle_input_7_6 = state => setInput_7_6(state);
  const [input_8_6, setInput_8_6] = useState('');
  const handle_input_8_6 = state => setInput_8_6(state);
  const [input_9_6, setInput_9_6] = useState('');
  const handle_input_9_6 = state => setInput_9_6(state);
  const [input_10_6, setInput_10_6] = useState('');
  const handle_input_10_6 = state => setInput_10_6(state);
  const [error_6, setError_6] = useState(false);
  const [empty_validationn_6, setempty_validation_6] = useState(true);
  const states_6 = [
    radioButtons_1_6,
    handle_radiobuttons_1_6,
    input_1_6,
    handle_input_1_6,
    validno,
    handlevalidno,
    radioButtons_2_6,
    handle_radiobuttons_2_6,
    flag_1_6,
    handle_flag_1_6,
    input_2_6,
    handle_input_2_6,
    isPress1_6,
    handle_isPress1_6,
    isPress2_6,
    handle_isPress2_6,
    isPress3_6,
    handle_isPress3_6,
    input_3_6,
    handle_input_3_6,
    radioButtons_3_6,
    handle_radiobuttons_3_6,
    isPress4_6,
    handle_isPress4_6,
    isPress5_6,
    handle_isPress5_6,
    isPress6_6,
    handle_isPress6_6,
    isPress7_6,
    handle_isPress7_6,
    isPress8_6,
    handle_isPress8_6,
    isPress9_6,
    handle_isPress9_6,
    isPress10_6,
    handle_isPress10_6,
    input_4_6,
    handle_input_4_6,
    input_5_6,
    handle_input_5_6,
    input_6_6,
    handle_input_6_6,
    isPress11_6,
    handle_isPress11_6,
    isPress12_6,
    handle_isPress12_6,
    isPress13_6,
    handle_isPress13_6,
    date,
    handle_date,
    input_7_6,
    handle_input_7_6,
    input_8_6,
    handle_input_8_6,
    input_9_6,
    handle_input_9_6,
    input_10_6,
    handle_input_10_6,
    empty_validationn_6,
  ];
  //////////////////////////////////////////////////7
  let x = '';
  if (radioButtons[0].selected === true) {
    x = 'Mobile App';
  } else if (radioButtons[1].selected === true) {
    x = 'Website';
  } else {
    x = 'Both';
  }

  let y = '';
  if (radioButtons_1[0].selected === true) {
    y = 'Yes, I would like to create a premium privacy policy.';
  } else {
    y = 'No, basic policy is fine.';
  }

  let z = '';
  if (radioButtons_2[0].selected === true) {
    z = 'Yes, it’s operated under a company name.';
  } else {
    z = 'No, it’s operated by an individual.';
  }

  let l = '';
  if (radioButtons_3[0].selected === true) {
    l = 'Yes, the company has a different short or trade name.';
  } else {
    l = 'No, the company doesn’t have a trade name.';
  }

  let m = '';
  if (radioButtons_4[0].selected === true) {
    m = 'Yes, users can sign up for an account.';
  } else {
    m = 'No, users can’t sign up or create an account.';
  }

  let n = '';
  if (radioButtons_5[0].selected === true) {
    n = 'Yes, users can sign up using third-party services.';
  } else {
    n = 'No, users can’t sign up using third-party services.';
  }

  let o = '';
  if (radioButtons_6[0].selected === true) {
    o = 'Yes, users have full access to their personal information.';
  } else {
    o = 'No, users don’t have access to their information.';
  }

  let p = '';
  if (radioButtons_7[0].selected === true) {
    p =
      'Yes, users can delete their accounts and personal information at any time.';
  } else {
    p = 'No, user accounts and personal information cannot be deleted.';
  }

  let q = '';
  if (radioButtons_8[0].selected === true) {
    q = 'They can log in to their account settings page to delete it.';
  } else if (radioButtons_8[1].selected === true) {
    q = 'They can contact us to submit a deletion request.';
  } else {
    q = '';
  }

  let r = '';
  if (radioButtons_9[0].selected === true) {
    r = 'Yes, users can submit and publish their own content.';
  } else {
    r = 'No, users can’t publish anything.';
  }

  let s = '';
  if (radioButtons_1_3[0].selected === true) {
    s = 'Yes, content can be shared on social networks.';
  } else {
    s = 'No, users can’t share content on social networks.';
  }

  let t = '';
  if (radioButtons_2_3[0].selected === true) {
    t =
      'Yes, users can interact with each other (via comments, messages, etc).';
  } else {
    t = 'No, users cannot interact with each other.';
  }

  let u = '';
  if (radioButtons_3_3[0].selected === true) {
    u = 'Yes, personally identifiable information may be displayed.';
  } else {
    u = 'No, users remain completely anonymous.';
  }

  let v = '';
  if (radioButtons_4_3[0].selected === true) {
    v =
      'Yes, our target audience or users may include residents of California (required for the CCPA compliance).';
  } else {
    v = 'No, we don’t target anyone in California.';
  }
  let w = '';
  if (radioButtons_5_3[0].selected === true) {
    w =
      'Yes, our target audience or users may include residents in the European Union (required for the GDPR compliance).';
  } else {
    w = 'No, we don’t target anyone in the European Union.';
  }

  let a = '';
  if (radioButtons_6_3[0].selected === true) {
    a =
      'Yes, our target audience or users may include those under the age of 18.';
  } else {
    a = 'No, we don’t target anyone under the age of 18.';
  }

  let b = '';
  if (radioButtons_7_3[0].selected === true) {
    b =
      'Yes, our target audience or users may include children under the age of 13.';
  } else if (radioButtons_7_3[0].selected === true) {
    b = 'No, we don’t target anyone under the age of 13.';
  } else {
    b = '';
  }

  let c = '';
  if (radioButtons_8_3[0].selected === true) {
    c = 'Yes, we may collect certain information from children.';
  } else if (radioButtons_8_3[0].selected === true) {
    c = 'No, we don’t collect anything from children.';
  } else {
    c = '';
  }

  let d = '';
  if (radioButtons_9_3[0].selected === true) {
    d = 'Yes, submitted information will be publicly available to anyone.';
  } else if (radioButtons_9_3[0].selected === true) {
    d = 'No, submitted information will not be publicly available.';
  } else {
    d = '';
  }

  let e = '';
  if (radioButtons_10_3[0].selected === true) {
    e = 'Yes, submitted information can be hidden from public access.';
  } else if (radioButtons_10_3[0].selected === true) {
    e = 'No, there’s no such option available.';
  } else {
    e = '';
  }

  let list_1 = [];
  if (isPress1 === true) {
    list_1.push(
      'We don’t require a child to disclose more information than is necessary to use the mobile app.',
    );
  }
  if (isPress2 === true) {
    list_1.push(
      'Parents can review their child’s information, delete it, and refuse to allow any further collection or use of such information.',
    );
  }
  if (isPress3 === true) {
    list_1.push('Parents have an easy method for giving consent.');
  }

  let f = '';
  if (radioButtons_11_3[0].selected === true) {
    f = 'Yes, we sell products or services or plan to sell in the future.';
  } else {
    f = 'No, we do not and will not sell anything.';
  }

  let g = '';
  if (radioButtons_12_3[0].selected === true) {
    g = 'Yes, we offer products or services provided by third-party companies.';
  } else {
    g = 'No, all products and services are provided by us.';
  }

  let h = '';
  if (radioButtons_13_3[0].selected === true) {
    h =
      'Yes, we’ve taken all the necessary measures to keep sensitive payment information secure.';
  } else {
    h =
      'No, some of the sensitive payment information may not be processed or stored securely (not recommended).';
  }

  let i = '';
  if (radioButtons_14_3[0].selected === true) {
    i =
      'Yes, we may store payment information for future purchases or recurring billing (such as credit card numbers or tokens).';
  } else {
    i = 'No, we don’t store any sensitive payment information.';
  }

  let j = '';
  if (radioButtons_15_3[0].selected === true) {
    j = 'Yes, we may perform credit checks.';
  } else {
    j = 'No, we don’t perform credit checks.';
  }

  let k = '';
  if (radioButtons_16_3[0].selected === true) {
    k = 'Yes, we use third-party analytics tools.';
  } else {
    k = 'No, we don’t use any third-party analytics tools.';
  }

  let aa = '';
  if (radioButtons_1_4[0].selected === true) {
    aa =
      'Yes, user’s personal information is anonymized to prevent analytics tools from linking it to an individual person.';
  } else {
    aa =
      'No, analytics tools are able to link user’s personal information to an individual person.';
  }

  let ab = '';
  if (radioButtons_2_4[0].selected === true) {
    ab = 'Yes, there may be affiliate links.';
  } else {
    ab = 'No, there are no affiliate links.';
  }

  let ac = '';
  if (radioButtons_3_4[0].selected === true) {
    ac = 'Yes, there may be ads displayed.';
  } else {
    ac = 'No, there are no ads.';
  }

  let ad = '';
  if (radioButtons_4_4[0].selected === true) {
    ad =
      'Yes, we may do targeted advertising to users based on collected data.';
  } else {
    ad = 'No, we don’t collect user data for remarketing.';
  }

  let ae = '';
  if (radioButtons_5_4[0].selected === true) {
    ae = 'Yes, users can opt to receive email newsletters from us.';
  } else {
    ae = 'No, we don’t send any newsletters.';
  }

  let af = '';
  if (radioButtons_6_4[0].selected === true) {
    af = 'Yes, users can opt to receive push notifications from us.';
  } else {
    af = 'No, we don’t send push notifications.';
  }

  let ag = '';
  if (radioButtons_7_4[0].selected === true) {
    ag = 'Yes, we use a third-party provider to send push notifications.';
  } else {
    ag = 'No, we send push notifications using our own servers.';
  }
  let list_2 = [];
  if (isPress1_4 === true) {
    list_2.push(
      'Account details (such as user name, unique user ID, password, etc)',
    );
  }
  if (isPress2_4 === true) {
    list_2.push(
      'Contact information (such as email address, phone number, etc)',
    );
  }
  if (isPress3_4 === true) {
    list_2.push(
      'Basic personal information (such as name, country of residence, etc)',
    );
  }
  if (isPress4_4 === true) {
    list_2.push(
      'Sensitive personal information (ethnicity, religious beliefs, mental health, etc)',
    );
  }
  if (isPress5_4 === true) {
    list_2.push(
      'Biometric information (facial recognition, fingerprints, etc)',
    );
  }
  if (isPress6_4 === true) {
    list_2.push('Proof of identity (such as photocopy of a government ID)');
  }
  if (isPress7_4 === true) {
    list_2.push(
      'Payment information (such as credit card details, bank details, etc)',
    );
  }
  if (isPress8_4 === true) {
    list_2.push(
      'Information about other individuals (such as your family members, friends, etc)',
    );
  }
  if (isPress9_4 === true) {
    list_2.push(
      'Any other materials you willingly submit to us (such as articles, images, feedback, etc)',
    );
  }

  let ah = '';
  if (radioButtons_8_4[0].selected === true) {
    ah = 'Yes, we may request access to geolocation.';
  } else {
    ah = 'No, we won’t be requesting access to geolocation.';
  }

  let ai = '';
  if (radioButtons_9_4[0].selected === true) {
    ai = 'Yes, we may request access to certain features.';
  } else {
    ai = 'No, we won’t be requesting access to any features.';
  }

  let aj = '';
  if (radioButtons_10_4[0].selected === true) {
    aj = 'Yes, we may collect derivative data of our users.';
  } else {
    aj = 'No, we don’t collect any derivative data.';
  }

  let ak = '';
  if (radioButtons_1_5[0].selected === true) {
    ak = 'Yes, we may collect personal information from third parties.';
  } else {
    ak = 'No, we don’t collect any personal information from third parties';
  }

  let list_3 = [];
  if (isPress1_5 === true) {
    list_3.push('Create and manage user accounts');
  }
  if (isPress2_5 === true) {
    list_3.push('Fulfill and manage orders');
  }
  if (isPress3_5 === true) {
    list_3.push('Deliver products or services');
  }
  if (isPress4_5 === true) {
    list_3.push('Improve products and services');
  }
  if (isPress5_5 === true) {
    list_3.push('Send administrative information');
  }
  if (isPress6_5 === true) {
    list_3.push('Send marketing and promotional communications');
  }
  if (isPress7_5 === true) {
    list_3.push('Send product and service updates');
  }
  if (isPress8_5 === true) {
    list_3.push('Respond to inquiries and offer support');
  }
  if (isPress9_5 === true) {
    list_3.push('Request user feedback');
  }
  if (isPress10_5 === true) {
    list_3.push('Improve user experience');
  }
  if (isPress11_5 === true) {
    list_3.push('Post customer testimonials');
  }
  if (isPress12_5 === true) {
    list_3.push('Deliver targeted advertising');
  }
  if (isPress13_5 === true) {
    list_3.push('Administer prize draws and competitions');
  }
  if (isPress14_5 === true) {
    list_3.push('Enforce terms and conditions and policies');
  }
  if (isPress15_5 === true) {
    list_3.push('Protect from abuse and malicious users');
  }
  if (isPress16_5 === true) {
    list_3.push('Respond to legal requests and prevent harm');
  }
  let al = '';
  if (radioButtons_2_5[0].selected === true) {
    al =
      'Yes, we combine different bits of personal information to create consumer profiles.';
  } else {
    al = 'No, no we don’t combine any personal information.';
  }

  let am = '';
  if (radioButtons_3_5[0].selected === true) {
    am = 'Yes, we may disclose personal information to business affiliates.';
  } else {
    am =
      'No, personal information will not be disclosed to business affiliates.';
  }

  let an = '';
  if (radioButtons_4_5[0].selected === true) {
    an = 'Yes, we may disclose personal information to third parties.';
  } else {
    an = 'No, personal information will not be disclosed.';
  }
  let list_4 = [];
  if (isPress1_5_) {
    list_4.push('Advertising networks');
  }
  if (isPress2_5_) {
    list_4.push('Affiliate programs');
  }
  if (isPress3_5_) {
    list_4.push('Cloud computing services');
  }
  if (isPress4_5_) {
    list_4.push('Communication and collaboration services');
  }
  if (isPress5_5_) {
    list_4.push('Data analytics services');
  }
  if (isPress6_5_) {
    list_4.push('Data storage services');
  }
  if (isPress7_5_) {
    list_4.push('Financial services');
  }
  if (isPress8_5_) {
    list_4.push('Government agencies');
  }
  if (isPress9_5_) {
    list_4.push('Order fulfillment services');
  }
  if (isPress10_5_) {
    list_4.push('Payment processors');
  }
  if (isPress11_5_) {
    list_4.push('Performance monitoring services');
  }
  if (isPress12_5_) {
    list_4.push('Product engineering and design services');
  }
  if (isPress13_5_) {
    list_4.push('Sales and marketing services');
  }
  if (isPress14_5_) {
    list_4.push('Social networks');
  }
  if (isPress15_5_) {
    list_4.push('User authentication services');
  }
  if (isPress16_5_) {
    list_4.push('Website hosting service providers');
  }
  let ao = '';
  if (radioButtons_5_5[0].selected === true) {
    ao = 'Yes, some personally identifiable information may be disclosed.';
  } else {
    ao =
      'No, only aggregate data and non-personally identifiable information may be disclosed.';
  }

  let ap = '';
  if (radioButtons_6_5[0].selected === true) {
    ap = 'Yes, we will disclose personal information with the purchaser.';
  } else {
    ap = 'No, we will retain and not disclose personal information.';
  }

  let aq = '';
  if (radioButtons_7_5[0].selected === true) {
    aq = 'Yes, we’ll disclose personal information upon lawful request.';
  } else {
    aq = 'No, we will never disclose anything.';
  }

  let ar = '';
  if (radioButtons_1_6[0].selected === true) {
    ar = 'As long as necessary to comply with the regulations.';
  } else if (radioButtons_1_6[1].selected === true) {
    ar = 'As long as the user account remains active.';
  } else if (radioButtons_1_6[2].selected === true) {
    ar = 'Until the purchase order or services are fulfilled.';
  } else if (radioButtons_1_6[3].selected === true) {
    ar = 'Until our or our partners’ obligations are fulfilled.';
  } else {
    ar = 'All information will be deleted after a certain time.';
  }

  let as = '';
  if (radioButtons_2_6[0].selected === true) {
    as = 'Yes, a different person or company is responsible for it.';
  } else {
    as = 'No, it’s the same person or company.';
  }
  let list_5 = [];
  if (isPress1_6 === true) {
    list_5.push('Contact form');
  }
  if (isPress2_6 === true) {
    list_5.push('Email address');
  }
  if (isPress3_6 === true) {
    list_5.push('Business address');
  }

  let at = '';
  if (radioButtons_3_6[0].selected === true) {
    at =
      'Yes, we’ve taken all the necessary measures to keep personal information secure.';
  } else {
    at =
      'No, some of the personal information may not be processed or stored securely (not recommended).';
  }

  let list_6 = [];
  if (isPress4_6 === true) {
    list_6.push('Post notifications in the mobile app.');
  }
  if (isPress5_6 === true) {
    list_6.push('Notify users via email.');
  }
  if (isPress6_6 === true) {
    list_6.push('Notify users via phone call.');
  }
  if (isPress7_6 === true) {
    list_6.push('Send users a letter.');
  }

  let list_7 = [];
  if (isPress8_6 === true) {
    list_7.push('Contact form');
  }
  if (isPress9_6 === true) {
    list_7.push('Email address');
  }
  if (isPress10_6 === true) {
    list_7.push('Business address');
  }

  let list_8 = [];
  if (isPress11_6 === true) {
    list_8.push(
      'Update the modification date at the bottom of the privacy policy page.',
    );
  }
  if (isPress12_6 === true) {
    list_8.push('Post notifications in the mobile app.');
  }
  if (isPress13_6 === true) {
    list_8.push('Notify users via email.');
  }

  const request_object = {
    agreement_compliance_type: 'gdpr-privacy-policy',
    organization_id: orgId,
    location: input_1,
    jurisdictional_laws: input_2,
    privacy_policy_will_be_used_for: x,
    would_you_like_to_create_a_premium_privacy_policy: y,
    do_you_operate_your_app_under_a_company_name: z,
    company_name: input_1_2,
    does_your_company_have_a_short_or_trade_name: l,
    short_or_trade_name_of_your_company: input_2_2,
    can_users_sign_up_and_create_account_in_your_app: m,
    can_users_sign_up_using_social_media_and_other_third_party_service: n,
    can_users_view_and_change_their_personal_information: o,
    can_users_delete_their_account_and_personal_information: p,
    how_can_users_delete_their_account_and_personal_information: q,
    can_users_publish_anything_in_your_app: r,
    can_users_share_content_available_in_your_app: s,
    can_users_interact_with_each_other_in_your_app: t,
    when_users_interact_can_they_see_other_users_personally_identifiable_information:
      u,
    does_your_target_audience_include_resident_of_california_usa: v,
    does_your_target_audience_include_resident_of_european_union: w,
    does_your_target_audience_include_those_under_the_age_of_18: a,
    does_your_target_audience_include_those_under_the_age_of_13: b,
    do_you_collect_any_information_from_children: c,
    will_information_submitted_by_children_be_publicly_available: d,
    is_there_an_option_to_keep_submitted_information_private: e,
    items_apply_to_children_using_the_app: list_1,
    do_you_currently_sell_or_plan_on_selling_products_or_services_in_your_app:
      f,
    do_you_offer_products_or_services_provided_by_third_party_companies: g,
    do_you_have_security_measures_in_place_to_protect_sensitive_payment_information:
      h,
    do_you_store_any_sensitive_payment_information: i,
    do_you_perform_credit_checks_on_your_customers_members_of_their_household:
      j,
    do_you_use_third_party_analytics_or_tracking_tools: k,
    do_you_anonymize_users_personal_information: aa,
    do_you_have_affiliate_links_in_your_app: ab,
    do_you_display_ads_in_your_app: ac,
    do_you_collect_users_data_for_remarketing: ad,
    do_you_send_email_newsletters_to_users: ae,
    do_you_send_push_notifications_to_your_users: af,
    do_you_use_third_party_provider_to_send_push_notification: ag,
    what_kind_of_information_do_you_collect_from_your_users: list_2,
    will_you_be_requesting_access_to_the_geolocation_of_your_users: ah,
    will_you_be_requesting_access_to_various_features_on_yours_users_device: ai,
    do_you_collect_any_derivative_data_from_your_users: aj,
    do_you_collect_users_personal_information_from_third_party_source: ak,
    what_will_you_do_with_the_information_you_collect: list_3,
    do_you_combine_different_bits_of_personal_information: al,
    will_you_disclose_personal_information_to_business_affiliates: am,
    will_you_disclose_personal_information_to_third_parties: an,
    what_are_the_categories_of_third_parties_you_may_disclose_personal_information_to:
      list_4,
    will_the_information_disclosed_to_third_parties_contain_any_personally_identifiable_details:
      ao,
    will_you_disclose_personal_information_in_the_event_of_a_business_sale_or_merger:
      ap,
    will_you_disclose_personal_information_to_law_enforcement_agencies_upon_lawful_requests:
      aq,
    how_long_will_you_store_your_users_personal_information: ar,
    what_is_the_maximum_time_you_will_store_users_personal_information:
      parseFloat(input_1_6),
    is_the_person_or_company_responsible_for_the_protection_of_personal_information:
      as,
    what_is_your_dpos_name: input_2_6,
    how_can_users_contact_your_dpo: list_5,
    what_is_your_dpos_email_address: input_3_6,
    do_you_have_security_measures_in_place_to_project_personal_information: at,
    what_kind_of_responsive_action_will_you_take_if_you_have_a_data_breach:
      list_6,
    how_can_users_contact_you_regarding_this_policy: list_7,
    what_is_the_url_of_your_contact_form: input_4_6,
    what_is_your_email_address: input_5_6,
    what_is_your_business_address: input_6_6,
    how_will_you_notify_users_of_the_updates_to_this_policy: list_8,
    last_update: generate_date(date.toLocaleDateString()),
    website_or_app_name: input_7_6,
    website_or_app_url: input_8_6,
    website_or_app_contact_page_url: input_9_6,
    website_or_app_contact_email: input_10_6,
  };

  console.log(request_object);
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
              let x = true;
              if (
                (radioButtons_2[0].selected === true &&
                  empty_validation([input_1_2]) === false) ||
                (radioButtons_3[0].selected === true &&
                  empty_validation([input_2_2]) === false)
              ) {
                setempty_validation_2(false);
                x = false;
              } else {
                x = true;
                setempty_validation_2(true);
              }

              setError_2(!x);
            }}>
            <View>
              <Policy2 list={states_2} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}>
            <View>
              <Policy3 list={states_3} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}>
            <View>
              <Policy5 list={states_4} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}>
            <View>
              <Policy6 list={states_5} />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            previousBtnStyle={previousButton}
            errors={error_6}
            onNext={() => {
              const x = number_validation_1(input_1_6);
              let y = true;
              if (
                input_1_6 === '' ||
                input_7_6 === '' ||
                input_8_6 === '' ||
                input_9_6 === '' ||
                input_10_6 === '' ||
                (radioButtons_2_6[0].selected === true && input_2_6 === '') ||
                (radioButtons_2_6[0].selected === true && input_3_6 === '') ||
                (isPress8_6 === true && input_4_6 === '') ||
                (isPress9_6 === true && input_5_6 === '') ||
                (isPress10_6 === true && input_6_6 === '')
              ) {
                setempty_validation_6(false);
                y = false;
              } else {
                setempty_validation_6(true);
                y = true;
              }
              let z = true;
              if (isPress8_6 === true && url_validation(input_4_6) === false) {
                z = false;
              } else {
                z = true;
              }
              let l = true;
              if (
                isPress9_6 === true &&
                email_validation(input_5_6) === false
              ) {
                l = false;
              } else {
                l = true;
              }
              let m = true;
              if (flag_1_6 === true && email_validation(input_3_6) === false) {
                m = false;
              } else {
                m = true;
              }
              let n = true;
              if (url_validation(input_8_6) === false) {
                n = false;
              } else {
                n = true;
              }
              let o = true;
              if (url_validation(input_9_6) === false) {
                o = false;
              } else {
                o = true;
              }
              let p = true;
              if (email_validation(input_10_6) === false) {
                p = false;
              } else {
                p = true;
              }
              setError_6(!(x & y & z & l & m & n & o & p));
            }}>
            <View>
              <Policy7 list={states_6} />
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
              <Policy4 object={request_object} />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
