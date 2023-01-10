import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy2 = () => {
  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Company Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_3}>
            What will be the purpose of this MOU?
          </Text>

          <Text style={styles.text_2}>Software Product License Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="  Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
          <Text style={styles.text_3}>Under clause objectives</Text>
          <Text style={styles.text_2}>What is the objective of this MOU?</Text>
          <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="  Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput2(value)}
          />
          <Text style={styles.text_3}>Term/Timeline</Text>
          <Text style={styles.text_2}>
            What will be the date of commencement?
          </Text>
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

          <Text style={styles.text_2}>
            What will be the date for termination?
          </Text>
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
      </ScrollView>
    </>
  );
};

export default Policy2;
