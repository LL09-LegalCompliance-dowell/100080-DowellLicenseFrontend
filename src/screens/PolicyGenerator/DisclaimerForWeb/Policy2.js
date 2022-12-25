import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {SelectList} from 'react-native-dropdown-select-list';

const Policy2 = () => {
  const [input1, setInput1] = useState('');
  const [input3, setInput3] = useState('');

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
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Other Details:</Text>
          <Text style={{paddingVertical: 7}}>Clause 7.2</Text>
          <View>
            <TextInput
              style={styles.input_vm}
              value={input1}
              onChangeText={value => setInput1(value)}
            />
          </View>
          <Text style={styles.text_2}>Liability Limit</Text>
          <Text style={[styles.text_2, {paddingTop: 20}]}>
            Type your Amount & Choose Currency:
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={[styles.input_vm, {flex: 3, marginRight: 5}]}
              value={input1}
              placeholder="Enter Amount"
              placeholderTextColor="gray"
              onChangeText={value => setInput1(value)}
            />
            <SelectList
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
            />
          </View>

          <Text style={{paddingVertical: 7}}>Clause 7.3</Text>
          <Text style={styles.text_2}>Liability Must Not Exceed</Text>
          <Text style={[styles.text_2, {paddingTop: 20}]}>
            Type your Amount & Choose Currency:
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={[styles.input_vm, {flex: 3, marginRight: 5}]}
              value={input1}
              placeholder="Enter Amount"
              placeholderTextColor="gray"
              onChangeText={value => setInput1(value)}
            />
            <SelectList
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
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
