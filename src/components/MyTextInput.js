import {Platform, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';


const MyTextInput = ({...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.InputText} {...otherProps} />
      
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    borderRadius: 18,
    width: '100%',
    padding: 5,
    marginVertical: 10,
    flexDirection: 'row',
  },
  InputText: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
