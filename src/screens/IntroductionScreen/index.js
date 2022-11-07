import React from 'react';
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
import {StackActions} from '@react-navigation/native';

export default IntroductionScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            navigation.dispatch(StackActions.replace('EmbededLogin', {}));
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
