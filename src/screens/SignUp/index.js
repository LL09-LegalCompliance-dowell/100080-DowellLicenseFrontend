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
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import * as yup from 'yup';
import {Formik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import AppLoader from '../../components/AppLoader';


import {useLogin} from '../../context/LoginProvider';

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username should be of 2 chars minimum')
    .max(30, 'Maximum 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

export default IntroductionScreen = ({navigation}) => {
  const [agree, setAgree] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {setIsLoggedIn, loading, setLoading} = useLogin();

  const passwordHideShow = () => {
    <TouchableOpacity onPress={() => setIsSecureEntry(true)} />;
  };

  const handleLogin = async (values, formikActions) => {
    setLoading(true);
    const url = 'https://100014.pythonanywhere.com/api/register/';
    const res = await axios.post(url, {...values});

    if (res.data) {
      const signInRes = await axios.post(
        'https://100014.pythonanywhere.com/api/token/',
        {username: values.username, password: values.password},
      );
      if (signInRes.data) {
        setIsLoggedIn(false);
        const token = signInRes.data.access;
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('username', values.username);
        await AsyncStorage.setItem('password', values.password);
        setLoading(false);

      }
      return signInRes.data;
    }

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    // Top logo
    <Formik
      initialValues={{username: '', password: ''}}
      validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        isSubmitting,
      }) => {
        return (
          <>
            <KeyboardAvoidingView>
              <ScrollView contentContainerStyle={styles.container}>
                <StatusBar color="white" />
                <View style={styles.introLogoTop}>
                  <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.topLogo}
                  />
                </View>
                {loading ? <AppLoader /> : null}

                <View style={styles.titlesWrapper}>
                  <Text style={styles.titlesTitle}>
                    DoWell Research Services
                  </Text>
                </View>

                {/* Input starts here */}
                <View style={styles.inputsContainer}>
                  <MyTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter Username"
                    paddingHorizontal={17}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                  {errors.username && touched.username && (
                    <Text style={styles.errors}>{errors.username}</Text>
                  )}

                  <View style={styles.passwordContainer}>
                    <View style={styles.passwordInputsContainer}>
                      <TextInput
                        style={styles.inputStyle}
                        autoCorrect={false}
                        secureTextEntry={isSecureEntry}
                        placeholder="Enter Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                      />
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setIsSecureEntry(prev => !prev);
                        }}>
                        <Ionicons
                          name="md-eye-sharp"
                          size={30}
                          color={isSecureEntry ? '#808080' : colors.primary}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  {errors.password && touched.password && (
                    <Text style={styles.errors}>{errors.password}</Text>
                  )}
                </View>

                
                {/* Policy statrts here */}
                <View style={styles.policyWrapper}>
                  <CheckBox
                    disabled={false}
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
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
                    handleSubmit();
                  }}
                  style={[
                    styles.getStarted,
                    {
                      backgroundColor: agree && isValid ? '#078F04' : '#a9a9a9',
                    },
                  ]}
                  disabled={(!isValid, !agree)}>
                  <Text style={styles.getStartedText}>Register as a guest</Text>
                </TouchableOpacity>

                {/*Full registration Button */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}
                  style={[
                    styles.getStartedd,
                    // {
                    //   backgroundColor: agree && isValid ? '#078F04' : '#a9a9a9',
                    // },
                  ]}
                  // disabled={(!isValid, !agree)}
                  >
                  <Text style={styles.getStartedText}>Full SignUp</Text>
                </TouchableOpacity>

              </ScrollView>
            </KeyboardAvoidingView>
          </>
        );
      }}
    </Formik>
  );
};
