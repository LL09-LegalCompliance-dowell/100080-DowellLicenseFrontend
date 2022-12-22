import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';
import styles from './style';

const AgreementComplience = ({navigation}) => {
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
              <MaterialIcons name="computer" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>Softwere License Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="policy" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="clipboard-check-outline"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Terms & Conditions</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity style={styles.listContainer} onPress={() => navigation.navigate('CookiesPolicy')} >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="cookie-outline"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Cookies Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Disclaimer</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>
          <TouchableOpacity style={styles.listContainer} onPress={() => navigation.navigate('Eula')}>
            <View style={styles.iconContainer}>
              <AntDesign name="warning" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>EULA</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.listContainer}onPress={() => navigation.navigate('ReturnsAndRefund')}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Return & Refund</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Fontisto
                name="arrow-return-left"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Terms & Service</Text>
          </View>
          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.listContainer} onPress={() => navigation.navigate('TermsOfUse')}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Website Terms of Use</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('MOU');
            }}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
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
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
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
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
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
              <Entypo name="open-book" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>Non Compete Agreement</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default AgreementComplience;
