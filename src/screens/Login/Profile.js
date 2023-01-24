import {StyleSheet, Image, Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../assets/colors/colors';
import AppLoader from '../../components/AppLoader';
import Header from '../../components/Header';

const Profile = () => {
  const [loading, setLoading] = useState();
  return (
    <View style={styles.container}>
      {loading ? <AppLoader /> : null}
      <StatusBar color="white" />
      <Header title="Account Details" />
      <View style={styles.innerContainer}>
        <Image
          source={require('./profileIcon.png')}
          style={styles.profileIcon}
        />
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.feildData}>John S. Doe</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.feildData}>johnsdoe@gmail.com</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Date of Birth</Text>
        <Text style={styles.feildData}>24/10/1997</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.feildData}>+91 | 8457486514</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Gender</Text>
        <Text style={styles.feildData}>Male</Text>
        <View style={styles.separator}></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    marginTop: 160,
    borderTopEndRadius: 29,
    borderTopLeftRadius: 29,
    paddingHorizontal: 25,
  },
  profileIcon: {
    height: 100,
    width: 100,
    display: 'flex',
    alignSelf: 'center',
    marginTop: -50,
  },
  label: {
    color: '585858',
    fontSize: 12,
    paddingTop: 15,
    fontFamily:'roboto'
  },
  feildData: {
    paddingLeft: 17,
    fontSize: 19,
    paddingVertical: 5,
    color: 'black',
    fontWeight: '500',
    fontFamily:'roboto'
  },
  separator: {
    width: '100%',
    backgroundColor: '585858',
    height: 0.9,
  },
});
