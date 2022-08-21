import {Platform, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors/colors';

const MyTextInput = ({icon, paddingHorizontal = 5, paddingBottom= 0, iconSize, ...otherProps}) => {
  return (
    <View style={[styles.container, {paddingHorizontal: paddingHorizontal}, {paddingBottom: paddingBottom}]}>
      <TextInput style={styles.InputText} {...otherProps} />
      {icon && (
        <FontAwesome
          name={icon}
          size={iconSize}
          color={colors.textDark}
        />
      )}
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    borderRadius: 18,
    width: '100%',
    padding:5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  InputText: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
