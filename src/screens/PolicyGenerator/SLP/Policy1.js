import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';

const Policy1 = ({list}) => {
  const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
  const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);

  const togglePartyOne = e => {
    setIsPartyOneOpen(prev => !prev);
  };

  const togglePartyTwo = e => {
    setIsPartyTwoOpen(prev => !prev);
  };

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text
          style={
            list[30]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all fields
        </Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={styles.text_1}>Date of execution of the document:</Text>
          <TextInput
            style={styles.input}
            value={list[0].toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray"
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={35} color="gray" />
              </View>
            }
            color="#489503"
            onSelect={value => list[1](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
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

          <RadioGroup
            radioButtons={list[31]}
            onPress={(data)=>list[32](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={[styles.text_2, {marginTop: 10}]}>
            Full Name of the Individual:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[3](value)}
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
          <Text style={styles.text_2}>Postal Address: </Text>
          <TextInput
            style={styles.input_vm}
            value={list[4]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[5](value)}
          />
          <Text style={styles.text_2}>
            In which jurisdiction is the party incorporated?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[6]}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[7](value)}
          />
          <Text style={styles.text_2}>
            What is the registration number of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[8]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[9](value)}
          />
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[10]}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => list[11](value)}
          />
          <Text style={styles.text_2}>
            Where is the principal place of business of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[12]}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[13](value)}
          />
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
          <Text style={styles.text_2}>Full Name of the Individual:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[14]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[15](value)}
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
          <Text style={styles.text_2}>Postal Address: </Text>
          <TextInput
            style={styles.input_vm}
            value={list[16]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[17](value)}
          />
          <Text style={styles.text_2}>
            In which jurisdiction is the party incorporated?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[18]}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[19](value)}
          />
          <Text style={styles.text_2}>
            What is the registration number of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[20]}
            placeholder="  Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[21](value)}
          />
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[22]}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => list[23](value)}
          />
          <Text style={styles.text_2}>
            Where is the principal place of business of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[24]}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => list[25](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
