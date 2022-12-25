import React from 'react';
import styles from '../../Cookies/style';
import colors from '../../../../assets/colors/colors';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

const Policy4 = () => {
  const [input_1, setInput_1] = useState('');

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          color: colors.textDark,
          fontSize: 20,
          fontWeight: '400',
          marginTop: 20,
        }}>
        Finish Up:
      </Text>
      <View style={{paddingHorizontal: 11, paddingTop: 16}}>
        <Text style={styles.text_1}>
          Enter Your Email address to receive the policy:
        </Text>
        <TextInput
          style={styles.input}
          value={input_1}
          placeholder="Eg. johndoe@mail.com"
          placeholderTextColor="gray"
          onChangeText={value => setInput_1(value)}
        />
        <Text style={{color: '#585858', fontSize: 18, fontWeight: '300'}}>
          You will receive the policy to the entered email.
        </Text>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Image
            source={require('../../../../assets/images/TheLittleThingsWorking.png')}
            style={styles.blurImage}
          />
          <TouchableOpacity style={styles.button_p4}>
            <AntDesign name="download" size={24} color={colors.primary} />
            <Text style={styles.text_b_p4}>Download Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_p4}>
            <AntDesign name="eye" size={24} color={colors.primary} />
            <Text style={styles.text_b_p4}>Preview Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Policy4;
