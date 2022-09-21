import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import styles from './style';
import AppBottun from '../../components/AppBottun';
import Header from '../../components/Header';
import HowToIcon from './HowToIcon';
import SearchBar from './SearchBar';
import {useLicenses} from '../../context/LoginProvider';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const About = () => {
  const [result, setResult] = useState(true);
  const [howTo, setHowTo] = useState(false);
  const [licenses, setLicenses] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  // const {setLicenses} = useLicenses();

  const compatibilityValidationSchema = yup.object().shape({
    License1: yup.string().required('Please select a license'),
    License2: yup.string().required('Please select a license'),
  });

  const handleResult = () => {
    setResult(!result);
  };

  const fetchLicenses = async () => {
    const LicensesData = await axios.get(
      'https://100080.pythonanywhere.com/api/licenses/',
    );
    if (LicensesData.data) {
      setLicenses(LicensesData.data);
      console.log(LicensesData.data);
    }
  };
  useEffect(() => {
    fetchLicenses();
  }, []);

  return (
    <>
      <Formik
        initialValues={{License1: '', License2: ''}}
        validateOnMount={true}
        validationSchema={compatibilityValidationSchema}
        onSubmit={() => {
          console.log('hello');
        }}>
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
              <View style={{flex: 1}}>
                <Modal
                  isVisible={isModalVisible}
                  animationIn="slideInDown"
                  animationOut="slideOutUp"
                  animationInTiming={1000}
                  animationOutTiming={1000}
                  avoidKeyboard={true}
                  onBackdropPress={() => setModalVisible(false)}
                  onBackButtonPress={() => setModalVisible(false)}>
                  <View style={[styles.Searontainer]}>
                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Search licence"
                      style={{paddingLeft: 10}}
                      marginVertical={3}
                    />
                    {/* <FlatList  
                    data={data}
                    renderItem={renderItem}
        keyExtractor={(item) => item.id}
                  /> */}
                  </View>
                </Modal>
              </View>
              <HowToIcon />
              <Header title="License Compatibility" />
              <View style={styles.container}>
                <Text style={styles.heading}>
                  Check license compatibility below
                  {setLicenses.map(post => {
                    const {_id, eventId} = post;
                    return (
                      <View key={_id}>
                        <Text>{eventId}</Text>
                      </View>
                    );
                  })}
                </Text>
                <View style={styles.inputsContainer}>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <MyTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="License 1"
                      style={{paddingLeft: 10}}
                      onChangeText={handleChange('License1')}
                      onBlur={handleBlur('License1')}
                    />
                  </TouchableOpacity>
                  {errors.License1 && touched.License1 && (
                    <Text style={styles.errors}>{errors.License1}</Text>
                  )}
                  {/* <TouchableOpacity onPress={open()}> */}
                  <MyTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="License 2"
                    style={{paddingLeft: 10}}
                    onChangeText={handleChange('License2')}
                    onBlur={handleBlur('License2')}
                  />
                  {/* </TouchableOpacity> */}
                  {errors.License2 && touched.License2 && (
                    <Text style={styles.errors}>{errors.License2}</Text>
                  )}
                </View>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="arrow-up-bold"
                    size={50}
                    color={colors.primary}
                  />
                  <MaterialCommunityIcons
                    style={styles.downIcontyle}
                    name="arrow-down-bold"
                    size={50}
                    color={colors.primary}
                  />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleResult}>
                  <Text style={styles.text}>Check</Text>
                </TouchableOpacity>
                {result ? (
                  <View styles={styles.resultsText}>
                    <Text style={styles.heading}>Results</Text>
                    <Text
                      style={{paddingHorizontal: 10, color: colors.textDark}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam nam nobis dignissimos ratione pariatur ad officia
                      ut exercitationem deleniti! Mollitia officiis ducimus
                      eveniet aspernatur expedita laborum voluptatem et. Labore,
                      laboriosam molestias nam nesciunt quos explicabo hic?
                      Possimus assumenda asperiores sed, quasi reprehenderit
                      dolorem mollitia neque quos dolorum eum? Provident, ex?
                    </Text>
                  </View>
                ) : null}
              </View>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default About;
