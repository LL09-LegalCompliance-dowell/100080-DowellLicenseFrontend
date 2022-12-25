import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Header from '../../components/Header';
import styles from './style';
// images
import Image1 from './images/1.png';
import Image2 from './images/2.png';
import Image3 from './images/3.png';
import Image4 from './images/4.png';
import Image5 from './images/5.png';
import Image6 from './images/6.png';
import Image7 from './images/7.png';
import Image8 from './images/8.png';
import Image9 from './images/9.png';
import Image10 from './images/10.png';
import Image11 from './images/11.png';
import Image12 from './images/12.png';
import {Image} from 'react-native';

const AgreementComplience = ({navigation}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <Header title="Agreement Compliance" leftIcon="menu" rightIcon="user" />
      <View style={styles.container}>
        <Text style={styles.heading}>
          We help with legal requirements, so you can focus on the business
        </Text>
        <ScrollView style={{marginTop: 130}}>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('SoftwereLicensePolicy')}>
            <View style={styles.iconContainer}>
              <Image source={Image3} />
            </View>
            <Text style={styles.listHeading}>Softwere License Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            onPress={() => {
              setShowOptions(!showOptions);
            }}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image5} />
            </View>
            <Text style={styles.listHeading}>Privacy Policy</Text>
          </TouchableOpacity>
          {/* Privacy Policy Options start */}
          {showOptions === true ? (
            <View style={{paddingHorizontal: 40, paddingVertical: 5}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PrivacyPolicyApp')}
                style={[styles.listContainer, {height: 50}]}>
                <View style={[styles.iconContainer, {height: 35, width: 35}]}>
                  <Image source={Image12} />
                </View>
                <Text style={[styles.listHeading, {fontSize: 15}]}>App</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.listContainer, {height: 50}]}
                onPress={() => navigation.navigate('PrivacyPolicyWeb')}>
                <View style={[styles.iconContainer, {height: 35, width: 35}]}>
                  <Image source={Image6} />
                </View>
                <Text style={[styles.listHeading, {fontSize: 15}]}>
                  Website
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.separator}></View>
          {/* Privacy Policy Options end */}

          <TouchableOpacity style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>Terms & Conditions</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('CookiesPolicy')}>
            <View style={styles.iconContainer}>
              <Image source={Image8} />
            </View>
            <Text style={styles.listHeading}>Cookies Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DisclaimerForWeb');
            }}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image11} />
            </View>
            <Text style={styles.listHeading}>Disclaimer for website</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('Eula')}>
            <View style={styles.iconContainer}>
              <Image source={Image2} />
            </View>
            <Text style={styles.listHeading}>EULA</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('ReturnsAndRefund')}>
            <View style={styles.iconContainer}>
              <Image source={Image4} />
            </View>
            <Text style={styles.listHeading}>Return & Refund</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image9} />
            </View>
            <Text style={styles.listHeading}>Terms & Service</Text>
          </View>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('TermsOfUse')}>
            <View style={styles.iconContainer}>
              <Image source={Image2} />
            </View>
            <Text style={styles.listHeading}>Website Terms of Use</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          {/* Employment contardct starts here */}

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('employmentContract')}>
            <View style={styles.iconContainer}>
              <Image source={Image10} />
            </View>
            <Text style={styles.listHeading}>Employment Contract</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('MOU');
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>MOU</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('NDA');
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>NDA</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('GDPR Privacy Policy');
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>GDPR Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NCA1');
            }}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>Non Compete Agreement</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default AgreementComplience;
