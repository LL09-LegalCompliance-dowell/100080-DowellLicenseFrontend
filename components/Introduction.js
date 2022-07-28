import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../assets/colors/colors';
import CheckBox from '@react-native-community/checkbox';



export default Introduction = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      <SafeAreaView>
        <View style = {styles.introLogoTop}>
          <Image
            source = {require('../assets/images/logo.png')}
            style = {styles.topLogo}
          />
        </View>
      </SafeAreaView>

      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesTitle}>DoWell Research Services</Text>
        <Text style={styles.titlesSubtitle}>App info, scanner and other related information</Text>
      </View>

      <View style={styles.policyWrapper}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          style={styles.checkbox}
        />
        <Text style={styles.policyText}>I agree to the privacy policy and terms & conditions</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.getStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.poweredWrapper}>
        <Text style={styles.poweredText}>Powered By</Text>
      </View>

      <View style = {styles.introLogoSmall}>
        <Image
          source = {require('../assets/images/logo.png')}
          style = {styles.smallLogo}
        />
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    introLogoTop:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
    },
    topLogo:{
      width: 148,
      height: 101,
    },
    titlesWrapper:{
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titlesTitle:{
      fontFamily:'InriaSans-Bold',
      fontSize: 34,
      textAlign: 'center',
    },
    titlesSubtitle:{
      fontFamily:'Roboto-Regular',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 25,
    },
    policyWrapper:{
      flexDirection: "row",
      marginTop: 105,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox: {
    alignSelf: "center",
    },
    policyText:{
      fontFamily:'Roboto-Regular',
      fontSize: 17,
      textAlign: 'center',
      marginTop: 15,
    },
    getStarted:{
      marginTop: 15,
      backgroundColor: colors.primary,
      borderRadius: 15,
      paddingVertical: 12,
      justifyContent: 'center',
      alignItems: 'center',
      width: 260,
      height: 57,
    },
    getStartedText:{
      color: 'white',
      fontFamily:'Roboto-Medium',
      fontSize: 26,
      alignItems: 'center',
    },
    poweredWrapper:{
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    poweredText:{
      fontFamily:'Roboto-Regular',
      fontSize: 20,
      textAlign: 'center',
    },
    introLogoSmall:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    smallLogo:{
      width: 42,
      height: 29,
    },
})
