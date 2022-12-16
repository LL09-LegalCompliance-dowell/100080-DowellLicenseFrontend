import React from 'react'
import { ScrollView,Text,TouchableOpacity,View,Image }  from 'react-native'
import Header from '../../components/Header';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../assets/colors/colors';
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
            source={require('../../../assets/images/cookies_blur.png')}
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
             navigation.navigate('FAQsPrivacyPolicy');
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

