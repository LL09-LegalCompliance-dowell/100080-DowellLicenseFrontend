import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';

import Image1 from './Accountbalance.png';
import Image2 from './Accountcircle.png';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={'My Profile'} />
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() =>
          navigation.navigate('AuthNavigator', {screen: 'Profile'})
        }>
        <View style={styles.iconContainer}>
          <Image source={Image2} />
        </View>
        <Text style={styles.listHeading}>Account Details</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.navigate('OrgDetails')}>
        <View style={styles.iconContainer}>
          <Image source={Image1} />
        </View>
        <Text style={styles.listHeading}> Organization Details</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 90 : 60,
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    fontFamily: 'roboto',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 35,
    paddingTop: 80,
    position: 'absolute',
    paddingHorizontal: 12,
  },

  iconContainer: {
    backgroundColor: '#D9D9D9',
    height: 40,
    widht: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 5,
    margin: 10,
    marginRight: 15,
    flex: 1,
  },

  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 12,
  },

  listHeading: {
    width: '100%',
    fontSize: 18,
    fontWeight: '500',
    color: colors.textDark,
    fontFamily: 'roboto',
    flex: 11,
  },

  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
    height: 1,
    // elevation: ,
  },
});
