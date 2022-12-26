import React, {Fragment} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import RadioGroup from 'react-native-radio-buttons-group';

import {SelectList} from 'react-native-dropdown-select-list';

const Policy2 = () => {
  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');

  const cities = [
    {key: '1', value: 'Mumbai'},
    {key: '2', value: 'Kolkata'},
    {key: '3', value: 'Banglore'},
    {key: '4', value: 'Delhi'},
  ];
  const states = [
    {key: '1', value: 'Maharashtra'},
    {key: '2', value: 'Karnataka'},
    {key: '3', value: 'Goa'},
    {key: '4', value: 'Gujarat'},
  ];

  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Individual',
      value: 'Individual',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'Entity',
      value: 'Entity',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Company Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Type of company :</Text>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={data => setRadioButtons(data)}
              containerStyle={styles.radio_hm}
            />
          </View>
          <Text style={{paddingVertical: 7, color: 'gray'}}>
            Under Clause 1
          </Text>

          <Text style={styles.text_2}>
            What will be the Restricted area (geographical)?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#585858',
              lineHeight: 14,
              position: 'relative',
              right: -220,
              marginTop: 6,
              marginBottom: 20,
            }}>
            *Mention areas
          </Text>

          <Text style={{paddingVertical: 7, color: 'gray'}}>
            Under Clause 2
          </Text>
          <Text style={styles.text_2}>
            What will be the date for termination?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={date.toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray"
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={35} color="gray" />
              </View>
            }
            color="#489503"
            onSelect={value => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />

          <Text style={styles.text_2}>
            What will be the duration for solicit:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={date.toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray"
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={35} color="gray" />
              </View>
            }
            color="#489503"
            onSelect={value => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>

        <Text style={styles.text_2}>
          What will be the duration for solicit:
        </Text>
      </ScrollView>
    </>
  );
};

export default Policy2;
