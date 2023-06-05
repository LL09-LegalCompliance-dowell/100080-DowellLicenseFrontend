import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Date from '../Date';
const Policy1 = ({list}) => {
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
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <Text style={styles.text_1}>
              Date of execution of the document:
            </Text>
            <Date
              date={list[1]}
              setDate={list[2]}
              open={open}
              openHandler={openHandler}
              margin={true}
            />
          </View>
          <Text style={styles.text_1}>Party details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>Full Name of the Party:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[3]}
              placeholder="  Eg. John Smith Doe"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[4](value)}
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
            <Text style={styles.text_2}>Name of the company:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[5]}
              placeholder="  Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[6](value)}
            />
            <Text style={styles.text_2}>Website/App name:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[15]}
              autoCapitalize="none"
              placeholder="  Enter here"
              placeholderTextColor="gray"
              onChangeText={value => list[16](value)}
            />
            <Text style={styles.text_2}>Address of the company:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[7]}
              placeholder="  Address Line 1"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[8](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[9]}
              autoCapitalize="none"
              placeholder="  Address Line 2"
              placeholderTextColor="gray"
              onChangeText={value => list[10](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[11]}
              placeholder="  Address Line 3"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[12](value)}
            />
            <Text style={styles.text_2}>PIN Code:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[13]}
              placeholder="  Eg. 202002"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[14](value)}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy1;
