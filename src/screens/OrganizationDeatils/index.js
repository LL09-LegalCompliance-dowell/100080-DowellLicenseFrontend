import {StyleSheet,TouchableOpacity, Image, Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
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
        <Image source={require('./orgIcon.png')} style={styles.profileIcon} />
        <Text style={styles.label}>Organization Name</Text>
        <Text style={styles.feildData}>DoWell Research Labs</Text>
        <View style={styles.separator}></View>
        <Text style={[styles.feildData1, {paddingTop: 50}]}>
          Agreement Compliance Policies:
        </Text>
        <View style={styles.separator1}></View>
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.feildData2}>Software License Policy</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>5</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator1}></View>
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.feildData2}>EULA Policy</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>1</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator1}></View>
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.feildData2}>GDPR Privacy Policy</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>2</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator1}></View>
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
    fontFamily: 'roboto',
  },
  feildData: {
    paddingLeft: 17,
    fontSize: 19,
    paddingVertical: 5,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  feildData1: {
    // paddingLeft: 17,
    fontSize: 17,
    paddingVertical: 15,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  feildData2: {
    // paddingLeft: 17,
    fontSize: 19,
    paddingVertical: 15,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  separator: {
    width: '100%',
    backgroundColor: 'black',
    height: 1.1,
  },
  separator1: {
    width: '100%',
    backgroundColor: '#585858',
    height: 0.8,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  counterContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 22,
    width:22,
    alignItems:'center',
    justifyContent:'center',
    marginTop:3
  },
  counterText: {
    color: 'white',
   
  },
});
