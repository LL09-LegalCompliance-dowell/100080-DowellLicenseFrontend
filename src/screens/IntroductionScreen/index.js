import React, {useState, useEffect, useMemo} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import {StackActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginProvider from '../../context/LoginProvider';
import axios from 'axios';
import AppLoader from '../../components/AppLoader';
const IntroductionScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [licenses, setLicenses] = useState([]);

  // const FetchUserAndLicense = async () => {
  //   setLoading(true);
  //   const LicensesData = await axios.get(
  //     'https://100080.pythonanywhere.com/api/licenses/',
  //   );
  //   if (LicensesData.data) {
  //     setLicenses(LicensesData.data.data);
  //     console.log('Hello ');
  //     console.log(LicensesData.data.data);

  //     setLoading(false);
  //   }
  // };
  // fetchUserAndLicense;
  // useMemo(async () => {
  //   setLoading(true);
  //   const LicensesData = await axios.get(
  //     'https://100080.pythonanywhere.com/api/licenses/',
  //   );
  //   if (LicensesData.data) {
  //     setLicenses(LicensesData.data.data);
  //     console.log('Hello ');
  //     console.log(LicensesData.data.data);
  //   }
  //   setLoading(false);
  // }, [licenses]);

  return (
    <>
      {/* {loading ? <AppLoader /> : null} */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* <LoginProvider /> */}
        <View>
          {/* <LoginProvider /> */}
          <SafeAreaView>
            <View style={styles.introLogoTop}>
              <Image
                source={require('../../../assets/images/logo.jpg')}
                style={styles.topLogo}
              />
            </View>
          </SafeAreaView>

          <View style={styles.titlesWrapper}>
            <Text style={styles.titlesTitle}>DoWell Research Services</Text>
            <Text style={styles.titlesSubtitle}>
              App info, scanner and other related information
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(StackActions.replace('EmbededLogin', {}));
            }}>
            <View style={styles.getStarted}>
              <Text style={styles.getStartedText}>Get Started</Text>
              <MaterialCommunityIcons
                style={styles.menuIcon}
                name="arrow-right"
                size={30}
                color="white"
              />
            </View>
          </TouchableOpacity>

          <View style={styles.poweredWrapper}>
            <Text style={styles.poweredText}>Powered By</Text>
          </View>

          <View style={styles.introLogoSmall}>
            <Image
              source={require('../../../assets/images/logo.jpg')}
              style={styles.smallLogo}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default IntroductionScreen;
