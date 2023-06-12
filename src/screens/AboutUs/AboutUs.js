import React, {useState} from 'react';
import {View, Text, ScrollView, Platform} from 'react-native';

import styles from './style';
import Header from '../../components/Header';
import ContactUsIcon from './ContactUsIcon';
 
const AboutUs = ({navigation}) => {
  const helpHandler = () => {
    navigation.navigate("Contact Us")
  }
  return (
    <>
      <Header title="About Us" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* About Company */}
        <Text style={styles.heading}>About Legalzard and Company</Text>
        <Text style={styles.aboutText}>
          Legalzard is a product of UXLivingLab services that helps in checking
          the compatibility of software licenses.
        </Text>
        <Text style={styles.aboutText}>
          This app also helps in generating different kinds of policies required
          for both websites and mobile applications.
        </Text>
        <Text style={styles.heading}>Why Legalzard?</Text>
        <Text style={styles.aboutText}>
          Traditional license management solutions are poorly suited to modern
          working methods and often introduce vast amounts of friction into your
          business.
        </Text>
        <Text style={styles.aboutText}>
          LegalZard is the one-stop solution to Software Licensing Models {'\n'}
          – Ultimate Guide to License Types. We provide valuable problem-solving
          and decision-support content to IT professionals and line-of-business
          managers.
          {'\n'}
          We are here to ensure you get the best legal solutions and have access
          to everything you need to know about running your business and staying
          compliant with the law.
          {'\n'}LegalZard provides advanced software licensing solutions
          {'\n'}– Finds and compares software licenses and Understands license
          data and its compatibility. Licenses can be filtered by one or several
          categories, license text, and a few key characteristics. Legalzard can
          also create the necessary legal agreements and policies for your
          online business Choose and Download your customized policies and
          manage Business workflows.
        </Text>
        <ContactUsIcon helpHandler={helpHandler}/>
      </ScrollView>
    </>
  );
};

export default AboutUs;
