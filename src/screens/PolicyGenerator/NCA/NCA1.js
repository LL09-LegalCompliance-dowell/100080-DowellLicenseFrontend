import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../../assets/colors/colors';
import icon from '../../../../assets/images/generatorFQs.png';
import styles from './styles';
import Header from '../../../components/Header';

const NCA1 = ({navigation}) => {
  return (
    <>
      <Header title="Non Compete Agreement" />

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
          source={require('../../../../assets/images/BlurLicenseSample.png')}
          style={styles.blurImage}
        />
        <Text style={styles.heading}>Disclaimer or Statement</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MOUIndex');
          }}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQsPrivacyPolicy');
          }}>
          <Image
            style={[styles.faq, {marginTop: 33, marginRight: 5}]}
            source={icon}
          />
          <Text style={styles.faq}>Generator FAQs</Text>
        </TouchableOpacity>

        <Text style={styles.textlight}>
          Get your documents and make your site or app compliant in minutes.
        </Text>
      </ScrollView>
    </>
  );
};

export default NCA1;
