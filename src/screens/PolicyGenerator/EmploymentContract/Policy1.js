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
import RadioGroup from 'react-native-radio-buttons-group';
import {email_validation} from '../validations';

const Policy1 = ({list}) => {
  const [valid_email, setValid_email] = useState(true);
  const [valid_email1, setValid_email1] = useState(true);

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
        <Text style={styles.text_1}>Party details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={{paddingVertical: 7}}>Clause 2.3</Text>
          <Text style={styles.text_2}>When were the terms last updated?</Text>

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

          <Text style={{paddingVertical: 7}}>Clause 3</Text>
          <Text style={styles.text_2}>
            Enter your Full Legal Name of the Party
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[3]}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[4](value)}
          />
          <Text style={styles.text_2}>Website URL:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[5]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[6](value)}
          />
          <Text style={{paddingVertical: 7}}>Clause 4.2b</Text>
          <Text style={styles.text_2}>Enter your Email ID:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
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
              list[8](value);
            }}
          />
          <Text style={valid_email ? styles.hide : styles.text_warning}>
            Please Enter valid email
          </Text>

          <Text style={styles.text_2}>Written Permission:</Text>
          <Text style={{paddingVertical: 7}}>Clause 4.4</Text>
          <Text style={styles.text_2}>
            Enter your Email ID for acquiring Written Permission:
          </Text>

          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="gray"
            onChangeText={value => {
              if (value === '') {
                setValid_email1(true);
              } else {
                email_validation(value)
                  ? setValid_email1(true)
                  : setValid_email1(false);
              }
              list[10](value);
            }}
          />
          <Text style={valid_email1 ? styles.hide : styles.text_warning}>
            Please Enter valid email
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
