import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../../components/Header';
import styles from '../Cookies/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../assets/colors/colors';
import Toast from 'react-native-toast-message';
import checkCredits from '../../../utils/checkCredit';

const W1 = ({navigation}) => {
  const goToWSP = async() => {
    try {
      await checkCredits()
      navigation.navigate('website_security_policy_nav');
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
      <Header title="Website Security Policy" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Website Security Policy Template.
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
          onPress={goToWSP}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Website Security Policy',
              data: [
                {
                  question: 'What is a Website Security Policy?',
                  answer:
                    'Website Security Policy protects websites from cyber threats, malware and vulnerabilities. It casts a wide net to protect users from any and all kinds of malicious emails, hijacking etc. It makes sure that website data is not exposed to cyber criminals or to prevent exploitation of the website in any way.',
                },
                {
                  question:
                    'What are the important aspects under Website Security Policy?',
                  answer:
                    'There are mainly three aspects under Website Security Policy which are confidentiality, integrity and availability.',
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

export default W1;
