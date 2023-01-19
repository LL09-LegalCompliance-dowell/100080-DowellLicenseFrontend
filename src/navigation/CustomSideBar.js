import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import * as React from 'react';
import {Image} from 'react-native';

const ICON1 = './images/home.png';
const ICON2 = './images/anoutUs.png';
const ICON3 = './images/softwereLicenses.png';
const ICON4 = './images/legalAPIs.png';
const ICON5 = './images/legalAPIs.png';
const ICON6 = './images/Group.png';
const ICON7 = './images/pricing.png';
const ICON8 = './images/contactUs.png';
const ICON9 = './images/Logout.png';

const CustomSideBar = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          style={{height: 60, width: 60, resizeMode: 'contain'}}
          source={require('./images/logo.png')}
        />
      </View>
      <View style={styles.middleSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON1)} />
          </View>
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact Us');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON2)} />
          </View>
          <Text style={styles.title}>About Us</Text>
        </TouchableOpacity> */}

        

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Agreement Compliance');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON4)} />
          </View>
          <Text style={styles.title}>Agreement Compliance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Software License');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON3)} />
          </View>
          <Text style={styles.title}>Software license</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON6)} />
          </View>
          <Text style={styles.title}>Other Legal compliance</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON7)} />
          </View>
          <Text style={styles.title}>Pricing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact Us');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON8)} />
          </View>
          <Text style={styles.title}>Contact us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Logout');
          }}
          style={styles.item}>
          <View style={styles.iconConatainer}>
            <Image style={styles.icon} source={require(ICON9)} />
          </View>
          <Text style={styles.title}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}></View>
    </ScrollView>
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
  },
  middleSection: {
    flex: 8.4,
  },
  bottomSection: {
    display: 'flex',
    flex: 1.1,
  },
  title: {
    color: 'black',
    fontSize: 21,
    fontWeight: '400',
    marginTop: 16,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  icon: {
    margin: 12,
  },
  iconConatainer: {
    width: 50,
    height: 30,
  },
});
