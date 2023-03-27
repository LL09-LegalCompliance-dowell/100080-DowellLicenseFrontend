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
import {TouchableOpacity} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const Policy3 = ({list}) => {
  var [isPress1, setIsPress1] = useState(false);
  var [isPress2, setIsPress2] = useState(false);
  var [isPress3, setIsPress3] = useState(false);

  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState('');

  const [value3Index, setvalue3Index] = useState(1);

  const [radioButtons1, setRadioButtons1] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
  ]);
  const [radioButtons2, setRadioButtons2] = useState([
    {
      id: '1',
      label: 'When they download ',
      value: 'When they download ',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '2',
      label: 'When they open the package',
      value: 'When they open the package',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
  ]);
  const [radioButtons3, setRadioButtons3] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      selected: true,
    },
  ]);
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
              placeholder=" State name"
              placeholderTextColor="gray"
              onChangeText={value => list[4](value)}
            />
            <Text style={styles.text_2}>
              How many parties will enter this MOU?
            </Text>
            <TextInput
              style={styles.input_vm}
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
            period of time after leaving this project? If yes, then what is the
            period?
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
          <TextInput
            style={[styles.input, {marginHorizontal: 0}]}
            value={list[11].toLocaleDateString()}
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
            onSelect={value => list[12](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
          <Text style={styles.text_2}>
            Should the parties agree to refrain from negotiating with any third
            parties while this MOU is in effect. (Will it be exclusive or non
            exclusive?)
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
            placeholderTextColor="gray"
            onChangeText={value => list[20](value)}
          />

          <Text style={styles.text_2}>Project details</Text>
          <TextInput
            style={styles.input_vm}
            value={list[21]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[22](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
