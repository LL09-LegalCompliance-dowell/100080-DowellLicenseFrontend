import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View} from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from './Policy4';
import Policy5 from './Policy5';
import Policy6 from '../Cookies/Policy4';
import {empty_validation, email_validation} from '../validations';

const generate_date = date => {
  const temp = date.split('/');
  return '20' + temp[2] + '-' + temp[0] + '-' + temp[1];
};

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
  let x;
  if (radioButtons[0].selected === true) {
    x = 'Individual';
  } else if (radioButtons[1].selected === true) {
    x = 'Company';
  } else if (radioButtons[2].selected === true) {
    x = 'Partnership';
  } else {
    x = 'Other';
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
  let y;
  if (radioButtons[0].selected === true) {
    y = 'Individual';
  } else if (radioButtons[1].selected === true) {
    y = 'Company';
  } else if (radioButtons[2].selected === true) {
    y = 'Partnership';
  } else {
    y = 'Other';
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
      value: 'days',
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
      value: 'months',
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
      value: 'years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  let z;
  if (radioButtons[0].selected === true) {
    z = 'days';
  } else if (radioButtons[1].selected === true) {
    z = 'months';
  } else {
    z = 'years';
  }

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
  let a;
  if (radioButtons[0].selected === true) {
    a = 'Yes';
  } else {
    a = 'No';
  }

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
  let b;
  if (radioButtons[0].selected === true) {
    b = 'Yes';
  } else {
    b = 'No';
  }

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
  let c;
  if (radioButtons[0].selected === true) {
    c = 'Yes';
  } else {
    c = 'No';
  }
  const [radioButtons_5_2, setRadioButtons_5_2] = useState([
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
  let d;
  if (radioButtons[0].selected === true) {
    d = 'Yes';
  } else {
    d = 'No';
  }
  const [radioButtons_6_2, setRadioButtons_6_2] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'days',
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
      value: 'months',
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
      value: 'years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);
  let e;
  if (radioButtons[0].selected === true) {
    e = 'days';
  } else if (radioButtons[1].selected === true) {
    e = 'months';
  } else {
    e = 'years';
  }
  const [radioButtons_7_2, setRadioButtons_7_2] = useState([
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
  if (radioButtons[0].selected === true) {
    f = 'Yes';
  } else {
    f = 'No';
  }
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
  const handle_radiobuttons_5_2 = state => setRadioButtons_5_2(state);
  const [input_8_1, setInput_8_1] = useState('');
  const handle_input_8_1 = state => setInput_8_1(state);
  // const [input_9_1, setInput_9_1] = useState('');
  // const handle_input_9_1 = state => setInput_9_1(state);
  const handle_radiobuttons_6_2 = state => setRadioButtons_6_2(state);
  const handle_radiobuttons_7_2 = state => setRadioButtons_7_2(state);

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
    radioButtons_2,
    handle_radiobuttons_2,
    input_4_1,
    handle_input_4_1,
    radioButtons_3,
    handle_radiobuttons_3,
    input_5_1,
    handle_input_5_1,
    radioButtons_4,
    handle_radiobuttons_4,
    input_6_1,
    handle_input_6_1,
    input_7_1,
    handle_input_7_1,
    radioButtons_5_2,
    handle_radiobuttons_5_2,
    input_8_1,
    handle_input_8_1,
    radioButtons_6_2,
    handle_radiobuttons_6_2,
    // input_9_1,
    // handle_input_9_1,
    // radioButtons_7_2,
    // handle_radiobuttons_7_2,
  ];
  const inputs_1 = [
    input_1_1,
    input_2_1,
    input_3_1,
    input_4_1,
    input_5_1,
    input_6_1,
    input_7_1,
    input_8_1,
    // input_9_1,
  ];
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
      label: 'Term is Indefinite',
      value: 'Term is Indefinite',
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
      label: 'End upon a agreed date',
      value: 'End upon a agreed date',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
    {
      id: '3',
      label: 'End upon occurrence of a defined event',
      value: 'End upon occurrence of a defined event',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_6_3, setRadioButtons_6_3] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'days',
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
      value: 'months',
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
      value: 'years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [radioButtons_7_3, setRadioButtons_7_3] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'days',
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
      value: 'months',
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
      value: 'years',
      size: 18,
      color: '#489503',
      borderColor: '##585858',
      labelStyle: {
        color: '#585858',
      },
    },
  ]);

  const [empty_validationn_2, setempty_validation_2] = useState(true);
  const [error_3, setError_3] = useState(false);
  const handle_radiobuttons_5 = state => setRadioButtons_5(state);
  const handle_radiobuttons_6 = state => setRadioButtons_6(state);
  const handle_radiobuttons_6_3 = state => setRadioButtons_6_3(state);
  const handle_radiobuttons_7_3 = state => setRadioButtons_7_3(state);
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
    input_1_2,
    handle_input_1_2,
    input_2_2,
    handle_input_2_2,
    input_3_2,
    handle_input_3_2,
    radioButtons_6_3,
    handle_radiobuttons_6_3,
    input_4_2,
    handle_input_4_2,
    input_5_2,
    handle_input_5_2,
    input_6_2,
    handle_input_6_2,
    date_2,
    handle_date_2,
    input_7_2,
    handle_input_7_2,
    radioButtons_7_3,
    handle_radiobuttons_7_3,
    date_3,
    handle_date_3,
    input_8_2,
    handle_input_8_2,
    input_9_2,
    handle_input_9_2,
  ];
  const inputs_2 = [
    input_1_2,
    input_2_2,
    input_3_2,
    input_4_2,
    input_5_2,
    input_6_2,
    input_7_2,
    input_8_2,
    input_9_2,
    // input_10_2,
  ];
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
  const [radioButtons_7_4, setRadioButtons_7_4] = useState([
    {
      id: '1',
      label: 'Day',
      value: 'days',
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
      label: 'Mont',
      value: 'months',
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
      value: 'years',
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
  const handle_radiobuttons_7_4 = state => setRadioButtons_7_4(state);
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
  const [input_14_3, setInput_14_3] = useState('');
  const handle_input_14_3 = state => setInput_14_3(state);

  const states_3 = [
    empty_validationn_3,
    input_1_3,
    handle_input_1_3,
    radioButtons_7,
    handle_radiobuttons_7,
    input_2_3,
    handle_input_2_3,
    radioButtons_7_4,
    handle_radiobuttons_7_4,
    input_3_3,
    handle_input_3_3,
    input_4_3,
    handle_input_4_3,
    input_5_3,
    handle_input_5_3,
    input_6_3,
    handle_input_6_3,
    radioButtons_8,
    handle_radiobuttons_8,
    radioButtons_9,
    handle_radiobuttons_9,

    input_7_3,
    handle_input_7_3,
    radioButtons_10,
    handle_radiobuttons_10,
    radioButtons_11,
    handle_radiobuttons_11,
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
    input_14_3,
    handle_input_14_3,
  ];
  const inputs_3 = [
    input_1_3,
    input_2_3,
    input_3_3,
    input_4_3,
    input_5_3,
    input_6_3,
    input_7_3,
    input_8_3,
    input_9_3,
    input_10_3,
    input_11_3,
    input_12_3,
    input_13_3,
  ];
  //5
  const [radioButtons_1_5, setRadioButtons_1_5] = useState([
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
  const [radioButtons_2_5, setRadioButtons_2_5] = useState([
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
  const [error_5, setError_5] = useState(false);
  const [empty_validationn_4, setempty_validation_4] = useState(true);
  const handle_radiobuttons_2_5 = state => setRadioButtons_2_5(state);
  const [input_1_4, setInput_1_4] = useState('');
  const handle_input_1_4 = state => setInput_1_4(state);
  const [input_2_4, setInput_2_4] = useState('');
  const handle_input_2_4 = state => setInput_1_4(state);
  const [input_3_4, setInput_3_4] = useState('');
  const handle_input_3_4 = state => setInput_3_4(state);
  const [date_5, setDate_5] = useState(new Date());
  const handle_date_5 = state => setDate_5(state);
  const [input_4_4, setInput_4_4] = useState('');
  const handle_input_4_4 = state => setInput_4_4(state);
  const [date_6, setDate_6] = useState(new Date());
  const handle_date_6 = state => setDate_6(state);
  const handle_radiobuttons_1_5 = state => setRadioButtons_1_5(state);
  const [input_5_4, setInput_5_4] = useState('');
  const handle_input_5_4 = state => setInput_5_4(state);
  const [input_6_4, setInput_6_4] = useState('');
  const handle_input_6_4 = state => setInput_6_4(state);
  const [input_7_4, setInput_7_4] = useState('');
  const handle_input_7_4 = state => setInput_7_4(state);
  const [date_7, setDate_7] = useState(new Date());
  const handle_date_7 = state => setDate_7(state);
  const [input_8_4, setInput_8_4] = useState('');
  const handle_input_8_4 = state => setInput_8_4(state);
  const [date_8, setDate_8] = useState(new Date());
  const handle_date_8 = state => setDate_8(state);

  const states_4 = [
    empty_validationn_4,
    radioButtons_2_5,
    handle_radiobuttons_2_5,
    input_1_4,
    handle_input_1_4,
    input_2_4,
    handle_input_2_4,
    input_3_4,
    handle_input_3_4,
    date_5,
    handle_date_5,
    input_4_4,
    handle_input_4_4,
    date_6,
    handle_date_6,
    radioButtons_1_5,
    handle_radiobuttons_1_5,
    input_5_4,
    handle_input_5_4,
    input_6_4,
    handle_input_6_4,
    input_7_4,
    handle_input_7_4,
    date_7,
    handle_date_7,
    input_8_4,
    handle_input_8_4,
    date_8,
    handle_date_8,
  ];
  const inputs_4 = [
    input_1_4,
    input_2_4,
    input_3_4,
    input_4_4,
    input_5_4,
    input_6_4,
    input_7_4,
    input_8_4,
  ];

  const request_object = {
    agreement_compliance_type: 'software-license-policy',
    organization_id: 'ROD345OS443345OS443OSS',
    date_of_execution_of_document: generate_date(date.toLocaleDateString()),
    party_1_entity_type: x,
    party_1_full_name: input_1,
    party_1_postal_address: input_2,
    party_1_jurisdiction_incorporated: input_3,
    party_1_registration_number: input_4,
    party_1_registrar_office_address_1: input_5,
    party_1_registrar_office_address_2: input_6,
    party_1_registrar_office_address_3: input_7,
    party_1_principal_place_of_business: input_8,
    party_2_entity_type: y,
    party_2_full_name: input_9,
    party_2_postal_address: input_10,
    party_2_jurisdiction_incorporated: input_11,
    party_2_registration_number: input_12,
    party_2_registrar_office_address_1: input_13,
    party_2_registrar_office_address_2: input_14,
    party_2_registrar_office_address_3: input_15,
    party_2_principal_place_of_business: input_16,
    // second screen starts here
    charges_payable: input_1_1,
    software_document_identification: input_2_1,
    contract_effective_date: generate_date(date_1.toLocaleDateString()),
    minimum_terms_apply: input_3_1,
    minimum_terms_apply_unit: z,
    is_software_form_specified: a,
    software_form: input_4_1,
    is_non_material_defects_count_as_software_defects: b,
    ways_defect_affect_software: input_5_1,
    is_set_of_exclusions_included: c,
    exclusions_apply: input_6_1,
    software_specification: input_7_1,
    can_software_specification_be_varied_by_the_parties: d,
    terms_of_contract_duration: input_8_1,
    terms_of_contract_duration_unit: e,
    is_inline_copy_right_remove: false,
    is_term_of_contract_indefinite: false,
    contract_termination_date: '2022-10-20',
    events_that_will_cause_contract_to_be_terminated: 'Nil',
    number_of_license_to_be_deliver: 4,
    number_of_license_to_be_deliver_unit: 'pcs',
    software_delivery_channel: 'Email',
    within_what_period_must_software_be_delivered: 12,
    within_what_period_must_software_be_delivered_unit: 'Days',
    what_did_licensor_supply_to_the_licensee: 'software',
    purpose_by_reference_to_which_sub_licensing_is_permitted: 'Use For',
    when_should_invoice_be_issued: 'Nil',
    invoicing_date: '2022-10-20',
    period_for_payment_of_invoices: 85,
    period_for_payment_of_invoices_unit: 'Days',
    effective_date_for_invoice_payment: '2022-10-20',
    invoice_payment_method: 'Nil',
    interest_rate_apply_to_late_payment: 2450.55,
    optional_element: '',
    is_warranty_relate_to_a_specific_period: true,
    scope_of_warranty: 'Nil',
    jurisdictional_coverage_of_warranty: 'Nil',
    period_apply_to_warranty: 3,
    period_apply_to_warranty_unit: 'Months',
    circumstances_in_which_licensor_may_exercise_its_rights: 'Nil',
    should_there_be_an_express_requirement_for_licensor_to_act_reasonably: false,
    are_there_limitations_on_right_to_modify: false,
    limitations_on_right_to_modify_specification: 'Nil',
    termination_notice_period_apply: 3,
    termination_notice_period_apply_unit: 'Months',
    is_termination_period_expirable: false,
    relevant_termination_period: 0,
    relevant_termination_period_unit: 'Days',
    relevant_termination_period_date: '2022-10-20',
    circumstances_in_which_a_party_may_terminate_for_breach: 'Nil',
    time_frame_for_the_notice_period: 0,
    time_frame_for_the_notice_period_unit: 'Months',
    sent_contractual_notices_to_the_licensor_name: 'Nil',
    sent_contractual_notices_to_the_licensor_address_1: 'Nil',
    sent_contractual_notices_to_the_licensor_address_2: 'Nil',
    sent_contractual_notices_to_the_licensor_address_3: 'Nil',
    sent_contractual_notices_to_the_licensor_contact_detai: 'Nil',
    sent_contractual_notices_to_the_licensee_name: 'Nil',
    sent_contractual_notices_to_the_licensee_address_1: 'Nil',
    sent_contractual_notices_to_the_licensee_address_2: 'Nil',
    sent_contractual_notices_to_the_licensee_address_3: 'Nil',
    sent_contractual_notices_to_the_licensee_contact_details: 'Nil',
    law_governs_document: 'Nil',
    court_of_jurisdiction_which_has_exclusive_right_to_adjudicate_disputes_on_document:
      'Nil',
    which_entity_will_sign_contract_on_behalf_of_party_1: 'Contractor',
    party_1_signatory_scanned_copy_detail: {
      filename: 'img_47dbffd8-50c1-4f5c-af54-819db6d902ab.png',
    },
    full_name_of_party_1_signatory: 'party 1 name',
    party_1_date_of_signing_contract: '2022-11-02',
    full_name_of_the_person_sign_on_behalf_of_party_1: 'witness 1 name',
    date_contract_was_sign_on_behalf_of_party_1: '2022-11-02',
    which_entity_will_sign_contract_on_behalf_of_party_2: 'Contractor',
    party_2_signatory_scanned_copy_detail: {
      filename: 'img_47dbffd8-50c1-4f5c-af54-819db6d902ab.png',
    },
    full_name_of_party_2_signatory: 'party 2 name',
    party_2_date_of_signing_contract: '2022-11-05',
    full_name_of_the_person_sign_on_behalf_of_party_2: 'witness 2 name',
    date_contract_was_sign_on_behalf_of_party_2: '2022-11-05',
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
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            errors={error_5}
            onNext={() => {
              setempty_validation_4(empty_validation(inputs_4));
              const x = empty_validation(inputs_4);
              setError_5(!x);
            }}>
            <View>
              <Policy5 list={states_4} />
            </View>
          </ProgressStep>

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
            errors={error_4}
            onNext={() => {
              setempty_validation_3(empty_validation(inputs_3));
              const x = empty_validation(inputs_3);
              setError_4(!x);
            }}>
            <View>
              <Policy4 list={states_3} />
            </View>
          </ProgressStep>

          <ProgressStep
            nextBtnStyle={nextButton}
            nextBtnTextStyle={{color: 'white', fontSize: 18}}
            previousBtnTextStyle={{color: '#489503', fontSize: 18}}
            errors={error_5}
            onNext={() => {
              setempty_validation_4(empty_validation(inputs_4));
              const x = empty_validation(inputs_4);
              setError_5(!x);
            }}>
            <View>
              <Policy5 list={states_4} />
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
              <Policy6 object={request_object} />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </>
  );
};

export default Steps;
