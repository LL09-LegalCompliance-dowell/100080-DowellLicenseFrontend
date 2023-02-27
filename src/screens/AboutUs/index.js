import React, {useState} from 'react';
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

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';
import MyTextInput from '../../components/MyTextInput';
import AppLoader from '../../components/AppLoader';

const ValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(2, 'Name should be of 2 chars minimum')
    .max(30, 'Maximum 30 characters')
    .required('Name is required'),
  email: yup.string().required('Email is required.'),
  message: yup
    .string()
    .min(5, 'Mesaage should be of 2 chars minimum')
    .max(500, 'Maximum 100 characters allowed')
    .required('Mesasage is required'),
});

const About = () => {
  const [loading, setLoading] = useState();

  const handleForm = async (values, formikActions) => {
    try {
      setLoading(true);
      const url = 'http://100080.pythonanywhere.com/api/contacts/';
      const res = await axios.post(url, {
        full_name: values.fullname,
        email: values.email,
        message: values.message,
      });

      if (res.data) {
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
        initialValues={{fullname: '', email: '', message: ''}}
        validateOnMount={true}
        validationSchema={ValidationSchema}
        onSubmit={handleForm}>
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
                        livinglabfinance@dowellrsearch.sg
                      </Text>
                    </View>
                    <View style={styles.contactItem}>
                      <Feather name="phone" size={30} color={colors.primary} />
                      <Text style={styles.contactText}>65 6232 2314</Text>
                    </View>
                  </View>
                  <Text style={styles.heading}>Write to us</Text>
                  <Image
                    source={require('../../../assets/images/TheLittleThingsWorking.png')}
                    style={styles.imageStyle}
                  />

                  <View style={styles.inputsContainer}>
                    {/* Input starts here */}

                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Full name"
                      paddingHorizontal={17}
                      onChangeText={handleChange('fullname')}
                      onBlur={handleBlur('fullname')}
                      value={values.fullname}
                      placeholderTextColor="gray"
                      height={50}
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
                      value={values.email}
                      placeholderTextColor="gray"
                      height={50}
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.errors}>{errors.email}</Text>
                    )}

                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Your message..."
                      paddingHorizontal={17}
                      onChangeText={handleChange('message')}
                      onBlur={handleBlur('message')}
                      value={values.message}
                      height={200}
                      multiline={true}
                      placeholderTextColor="gray"
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
                      disabled={!isValid}>
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
