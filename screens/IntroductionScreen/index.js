import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';

export default IntroductionScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.introLogoTop}>
            <Image
              source={require('../../../assets/images/logo.png')}
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
            navigation.navigate('login');
          }}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.poweredWrapper}>
          <Text style={styles.poweredText}>Powered By</Text>
        </View>

        <View style={styles.introLogoSmall}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.smallLogo}
          />
        </View>
      </View>
    </ScrollView>
  );
};
