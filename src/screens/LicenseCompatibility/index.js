import {View, Text} from 'react-native';
import React, { useState } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import styles from './style';
import AppBottun from '../../components/AppBottun'


const About = () => {
  const [result, setResult] = useState();

  const results = () => {
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Check license compatibility below</Text>
      <View style={styles.inputsContainer}>
        <MyTextInput />
        <MyTextInput />
      </View>
      <View>
        <Octicons
          style={styles.icontyle}
          name="arrow-switch"
          size={70}
          color={colors.primary}
        />
      </View>
      
      <AppBottun
        style={styles.button}
        title="Check"
        padding={8}
        width={'40%'}
        borderRadius={17}
        fontWeight="600"
        fontSize={17}
      />
      <Text style={styles.heading}>Results</Text>
      <View>
        <Text styles={styles.resultsText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          nobis dignissimos ratione pariatur ad officia ut exercitationem
          deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
          laborum voluptatem et. Labore, laboriosam molestias nam nesciunt quos
          explicabo hic? Possimus assumenda asperiores sed, quasi reprehenderit
          dolorem mollitia neque quos dolorum eum? Provident, ex?
        </Text>
      </View>
    </View>
  );
};

export default About;
