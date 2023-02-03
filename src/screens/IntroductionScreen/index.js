import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './style';
import {StackActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const IntroductionScreen = ({navigation}) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View>
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
              navigation.dispatch(StackActions.replace('WebView', {}));
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
              source={require('../../../assets/images/logo.png')}
              style={styles.smallLogo}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default IntroductionScreen;
