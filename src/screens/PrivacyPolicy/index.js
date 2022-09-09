import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';

const PrivacyPolicy = () => {
  return (
    <>
      <Header title="Privacy Policy and T&C" />

      <ScrollView contentContainerStyle={styles.container}>
        <MaterialIcons
          name="privacy-tip"
          size={45}
          color={colors.primary}
          style={styles.icontyle}
        />
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          nobis dignissimos ratione pariatur ad officia ut exercitationem
          deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
          laborum voluptatem et. Labore, laboriosam molestias nam nesciunt quos
          explicabo hic? Possimus assumenda asperiores sed, quasi reprehenderit
          dolorem mollitia neque quos dolorum eum? Provident, ex?
        </Text>
        <Text style={styles.heading}>Personal identification Information</Text>
        <Text styles={styles.textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          nobis dignissimos ratione pariatur ad officia ut exercitationem
          deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
          laborum voluptatem et. Labore, laboriosam molestias nam nesciunt quos
          explicabo hic? Possimus assumenda asperiores sed, quasi reprehenderit
          dolorem mollitia neque quos dolorum eum? Provident, ex?
        </Text>
        <Text style={styles.heading}>
          Personal non-identification Information
        </Text>
        <Text styles={styles.textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          nobis dignissimos ratione pariatur ad officia ut exercitationem
          deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
          laborum voluptatem et. Labore, laboriosam molestias nam nesciunt quos
          explicabo hic? Possimus assumenda asperiores sed, quasi reprehenderit
          dolorem mollitia neque quos dolorum eum? Provident, ex?
        </Text>
        <Text style={styles.heading}>
          Personal non-identification Information
        </Text>
        <Text styles={styles.textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          nobis dignissimos ratione pariatur ad officia ut exercitationem
          deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
          laborum voluptatem et. Labore, laboriosam molestias nam nesciunt quos
          explicabo hic? Possimus assumenda asperiores sed, quasi reprehenderit
          dolorem mollitia neque quos dolorum eum? Provident, ex?
        </Text>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
