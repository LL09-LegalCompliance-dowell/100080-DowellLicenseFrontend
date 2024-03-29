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
  const goToSLP = async() => {
    try {
      await checkCredits()
      navigation.navigate('slp_policy_nav');
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
      <Header title="Software License Policy" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Software License Policy Template.
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
          onPress={goToSLP}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Software License Policy',
              data: [
                {
                  question: 'What is the Software License Policy?',
                  answer:
                    'Software License Policy is an agreement which is between the software creator and customers which are to use that software. It has a legal binding effect on both the parties with specific guidelines for the use and distribution of the software.',
                },
                {
                  question: 'How does the Software License Agreement work?',
                  answer:
                    'A software license grants the licensee, which could be a company or a customer, the permission to use the software in such a way that does not involve infringement of the software developer’s copyrights.',
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
