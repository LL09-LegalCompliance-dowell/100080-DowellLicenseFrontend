import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';

const PrivacyPolicy = () => {
  const [questionIcon, setQuestionIcon] = useState('caretup');
  const [isOpen, setIsOpen] = useState(true);

  //iconChange
  const handleIcon = () => {
    {
      questionIcon === 'caretup'
        ? setQuestionIcon('caretdown')
        : setQuestionIcon('caretup');
    }
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header title="Privacy Policy generator FAQs" />

      <ScrollView contentContainerStyle={styles.container}>
        <View styles={styles.upperContainer}>
          <Text style={styles.heading}>FAQs</Text>
          <Text styles={styles.textStyle}>
            Privacy policies are essential for all websites and apps. Besides
            offering transparency to users who are using your website and/or
            app. Privacy Policies are also matter of a legal compliance.
          </Text>
        </View>

        <View style={styles.separator}></View>
        <TouchableOpacity style={styles.questionContainer} onPress={handleIcon}>
          <Text style={styles.heading}>
            Is the Privacy Policy Generator free?
          </Text>
          <AntDesign name={questionIcon} />
        </TouchableOpacity>

        {isOpen ? (
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac nunc tempus ut velit hendrerit id. Quis facilisi morbi adipiscing tellus pellentesque etiam imperdiet tincidunt vel. Odio amet nisl mi fermentum purus ac pulvinar etiam consectetur. 

Dictum habitasse turpis eu dolor aliquam nunc velit. Consequat erat luctus mattis blandit sed arcu sed.</Text>
        ) : null}
        <View style={styles.separator}></View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;
