import {View, Text, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useWindowDimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';

import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';
import AppLoader from '../../components/AppLoader';
import {useLogin} from '../../context/LoginProvider';

const PrivacyPolicy = () => {
  const {loading, setLoading} = useLogin();
  const [data, setdata] = useState();
  const {width} = useWindowDimensions();

  const source = {
    html: `
    ${data}
  `,
  };

  const fetchDisclaimer = async () => {
    try {
      setLoading(true);
      const URL =
        'https://100087.pythonanywhere.com/policy/FB1010000000001665306290565391/terms-and-conditions/';
      const res = await axios.get(URL);
      if (res.data) {
        setdata(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDisclaimer();
  }, []);

  return (
    <>
      <Header title="Privacy Policy and T&C" />
      {loading ? <AppLoader /> : null}
      <ScrollView contentContainerStyle={styles.container}>
        <MaterialIcons
          name="privacy-tip"
          size={45}
          color={colors.primary}
          style={styles.icontyle}
        />
<View style={styles.ContentContainer}>
        <RenderHtml contentWidth={width} source={source} />
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
