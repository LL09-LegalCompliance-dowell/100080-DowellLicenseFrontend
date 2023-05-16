import React, {useState} from 'react';

import Date from '../Date';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';


const Policy3 = ({list}) => {
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
        <Text style={styles.text_1}>Agreement:</Text>

        <View style={{position: 'relative', fontWeight: '400', paddingTop: 16}}>
          <Text style={styles.text_3}>
            Clause 2: Credit ------------------------------
          </Text>
          <Text style={styles.text_3}>
            Clause: Free documents licensing warning
          </Text>
          <Text style={styles.text_2}>
            Although you need to retain the credit, you should remove the inline
            copyright warning from this document before use.
          </Text>

          <Text style={styles.text_2}>
            Whether maintenance and support will be available for the app and
            will it be delivered over phone, via email or in person?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[1]}
              onPress={data => list[2](data)}
              containerStyle={styles.radio_hm}
              // layout="row"
            />
          </View>

          <Text style={styles.text_3}>
            Clause 3: Term ----------------------------------
          </Text>
          <Text style={styles.text_3}>Clause 3.2</Text>
          <Text style={styles.text_2}>
            Is the term of the contract indefinite, or will it come to an end
            upon some agreed date, or upon the occurrence of a defined event?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[3]}
              onPress={data => list[4](data)}
              containerStyle={styles.radio_hm}
              // layout="row"
            />
          </View>
          <Text style={styles.text_2}>
            Upon the occurrence of what event will the contract terminate?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[31]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[32](value)}
          />

          <Text style={styles.text_2}>Contract termination date?</Text>

          <TextInput
            style={styles.input_vm}
            value={list[33].toLocaleDateString()}
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
            onSelect={value => list[34](value)}
            isHideOnSelect={true}
            initialDate={list[33]}
          />

          <Text style={styles.text_3}>
            Clause 4: Supply of Software -----------------
          </Text>
          <Text style={styles.text_3}>Clause 4.1</Text>
          <Text style={styles.text_2}>
            How many copies of the software will the Licensor deliver to the
            Licensee?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[5]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[6](value)}
          />

          <Text style={styles.text_2}>How will the software be delivered?</Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[8](value)}
          />

          <Text style={styles.text_2}>
            Within what period must the software be delivered?{' '}
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
              style={{color: 'gray'}}
              value={list[9]}
              placeholder="Enter number"
              placeholderTextColor="gray"
              onChangeText={value => list[10](value)}
            />
            <View>
              <RadioGroup
                radioButtons={list[11]}
                onPress={data => list[12](data)}
                style={{color: 'gray'}}
                layout="row"
              />
            </View>
          </View>
          <Text style={styles.text_3}>Clause 4.1</Text>
          <Text style={styles.text_2}>
            What exactly did the Licensor supply to the Licensee?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[13]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[14](value)}
          />

          <Text style={styles.text_3}>Clause 5: License ------------</Text>
          <Text style={styles.text_3}>Clause 5.2</Text>
          <Text style={styles.text_2}>
            Specify the purposes by reference to which sub-licensing is
            permitted.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[15]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[16](value)}
          />

          <Text style={styles.text_3}>Clause 8: Payments ------------</Text>
          <Text style={styles.text_3}>Clause 8.1</Text>
          <Text style={styles.text_2}>When should invoices be issued?</Text>
          <TextInput
            style={styles.input_vm}
            value={list[17]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[18](value)}
          />
          <Text style={styles.text_2}>Specify invoicing dates.</Text>

          <TextInput
            style={styles.input_vm}
            value={list[19].toLocaleDateString()}
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
            onSelect={value => list[20](value)}
            isHideOnSelect={true}
            initialDate={list[19]}
          />

          <Text style={styles.text_2}>
            What is the period for payment of invoices?
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
              style={{color: 'gray'}}
              value={list[21]}
              placeholder="Enter number"
              placeholderTextColor="gray"
              onChangeText={value => list[22](value)}
            />
            <View>
              <RadioGroup
                style={{color: 'gray'}}
                radioButtons={list[23]}
                onPress={data => list[24](data)}
                layout="row"
              />
            </View>
          </View>
          <Text style={styles.text_2}>
            When does the period for payment of an invoice begin to run?
          </Text>

          <TextInput
            style={styles.input_vm}
            value={list[25].toLocaleDateString()}
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
            onSelect={value => list[26](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />

          <Text style={styles.text_3}>Clause 8.3</Text>
          <Text style={styles.text_2}>
            Using what methods should payments be made?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[27]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[28](value)}
          />

          <Text style={styles.text_3}>Clause 8.4</Text>
          <Text style={styles.text_2}>
            What contractual interest rate should apply to late payments?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[29]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[30](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
