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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Date from '../Date';

const Policy4 = ({list}) => {
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
            Please Check your inputs... You must fill all fields
          </Text>
          <Text style={styles.text_1}>Agreement:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_3}>
              Clause 9: Warranties -------------------------------
            </Text>
            <Text style={styles.text_3}>Clause 9.1</Text>

            <Text style={styles.text_2}>Optional element.</Text>
            <TextInput
              style={styles.input_vm}
              value={list[1]}
              placeholder="  Eg."
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[2](value)}
            />
            <Text style={styles.text_3}>Clause 9.2</Text>
            <Text style={styles.text_2}>
              Will this warranty relate to a specific period?
            </Text>
            <RadioGroup
              radioButtons={list[3]}
              onPress={data => list[4](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_3}>Clause 9.3</Text>
            <Text style={styles.text_2}>
              For what period will this warranty apply?
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
                value={list[5]}
                placeholder="Enter number"
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={value => list[6](value)}
              />
              <View>
                <RadioGroup
                  radioButtons={list[7]}
                  onPress={data => list[8](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>
            {/* <Text style={styles.text_3}>Clause 9.4</Text>
          <Text style={styles.text_2}>
            For what period will this warranty apply?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder=" Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[10](value)}
          /> */}

            <Text style={styles.text_3}>Clause 9.4</Text>
            <Text style={styles.text_2}>
              What is the scope of this warranty?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[9]}
              placeholder=" Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[10](value)}
            />

            <Text style={styles.text_3}>Clause 9.5</Text>
            <Text style={styles.text_2}>
              What is the jurisdictional coverage of the warranty?
            </Text>
            <TextInput
              style={styles.input_vm}
              autoCapitalize="none"
              value={list[11]}
              placeholder=" Enter here"
              placeholderTextColor="gray"
              onChangeText={value => list[12](value)}
            />

            <Text style={styles.text_3}>Clause 9.6</Text>
            <Text style={styles.text_2}>
              In what circumstances may the Licensor exercise its rights under
              this provision?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[13]}
              autoCapitalize="none"
              placeholder=" Enter here"
              placeholderTextColor="gray"
              onChangeText={value => list[14](value)}
            />

            <Text style={styles.text_2}>
              Should there be an express requirement for the Licensor to act
              reasonably in relation to the exercise of its rights under this
              provision?
            </Text>
            <RadioGroup
              radioButtons={list[15]}
              onPress={data => list[16](data)}
              containerStyle={styles.radio_hm}
            />

            <Text style={styles.text_2}>
              Are there any express limitations on this right to modify?
            </Text>
            <RadioGroup
              radioButtons={list[17]}
              onPress={data => list[18](data)}
              containerStyle={styles.radio_hm}
            />

            <Text style={styles.text_2}>
              Specify the limitations on the right to modify.
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[19]}
              placeholder=" Enter here"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={value => list[20](value)}
            />

            <Text style={styles.text_3}>Clause 12: Termination</Text>
            <Text style={styles.text_3}>Clause 12.1 </Text>

            <Text style={styles.text_2}>What notice period will apply?</Text>
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
                autoCapitalize="none"
                placeholderTextColor="gray"
                onChangeText={value => list[22](value)}
              />
              <View>
                <RadioGroup
                  radioButtons={list[23]}
                  onPress={data => list[24](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>

            <Text style={styles.text_2}>
              Must the notice of termination expire after some particular
              period, or on some particular day?
            </Text>
            <RadioGroup
              radioButtons={list[25]}
              onPress={data => list[26](data)}
              containerStyle={styles.radio_hm}
            />

            <Text style={styles.text_2}>Specify the relevant period.</Text>
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
                value={list[27]}
                placeholder="Enter number"
                autoCapitalize="none"
                placeholderTextColor="gray"
                onChangeText={value => list[28](value)}
              />
              <View>
                <RadioGroup
                  radioButtons={list[29]}
                  onPress={data => list[30](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>
            <Text style={styles.text_2}>Relevant termination period date?</Text>
            <Date
              date={list[31]}
              setDate={list[32]}
              open={open}
              openHandler={openHandler}
            />

            <Text style={styles.text_3}>Clause 12.3</Text>
            <Text style={styles.text_2}>
              In what circumstances may a party terminate for a breach?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[33]}
              placeholder=" Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[34](value)}
            />

            <Text style={styles.text_3}>Clause 14: Notices </Text>
            <Text style={styles.text_2}>
              The time frame for the notice period?
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
                value={list[35]}
                placeholder="Enter number"
                autoCapitalize="none"
                placeholderTextColor="gray"
                onChangeText={value => list[36](value)}
              />
              <View>
                <RadioGroup
                  radioButtons={list[37]}
                  onPress={data => list[38](data)}
                  // containerStyle={styles.radio_hm}
                  layout="row"
                />
              </View>
            </View>

            <Text style={styles.text_3}>Clause 14.2</Text>
            <Text style={styles.text_2}>
              Insert all required addressee, address, and contact details for
              contractual notices sent to the Licensor.
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[39]}
              placeholder=" Full Name"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[40](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[41]}
              placeholder=" Address line 1"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[42](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[43]}
              placeholder=" Address line 2"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[44](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[45]}
              placeholder=" Address line 3"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[46](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[47]}
              placeholder=" Contact details"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[48](value)}
            />

            <Text style={styles.text_2}>
              Insert all required addressee, address and contact details for
              contractual notices sent to the Licensee.
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[49]}
              placeholder=" Full Name"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[50](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[51]}
              placeholder=" Address line 1"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[52](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[53]}
              placeholder=" Address line 2"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[54](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[55]}
              placeholder=" Address line 3"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[56](value)}
            />
            <TextInput
              style={styles.input_vm}
              value={list[57]}
              placeholder=" Contact details"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[58](value)}
            />

            <Text style={styles.text_3}>Clause 15.7</Text>
            <Text style={styles.text_2}>
              Which law will govern the document?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[59]}
              placeholder=" Enter state name"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={value => list[60](value)}
            />

            <Text style={styles.text_3}>Clause 15.8</Text>
            <Text style={styles.text_2}>
              The courts of which jurisdiction will have the exclusive right to
              adjudicate disputes relating to the document (subject to
              applicable law)?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[61]}
              placeholder="  Enter jurisdiction"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[62](value)}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy4;
