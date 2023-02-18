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
import {SelectList} from 'react-native-dropdown-select-list';

const Policy4 = ({list}) => {
  return (
    <>
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
          <Text style={styles.text_3}>Clause 9: Warranties -------------</Text>
          <Text style={styles.text_3}>Clause 9.1</Text>

          <Text style={styles.text_2}>Optional element.</Text>
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder="  Eg."
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
              // style={styles.input_vm}
              value={list[5]}
              placeholder="Enter number"
              placeholderTextColor="gray"
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
          <Text style={styles.text_3}>Clause 9.4</Text>
          <Text style={styles.text_2}>
            For what period will this warranty apply?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[10](value)}
          />

          <Text style={styles.text_3}>Clause 9.5</Text>
          <Text style={styles.text_2}>What is the scope of this warranty?</Text>
          <TextInput
            style={styles.input_vm}
            value={list[11]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[12](value)}
          />

          <Text style={styles.text_3}>Clause 9.6</Text>
          <Text style={styles.text_2}>
            What is the jurisdictional coverage of the warranty?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[13]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[14](value)}
          />

          <Text style={styles.text_3}>Clause 9.5</Text>
          <Text style={styles.text_2}>
            In what circumstances may the Licensor exercise its rights under
            this provision?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[15]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[16](value)}
          />

          <Text style={styles.text_2}>
            Should there be an express requirement for the Licensor to act
            reasonably in relation to the exercise of its rights under this
            provision?
          </Text>
          <RadioGroup
            radioButtons={list[17]}
            onPress={data => list[18](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>
            Are there any express limitations on this right to modify?
          </Text>
          <RadioGroup
            radioButtons={list[19]}
            onPress={data => list[20](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>
            Specify the limitations on the right to modify.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[21]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[22](value)}
          />

          <Text style={styles.text_3}>Clause 12: Termination</Text>
          <Text style={styles.text_3}>Clause 12.1 </Text>

          <Text style={styles.text_2}>What notice period will apply?</Text>
          <RadioGroup
            radioButtons={list[23]}
            onPress={data => list[24](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>
            Must the notice of termination expire after some particular period,
            or on some particular day?
          </Text>
          <RadioGroup
            radioButtons={list[25]}
            onPress={data => list[26](data)}
            containerStyle={styles.radio_hm}
          />

          <Text style={styles.text_2}>Specify the relevant period.</Text>
          <TextInput
            style={styles.input_vm}
            value={list[27]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[28](value)}
          />

          <Text style={styles.text_3}>Clause 12.3</Text>
          <Text style={styles.text_2}>
            In what circumstances may a party terminate for a breach?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[29]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[30](value)}
          />

          <Text style={styles.text_3}>Clause 14: Notices </Text>
          <Text style={styles.text_2}>
            The time frame for the notice period?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[31]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            onChangeText={value => list[32](value)}
          />

          <Text style={styles.text_3}>Clause 14.2</Text>
          <Text style={styles.text_2}>
            Insert all required addressee, address, and contact details for
            contractual notices sent to the Licensor.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[33]}
            placeholder="  Address, contact details, etc"
            placeholderTextColor="gray"
            onChangeText={value => list[34](value)}
          />

          <Text style={styles.text_2}>
            Insert all required addressee, address and contact details for
            contractual notices sent to the Licensee.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[35]}
            placeholder="  Address, contact details, etc"
            placeholderTextColor="gray"
            onChangeText={value => list[36](value)}
          />

          <Text style={styles.text_3}>Clause 15.7</Text>
          <Text style={styles.text_2}>Which law will govern the document?</Text>
          <TextInput
            style={styles.input_vm}
            value={list[37]}
            placeholder="  Address, contact details, etc"
            placeholderTextColor="gray"
            onChangeText={value => list[38](value)}
          />

          <Text style={styles.text_3}>Clause 15.8</Text>
          <Text style={styles.text_2}>
            The courts of which jurisdiction will have the exclusive right to
            adjudicate disputes relating to the document (subject to applicable
            law)?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[39]}
            placeholder="  Address, contact details, etc"
            placeholderTextColor="gray"
            onChangeText={value => list[40](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy4;
