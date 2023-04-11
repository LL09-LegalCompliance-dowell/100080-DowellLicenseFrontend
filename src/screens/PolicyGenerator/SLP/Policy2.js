import React, {Fragment} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';
import RadioGroup from 'react-native-radio-buttons-group';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy2 = ({list}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Individual',
      value: 'Individual',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'Entity',
      value: 'Entity',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);
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
        <Text style={styles.text_1}>Agreement:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_3}>
            Clause 1: Definitions --------------
          </Text>
          <Text style={styles.text_3}>Clause 1.1</Text>

          <Text style={styles.text_3}>Definition of Charges</Text>

          <Text style={styles.text_2}>
            What charges are payable under this document?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder=" Enter here"
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
            onChangeText={value => list[4](value)}
          />
          <Text style={styles.text_3}>Definition of Effective Date</Text>
          <Text style={styles.text_2}>
            When will the contract come into force?
          </Text>
          <TextInput
            style={[styles.input, {marginHorizontal:0}]}
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
            initialDate={list[5]}
          />
          <Text style={styles.text_3}>Definition of Minimum Term</Text>
          <Text style={styles.text_2}>What minimum term will apply?</Text>
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
             style={{color: 'gray'}}
              value={list[7]}
              placeholder="Enter number"
              placeholderTextColor="gray"
              onChangeText={value => list[8](value)}
              keyboardType='numeric'
            />
            <View>
              <RadioGroup
                radioButtons={list[9]}
                onPress={data => list[10](data)}
                // containerStyle={styles.radio_hm}
                layout="row"
              />
            </View>
          </View>
          <Text style={styles.text_3}>Definition of Software</Text>
          <Text style={styles.text_2}>
            Should the form of the software be specified?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[11]}
              onPress={data => list[12](data)}
              containerStyle={styles.radio_hm}
              // layout="row"
            />
          </View>
          <TextInput
           style={styles.input_vm}
              value={list[13]}
              placeholder="Specify here"
              placeholderTextColor="gray"
              onChangeText={value => list[14](value)}
            />
          <Text style={styles.text_3}>Definition of Software Defect</Text>
          <Text style={styles.text_2}>
            Will non-material defects count as software defects for the purposes
            of this definition?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[15]}
              onPress={data => list[16](data)}
              containerStyle={styles.radio_hm}
              // layout="row"
            />
          </View>
          <Text style={styles.text_2}>
            In what ways may a relevant defect affect the software?
          </Text>
          <TextInput
           style={styles.input_vm}
            value={list[17]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[18](value)}
          />
          <Text style={styles.text_2}>
            Should a set of general exclusions from this definition be included?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[19]}
              onPress={data => list[20](data)}
              containerStyle={styles.radio_hm}
              layout="row"
            />
          </View>
          <TextInput
           style={styles.input_vm}
            value={list[21]}
            placeholder="Enter exclusions to be applied"
            placeholderTextColor="gray"
            onChangeText={value => list[22](value)}
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
            value={list[23]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[24](value)}
          />

          <Text style={styles.text_2}>
            May the specification for the software be varied by the written
            agreement of the parties?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[25]}
              onPress={data => list[26](data)}
              containerStyle={styles.radio_hm}
              // layout='row'
            />
          </View>
          <Text style={styles.text_3}>Definition of Term</Text>
          <Text style={styles.text_2}>
            Define "Term", the period during which the contract will subsist.
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
             style={{color: 'gray'}}
             value={list[27]}
              placeholder="Enter number"
              placeholderTextColor="gray"
              onChangeText={value => list[28](value)}
            />
            <View>
              <RadioGroup
                radioButtons={list[29]}
                onPress={data => list[30](data)}
                // containerStyle={styles.radio_hm}
                layout="row"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
