import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../../../components/Header';
import styles from '../../Cookies/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../../assets/colors/colors';
const C1 = ({navigation}) => {
  return (
    <>
      <Header title="App Privacy Policy" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for App Privacy Policy Template.{' '}
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
          source={require('../../../../../assets/images/eula_blur.png')}
          style={styles.blurImage}
        />

        <Text style={styles.heading}>Disclaimer or Statement</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('eula_policy_nav');
          }}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'App Privacy Policy',
              data: [
                {
                  question: 'What is Privacy Policy?',
                  answer:
                    'A Privacy Policy is a legal agreement designed to let visitors to your website or users of your app know what personal information you gather about them, how you use this information and how you keep it safe. A Privacy Policy for a website or app generally covers: 1-The types of information collected by the website or app 2-The purpose of this data collection 3-Data storage, security and access 4-Details of data transfers 5-Affiliated websites or organizations 6-Cookies',
                },
                {
                  question: 'Do you need a privacy policy?',
                  answer:
                    'You are legally bound to have a privacy policy if you collect, store or sort any personal information of customers or even visitors who visit your website or use the app or website. Personal information includes: 1-Name  2-Address 3-Date of Birth 4-Bank Details 5-Social Security Number 6-Phone/ Mobile numbers',
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
