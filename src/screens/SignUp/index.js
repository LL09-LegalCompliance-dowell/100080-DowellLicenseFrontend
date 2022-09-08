import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';

const PrivacyPolicy = () => {
  return (
    <>
      <Header title="Sing Up" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Under Construction</Text>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
