import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../../Cookies/style';

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
        <Text style={styles.text_1}>Date:</Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={[styles.text_1, {fontSize: 16}]}>
            Privacy Policy Last updated:
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
        </View>
        <Text style={styles.text_1}>Company information:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={[styles.text_1, {fontSize: 17}]}>Company Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
          <Text style={styles.text_1}>Details:</Text>

          <Text style={[styles.text_1, {fontSize: 17}]}>App Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput2(value)}
          />
          <Text style={[styles.text_1, {fontSize: 17}]}>App URL:</Text>

          <TextInput
            style={styles.input_vm}
            value={input3}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput3(value)}
          />
          <Text style={[styles.text_1, {fontSize: 17}]}>
            Website Contact Page URL:
          </Text>

          <TextInput
            style={styles.input_vm}
            value={input3}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput3(value)}
          />
          <Text style={[styles.text_1, {fontSize: 17}]}>
            Website Contact Email:
          </Text>

          <TextInput
            style={styles.input_vm}
            value={input3}
            placeholder="example@gmail.com"
            placeholderTextColor="gray"
            onChangeText={value => setInput3(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
