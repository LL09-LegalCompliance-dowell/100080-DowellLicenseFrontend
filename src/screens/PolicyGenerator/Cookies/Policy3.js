import React from 'react';
import styles from './style';
import colors from '../../../../assets/colors/colors';
import {ScrollView, View, Text, TextInput} from 'react-native';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Policy3 = ({list}) => {
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text
          style={
            list[4]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all{' '}
        </Text>
        <Text
          style={{
            color: colors.textDark,
            fontSize: 20,
            fontWeight: '400',
            marginTop: 20,
          }}>
          Other Details:
        </Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text
            style={{color: colors.textDark, fontSize: 18, fontWeight: '400'}}>
            State the name of the third party cookies or similar technology that
            is used on the website, together with the name of its owner.
            (purposes).
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[0]}
            onChangeText={value => list[1](value)}
            placeholder="Name"
            autoCapitalize="none"
            placeholderTextColor="gray"
          />

          <TextInput
            style={styles.input_vm}
            value={list[2]}
            onChangeText={value => list[3](value)}
            placeholder="Owner’s Name"
            autoCapitalize="none"
            placeholderTextColor="gray"
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Policy3;
