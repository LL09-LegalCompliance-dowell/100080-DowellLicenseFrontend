import {View, Text} from 'react-native';
import React, { useState } from 'react';

import colors from '../../../assets/colors/colors';
import styles from './style';


const PrivacyPolicy = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Check license compatibility below</Text>
        <Text styles={styles.textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          nobis dignissimos ratione pariatur ad officia ut exercitationem
          deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
          laborum voluptatem et. Labore, laboriosam molestias nam nesciunt quos
          explicabo hic? Possimus assumenda asperiores sed, quasi reprehenderit
          dolorem mollitia neque quos dolorum eum? Provident, ex?
        </Text>
    </View>
  );
};

export default PrivacyPolicy;
