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
        <Text style={styles.text_1}>Project Management:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What will be the mode of communication between the parties?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            When will the Freelancer share his status on deliverables?{' '}
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

          <Text style={[styles.text_1, {fontSize: 15}]}>
            When will the progress meetings occur?
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

        {/* Estimates and Payment starts here */}
        <Text style={styles.text_1}>Estimates and Payment:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the minimum time required to complete this project?{' '}
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

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the value in respect of the time required?{' '}
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter Amount(₹)"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the billing rate?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter Amount(₹)"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What are the charges for “rush work”?{' '}
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter Amount(₹)"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            Whom should the invoices be submitted to?{' '}
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
            *Include Middle Name
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
