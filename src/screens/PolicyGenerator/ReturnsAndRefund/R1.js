import React from 'react'
import { ScrollView,Text,TouchableOpacity,View,Image }  from 'react-native'
import Header from '../../../components/Header';
import styles from '../Cookies/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../../assets/colors/colors';
const R1 = ({navigation}) => {
    return (
        <>
           <Header title="Return and Refund"/>
          
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View>
                <Text style={styles.text}>
                We help with the legal requirements, so you can focus on the business. 
                </Text>
                <Text style={styles.text}>
                Below is the sample for Return and Refund Policy Template. 
                </Text>
              </View>
              <View style={styles.viewSampleContainer}>
                <TouchableOpacity style={styles.viewSample} onPress={() => {navigation.navigate('license_image')}}>
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
                   navigation.navigate('return_and_refund_policy_nav');
               }}>
                <View style={styles.getStarted}>
                  <Text style={styles.getStartedText}>Start Generating</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
              style={{display:'flex',flexDirection:"row"}}
              onPress={() => {
                navigation.navigate('FAQ',{
                 questions:["What is Return and Refund Policy?","Why is the Return and Refund Policy important?"],
                 answers:["Return and Refund Policy dictates under what conditions customers are eligible to return the products they have bought previously and reimbursement for those returned goods. Generally these Return and Refund Policy comes with the time frame under which companies can accept the returns and offer refunds.","A Return and Refund Policy is important for all small and large businesses if they sell their products online. It protects the business from bad customers and in return it also helps the customers to know what to expect when they order a product. For any e-commerce business to prosper it is suggested to have a clear Return and Refund Policy."]
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

export default R1