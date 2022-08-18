import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';

export default function AppBotton({
  title,
  onPress,
  Image,
  fontWeight,
  borderRadius = 25,
  color = 'green',
  width = '100%',
  titleColor = 'white',
  padding = 10,
  fontSize,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.botton,
        {backgroundColor: color},
        {width: width},
        {borderRadius: borderRadius},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {color: titleColor},
          {padding: padding},
          {fontSize},
          {fontWeight},
        ]}>
        {title}
        {Image}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  botton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 18,
  },
});
