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
  const goToMOU = async() => {
    try {
      await checkCredits()
      navigation.navigate('mou_policy_nav');
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
      <Header title="Memorandum of Understanding" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Memorandum of Understanding Policy Template.
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
          onPress={goToMOU}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Memorandum of Understanding',
              data: [
                {
                  question: 'What is a Memorandum of Understanding?',
                  answer:
                    'A Memorandum of Understanding (MOU) acknowledges and administers the strategic connection between institutions over a specified time period. These agreements describe intentions to cooperate with another organization or party under typically non-binding terms and conditions. MOU generally conceptualized goals and aims that both sides have agreed upon on common grounds.',
                },
                {
                  question: 'What information is included in the Memorandum of Understanding?',
                  answer:
                    'MOUs identify parties of the agreement. They describe in general the areas of shared interest and the components of the proposed partnership. They do not include terms that need to be negotiated, such as those pertaining to intellectual property or payment obligations. They express goodwill and reflect the overall character of the planned partnership.',
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
