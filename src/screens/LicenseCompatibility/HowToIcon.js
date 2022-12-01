import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IoniMaterialCommunityIconscons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../../assets/colors/colors';

const HelpIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.miniContainer}>
        <IoniMaterialCommunityIconscons name="help" size={25} color={colors.primary} />
      </View>
      <View style={{width: '100%', color: colors.borderLight, height: 1, }}></View>
      <Text style={styles.text}>How to</Text>
    </TouchableOpacity>
  );
};

export default HelpIcon;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    backgroundColor: colors.primary,
    padding: 8,
    paddingHorizontal: 2,
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    width: 65,
    height: 68,
    position: 'absolute',
    right: 0,
    top: 320,
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
    fontSize: 12,
  },
});
