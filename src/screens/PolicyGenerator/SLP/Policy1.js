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

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

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
            list[0]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all{' '}
        </Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
       
          <Text style={styles.text_1}>Date of execution of the document:</Text>
          <TextInput
            style={styles.input}
            value={list[1].toLocaleDateString()}
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
            onSelect={value => list[2](value)}
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
          <Text style={styles.text_2}>Postal Address: </Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[8](value)}
          />
          <Text style={styles.text_2}>
            In which jurisdiction is the party incorporated?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[10](value)}
          />
          <Text style={styles.text_2}>
            What is the registration number of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[11]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[12](value)}
          />
          
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[13]}
            placeholder=" Address Line 1 "
            placeholderTextColor="gray"
            onChangeText={value => list[14](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[15]}
            placeholder=" Address Line 2 "
            placeholderTextColor="gray"
            onChangeText={value => list[16](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[17]}
            placeholder=" Address Line 3"
            placeholderTextColor="gray"
            onChangeText={value => list[18](value)}
          />
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[19]}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => list[20](value)}
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
        <Text style={styles.text_2}>Entity Type:</Text>
        <View>
            <RadioGroup
              radioButtons={list[21]}
              onPress={data => list[22](data)}
              containerStyle={styles.radio_hm}
            />
          </View>
          <Text style={styles.text_2}>Full Name of the Individual:</Text>
          <TextInput
            style={styles.input_um}
            value={list[23]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[24](value)}
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
            value={list[25]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[26](value)}
          />
          <Text style={styles.text_2}>
            In which jurisdiction is the party incorporated?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[27]}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[28](value)}
          />
          <Text style={styles.text_2}>
            What is the registration number of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[29]}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[30](value)}
          />
          
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[31]}
            placeholder=" Address Line 1 "
            placeholderTextColor="gray"
            onChangeText={value => list[32](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[33]}
            placeholder=" Address Line 2 "
            placeholderTextColor="gray"
            onChangeText={value => list[34](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[35]}
            placeholder=" Address Line 3"
            placeholderTextColor="gray"
            onChangeText={value => list[36](value)}
          />
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[37]}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => list[38](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
