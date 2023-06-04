import React from 'react'
import { ScrollView,Text,TouchableOpacity,View,Image }  from 'react-native'
import Header from '../../../components/Header';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../assets/colors/colors';
const C1 = ({navigation}) => {
  return (
    <>
       <Header title="Cookies Policy"/>
      
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View>
            <Text style={styles.text}>
            We help with the legal requirements, so you can focus on the business. 
            </Text>
            <Text style={styles.text}>
            Below is the sample for Cookies Policy Template. 
            </Text>
          </View>
          <View style={styles.viewSampleContainer}>
            <TouchableOpacity style={styles.viewSample} onPress={() => {navigation.navigate('policy_image')}}>
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
               navigation.navigate('cookies_policy_nav');
           }}>
            <View style={styles.getStarted}>
              <Text style={styles.getStartedText}>Start Generating</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={{display:'flex',flexDirection:"row"}}
          onPress={() => {
            navigation.navigate('FAQ',{
             questions:["What are cookies?","Why do you need consent to use cookies?"],
             answers:["Cookies are small pieces of text sent to your browser by the websites you visit. It helps the website to remember a few information of users when they visit the website again. It allows the site to display the selected setting and targeted contents for the users.","Cookies can process personal information and identifiable information of visitors on the website or users of the website.To protect the privacy policies of such users and visitors, the option to refuse the cookies policies is also available. As per the GDPR and ePrivacy Directive guidelines a website must ask for cookies consent from users. The cookies collect personal data of users and it is unlawful to collect personal data of users without their consent."]
            });
          }}>
            <EvilIcons name='question'  size={24} style={styles.faq1}/>
            <Text style={styles.faq}>Generator FAQs</Text>
          </TouchableOpacity>

          <Text style={styles.textlight}>
          Get your documents and make your site or app compliant in minutes.
          </Text>
          

        </ScrollView> 
    </>
  )
}

export default C1

