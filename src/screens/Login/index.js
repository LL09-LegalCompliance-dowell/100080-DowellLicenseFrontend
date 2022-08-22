import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

import styles from './style';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';

export default IntroductionScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const passwordHideShow = () => {
    <TouchableOpacity onPress={() => setIsSecureEntry(true)} />;
  };

  return (
    // Top logo
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar color="white" />
      <View style={styles.introLogoTop}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.topLogo}
        />
      </View>

      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesTitle}>DoWell Research Services</Text>
      </View>

      {/* Input starts here */}
      <View style={styles.inputsContainer}>
        <MyTextInput placeholder="Enter Username" paddingHorizontal={12} />

        <View style={styles.passwordContainer}>
          <View style={styles.passwordInputsContainer}>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              secureTextEntry={isSecureEntry}
              placeholder="Password"
            />
            <TouchableWithoutFeedback
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Ionicons
                name="md-eye-sharp"
                size={24}
                color={isSecureEntry ? '#808080' : colors.primary}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>

      <Text style={styles.policyText}>Don't have an account?</Text>
      <TouchableOpacity>
        <Text
          style={{
            color: colors.primary,
            fontSize: 18,
            textDecorationLine: 'underline',
          }}>
          Join
        </Text>
      </TouchableOpacity>

      {/* Policy statrts here */}
      {/* <View style={styles.policyWrapper}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          style={styles.checkbox}
        />
        <Text style={styles.policyText}>
          I agree to the
        </Text>
        <Text style={styles.policyText}>
    privacy policy and {'\n'} terms & conditions
        </Text>
      </View> */}

      {/* Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <View style={styles.getStarted}>
          <Text style={styles.getStartedText}>Login</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
