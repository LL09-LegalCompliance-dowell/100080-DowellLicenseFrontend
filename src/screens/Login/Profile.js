import {StyleSheet, Image, Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import colors from '../../../assets/colors/colors';
import AppLoader from '../../components/AppLoader';
import Header from '../../components/Header';

const Profile = () => {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [org, setOrg] = useState("")
  const [member, setMember] = useState("")
  const [portfolio, setPortfolio] = useState("")
  const [role, setRole] = useState("")
  const [profile_image, setProfileImage] = useState("")

  const getDetails = async () => {
    const username = await AsyncStorage.getItem("username");
    const email = await AsyncStorage.getItem("email");
    const member = await AsyncStorage.getItem("member_type");
    const org = await AsyncStorage.getItem("org_name");
    const portfolio = await AsyncStorage.getItem("portfolio_name");
    const role = await AsyncStorage.getItem("role");
    const profile_image = await AsyncStorage.getItem("profile_image");
    setUsername(username)
    setEmail(email)
    setMember(member)
    setOrg(org)
    setPortfolio(portfolio)
    setRole(role)
    profile_image && setProfileImage(profile_image)
  }

  useEffect(() => {
    getDetails();
  }, [])
  console.log(profile_image)
  return (
    <View style={styles.container}>
      {loading ? <AppLoader /> : null}
      <StatusBar color="white" />
      <Header title="Account Details" />
      <View style={styles.innerContainer}>
        <Image
          // profile_image? {uri:profile_image} :
          source={require('./profileIcon.png')}
          style={styles.profileIcon}
        />
        <Text style={styles.label}>Username</Text>
        <Text style={styles.feildData}>{username}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.feildData}>{email}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Organization</Text>
        <Text style={styles.feildData}>{org}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Member Type</Text>
        <Text style={styles.feildData}>{member}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>portfolio</Text>
        <Text style={styles.feildData}>{portfolio}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Role</Text>
        <Text style={styles.feildData}>{role}</Text>
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
