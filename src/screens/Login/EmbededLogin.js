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

import styles from './style';
import AppLoader from '../../components/AppLoader';

import {useLogin} from '../../context/LoginProvider';
import {useEffect} from 'react';

export default IntroductionScreen = ({route, navigation}) => {
  const [agree, setAgree] = useState(false);
  const {loading} = useLogin();
  const {i_agree, isSuccess, policy_request_id} = route.params;

  useEffect(() => {
    setAgree(i_agree);
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
                navigation.navigate('PrivacyPolicy');
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
              backgroundColor:'#078F04',
            },
          ]}>
          <Text style={{
            color:"#fff", fontSize:20, fontWeight:"bold"
          }}>Go to HomeScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
