import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IoniMaterialCommunityIconscons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../../assets/colors/colors';

const HelpIcon = ({helpHanlder}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={helpHanlder} >
      <View style={styles.miniContainer}>
        <IoniMaterialCommunityIconscons name="help" size={25} color={colors.primary} />
      </View>
      <Text style={styles.text}>Help</Text>
    </TouchableOpacity>
  );
};

export default HelpIcon;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    backgroundColor: colors.primary,
    padding: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 45,
    width: 69,
    height: 73,
    position: 'absolute',
    right: 15,
    bottom: 20,
    zIndex: 1,
    borderBottomColor: '#acacac',
    borderBottomWidth: 2,
    elevation: 5,
  },

  miniContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 25,
  },

  text: {
    color: 'white',
    paddingTop: 2,
    fontSize: 14,
  },
});
