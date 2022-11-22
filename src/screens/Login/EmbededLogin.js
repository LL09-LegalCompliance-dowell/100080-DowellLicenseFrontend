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
  Pressable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

import styles from './style';
import AppLoader from '../../components/AppLoader';

import {useLogin} from '../../context/LoginProvider';
import {useEffect} from 'react';

export default IntroductionScreen = ({route, navigation}) => {
  const [agree, setAgree] = useState(false);
  // const [agreData, setAgreeData] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState('');
  const {loading} = useLogin();
  const {i_agree, isSuccess, policy_request_id, log_datetime} = route.params;

  const fetchdata = async () => {
    const data = await AsyncStorage.getItem('previouslyAgreedDate');
    const successValue = await AsyncStorage.getItem('isSuccessValue');

    setDate(data);
  };
  fetchdata();
  // const data = AsyncStorage.getItem('previouslyAgreedDate');
  // console.log(data);
  useEffect(() => {
    setAgree(i_agree);
  });
  return (
    <>
      <Modal
        propagateSwipe
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={1000}
        animationOutTiming={1000}
        avoidKeyboard={true}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}>
        <View style={styles.popup}>
          <View style={styles.alertHeader}>
            <Text style={styles.alertHeaderText}>Message</Text>
          </View>
          <Text
            style={
              styles.alertMessageText
            }>{`You agreed to these terms and conditions on ${date}. Do you want to visit again?`}</Text>
          <View style={styles.alertButtonsConatainer}>
            <Pressable
              onPress={() => navigation.navigate('PrivacyPolicy')}
              style={styles.alertButton}>
              <Text style={styles.alertButtonText}>Visit anyway</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.alertButton}>
              <Text style={styles.alertButtonText}>Skip</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

                date == ''
                  ? navigation.navigate('PrivacyPolicy')
                  : setModalVisible(true);
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
