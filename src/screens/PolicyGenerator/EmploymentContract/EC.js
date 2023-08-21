import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import styles from '../Cookies/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../assets/colors/colors';
import Header from '../../../components/Header';
import Toast from 'react-native-toast-message';
import checkCredits from '../../../utils/checkCredit';

const EC = ({navigation}) => {
  const goToEmploymentContract = async() => {
    try {
      await checkCredits()
      navigation.navigate('ec_policy_nav');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Error: You need to Activate legalzard Service before using`,
        text2: `We apologize, but something seems to have gone wrong. Please try again later.`,
      });
    }    
  }
  return (
    <>
      <Header title="Employment Contract" />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Employment Contract Policy Template.
          </Text>
        </View>
        <View style={styles.viewSampleContainer}>
          <TouchableOpacity
            style={styles.viewSample}
            onPress={() => {
              navigation.navigate('license_image');
            }}>
            <Ionicons name="md-eye-sharp" size={24} color={colors.primary} />
            <Text style={styles.faqq}>View Sample</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../../../assets/images/eula_blur.png')}
          style={styles.blurImage}
        />

        <Text style={styles.heading}>Disclaimer or Statement</Text>

        <TouchableOpacity
          onPress={goToEmploymentContract}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Employment Contract',
              data: [
                {
                  question: 'What is an Employment contract?',
                  answer:
                    'The Employment Contract is between employer and employee, it safeguards the rights of employee and employer both. This agreement protects parties involved in any conflicts by acting as a source of legalities to which both parties must adhere. It shall have the writing of rights and responsibilities of both the employer and employee.',
                },
                {
                  question:
                    'What happens in case any employee refuses to sign the Employment Contract?',
                  answer:
                    'The offer letter offered to the employee can be withdrawn if the specific employee refuses to sign it and refuses to agree with the terms of agreement. However, in case of any problems related to a specific clause of the Employment Contract should be tried to be resolved with the help of a formal discussion.',
                },
              ],
            });
          }}>
          <EvilIcons name="question" size={24} style={styles.faq1} />
          <Text style={styles.faq}>Generator FAQs</Text>
        </TouchableOpacity>

        <Text style={styles.textlight}>
          Get your documents and make your site or app compliant in minutes.
        </Text>
      </ScrollView>
    </>
  );
};

export default EC;
