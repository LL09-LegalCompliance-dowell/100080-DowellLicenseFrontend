import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import styles from './style';
import Header from '../../components/Header';

const SignUp = () => {
  return (
    <>
      <Header title="Sing Up" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Under Construction</Text>
      </ScrollView>
    </>
  );
};

export default SignUp;
