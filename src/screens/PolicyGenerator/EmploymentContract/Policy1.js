import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';
import colors from '../../../../assets/colors/colors';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CountryPicker from 'react-native-country-picker-modal';
import {email_validation, url_validation} from '../validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Date from '../Date';
const Policy1 = ({list}) => {
  const [valid_email, setValid_email] = useState(true);
  const [valid_email1, setValid_email1] = useState(true);
  const [valid_url, setValid_url] = useState(true);
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };

  return (
    <>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[0]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Party details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>What is the name of the Company? </Text>
            <TextInput
              style={styles.input_vm}
              value={list[1]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[2](value)}
            />
            <Text style={styles.text_2}>Reference name </Text>
            <TextInput
              style={styles.input_vm}
              value={list[19]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[20](value)}
            />
            <Text style={[styles.text_2, {marginTop: 25}]}>
              What is the Address of the Company?
            </Text>
            <TextInput
              style={styles.input_vm}
              autoCapitalize="none"
              value={list[3]}
              placeholder="Address Line 1"
              placeholderTextColor="gray"
              onChangeText={value => list[4](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[5]}
              autoCapitalize="none"
              placeholder="Address Line 2"
              placeholderTextColor="gray"
              onChangeText={value => list[6](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[7]}
              autoCapitalize="none"
              placeholder="Address Line 3"
              placeholderTextColor="gray"
              onChangeText={value => list[8](value)}
            />
            <Text style={styles.text_2}>
              What is the full name of the Employee?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[9]}
              autoCapitalize="none"
              placeholder="Eg. John Smith Doe"
              placeholderTextColor="gray"
              onChangeText={value => list[10](value)}
            />
            <Text style={valid_email ? styles.hide : styles.text_warning}>
              Please enter valid email
            </Text>
          </View>
          <Text style={[styles.text_1, {marginTop: 25, marginBottom: 15}]}>
            Description of Business:
          </Text>

          <View style={{paddingHorizontal: 11}}>
            <Text style={styles.text_2}>
              What type of Business is the Company engaged in?
            </Text>

            <TextInput
              style={styles.input_vm}
              value={list[11]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[12](value)}
            />
          </View>
          <Text style={[styles.text_1, {marginTop: 25, marginBottom: 15}]}>
            Term:
          </Text>

          <View style={{paddingHorizontal: 11}}>
            <Text style={styles.text_2}>
              When is the term commencement (Start Date)?
            </Text>
            <Date
              date={list[13]}
              setDate={list[14]}
              open={open}
              openHandler={openHandler}
            />
          </View>
          <Text style={[styles.text_1, {marginTop: 25, marginBottom: 15}]}>
            Applicable Law:
          </Text>
          <View style={{paddingHorizontal: 11}}>
            <Text style={styles.text_2}>
              Which State is the Company situated in?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[15]}
              placeholder="Enter state name"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[16](value)}
            />
            <Text style={styles.text_2}>
              Which Country is the Company situated in?
            </Text>
            <View style={styles.input_vm}>
              {list[17] === '' ? (
                <CountryPicker
                  // countryCode={country}
                  withFilter
                  withFlag
                  withCountryNameButton={list[17]}
                  withCallingCode
                  onSelect={value => {
                    list[18](value.name);
                  }}
                />
              ) : (
                <Text style={[styles.text_1, {fontSize: 17}]}>{list[17]}</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy1;
