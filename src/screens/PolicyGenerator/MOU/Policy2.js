import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import RadioGroup from 'react-native-radio-buttons-group';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Date from '../Date';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Policy2 = ({list}) => {
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };
  const [open1, setOpen1] = useState(false);
  const openHandler1 = state => {
    setOpen1(state);
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
          <Text style={styles.text_1}>Company Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_3}>Under clause purpose and scope</Text>

            <Text style={styles.text_2}>
              What will be the purpose of this MOU?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[1]}
              placeholder="  Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[2](value)}
            />
            <Text style={styles.text_3}>Under clause objectives</Text>
            <Text style={styles.text_2}>
              What is the objective of this MOU?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[3]}
              placeholder="  Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[4](value)}
            />
            <Text style={styles.text_3}>Term/Timeline</Text>
            <Text style={styles.text_2}>
              What will be the date of commencement?
            </Text>
            <Date
              date={list[5]}
              setDate={list[6]}
              open={open}
              openHandler={openHandler}
            />

            <Text style={styles.text_2}>
              What will be the date for termination?
            </Text>
            <Date
              date={list[7]}
              setDate={list[8]}
              open={open1}
              openHandler={openHandler1}
            />
            <Text style={styles.text_2}>
              What will be the period for notice in case of cancellation or
              amendment of this memorandum?
            </Text>
            <View
              style={[
                styles.input_vm,
                {
                  margin: 0,
                  padding: 0,
                  paddingLeft: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <TextInput
                style={{color: 'gray', fontSize: 16}}
                value={list[9]}
                placeholder="Enter number"
                autoCapitalize="none"
                placeholderTextColor="gray"
                keyboardType="numeric"
                onChangeText={value => list[10](value)}
              />
              <View>
                <RadioGroup
                  radioButtons={list[11]}
                  onPress={data => list[12](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy2;
