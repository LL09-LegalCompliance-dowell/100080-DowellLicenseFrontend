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

const Policy3 = () => {
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
        <Text style={styles.text_1}>This Agreement:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the Freelancer’s Full Name?
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
            What is the Freelancer’s Full Name?
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
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
