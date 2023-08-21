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
  const goToEULA = async() => {
    try {
      await checkCredits()
      navigation.navigate('eula_policy_nav');
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
      <Header title="End User License Agreement" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for End User License Agreement Policy Template.
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
          onPress={goToEULA}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'End User License Agreement',
              data: [
                {
                  question: 'What is EULA?',
                  answer:
                    'EULA is a legal binding document. You cannot legally use the software, content or any services without entering into an EULA first. Under an EULA certain terms and conditions are set out which are in accordance with the license which permits users to use software, conditions and services. When you purchase software, you are buying the right, or getting a license, to use the software in accordance with the EULA. EULA can help in explaining the use and restrictions on the software that you purchase. It states about both actions and penalties..',
                },
                {
                  question: 'Is EULA required by law?',
                  answer:
                    'EULA is not legally required by law. However EULA is of great help when the business faces legal hurdles and in case you do not have EULA you or your business might face more legal hurdles.',
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
