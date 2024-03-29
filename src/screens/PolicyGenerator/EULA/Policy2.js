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
import {SelectList} from 'react-native-dropdown-select-list';
import {number_validation} from '../validations';
import SelectDropdown from 'react-native-select-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Policy2 = ({list}) => {
  const cuurency = ['EUR', 'GBP', 'CAD', 'JPY', 'CHF', 'JPY'];
  const findcurrency = cvalue => {
    for (let index = 0; index < cuurency.length; index++) {
      if (cuurency[index] === cvalue) {
        return index;
      }
    }
  };
  const cities = [
    {key: '1', value: 'Mumbai'},
    {key: '2', value: 'Kolkata'},
    {key: '3', value: 'Banglore'},
    {key: '4', value: 'Delhi'},
  ];
  const states = [
    {key: '1', value: 'Maharashtra'},
    {key: '2', value: 'Karnataka'},
    {key: '3', value: 'Goa'},
    {key: '4', value: 'Gujarat'},
  ];

  return (
    <>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[12]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Company Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>Nature of the company :</Text>
            <View>
              <RadioGroup
                radioButtons={list[0]}
                onPress={data => list[1](data)}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>Software Product:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[17]}
              autoCapitalize="none"
              onChangeText={value => list[18](value)}
            />
            <Text style={styles.text_2}>Software Product License Name:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[2]}
              autoCapitalize="none"
              onChangeText={value => list[3](value)}
            />
            {/* <Text style={styles.text_2}>Software Product License Name UC:</Text>
      <TextInput
            style={styles.input_vm}
            value={list[19]}
            onChangeText={(value)=>list[20](value)}
      />  */}
            <Text style={styles.text_3}>
              Remedies Under Limitation Of Liability
            </Text>
            <Text style={styles.text_2}>
              What should be the liability remedy amount?
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TextInput
                style={styles.input_vm_w}
                value={list[4]}
                placeholder="  Enter Amount(₹)"
                keyboardType="numeric"
                autoCapitalize="none"
                placeholderTextColor="gray"
                onChangeText={value => {
                  if (value === '') {
                    list[14](true);
                  } else {
                    number_validation(value) ? list[14](true) : list[14](false);
                  }
                  list[5](value);
                }}
              />
              <SelectDropdown
                data={cuurency}
                onSelect={(selectedItem, index) => {
                  list[16](selectedItem);
                }}
                buttonStyle={{
                  backgroundColor: '#D9D9D9',
                  marginVertical: 12,
                  color: '#585858',
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: '#C4C4C4',
                  height: 51,
                  width: '25%',
                }}
                buttonTextStyle={{
                  color: '#585858',
                  fontSize: 16,
                  fontWeight: '300',
                }}
                dropdownStyle={{borderRadius: 15}}
                defaultValueByIndex={findcurrency(list[15])}
              />
            </View>
            <Text style={list[13] ? styles.hide : styles.text_warning}>
              Please Enter valid number
            </Text>
            <Text style={styles.text_3}>Applicable Law</Text>
            <Text style={styles.text_2}>
              Which state laws will apply for this EULA?
            </Text>
            <SelectList
              setSelected={val => list[6](val)}
              data={states}
              save="value"
              placeholder={list[9]}
              boxStyles={{
                backgroundColor: '#D9D9D9',
                marginVertical: 12,
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#C4C4C4',
                height: 51,
              }}
              inputStyles={{color: '#585858', fontSize: 16, fontWeight: '300'}}
              dropdownTextStyles={{
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
              }}
              searchPlaceholder=""
              search={false}
            />
            <Text style={styles.text_3}>Conflict</Text>
            <Text style={styles.text_2}>
              What will be the Jurisdiction State?
            </Text>
            <SelectList
              setSelected={val => list[7](val)}
              data={states}
              save="value"
              placeholder={list[10]}
              boxStyles={{
                backgroundColor: '#D9D9D9',
                marginVertical: 12,
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#C4C4C4',
                height: 51,
              }}
              inputStyles={{color: '#585858', fontSize: 16, fontWeight: '300'}}
              dropdownTextStyles={{
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
              }}
              searchPlaceholder=""
              search={false}
            />
            <Text style={styles.text_2}>
              What will be the Jurisdiction city?
            </Text>
            <SelectList
              setSelected={val => list[8](val)}
              data={cities}
              save="value"
              placeholder={list[11]}
              boxStyles={{
                backgroundColor: '#D9D9D9',
                marginVertical: 12,
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#C4C4C4',
                height: 51,
              }}
              inputStyles={{color: '#585858', fontSize: 16, fontWeight: '300'}}
              dropdownTextStyles={{
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
              }}
              searchPlaceholder=""
              search={false}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy2;
