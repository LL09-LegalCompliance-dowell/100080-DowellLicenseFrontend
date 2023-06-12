import {Platform, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors/colors';

const MyTextInput = ({
  icon,
  paddingHorizontal = 5,
  paddingBottom = 0,
  iconSize,
  marginVertical = 10,
  height = 57,
  ...otherProps
}) => {
  return (
    <View
      style={[
        styles.container,
        {paddingHorizontal: paddingHorizontal},
        {paddingBottom: paddingBottom},
        {marginVertical: marginVertical},
        {height: height},
      ]}>
      <TextInput
        placeholderTextColor="gray"
        style={styles.InputText}
        {...otherProps}
      />
      {icon && (
        <FontAwesome
          name={icon}
          size={iconSize}
          color={colors.textDark}
          style={{position: 'absolute', right: 7, top: 5}}
        />
      )}
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    borderColor: '#33585858',
    borderWidth: 3,
    borderRadius: 15,
    width: '100%',
    height: 50,
    padding: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  InputText: {
    fontSize: 16,
    height: 40,
    width: '90%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.textDark,
  },
});
