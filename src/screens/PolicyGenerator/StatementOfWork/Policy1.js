import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  var [isPress1, setIsPress1] = useState(false);
  var [isPress2, setIsPress2] = useState(false);
  var [isPress3, setIsPress3] = useState(false);

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

  var touchProps1 = {
    style: isPress1 ? styles.Pressed : styles.Normal,
    onPress: () => setIsPress1(true),
  };
  var touchProps2 = {
    style: isPress2 ? styles.Pressed : styles.Normal,
    onPress: () => setIsPress2(true),
  };
  var touchProps3 = {
    style: isPress3 ? styles.Pressed : styles.Normal,
    onPress: () => setIsPress3(true),
  };

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={styles.text_1}>Client details:</Text>
          {/* Details start here */}
          <View style={{marginHorizontal: 15}}>
            <Text style={[styles.text_1, {fontSize: 15}]}>
              What is the Client’s full name?
            </Text>
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

            <Text style={[styles.text_1, {fontSize: 15}]}>
              Where is the Jurisdiction?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={input1}
              placeholder="Enter here"
              placeholderTextColor="gray"
              onChangeText={value => setInput1(value)}
            />

            <Text style={[styles.text_1, {fontSize: 15}]}>
              What is the Project Name?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={input1}
              placeholder="Enter here"
              placeholderTextColor="gray"
              onChangeText={value => setInput1(value)}
            />
            <Text style={[styles.text_1, {fontSize: 15}]}>
              When is the Effective Date?
            </Text>
          </View>
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

        {/* Party details start here */}

        <Text style={styles.text_1}>Purpose of Agreement:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the Freelancer’s full name?
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
            *Include Middle Name
          </Text>
        </View>

        {/* Authorization starts here */}

        <Text style={styles.text_1}>Authorization:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What can the Freelancer access?
          </Text>
          <TouchableHighlight {...touchProps1}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Via Website Chat Services </Text>
              <TouchableOpacity
                style={isPress1 ? {display: 'flex'} : {display: 'none'}}
                onPress={() => setIsPress1(false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>

          <TouchableHighlight {...touchProps2}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Via Email </Text>
              <TouchableOpacity
                style={isPress2 ? {display: 'flex'} : {display: 'none'}}
                onPress={() => setIsPress2(false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>

          <TouchableHighlight {...touchProps3}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Via Email </Text>
              <TouchableOpacity
                style={isPress3 ? {display: 'flex'} : {display: 'none'}}
                onPress={() => setIsPress3(false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
        </View>

        {/* Project scope starts here */}
        <Text style={styles.text_1}>Project Scope:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the goal of this project?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What are the deliverables expected in this scope of work?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => setInput1(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
