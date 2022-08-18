import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';

const About = () => {
  return <View style={styles.container}>
     <View style={styles.miniContainer}>
       <Ionicons name="help" size={25} color={colors.primary}/>
       
     </View>
     <Text style={styles.text}>Help</Text>
  </View>;
};

export default About;