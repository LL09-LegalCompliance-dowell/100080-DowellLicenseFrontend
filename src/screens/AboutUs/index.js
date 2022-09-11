import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';
import MyTextInput from '../../components/MyTextInput';

const About = () => {
  return (
    <>
      <Header title='Contact Us'/>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Contact Info */}
        <Text style={styles.heading}>Contact Info</Text>
        <View style={styles.contactContainer}>
          <View style={styles.contactItem}>
            <Ionicons
              name="location-outline"
              size={30}
              color={colors.primary}
            />
            <Text style={styles.contactText}>
              2912 Meadoebook Road Loss Angeles CA, 90017
            </Text>
          </View>
          <View style={styles.contactItem}>
            <AntDesign name="mail" size={30} color={colors.primary} />
            <Text style={styles.contactText}>Lorem@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Feather name="phone" size={30} color={colors.primary} />
            <Text style={styles.contactText}>310-383-7872</Text>
          </View>
        </View>
        <Text style={styles.heading}>Write to us</Text>
        <Image
          source={require('../../../assets/images/TheLittleThingsWorking.png')}
          style={styles.imageStyle}
        />

        <View style={styles.inputsContainer}>
          <MyTextInput placeholder="Full Name" style={{paddingLeft: 10}} />
          <MyTextInput placeholder="Email Adress" style={{paddingLeft: 10}} />
          <MyTextInput
            placeholder="Message"
            paddingBottom={10}
            style={{paddingLeft: 10}}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default About;
