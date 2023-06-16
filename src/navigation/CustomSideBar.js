import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';

const ICON1 = require('./images/home.png');
const ICON2 = require('./images/anoutUs.png');
const ICON3 = require('./images/softwereLicenses.png');
const ICON4 = require('./images/legalAPIs.png');
const ICON5 = require('./images/legalAPIs.png');
const ICON6 = require('./images/Group.png');
const ICON7 = require('./images/pricing.png');
const ICON8 = require('./images/contactUs.png');
const ICON9 = require('./images/Logout.png');

const CustomSideBar = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.topSection}>
        <Image
          style={{height: 90, width: 90, resizeMode: 'contain'}}
          source={require('./images/navigation_logo_7.png')}
        />
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={ICON1} />
          </View>
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SliderScreen');
          }}
          style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={ICON4} />
          </View>
          <Text style={styles.title}>License compatibility</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Software License');
          }}
          style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={ICON3} />
          </View>
          <Text style={styles.title}>Software License</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LicenseCompatibility');
          }}
          style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={ICON6} />
          </View>
          <Text style={styles.title}>Open Source License Compatibility</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ActualAboutUs');
          }}
          style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={ICON2} />
          </View>
          <Text style={styles.title}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact Us');
          }}
          style={styles.item}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={ICON8} />
          </View>
          <Text style={styles.title}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Logout');
        }}
        style={styles.logoutButton}>
        <View style={styles.iconContainer}>
          <Image style={[styles.icon, styles.logoutIcon]} source={ICON9} />
        </View>
        <Text style={[styles.title, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  topSection: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  middleSection: {
    flex: 8.4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    // paddingHorizontal: 16,
  },

  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
  },
  iconContainer: {
    width: 50,
    height: 30,
  },
  icon: {
    // width: 24,
    // height: 24,
    margin: 12,
  },
  logoutButton: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    marginBottom: 30,
    marginVertical: 7,
    paddingHorizontal: 8,
    // marginVertical: 7,
    // paddingVertical: 10,
    // paddingHorizontal: 16,
  },
  logoutText: {
    color: 'red',
  },
  logoutIcon: {
    tintColor: 'red',
  },
});

export default CustomSideBar;