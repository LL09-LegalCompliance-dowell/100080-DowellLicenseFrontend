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
import colors from '../../../../assets/colors/colors';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {TouchableOpacity} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Date from '../Date';
const Policy3 = ({list}) => {
  var [isPress1, setIsPress1] = useState(false);
  var [isPress2, setIsPress2] = useState(false);
  var [isPress3, setIsPress3] = useState(false);
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
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Company Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <View style={{position: 'relative', fontWeight: '400'}}>
              <Text style={styles.text_2}>
                Which state of laws will be used as the governing laws?
              </Text>
              <TextInput
                style={styles.input_vm}
                value={list[1]}
                placeholder=" State name"
                autoCapitalize="none"
                placeholderTextColor="gray"
                onChangeText={value => list[2](value)}
              />
              <Text style={styles.text_2}>
                Which state laws shall be the governing laws in case of
                reimbursement?
              </Text>
              <TextInput
                style={styles.input_vm}
                value={list[3]}
                autoCapitalize="none"
                placeholder=" State name"
                placeholderTextColor="gray"
                onChangeText={value => list[4](value)}
              />
              <Text style={styles.text_2}>
                How many parties will enter this MOU?
              </Text>
              <TextInput
                style={styles.input_vm}
                autoCapitalize="none"
                value={list[5]}
                placeholder="  Enter here"
                placeholderTextColor="gray"
                onChangeText={value => list[6](value)}
                keyboardType="numeric"
              />
            </View>
            <Text style={styles.text_2}>
              Should this MOU include a confidentiality clause?
            </Text>
            <View>
              <RadioGroup
                radioButtons={list[7]}
                onPress={data => list[8](data)}
                containerStyle={styles.radio_hm}
              />
            </View>

            <Text style={styles.text_2}>
              Does this MOU restrict working with competitors for an ascertain
              period of time after leaving this project? If yes, then what is
              the period?
            </Text>
            <View>
              <RadioGroup
                radioButtons={list[9]}
                onPress={data => list[10](data)}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>
              Date for this legally binding definitive agreement.
            </Text>
            <Date
              date={list[11]}
              setDate={list[12]}
              open={open}
              openHandler={openHandler}
            />
            <Text style={styles.text_2}>
              Should the parties agree to refrain from negotiating with any
              third parties while this MOU is in effect. (Will it be exclusive
              or non exclusive?)
            </Text>
            <View>
              <RadioGroup
                radioButtons={list[13]}
                onPress={data => list[14](data)}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>
              Will this MOU agreement be terminated in case of force majeure?
            </Text>
            <View>
              <RadioGroup
                radioButtons={list[15]}
                onPress={data => list[16](data)}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>
              Are there any other contracts entered between the parties together
              with this MOU?
            </Text>
            <View>
              <RadioGroup
                radioButtons={list[17]}
                onPress={data => list[18](data)}
                containerStyle={styles.radio_hm}
              />
            </View>

            <Text style={styles.text_2}>Project name</Text>
            <TextInput
              style={styles.input_vm}
              value={list[19]}
              placeholder=" Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[20](value)}
            />

            <Text style={styles.text_2}>Project details</Text>
            <TextInput
              style={styles.input_vm}
              value={list[21]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[22](value)}
            />
            <Text style={styles.text_2}>Website/App name</Text>
            <TextInput
              style={styles.input_vm}
              value={list[23]}
              placeholder="Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => list[24](value)}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy3;
