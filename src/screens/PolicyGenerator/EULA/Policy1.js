import React from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [input9, setInput9] = useState('');
  const [input10, setInput10] = useState('');

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
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Full Name of the Party:</Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="  Eg. John Smith Doe"
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
            *Include Middle Name
          </Text>
          <Text style={styles.text_2}>Name of the company:</Text>
          <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="  Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => setInput2(value)}
          />
          <Text style={styles.text_2}>Address of the company:</Text>
          <TextInput
            style={styles.input_vm}
            value={input3}
            placeholder="  Address Line 1"
            placeholderTextColor="gray"
            onChangeText={value => setInput3(value)}
          />
          <TextInput
            style={styles.input_vm}
            value={input4}
            placeholder="  Address Line 2"
            placeholderTextColor="gray"
            onChangeText={value => setInput4(value)}
          />
          <TextInput
            style={styles.input_vm}
            value={input5}
            placeholder="  Address Line 3"
            placeholderTextColor="gray"
            onChangeText={value => setInput5(value)}
          />
          <Text style={styles.text_2}>PIN Code:</Text>
          <TextInput
            style={styles.input_vm}
            value={input6}
            placeholder="  Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => setInput6(value)}
          />
          <Text style={styles.text_2}>State:</Text>
          <TextInput
            style={styles.input_vm}
            value={input7}
            placeholder="  Eg. Maharashtra"
            placeholderTextColor="gray"
            onChangeText={value => setInput7(value)}
          />
          <Text style={styles.text_2}>Country:</Text>
          <TextInput
            style={styles.input_vm}
            value={input8}
            placeholder="  Eg. India"
            placeholderTextColor="gray"
            onChangeText={value => setInput8(value)}
          />
          <Text style={styles.text_2}>Telephone:</Text>
          <TextInput
            style={styles.input_vm}
            value={input9}
            placeholderTextColor="gray"
            onChangeText={value => setInput9(value)}
          />
          <Text style={styles.text_2}>Email:</Text>
          <TextInput
            style={styles.input_vm}
            value={input10}
            placeholder="  Eg. johndoe@gmail.com"
            placeholderTextColor="gray"
            onChangeText={value => setInput10(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
