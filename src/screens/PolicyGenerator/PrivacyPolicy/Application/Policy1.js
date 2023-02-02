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
import {email_validation, url_validation} from '../../validations';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = ({list}) => {
  const [valid_email, setValid_email] = useState(true);
  const [valid_url, setValid_url] = useState(true);
  const [valid_url1, setValid_url1] = useState(true);

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
        <Text style={styles.text_1}>Date:</Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={[styles.text_1, {fontSize: 16}]}>
            Privacy Policy Last updated:
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
        </View>
        <Text style={styles.text_1}>Company information:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={[styles.text_1, {fontSize: 17}]}>Company Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[3]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[4](value)}
          />
          <Text style={styles.text_1}>Details:</Text>

          <Text style={[styles.text_1, {fontSize: 17}]}>App Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[5]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[6](value)}
          />
          <Text style={[styles.text_1, {fontSize: 17}]}>App URL:</Text>

          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder="Enter here"
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
            Please Enter valid website url
          </Text>
          <Text style={[styles.text_1, {fontSize: 17}]}>
            Website Contact Page URL:
          </Text>

          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder="Enter here"
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
            Please Enter valid website url
          </Text>


          <Text style={[styles.text_1, {fontSize: 17}]}>
            Website Contact Email:
          </Text>

          <TextInput
            style={styles.input_vm}
            value={list[11]}
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
    </>
  );
};

export default Policy1;
