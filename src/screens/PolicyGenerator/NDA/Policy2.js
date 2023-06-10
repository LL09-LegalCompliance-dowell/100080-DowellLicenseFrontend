import React from 'react';
import {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';
import RadioGroup from 'react-native-radio-buttons-group';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {number_validation} from '../validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Date from '../Date';
const Policy2 = ({list}) => {
  const [valid_number, setValid_number] = useState(true);
  const [valid_number_1, setValid_number_1] = useState(true);
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
              list[14]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Other Details:</Text>
          <View
            style={{
              paddingHorizontal: 11,
              paddingTop: 16,
              position: 'relative',
            }}>
            <Text style={styles.text_2}>Website/App Name:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[15]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[16](value)}
            />
            <Text style={styles.text_2}>
              What shall be the term of this agreement?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[0]}
              keyboardType="numeric"
              placeholder="Enter number"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  setValid_number(true);
                } else {
                  number_validation(value)
                    ? setValid_number(true)
                    : setValid_number(false);
                }
                list[1](value);
              }}
              maxLength={10}
            />
            <Text style={valid_number ? styles.hide : styles.text_warning}>
              Please Enter valid number
            </Text>
            <View style={{position: 'absolute', top: 165, left: 120}}>
              <RadioGroup
                radioButtons={list[12]}
                onPress={data => list[13](data)}
                layout="row"
              />
            </View>
            <Text style={styles.text_2}>
              What shall be the governing laws of this agreement? Location in
              case of jurisdictions.
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[2]}
              placeholder="  Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[3](value)}
            />
            <View style={{fontWeight: '400'}}>
              <Text style={styles.text_2}>
                Date for execution of this agreement.
              </Text>
              <Date
                date={list[10]}
                setDate={list[11]}
                open={open}
                openHandler={openHandler}
              />
            </View>
          </View>
          <Text style={styles.text_1}>Witness Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>No. of Witness/es:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[4]}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={value => {
                if (value !== '') {
                  if (number_validation(value) === true) {
                    setValid_number_1(true);
                    if (parseInt(value) > list[6]) {
                      var temp = [...list[8]];
                      for (let i = list[8].length; i < parseInt(value); i++) {
                        temp = temp.concat([
                          {
                            id: i,
                            name: '',
                            address_1: '',
                            address_2: '',
                            address_3: '',
                          },
                        ]);
                      }
                      list[9](temp);
                    } else if (parseInt(value) < list[6]) {
                      var temp = list[8].slice(0, parseInt(value));
                      list[9](temp);
                    }
                    list[5](value);
                    list[7](parseInt(value));
                  } else {
                    setValid_number_1(false);
                  }
                } else {
                  list[5](value);
                  setValid_number_1(true);
                }
              }}
            />
            <Text style={valid_number_1 ? styles.hide : styles.text_warning}>
              Please Enter valid number
            </Text>
            {list[8].map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.text_2}>Witness {item.id + 1}:</Text>
                  <View style={{marginBottom: 16}}></View>
                  <Text style={styles.text_2}>Full Name of the witness:</Text>
                  <TextInput
                    style={styles.input_vm}
                    value={item.name}
                    placeholder="  Eg. John Smith Doe"
                    autoCapitalize="none"
                    placeholderTextColor="gray"
                    onChangeText={value => {
                      const temp = {
                        id: item.id,
                        name: value,
                        address_1: item.address_1,
                        address_2: item.address_2,
                        address_3: item.address_3,
                      };
                      list[9](
                        list[8].map(element => {
                          if (element.id == index) return temp;
                          else return element;
                        }),
                      );
                    }}
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
                  <Text style={styles.text_2}>Address of the Witness:</Text>
                  <TextInput
                    style={styles.input_vm}
                    value={item.address_1}
                    autoCapitalize="none"
                    placeholder="  Address Line 1"
                    placeholderTextColor="gray"
                    onChangeText={value => {
                      const temp = {
                        id: item.id,
                        name: item.name,
                        address_1: value,
                        address_2: item.address_2,
                        address_3: item.address_3,
                      };
                      list[9](
                        list[8].map(element => {
                          if (element.id == index) return temp;
                          else return element;
                        }),
                      );
                    }}
                  />
                  <TextInput
                    style={styles.input_vm}
                    value={item.address_2}
                    placeholder="  Address Line 2"
                    autoCapitalize="none"
                    placeholderTextColor="gray"
                    onChangeText={value => {
                      const temp = {
                        id: item.id,
                        name: item.name,
                        address_1: item.address_1,
                        address_2: value,
                        address_3: item.address_3,
                      };
                      list[9](
                        list[8].map(element => {
                          if (element.id == index) return temp;
                          else return element;
                        }),
                      );
                    }}
                  />
                  <TextInput
                    style={styles.input_vm}
                    value={item.address_3}
                    placeholder="  Address Line 3"
                    autoCapitalize="none"
                    placeholderTextColor="gray"
                    onChangeText={value => {
                      const temp = {
                        id: item.id,
                        name: item.name,
                        address_1: item.address_1,
                        address_2: item.address_2,
                        address_3: value,
                      };
                      list[9](
                        list[8].map(element => {
                          if (element.id == index) return temp;
                          else return element;
                        }),
                      );
                    }}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};
export default Policy2;
