import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import styles from '../../Cookies/style';
import {email_validation, url_validation} from '../../validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Date from '../../Date';

const Policy1 = ({list}) => {
  const [valid_email, setValid_email] = useState(true);
  const [valid_url, setValid_url] = useState(true);
  const [valid_url1, setValid_url1] = useState(true);
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };

  return (
    <>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[0]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Date:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={[styles.text_2]}>Privacy Policy Last updated:</Text>
            <Date
              date={list[1]}
              setDate={list[2]}
              open={open}
              openHandler={openHandler}
            />
          </View>
          <Text style={styles.text_1}>Company information:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={[styles.text_2]}>Company Name:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[3]}
              placeholder="Enter here"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={value => list[4](value)}
            />
          </View>
          <Text style={styles.text_1}>Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={[styles.text_2]}>App Name:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[5]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[6](value)}
            />
            <Text style={[styles.text_2]}>App URL:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[7]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  setValid_url1(true);
                } else {
                  url_validation(value)
                    ? setValid_url1(true)
                    : setValid_url1(false);
                }
                list[8](value);
              }}
            />
            <Text style={valid_url1 ? styles.hide : styles.text_warning}>
              Please enter valid website url
            </Text>
            <Text style={[styles.text_2]}>Website Contact Page URL:</Text>

            <TextInput
              style={styles.input_vm}
              value={list[9]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  setValid_url(true);
                } else {
                  url_validation(value)
                    ? setValid_url(true)
                    : setValid_url(false);
                }
                list[10](value);
              }}
            />
            <Text style={valid_url ? styles.hide : styles.text_warning}>
              Please enter valid website url
            </Text>

            <Text style={[styles.text_2]}>Website Contact Email:</Text>

            <TextInput
              style={styles.input_vm}
              value={list[11]}
              autoCapitalize="none"
              placeholder="example@gmail.com"
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
            <Text style={valid_email ? styles.hide : styles.text_warning}>
              Please Enter valid email
            </Text>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy1;
