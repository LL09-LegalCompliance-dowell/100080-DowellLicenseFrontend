import React from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';
import SelectDropdown from 'react-native-select-dropdown';
import {number_validation} from '../validations';
import RadioGroup from 'react-native-radio-buttons-group';

const Policy2 = ({list}) => {
  const cuurency = ['EUR', 'GBP', 'CAD', 'JPY', 'CHF', 'JPY'];
  const findcurrency = cvalue => {
    for (let index = 0; index < cuurency.length; index++) {
      if (cuurency[index] === cvalue) {
        return index;
      }
    }
  };

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

        <Text style={styles.text_2}>Exhibit A:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={[styles.text_2, {paddingTop: 20}]}>
            What are the duties of the Employee?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[2](value)}
          />

          <Text style={styles.text_2}>Exhibit B:</Text>
          <Text style={[styles.text_2, {paddingTop: 20}]}>
            What is the Time Frame of the Compensation?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[3]}
              onPress={data => list[4](data)}
              containerStyle={styles.radio_hm}
            />
          </View>

          <Text style={[styles.text_2, {paddingTop: 20}]}>
            What is the Amount?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              keyboardType="numeric"
              style={styles.input_vm_w}
              value={list[5]}
              placeholder="  Enter Amount"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  list[10](true);
                } else {
                  number_validation(value) ? list[10](true) : list[10](false);
                }
                list[6](value);
              }}
            />
            <SelectDropdown
              data={cuurency}
              onSelect={(selectedItem, index) => {
                list[8](selectedItem);
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
              defaultValueByIndex={findcurrency(list[7])}
            />
          </View>
          <Text style={list[9] ? styles.hide : styles.text_warning}>
            Please enter only numbers
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
