import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../../components/Header';
import styles from '../Cookies/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../assets/colors/colors';
import Toast from 'react-native-toast-message';
import checkCredits from '../../../utils/checkCredit';

const C1 = ({navigation}) => {
  const goToTNC = async() => {
    try {
      await checkCredits()
      navigation.navigate('tnc_policy_nav');
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
      <Header title="Terms and Conditions" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Terms and Conditions Policy Template.
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
          onPress={goToTNC}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Terms and Conditions',
              data: [
                {
                  question:
                    'Are Terms and Conditions legally binding if not signed?',
                  answer:
                    "Terms and Conditions don't have to be 'signed' in order to be legally binding. However, there has to be some evidence that the customer has accepted the Terms and Conditions. If you display your Terms and Conditions on your website, app, or software, you should obtain acceptance of your Terms and Conditions via a 'clickwrap' prompt.",
                },
                {
                  question: 'Why are Terms and Conditions important?',
                  answer:
                    'Terms and conditions are not a compulsory legal requirement, they are optional but the Terms and Conditions are important for several reasons. The Terms and Conditions set rules and regulations for how customers can use and pay for the product or services. The rules set under the Terms and Conditions can help you to allow it to be enforced in court. In case of any mistakes the amount for any liability can be limited in case you have to pay for those damages.',
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

export default C1;
