import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../../components/Header';
import styles from '../Cookies/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../assets/colors/colors';
const N1 = ({navigation}) => {
  return (
    <>
      <Header title="Non-Disclosure Agreement" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the
            business.
          </Text>
          <Text style={styles.text}>
            Below is the sample for Non-Disclosure Agreement Policy Template.
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
          onPress={() => {
            navigation.navigate('NDA_policy_nav');
          }}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Start Generating</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('FAQ', {
              header: 'Non-Disclosure Agreement',
              data: [
                {
                  question: 'What is a Non Disclosure Agreement?',
                  answer:
                    'It is a legally binding contract which establishes a confidential relationship between the parties. The party or parties who have signed a Non Disclosure Agreement are supposed to keep some sensitive information confidential between the involved party and to not disclose it to any other party except the members of that NDA. It is an extremely important agreement in case you want to keep any credential information confidential.',
                },
                {
                  question: 'What does a Non Disclosure Agreement do?',
                  answer:
                    'Obligates the receiving party to protect the disclosing party"s confidential information from third parties. Identifies the terms and limits on disclosing and using confidential information; and Allows disclosure of confidential information within the receiving party, only on a “need to know” basis to help achieve the Authorized Purpose specified in the NDA.',
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

export default N1;
