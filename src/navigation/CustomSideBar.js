import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useState,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors/colors';
import {Image} from 'react-native';
import {Pressable} from 'react-native';

const ICON1 = './images/home.png';
const ICON2 = './images/anoutUs.png';
const ICON3 = './images/softwereLicenses.png';
const ICON4 = './images/legalAPIs.png';
const ICON5 = './images/legalAPIs.png';
const ICON6 = './images/Group.png';
const ICON7 = './images/pricing.png';
const ICON8 = './images/contactUs.png';
const ICON9 = './images/Logout.png';

const DATA = () => {
  [
    {
      id: 1,
      title: 'Home',
      icon: ICON1,
    },
    {
      id: 2,
      title: 'About Us',
      icon: ICON2,
    },
    {
      id: 3,
      title: 'Software license',
      icon: ICON3,
    },
    {
      id: 4,
      title: 'Agreement Compliance',
      icon: ICON4,
    },
    {
      id: 5,
      title: 'Legal APIs',
      icon: ICON5,
    },
    {
      id: 6,
      title: 'Other Legal compliance',
      icon: ICON6,
    },
    {
      id: 6,
      title: 'Pricing',
      icon: ICON7,
    },
    {
      id: 6,
      title: 'Contact us',
      icon: ICON8,
    },
    {
      id: 6,
      title: 'Logout',
      icon: ICON9,
    },
  ];
};

const Item = ({title, icon}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    {/* <Image style={styles.icon} source={{icon}} /> */}
  </View>
);

const CustomSideBar = () => {
  const renderItem = ({item}) => <Item title={item.title} icon={item.icon} />;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./images/logo.png')} />
      </View>
      <View style={styles.middleSection}>
        {DATA.item.map((item)=>{
        })}
        <Text style={{color: 'back'}}>pakistan</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text>pakistan</Text>
      </View>
    </View>
  );
};

export default CustomSideBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'red',
  },
  middleSection: {
    flex: 8.4,
    backgroundColor: 'lightgray',

  },
  bottomSection: {
    display: 'flex',
    flex: 1.1,
    backgroundColor: 'red',
  },
  title: {
    color: 'back',
    fontSize: 22,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    padding: 8,
  },
});
