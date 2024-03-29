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
  const goToWebDisclaimer = async() => {
    try {
      await checkCredits()
      navigation.navigate('license_image');
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
      <Header title="Disclaimer for Website" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Disclaimer for Website Policy Template.
          </Text>
        </View>
        <View style={styles.viewSampleContainer}>
          <TouchableOpacity
            style={styles.viewSample}
            onPress={goToWebDisclaimer}>
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
          onPress={() => {
            navigation.navigate('dfw_policy_nav');
          }}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Disclaimer for Website',
              data: [
                {
                  question: 'Why are disclaimers required?',
                  answer:
                    'A disclaimer is very crucial for protecting  your business against legal liability by clearly stating that you won’t be held liable in case of any breach for how the public use the website or damages suffered by anybody as a result of content.',
                },
                {
                  question: 'Where should you put the disclaimer?',
                  answer:
                    'You should always put the disclaimer in visible places of the website or app. It has to be visible to visitors or users for you to be excused by any legal liability. Some visible locations to put your disclaimer include your website footer, product description pages, and within your terms and conditions.',
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
