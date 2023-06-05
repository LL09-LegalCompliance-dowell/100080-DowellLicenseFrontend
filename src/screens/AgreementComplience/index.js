import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import styles from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../../assets/colors/colors';
// images
import Image1 from './images/1.png';
import Image2 from './images/2.png';
import Image3 from './images/3.png';
import Image4 from './images/4.png';
import Image5 from './images/5.png';
import Image6 from './images/6.png';
import Image7 from './images/7.png';
import Image8 from './images/8.png';
import Image9 from './images/9.png';
import Image10 from './images/10.png';
import Image11 from './images/11.png';
import Image12 from './images/12.png';
import Image13 from './images/howto_1.png';
import Image14 from './images/howto_2.png';
import Image15 from './images/howto_3.png';
import Image16 from './images/howto_4.png';
import Image17 from './images/howto_5.png';
import {Image} from 'react-native';

import HowToIcon from '../../screens/LicenseCompatibility/HowToIcon';
import HowToModel from './HowToModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AgreementComplience = ({navigation}) => {
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [agreeDisclaimer, setAgreeDisclaimer] = useState('');

  useMemo(async () => {
    const agreeSatus = await AsyncStorage.getItem('agree');
    console.log(agreeSatus);

    if (agreeSatus == null) {
      setModal1Visible(true);
    }
  }, []);

  const [showPrivacyPolicyOptions, setPrivacyPolicyShowOptions] =
    useState(false);
  const [showDisclaimerOptions, setDisclaimerShowOptions] = useState(false);
  const [isHowto, setHowto] = useState(false);
  return (
    <>
      {/* How to Overlay starts here */}
      <View>
      <Modal
        propagateSwipe
        isVisible={isModal1Visible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={true}
        onBackdropPress={() => setHowto(false)}
        onBackButtonPress={() => setHowto(false)}
        backdropTransitionOutTiming={0}
        onSwipeComplete={() => setHowto(false)}
        swipeDirection="right">
        <View
          style={{
            backgroundColor: 'white',
            height: 370,
            width: '100%',
            padding: 5,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              paddingTop: 20,
              fontSize: 17,
              fontFamily: 'roboto',
              fontWeight: '700',
            }}>
            Notice
          </Text>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              paddingTop: 20,
              fontSize: 16,
              fontFamily: 'roboto',
              textAlign: 'justify',
            }}>
            We and selected third parties use cookies or similar technologies
            for technical purposes and, with your consent, for other purposes as
            specified in the cookie policy.
          </Text>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              paddingTop: 20,
              fontSize: 16,
              fontFamily: 'roboto',
              textAlign: 'justify',
            }}>
            You can consent to the use of such technologies by using the
            "Accept" button. By closing this notice, you continue without
            accepting.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
              marginTop: 90,
              borderTopColor: '#959595',
              borderTopWidth: 1,
            }}>
            <Pressable
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}
              onPress={async () => {
                // setAgreeDisclaimer('agree');
                await AsyncStorage.setItem('agree', "agree");
                setModal1Visible(false);
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'roboto',
                  color: 'red',
                  paddingTop: 5,
                }}>
                Close
              </Text>
            </Pressable>
            <Pressable
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}
              onPress={async () => {
                // setAgreeDisclaimer('agree');
                await AsyncStorage.setItem('agree', "agree");
                setModal1Visible(false);
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'roboto',
                  color: 'green',
                  paddingTop: 5,
                }}>
                Accept
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
          propagateSwipe
          isVisible={isHowto}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={true}
          onBackdropPress={() => setHowto(false)}
          onBackButtonPress={() => setHowto(false)}
          backdropTransitionOutTiming={0}
          onSwipeComplete={() => setHowto(false)}
          swipeDirection="right"
          customBackdrop={
            <TouchableWithoutFeedback onPress={() => setHowto(false)}>
              <View style={{flex: 1, backgroundColor: 'white'}} />
            </TouchableWithoutFeedback>
          }>
          <>
            <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
              <TouchableOpacity
                style={{marginLeft: 'auto'}}
                onPress={() => setHowto(false)}>
                <Entypo name="cross" size={40} color="darkgray" />
              </TouchableOpacity>
              <ScrollView showsVerticalScrollIndicator={false} >
                <View flex={1} onStartShouldSetResponder={() => true}>
                <Text style={ {fontSize: 26, alignSelf: 'center',margin:20,color:"#000000"}}>
                  How to generate a Policy
                </Text>
                <View style={{margin:5}}>
                  <Text style={{fontSize:18,color:"#000000",}} >
                      1.Select the policy you want to generate
                  </Text>
                  <Image
                      source={Image13}
                      style={{width: '100%',alignSelf:"center",marginTop:20}}
                  />
                  <Text style={{fontSize:18,color:"#000000",marginTop:20}} >
                      2.You can view a sample of each generated policy from this button
                  </Text>
                  <Image
                      source={Image14}
                      style={{ width: '80%',alignSelf:"center",marginTop:20}}
                  />
                  <Text style={{fontSize:18,color:"#000000",marginTop:20}} >
                      3.You can find frequently asked questions from here
                  </Text>
                  <Image
                      source={Image15}
                      style={{ width: '80%',alignSelf:"center",marginTop:10}}
                  />
                  <Text style={{fontSize:18,color:"#000000",marginTop:20}} >
                      4.You can start generating policy from here and then fill each input 
                  </Text>
                  <Image
                      source={Image16}
                      style={{ width: '80%',alignSelf:"center",marginTop:10}}
                  /> 
                  <Text style={{fontSize:18,color:"#000000",marginTop:20}} >
                      5.After you click on "done" you have 2 options either to download policy or preview in app, you will aslo have a link to the generated policy 
                  </Text>
                  <Image
                      source={Image17}
                      style={{ resizeMode:'contain',alignSelf:"center",marginTop:10}}
                  /> 
                </View>
                </View>
                
              </ScrollView>
              
              
            </View>
          </>
        </Modal>
      </View>
      <Header title="Agreement Compliance" leftIcon="menu" rightIcon="user" />
      <View style={styles.container}>
        {/* {isHowto === true ? <HowToModel /> : null} */}
        <HowToIcon onPress={() => setHowto(true)} />
        <Text style={styles.heading}>
          We help with legal requirements, so you can focus on the business
        </Text>
        <ScrollView style={{marginTop: 130}}>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('SLP')}>
            <View style={styles.iconContainer}>
              <Image source={Image3} />
            </View>
            <Text style={styles.listHeading}>Software License Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            onPress={() => {
              setPrivacyPolicyShowOptions(!showPrivacyPolicyOptions);
            }}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image5} />
            </View>
            <Text style={styles.listHeading}>Privacy Policy</Text>
          </TouchableOpacity>
          {/* Privacy Policy Options start */}
          {showPrivacyPolicyOptions === true ? (
            <View style={{paddingHorizontal: 40, paddingVertical: 5}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PrivacyPolicyApp')}
                style={[styles.listContainer, {height: 50}]}>
                <View style={[styles.iconContainer, {height: 35, width: 35}]}>
                  <Image source={Image12} />
                </View>
                <Text style={[styles.listHeading, {fontSize: 15}]}>App</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.listContainer, {height: 50}]}
                onPress={() => navigation.navigate('PrivacyPolicyWeb')}>
                <View style={[styles.iconContainer, {height: 35, width: 35}]}>
                  <Image source={Image6} />
                </View>
                <Text style={[styles.listHeading, {fontSize: 15}]}>
                  Website
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.separator}></View>
          {/* Privacy Policy Options end */}

          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>Terms & Conditions</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('CookiesPolicy')}>
            <View style={styles.iconContainer}>
              <Image source={Image8} />
            </View>
            <Text style={styles.listHeading}>Cookies Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          {/* Disclaimer */}
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              setDisclaimerShowOptions(!showDisclaimerOptions);
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image11} />
            </View>
            <Text style={styles.listHeading}>Disclaimer</Text>
          </TouchableOpacity>
          {/* Disclaimer Options start */}
          {showDisclaimerOptions === true ? (
            <View style={{paddingHorizontal: 40, paddingVertical: 5}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AppDisclaimer')}
                style={[styles.listContainer, {height: 50}]}>
                <View style={[styles.iconContainer, {height: 35, width: 35}]}>
                  <Image source={Image12} />
                </View>
                <Text style={[styles.listHeading, {fontSize: 15}]}>App</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DisclaimerForWeb');
                }}
                style={styles.listContainer}>
                <View style={styles.iconContainer}>
                  <Image source={Image11} />
                </View>
                <Text style={styles.listHeading}>Website</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.separator}></View>
          {/* Disclaimer Options end */}

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('Eula')}>
            <View style={styles.iconContainer}>
              <Image source={Image2} />
            </View>
            <Text style={styles.listHeading}>EULA</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('ReturnsAndRefund')}>
            <View style={styles.iconContainer}>
              <Image source={Image4} />
            </View>
            <Text style={styles.listHeading}>Return & Refund</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('TermsOfUse')}>
            <View style={styles.iconContainer}>
              <Image source={Image2} />
            </View>
            <Text style={styles.listHeading}>Website Terms of Use</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          {/* Employment contardct starts here */}

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('EmploymentContract')}>
            <View style={styles.iconContainer}>
              <Image source={Image10} />
            </View>
            <Text style={styles.listHeading}>Employment Contract</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('MOU');
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>MOU</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('NDA');
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>NDA</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigation.navigate('GDPR');
            }}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>GDPR Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          {/* Statement of work */}
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => navigation.navigate('StatementOfWork')}>
            <View style={styles.iconContainer}>
              <Image source={Image10} />
            </View>
            <Text style={styles.listHeading}>Statement of Work</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NonCompetAgreement');
            }}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>Non Compete Agreement</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WebsiteSecurityPolicy');
            }}
            style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Image source={Image1} />
            </View>
            <Text style={styles.listHeading}>Website Security Policy</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default AgreementComplience;
