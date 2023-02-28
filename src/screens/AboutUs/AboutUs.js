import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './style';
import Header from '../../components/Header';

const AboutUs = () => {
  return (
    <>
      <Header title="About Us" />

      <ScrollView contentContainerStyle={[styles.container, {flex:1}]}>
        {/* About Company */}
        <Text style={styles.heading}>About Legalzard and Company</Text>
        <Text style={styles.aboutText}>
          Legalzard is a product of DoWell services that helps in checking the
          compatibility of software licenses.
        </Text>
        <Text style={styles.aboutText}>
          This app also helps in generating different kinds of policies required
          for both websites and mobile applications.
        </Text>
      </ScrollView>
    </>
  );
};

export default AboutUs;
