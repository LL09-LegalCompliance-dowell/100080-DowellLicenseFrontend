import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

import colors from '../../../assets/colors/colors';
import AppBotton from '../../components/AppBottun';

const Card = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row1}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.row1Text}>License</Text>
          <Text style={styles.row1Text}>Compatibility</Text>
        </View>
        <Octicons name="image" size={70} color={colors.textDark} />
      </View>

      <View style={styles.row2}>
        <Text style={styles.row2Text}>Check your License Compatibility</Text>
      </View>

      <View style={styles.row3}>
        <Text style={styles.row3Text}>T&C Apply</Text>
        <AppBotton
          title="Check Now"
          width="30%"
          color={colors.primary}
          fontSize={12}
          padding={5}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    overflow: 'hidden',
    borderBottomColor: colors.borderLight,
    borderBottomWidth: 2,
    elevation: 10,
  },
  // Row1 starts here
  row1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },

  row1Text: {
    color: colors.textDark,
    fontSize: 20,
    fontWeight: '700',
  },
  //  Row 2 starts here
  row2: {
    alignItems: 'center',
    marginTop: 15,
  },
  row2Text: {
    color: colors.textDark,
  },

  //  Row 3 starts here
  row3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },

  row3Text: {
    color: colors.textDark,
    fontSiz: 8,
  },
});
