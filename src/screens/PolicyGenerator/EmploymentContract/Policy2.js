import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';
import SelectDropdown from 'react-native-select-dropdown';
import {number_validation} from '../validations';
import {SelectList} from 'react-native-dropdown-select-list';

const Policy2 = ({list}) => {
  const [input1, setInput1] = useState('');
  const [input3, setInput3] = useState('');
  const cuurency = ['EUR', 'GBP', 'CAD', 'JPY', 'CHF', 'JPY'];
  const findcurrency = cvalue => {
    for (let index = 0; index < cuurency.length; index++) {
      if (cuurency[index] === cvalue) {
        return index;
      }
    }
  };

  const currencies = [
    {key: '1', value: 'USD'},
    {key: '2', value: 'EUR'},
    {key: '3', value: 'GBP'},
    {key: '4', value: 'CAD'},
    {key: '1', value: 'JPY'},
    {key: '2', value: 'CHF'},
  ];

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[0]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>

        <Text style={styles.text_2}>Other Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={{paddingVertical: 7}}>Clause 7.2</Text>
          <Text style={styles.text_2}>Liability Limit</Text>
          <Text style={[styles.text_2, {paddingTop: 20}]}>
            Type your Amount & Choose Currency:
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input_vm_w}
              value={list[1]}
              placeholder="  Enter Amount"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  list[10](true);
                } else {
                  number_validation(value) ? list[10](true) : list[10](false);
                }
                list[2](value);
              }}
            />
            {/* <SelectList
              style={{flex: 2}}
              setSelected={val => setInput3(val)}
              data={currencies}
              save="value"
              placeholder="USD"
              boxStyles={{
                backgroundColor: '#D9D9D9',
                marginVertical: 12,
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
              }}
            /> */}
            <SelectDropdown
              data={cuurency}
              onSelect={(selectedItem, index) => {
                list[4](selectedItem);
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
              defaultValueByIndex={findcurrency(list[3])}
            />
          </View>
          <Text style={list[9] ? styles.hide : styles.text_warning}>
            Please Enter valid number
          </Text>

          <Text style={{paddingVertical: 7}}>Clause 7.3</Text>
          <Text style={styles.text_2}>Liability Must Not Exceed</Text>
          <Text style={[styles.text_2, {paddingTop: 20}]}>
            Type your Amount & Choose Currency:
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input_vm_w}
              value={list[5]}
              placeholder="  Enter Amount"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  list[12](true);
                } else {
                  number_validation(value) ? list[12](true) : list[12](false);
                }
                list[6](value);
              }}
            />
            {/* <SelectList
              style={{flex: 2}}
              setSelected={val => setInput3(val)}
              data={currencies}
              save="value"
              placeholder="USD"
              boxStyles={{
                backgroundColor: '#D9D9D9',
                marginVertical: 12,
                color: '#585858',
                fontSize: 16,
                fontWeight: '300',
              }}
            /> */}
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
          <Text style={list[11] ? styles.hide : styles.text_warning}>
            Please Enter valid number
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
