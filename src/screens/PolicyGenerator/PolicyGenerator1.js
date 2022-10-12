import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {ModalDatePicker} from 'react-native-material-date-picker';

//Entities
import IndividualEntity from './IndividualEntity';
import CompanyEntity from './CompanyEntity';
import PartnershipEntity from './PartnershipEntity';
//Styling
import {styles} from './styles';
// Chevron Up and Down Icons, Calendar Icon
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Radio Buttons Data
import {radioButtonsData} from './RadioButtonsData';
import colors from '../../../assets/colors/colors';
import Header from '../../components/Header';

const PolicyGenerator = () => {
  const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
  const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);
  const [radioButtons, setRadioButtons] = useState([...radioButtonsData]);
  const [radioButtonsTwo, setRadioButtonsTwo] = useState([...radioButtonsData]);
  const [selectedRadioButton, setSelectedRadioButton] = useState('individual');
  const [selectedRadioButtonTwo, setSelectedRadioButtonTwo] =
    useState('individual');
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();
  const goNextPage = () => {
    navigation.navigate('Generate Policies', {
      screen: 'PolicyGenerator2',
      params: {},
    });
  };

  const togglePartyOne = e => {
    setIsPartyOneOpen(prev => !prev);
  };

  const togglePartyTwo = e => {
    setIsPartyTwoOpen(prev => !prev);
  };

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const onPressRadioButtonTwo = radioButtonsArrayTwo => {
    setRadioButtonsTwo(radioButtonsArrayTwo);
  };

  const getSelectRadioButton = () => {
    radioButtons.forEach(element => {
      if (element.selected) {
        setSelectedRadioButton(element.value);
        return;
      }
    });
  };

  const getSelectRadioButtonTwo = () => {
    radioButtonsTwo.forEach(element => {
      if (element.selected) {
        setSelectedRadioButtonTwo(element.value);
        return;
      }
    });
  };

  const EntityType = () => {
    if (selectedRadioButton === 'company') {
      return <CompanyEntity />;
    } else if (selectedRadioButton === 'partnership') {
      return <PartnershipEntity />;
    }

    return <IndividualEntity />;
  };

  const EntityTypeTwo = () => {
    if (selectedRadioButtonTwo === 'company') {
      return <CompanyEntity />;
    } else if (selectedRadioButtonTwo === 'partnership') {
      return <PartnershipEntity />;
    }

    return <IndividualEntity />;
  };

  useEffect(() => {
    getSelectRadioButton();
    getSelectRadioButtonTwo();
  }, [JSON.stringify(radioButtons), JSON.stringify(radioButtonsTwo)]);

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative', marginTop: 30}}>
          <Text style={{color: colors.textDark}}>
            Date of execution of Document
          </Text>
          <TextInput
            style={styles.input}
            value={date}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray" 
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={25} color="gray"/>
              </View>
            }
            color="#489503"
            onSelect={value => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>
        <View>
          <Text style={{color: colors.textDark}}>Party Details:</Text>
          <View style={styles.partyDetails}>
            <Text style={{color: colors.textDark}}>Party 1:</Text>
            <View style={styles.horizontalLine} />
            <TouchableOpacity onPress={togglePartyOne}>
              <View style={styles.chevron}>
                {isPartyOneOpen ? (
                  <MaterialIcons
                    name={'keyboard-arrow-up'}
                    size={50}
                    color={'#000'}
                  />
                ) : (
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={50}
                    color={'#000'}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={isPartyOneOpen ? '' : styles.hide}>
            <View styles={styles.formGroup}>
              <Text style={{color: colors.textDark}}>Entity Type:</Text>
              <View style={styles.radioWrapper}>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={onPressRadioButton}
                  containerStyle={styles.radio}
                />
              </View>
            </View>
            <EntityType />
          </View>

          <View style={styles.partyDetails}>
            <Text style={{color: colors.textDark}}>Party 2:</Text>
            <View style={styles.horizontalLine} />
            <TouchableOpacity onPress={togglePartyTwo}>
              <View style={styles.chevron}>
                {isPartyTwoOpen ? (
                  <MaterialIcons
                    name={'keyboard-arrow-up'}
                    size={50}
                    color={'#000'}
                  />
                ) : (
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={50}
                    color={'#000'}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={isPartyTwoOpen ? '' : styles.hide}>
            <View styles={styles.formGroup}>
              <Text style={{color: colors.textDark}}>Entity Type:</Text>
              <View style={styles.radioWrapper}>
                <RadioGroup
                  radioButtons={radioButtonsTwo}
                  onPress={onPressRadioButtonTwo}
                  containerStyle={styles.radio}
                />
              </View>
            </View>
            <EntityTypeTwo />
          </View>
        </View>
        {/* <View style={styles.center}>
          <TouchableOpacity style={styles.nextButton} onPress={goNextPage}>
            <Text style={styles.nextText}>Next Step</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{
            navigation.navigate("SoftwereLicensePolicy")} }>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </>
  );
};

export default PolicyGenerator;
