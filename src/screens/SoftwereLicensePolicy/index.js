import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';

const SoftwereLicensePolicy = ({navigation}) => {
  return (
    <>
      <Header title="Softwere License Policy" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.textStyle}>
          We help with the legal requirements, so you can focus on the business.
          Below is the sample for Software License Policy Template.
        </Text>

        <View style={styles.viewSampleContainer}>
          <TouchableOpacity style={styles.viewSample} onPress={() => {}}>
            <Ionicons name="md-eye-sharp" size={24} color={colors.primary} />
            <Text style={styles.faqq}>View Sample</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../../assets/images/BlurLicenseSample.png')}
          style={styles.blurImage}
        />
        <Text style={styles.heading}>Disclaimer or Statement</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Generate Policies');
          }}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FAQsPrivacyPolicy');
          }}>
          <Text style={styles.faq}>Generator FAQs</Text>
        </TouchableOpacity>

        <Text style={styles.textlight}>
          Get your documents and make your site or app compliant in minutes.
        </Text>
      </ScrollView>
    </>
  );
};

export default SoftwereLicensePolicy;
