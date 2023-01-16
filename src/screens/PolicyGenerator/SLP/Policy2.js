import React, {Fragment} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';

const Policy2 = ({list}) => {
  
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text
          style={
            list[0]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all fields
        </Text>
        <Text style={styles.text_1}>Agreement:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_3}>Clause 1: Definitions -------------</Text>
          <Text style={styles.text_3}>Clause 1.1</Text>

          <Text style={styles.text_3}>Definition of Charges</Text>
          <Text style={styles.text_2}>
            What charges are payable under this document?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[2](value)}
          />
          <Text style={styles.text_3}>Definition of Documentation</Text>

          <Text style={styles.text_2}>
            How should the software documentation be identified?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[3]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[4](value)}
          />
          <Text style={styles.text_3}>Definition of Effective Date</Text>
          <Text style={styles.text_2}>
            When will the contract come into force?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              value={list[5].toLocaleDateString()}
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
              onSelect={value => list[6](value)}
              isHideOnSelect={true}
              initialDate={new Date()}
            />
          </View>

          <Text style={styles.text_3}>Definition of Minimum Term</Text>
          <Text style={styles.text_2}>What minimum term will apply?</Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[8](value)}
          />

          <Text style={styles.text_3}>Definition of Software</Text>
          <Text style={styles.text_2}>
            Should the form of the software be specified?
          </Text>
          <RadioGroup
            radioButtons={list[9]}
            onPress={(data)=>list[10](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>Specify the form of the software:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[11]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[12](value)}
          />

          <Text style={styles.text_3}>Definition of Software Defect</Text>
          <Text style={styles.text_2}>
            Will non-material defects count as software defects for the purposes
            of this definition?
          </Text>
          <RadioGroup
            radioButtons={list[13]}
            onPress={(data)=>list[14](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>
            In what ways may a relevant defect affect the software?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[15]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[16](value)}
          />

          <Text style={styles.text_2}>
            Should a set of general exclusions from this definition be included?{' '}
          </Text>
          <RadioGroup
            radioButtons={list[17]}
            onPress={(data)=>list[18](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>What exclusions should apply here? </Text>
          <TextInput
            style={styles.input_vm}
            value={list[19]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[20](value)}
          />

          <Text style={styles.text_3}>
            Definition of Software Specification
          </Text>
          <Text style={styles.text_2}>
            Define "Software Specification". NB in many cases it will not be
            appropriate to include a reference to documentation in this
            definition.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[21]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[22](value)}
          />

          <Text style={styles.text_2}>
            May the specification for the software be varied by the written
            agreement of the parties?.
          </Text>
          <RadioGroup
            radioButtons={list[23]}
            onPress={(data)=>list[24](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_3}>Definition of Term</Text>
          <Text style={styles.text_2}>
            Define "Term", the period during which the contract will subsist.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[25]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[26](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
