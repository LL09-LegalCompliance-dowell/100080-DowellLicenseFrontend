import React, {Fragment} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'

const Policy2 = () => {
  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState('');
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const cities = [
    {key: '1', value: 'Mumbai'},
    {key: '2', value: 'Kolkata'},
    {key: '3', value: 'Banglore'},
    {key: '4', value: 'Delhi'},
  ];

  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Sole proprietorship',
      value: 'Sole proprietorship',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'Partnership',
      value: 'Partnership',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '3',
      label: 'Limited liability company',
      value: 'Limited liability company',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '4',
      label: 'Corporation',
      value: 'Corporation',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);
  const [radioButtons1, setRadioButtons1] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);
  const [radioButtons2, setRadioButtons2] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'true',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
    {
      id: '2',
      label: 'No',
      value: 'false',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
  ]);

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Company Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Type of company :</Text>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={data => setRadioButtons(data)}
              containerStyle={styles.radio_hm}
            />
          </View>
          <Text style={{paddingVertical: 7, color: 'gray'}}>
            Under Clause 1
          </Text>

          <Text style={styles.text_2}>
            What will be the Restricted area (geographical)?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
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
            *Mention areas
          </Text>

          <Text style={{paddingVertical: 7, color: 'gray'}}>
            Under Clause 2
          </Text>
          <Text style={styles.text_2}>
            What will be the date for termination?
          </Text>
          <TextInput
            style={styles.input_vm}
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

          <Text style={styles.text_2}>
            What will be the duration for solicit:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Eg. 7 days/months"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
        </View>

        <Text style={styles.text_2}>What will be the governing laws?</Text>
        <SelectList
          // setSelected={(val) => list[6](val)}
          // data={states}
          save="value"
          // placeholder={list[9]}
          boxStyles={{
            backgroundColor: '#D9D9D9',
            marginVertical: 12,
            color: '#585858',
            fontSize: 16,
            fontWeight: '300',
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#C4C4C4',
            height: 51,
          }}
          inputStyles={{color: '#585858', fontSize: 16, fontWeight: '300'}}
          dropdownTextStyles={{
            color: '#585858',
            fontSize: 16,
            fontWeight: '300',
          }}
          searchPlaceholder=""
          search={false}
        />
        <Text style={styles.text_2}>
          In case of dispute resolution will there be a litigation matter or
          arbitration and which state should abide these disputes?
        </Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons1}
            onPress={data => setRadioButtons1(data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Will electronic notices be allowed?</Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons2}
            onPress={data => setRadioButtons2(data)}
            containerStyle={styles.radio_hm}
          />
          <TextInput
            style={styles.input_vm}
            value={date.toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="Mention Others:"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
