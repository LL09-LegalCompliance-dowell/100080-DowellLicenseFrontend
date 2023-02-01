import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {email_validation} from '../validations';

const Policy1 = ({list}) => {
  const [valid_email, setValid_email] = useState(true);


  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text
          style={
            list[0]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all{' '}
        </Text>
        <Text
          style={
            valid_email
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Enter Valid Email{' '}
        </Text>
        <Text style={styles.text_1}>Details:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            Terms and Conditions Last updated:
          </Text>
          <TextInput
            style={styles.input}
            value={list[1].toLocaleDateString()}
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
            onSelect={value => list[2](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Country:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[3]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[4](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Company Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[5]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[6](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Website/App Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[8](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>Website URL:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[10](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            Enter your Support Email ID for contact us information:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[11]}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="gray"
            onChangeText={value => {
              if (value === '') {
                setValid_email(true);
              } else {
                email_validation(value)
                  ? setValid_email(true)
                  : setValid_email(false);
              }
              list[12](value);
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
