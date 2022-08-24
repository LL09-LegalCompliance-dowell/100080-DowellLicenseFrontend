import {View, Text, Dimensions, Animated} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Portal} from 'react-native-paper';

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';

const About = () => {
  const sheetHeight = Dimensions.get('window').height;
  const sheetWidth = Dimensions.get('window').width;

  return (
    <Portal>
      <Animated.View style={[styles.container, {height: sheetHeight}]}>
      </Animated.View>
    </Portal>
  );
};

export default About;
