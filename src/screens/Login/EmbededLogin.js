import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

import styles from './style';
import {useEffect} from 'react';

export default IntroductionScreen = ({route, navigation}) => {
  const [agree, setAgree] = useState(false);
  const [date, setDate] = useState(null);
  
  const fetchdata = async () => {
    const data = await AsyncStorage.getItem('previouslyAgreedDate');
    const iAgree = JSON.parse(await AsyncStorage.getItem('iAgree'));
    setDate(data);
    setAgree(iAgree);
    console.log(data);
    console.log(iAgree);
  };
  useEffect(() => {
    fetchdata();
  }, [agree, date]);
  //console.log(agree)

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.art}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.topLogo}
          />
        </View>

        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>DoWell Research Services</Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WebView');
          }}
          style={[
            styles.getStarted,
            {
              backgroundColor: '#078F04',
            },
          ]}
          //disabled={!agree}
          >
          <Text style={styles.getStartedText}>Login</Text>
        </TouchableOpacity>
        
        {/* Policy statrts here */}
        <View style={[styles.policyWrapper, {marginTop: 50}]}>
          {/* <CheckBox
            disabled={false}
            value={agree}
            onValueChange={() => {
              if (agree === false) {
                setDate(null);
              }else{
                setAgree(agree);
              }              
            }}
            tintColor={agree ? '#078F04' : undefined}
            style={styles.checkbox}
          />  */}
          <Text style={styles.policyText}>
            {' '}
            Agree to the{' '}
            <Text
              style={styles.policyTextLink}
              onPress={() => navigation.navigate('PrivacyPolicy') }>
              privacy policy and terms & conditions
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};
