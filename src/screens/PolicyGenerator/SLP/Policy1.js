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

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
  const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);
  const [input_1, setInput_1] = useState('');
  const [input_2, setInput_2] = useState('');
  const [input_3, setInput_3] = useState('');
  const [input_4, setInput_4] = useState('');
  const [input_5, setInput_5] = useState('');
  const [input_6, setInput_6] = useState('');
  const [input_7, setInput_7] = useState('');
  const [input_8, setInput_8] = useState('');
  const [input_9, setInput_9] = useState('');
  const [input_10, setInput_10] = useState('');
  const [input_11, setInput_11] = useState('');
  const [input_12, setInput_12] = useState('');
  const [input_13, setInput_13] = useState('');
  const [input_14, setInput_14] = useState('');
  const [input_15, setInput_15] = useState('');
  const [input_16, setInput_16] = useState('');

  const togglePartyOne = e => {
    setIsPartyOneOpen(prev => !prev);
  };

  const togglePartyTwo = e => {
    setIsPartyTwoOpen(prev => !prev);
  };

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={styles.text_1}>Date of execution of the document:</Text>
          <TextInput
            style={styles.input}
            value={date.toLocaleDateString()}
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
            onSelect={value => setDate(value)}
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
          <Text style={styles.text_2}>Full Name of the Individual:</Text>
          <TextInput
            style={styles.input_um}
            value={input_1}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => setInput_1(value)}
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
            value={input_2}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => setInput_2(value)}
          />
          <Text style={styles.text_2}>
            In which jurisdiction is the party incorporated?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_3}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => setInput_3(value)}
          />
          <Text style={styles.text_2}>
            What is the registration number of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_4}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => setInput_4(value)}
          />
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_5}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => setInput_5(value)}
          />
          <Text style={styles.text_2}>
            Where is the principal place of business of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_6}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => setInput_6(value)}
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
            value={input_1}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => setInput_1(value)}
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
            value={input_2}
            placeholder=" Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => setInput_2(value)}
          />
          <Text style={styles.text_2}>
            In which jurisdiction is the party incorporated?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_3}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => setInput_3(value)}
          />
          <Text style={styles.text_2}>
            What is the registration number of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_4}
            placeholder="  Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => setInput_4(value)}
          />
          <Text style={styles.text_2}>
            What is the registered office address of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_5}
            placeholder=" Eg. "
            placeholderTextColor="gray"
            onChangeText={value => setInput_5(value)}
          />
          <Text style={styles.text_2}>
            Where is the principal place of business of the party?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input_6}
            placeholder=" Eg."
            placeholderTextColor="gray"
            onChangeText={value => setInput_6(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
