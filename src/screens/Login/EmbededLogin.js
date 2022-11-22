import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import AppLoader from '../../components/AppLoader';

import {useLogin} from '../../context/LoginProvider';
import {useEffect} from 'react';

export default IntroductionScreen = ({route, navigation}) => {
  const [agree, setAgree] = useState(false);
  const [date, setDate] = useState('');
  const {loading} = useLogin();
  const {i_agree, isSuccess, policy_request_id, log_datetime} = route.params;

  const fetchdata = async () => {
    const data = await AsyncStorage.getItem('previouslyAgreedDate');
    setDate(data);
    console.log(date);
  };
  fetchdata();
  // const data = AsyncStorage.getItem('previouslyAgreedDate');
  // console.log(data);
  useEffect(() => {
    setAgree(i_agree);
    // setDate(log_datetime);
  });
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar color="white" />

        {loading ? <AppLoader /> : null}
        <View style={styles.introLogoTop}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.topLogo}
          />
        </View>

        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>DoWell Research Services</Text>
        </View>

        {/* Policy statrts here */}
        <View style={[styles.policyWrapper, {marginTop: 120}]}>
          <CheckBox
            disabled={false}
            value={agree}
            onValueChange={() => agree}
            tintColor={agree ? '#078F04' : undefined}
            style={styles.checkbox}
          />
          <Text style={styles.policyText}>
            {' '}
            I agree to the{' '}
            <Text
              style={styles.policyTextLink}
              onPress={() => {
                // navigation.navigate('PrivacyPolicy');
                {
                  date == ''
                    ? navigation.navigate('PrivacyPolicy')
                    : Alert.alert(
                        'Alert',
                        `You agreed to these terms and conditions on ${date}`,
                        [
                          {
                            text: 'Visit anyway',
                            onPress: () => navigation.navigate('PrivacyPolicy'),
                            style: 'cancel',
                          },
                          {
                            text: 'Skip',
                            // onPress: () => Alert.alert('Cancel Pressed'),
                            style: 'cancel',
                          },
                        ],
                        // {
                        //   cancelable: true,
                        //   onDismiss: () =>
                        //     Alert.alert(
                        //       'This alert was dismissed by tapping outside of the alert dialog.',
                        //     ),
                        // },
                      );
                }
              }}>
              privacy policy and terms & conditions
            </Text>
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WebView');
          }}
          style={[
            styles.getStarted,
            {
              backgroundColor: agree ? '#078F04' : '#a9a9a9',
            },
          ]}
          disabled={!agree}>
          <Text style={styles.getStartedText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RootNavigator');
          }}
          style={[
            styles.getStarted,
            {
              backgroundColor: '#078F04',
            },
          ]}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Go to HomeScreen
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
