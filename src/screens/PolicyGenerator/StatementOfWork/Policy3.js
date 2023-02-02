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


const Policy3 = ({list}) => {
  
 

 

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[4]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <Text style={styles.text_1}>This Agreement:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the Freelancer’s Full Name?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[0]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[1](value)}
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

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the Freelancer’s Full Name?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[3](value)}
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
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
