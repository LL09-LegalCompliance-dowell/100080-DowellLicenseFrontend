import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';
import MyTextInput from '../../components/MyTextInput';
import AppLoader from '../../components/AppLoader';

const ValidationSchema = yup.object().shape({
  // fullname: yup
  //   .string()
  //   .min(2, 'Name should be of 2 chars minimum')
  //   .max(30, 'Maximum 30 characters')
  //   .required('Name is required'),
  // email: yup.string().required('Email is required.'),
  message: yup
    .string()
    .min(1, 'Mesaage should be of 1 chars minimum')
    .max(500, 'Maximum 100 characters allowed')
    .required(''),
});

const About = () => {
  const [loading, setLoading] = useState();
  const [userName, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const getUserDeatils = async () => {
    const asyncusername = await AsyncStorage.getItem('username');
    const asyncemail = await AsyncStorage.getItem('email');
    setName(asyncusername);
    setUserEmail(asyncemail);
    console.log('userName', userName, 'userEmail', userEmail);
  };

  useMemo(() => getUserDeatils(), []);

  const handleForm = async (values, formikActions) => {
    try {
      setLoading(true);
      console.log(values);
      const url = 'http://100080.pythonanywhere.com/api/contacts/';
      const res = await axios.post(url, {
        full_name: values.fullname || userName,
        email: values.email || userEmail,
        message: values.message,
      });

      if (res.data) {
        values.fullname = '';
        values.email = '';
        values.message = '';
        setLoading(false);
        Alert.alert('Submitted successfully', 'Thanks for your feedback');
      }
      return res.data;
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Error message',
        'There is something wrong, please try again',
      );
    }

    formikActions.resetForm(true);
    formikActions.setSubmitting(false);
  };
  return (
    <>
      <Formik
        initialValues={{fullname: userName, email: userEmail, message: ''}}
        validateOnMount={true}
        validationSchema={ValidationSchema}
        onSubmit={handleForm}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          touched,
          errors,
          isSubmitting,
        }) => {
          return (
            <>
              <KeyboardAvoidingView>
                <Header title="Contact Us" />
                {loading ? <AppLoader /> : null}

                <ScrollView contentContainerStyle={styles.container}>
                  {/* Contact Info */}
                  <Text style={styles.heading}>Contact Info</Text>
                  <View style={styles.contactContainer}>
                    <View style={styles.contactItem}>
                      <Ionicons
                        name="location-outline"
                        size={30}
                        color={colors.primary}
                      />
                      <Text style={styles.contactText}>
                        Level 42, Six Battery Road Singapore-049909
                      </Text>
                    </View>
                    <View style={styles.contactItem}>
                      <AntDesign name="mail" size={30} color={colors.primary} />
                      <Text style={styles.contactText}>
                        livinglabfinance@dowellresearch.sg
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.heading}>Write to us</Text>
                  {/* <Image
                    source={require('../../../assets/images/TheLittleThingsWorking.png')}
                    style={styles.imageStyle}
                  /> */}

                  <View style={styles.inputsContainer}>
                    {/* Input starts here */}

                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Full name"
                      paddingHorizontal={17}
                      onChangeText={handleChange('fullname')}
                      onBlur={handleBlur('fullname')}
                      value={values.fullname || userName}
                      placeholderTextColor="gray"
                      height={50}
                      style={{width: '100%'}}
                    />
                    {errors.fullname && touched.fullname && (
                      <Text style={styles.errors}>{errors.fullname}</Text>
                    )}

                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Email"
                      paddingHorizontal={13}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email || userEmail}
                      placeholderTextColor="gray"
                      height={50}
                      style={{width: '100%'}}
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.errors}>{errors.email}</Text>
                    )}

                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Your message..."
                      paddingHorizontal={17}
                      onChangeText={handleChange('message')} // <-- Update this line
                      onBlur={handleBlur('message')} // <-- Update this line
                      value={values.message}
                      height={200}
                      multiline={true}
                      placeholderTextColor="gray"
                      style={{width: '100%'}}
                    />
                    {errors.message && touched.message && (
                      <Text style={styles.errors}>{errors.message}</Text>
                    )}

                    <TouchableOpacity
                      style={[
                        styles.button,
                        {
                          backgroundColor: isValid ? '#078F04' : '#a9a9a9',
                        },
                      ]}
                      onPress={() => {
                        handleSubmit();
                      }}
                      disabled={!isValid}
                    >
                      <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default About;
