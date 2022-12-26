import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [input9, setInput9] = useState('');
  const [input10, setInput10] = useState('');

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Details:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            Terms and Conditions Last updated:
          </Text>
          <TextInput
            style={styles.input}
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

          <Text style={[styles.text_1, {fontSize: 15}]}>Country:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Company Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Website/App Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Website URL:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            Enter your Support Email ID for contact us information:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
