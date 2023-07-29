import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import CountryPicker from 'react-native-country-picker-modal';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Date from '../Date';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Policy1 = ({list}) => {
  const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
  const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);
  const togglePartyOne = e => {
    setIsPartyOneOpen(prev => !prev);
  };

  const togglePartyTwo = e => {
    setIsPartyTwoOpen(prev => !prev);
  };
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };

  return (
    <>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[0]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <Text style={styles.text_1}>
              Date of execution of the document:
            </Text>
            <Date
              date={list[1]}
              setDate={list[2]}
              open={open}
              openHandler={openHandler}
            />
          </View>
          <Text style={styles.text_1}>Party details:</Text>
          <View style={styles.partyDetails}>
            <Text style={styles.text_4}>Party 1:</Text>
            <View style={styles.horizontalLine} />
            <TouchableOpacity onPress={togglePartyOne}>
              <View style={styles.chevron}>
                {isPartyOneOpen ? (
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={40}
                    color={'#000'}
                  />
                ) : (
                  <MaterialIcons
                    name={'keyboard-arrow-up'}
                    size={40}
                    color={'#000'}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={isPartyOneOpen ? {paddingHorizontal: 11} : styles.hide}>
            <Text style={styles.text_2}>Entity Type:</Text>
            <View>
              <RadioGroup
                radioButtons={list[3]}
                onPress={data => list[4](data)}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>Full Name of the Individual:</Text>
            <TextInput
              style={styles.input_um}
              value={list[5]}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={value => list[6](value)}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                color: '#585858',
                lineHeight: 14,
                position: 'relative',
                right: -220,
                marginTop: 6,
                marginBottom: 20,
              }}>
              *Include Middle Name
            </Text>

            <Text style={styles.text_2}>Address of the company: </Text>
            <TextInput
              style={styles.input_vm}
              value={list[7]}
              autoCapitalize="none"
              placeholder=" Address Line 1 "
              placeholderTextColor="gray"
              onChangeText={value => list[8](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[9]}
              autoCapitalize="none"
              placeholder=" Address Line 2 "
              placeholderTextColor="gray"
              onChangeText={value => list[10](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[11]}
              autoCapitalize="none"
              placeholder=" Address Line 3"
              placeholderTextColor="gray"
              onChangeText={value => list[12](value)}
            />
            <Text style={styles.text_2}>PIN Code:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[13]}
              autoCapitalize="none"
              placeholder=" Eg. 202002 "
              placeholderTextColor="gray"
              onChangeText={value => list[14](value)}
            />

            <Text style={styles.text_2}>State:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[15]}
              autoCapitalize="none"
              placeholder=" Enter State name"
              placeholderTextColor="gray"
              onChangeText={value => list[16](value)}
            />
            <Text style={styles.text_2}>Country:</Text>
            <View style={styles.input_vm}>
              {list[17] === '' ? (
                <CountryPicker
                  // countryCode={country}
                  withFilter
                  withFlag
                  withCountryNameButton={list[17]}
                  withCallingCode
                  onSelect={value => {
                    list[18](value.name);
                  }}
                />
              ) : (
                <Text style={[styles.text_1, {fontSize: 17}]}>{list[17]}</Text>
              )}
            </View>
            <Text style={styles.text_3}>Under the terms of understanding</Text>
            <Text style={styles.text_2}>
              What shall be the period mentioned?
            </Text>
            <View
              style={[
                styles.input_vm,
                {
                  margin: 0,
                  padding: 0,
                  paddingLeft: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <TextInput
                style={{color: 'gray', fontSize: 16}}
                value={list[19]}
                autoCapitalize="none"
                placeholder="Enter number"
                placeholderTextColor="gray"
                onChangeText={value => list[20](value)}
                keyboardType="numeric"
              />
              <View>
                <RadioGroup
                  radioButtons={list[21]}
                  onPress={data => list[22](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>
          </View>

          <View style={styles.partyDetails}>
            <Text style={styles.text_4}>Party 2:</Text>
            <View style={styles.horizontalLine} />
            <TouchableOpacity onPress={togglePartyTwo}>
              <View style={styles.chevron}>
                {isPartyTwoOpen ? (
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={40}
                    color={'#000'}
                  />
                ) : (
                  <MaterialIcons
                    name={'keyboard-arrow-up'}
                    size={40}
                    color={'#000'}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={isPartyTwoOpen ? {paddingHorizontal: 11} : styles.hide}>
            <Text style={styles.text_2}>
              What is the nature of the entity of the party?{' '}
            </Text>
            <View>
              <RadioGroup
                radioButtons={list[23]}
                onPress={data => list[24](data)}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>Full Name of the Individual:</Text>
            <TextInput
              style={styles.input_um}
              value={list[25]}
              autoCapitalize="none"
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"
              onChangeText={value => list[26](value)}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                color: '#585858',
                lineHeight: 14,
                position: 'relative',
                right: -220,
                marginTop: 6,
                marginBottom: 20,
              }}>
              *Include Middle Name
            </Text>

            <Text style={styles.text_2}>Address of the company: </Text>
            <TextInput
              style={styles.input_vm}
              value={list[27]}
              autoCapitalize="none"
              placeholder=" Address Line 1 "
              placeholderTextColor="gray"
              onChangeText={value => list[28](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[29]}
              autoCapitalize="none"
              placeholder=" Address Line 2 "
              placeholderTextColor="gray"
              onChangeText={value => list[30](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[31]}
              autoCapitalize="none"
              placeholder=" Address Line 3"
              placeholderTextColor="gray"
              onChangeText={value => list[32](value)}
            />
            <Text style={styles.text_2}>PIN Code:</Text>
            <TextInput
              style={styles.input_vm}
              autoCapitalize="none"
              value={list[33]}
              placeholder=" Eg. 202002 "
              placeholderTextColor="gray"
              onChangeText={value => list[34](value)}
            />

            <Text style={styles.text_2}>State:</Text>
            <TextInput
              style={styles.input_vm}
              autoCapitalize="none"
              value={list[35]}
              placeholder=" Enter state name"
              placeholderTextColor="gray"
              onChangeText={value => list[36](value)}
            />
            <Text style={styles.text_2}>Country:</Text>
            <View style={styles.input_vm}>
              {list[37] === '' ? (
                <CountryPicker
                  // countryCode={country}
                  withFilter
                  withFlag
                  withCountryNameButton={list[37]}
                  withCallingCode
                  onSelect={value => {
                    list[38](value.name);
                  }}
                />
              ) : (
                <Text style={[styles.text_1, {fontSize: 17}]}>{list[37]}</Text>
              )}
            </View>
            <Text style={styles.text_3}>Under the terms of understanding</Text>
            <Text style={styles.text_2}>
              What shall be the period mentioned?
            </Text>
            <View
              style={[
                styles.input_vm,
                {
                  margin: 0,
                  padding: 0,
                  paddingLeft: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <TextInput
                style={{color: 'gray', fontSize: 16}}
                value={list[39]}
                autoCapitalize="none"
                placeholder="Enter number"
                placeholderTextColor="gray"
                onChangeText={value => list[40](value)}
                keyboardType="numeric"
              />
              <View>
                <RadioGroup
                  radioButtons={list[41]}
                  onPress={data => list[42](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy1;
