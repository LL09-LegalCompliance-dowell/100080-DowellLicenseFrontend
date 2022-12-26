import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

const Policy3 = () => {
  const [input1, setInput1] = useState('');

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Other Details:</Text>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{paddingVertical: 7}}>Clause 8.7</Text>
          <Text style={[styles.text_1, {fontSize: 16}]}>
            Enter your Email ID for Requesting Access/Correction of Personal
            Information:
          </Text>

          <TextInput
            style={[styles.input_vm, {flex: 3, marginRight: 5}]}
            value={input1}
            placeholder="Enter Amount"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
