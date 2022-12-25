import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Website Disclaimer Last updated:</Text>
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

          <Text style={styles.text_2}>Website Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput2(value)}
          />
          <Text style={styles.text_2}>Website URL:</Text>
          <TextInput
            style={styles.input_vm}
            value={input3}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput3(value)}
          />
          <Text style={styles.text_2}>
            Enter your Support Email ID for contact us information:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input4}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="gray"
            onChangeText={value => setInput4(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
