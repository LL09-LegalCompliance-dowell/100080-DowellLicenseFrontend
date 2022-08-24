import {View, Text, Button, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import styles from './style';
import AppBottun from '../../components/AppBottun';
import Header from '../../components/Header';
import HowToIcon from './HowToIcon';

const About = () => {
  const [result, setResult] = useState({});
  const [howTo, setHowTo] = useState(false);

  const handleResult = () => {
    <></>;
  };

  return (
    <>
      <HowToIcon onPress={() => setHowTo(true)} />
      <Header title="License Compatibility" />
      <View style={styles.container}>
        <Text style={styles.heading}>Check license compatibility below</Text>
        <View style={styles.inputsContainer}>
          <MyTextInput placeholder="License 1" style={{paddingLeft: 10}} />
          <MyTextInput placeholder="License 2" style={{paddingLeft: 10}} />
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Check</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Results</Text>
        <View styles={styles.resultsText}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nam nobis dignissimos ratione pariatur ad officia ut exercitationem
            deleniti! Mollitia officiis ducimus eveniet aspernatur expedita
            laborum voluptatem et. Labore, laboriosam molestias nam nesciunt
            quos explicabo hic? Possimus assumenda asperiores sed, quasi
            reprehenderit dolorem mollitia neque quos dolorum eum? Provident,
            ex?
          </Text>
        </View>

        {/* How to use section */}
        <Modal animationType="slide" transparent={false} visible={howTo}>
          <View>
            <Text>hamza</Text>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default About;
