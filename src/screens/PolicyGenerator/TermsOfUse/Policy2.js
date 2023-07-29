import React from 'react';
import {useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';
import SelectDropdown from 'react-native-select-dropdown';
import {number_validation} from '../validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Policy2 = ({list}) => {
  const cuurency = ['EUR', 'GBP', 'CAD', 'JPY', 'CHF', 'JPY'];
  const findcurrency = cvalue => {
    for (let index = 0; index < cuurency.length; index++) {
      if (cuurency[index] === cvalue) {
        return index;
      }
    }
  };
  return (
    <>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[6]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Other Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_3}>Clause 7.2</Text>
            <Text style={styles.text_2_m_b}>Liability Limit</Text>
            <Text style={styles.text_2}>
              Type your Amount & Choose Currency:
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TextInput
                style={styles.input_vm_w}
                value={list[0]}
                placeholder="  Enter Amount"
                autoCapitalize="none"
                placeholderTextColor="gray"
                keyboardType="numeric"
                onChangeText={value => {
                  if (value === '') {
                    list[8](true);
                  } else {
                    number_validation(value) ? list[8](true) : list[8](false);
                  }
                  list[1](value);
                }}
              />

              <SelectDropdown
                data={cuurency}
                onSelect={(selectedItem, index) => {
                  list[2](selectedItem);
                }}
                buttonStyle={{
                  backgroundColor: '#D9D9D9',
                  marginVertical: 12,
                  color: '#585858',
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: '#C4C4C4',
                  height: 51,
                  width: '25%',
                }}
                buttonTextStyle={{
                  color: '#585858',
                  fontSize: 16,
                  fontWeight: '300',
                }}
                dropdownStyle={{borderRadius: 15}}
                defaultValueByIndex={findcurrency(list[11])}
              />
            </View>
            <Text style={list[7] ? styles.hide : styles.text_warning}>
              Please Enter valid number
            </Text>
            <Text style={styles.text_3}>Clause 7.3</Text>
            <Text style={styles.text_2_m_b}>Liability Must Not Exceed</Text>
            <Text style={styles.text_2}>
              Type your Amount & Choose Currency:
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TextInput
                style={styles.input_vm_w}
                value={list[3]}
                placeholder="  Enter Amount"
                autoCapitalize="none"
                placeholderTextColor="gray"
                keyboardType="numeric"
                onChangeText={value => {
                  if (value === '') {
                    list[10](true);
                  } else {
                    number_validation(value) ? list[10](true) : list[10](false);
                  }
                  list[4](value);
                }}
              />
              {/* <SelectList 
            defaultOption={{key:'0', value:list[12]}}
            setSelected={(val) => list[5](val)} 
            data={cuurency} 
            save="value"
            inputStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
             dropdownTextStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            searchPlaceholder=""
            search={false}
            boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
            /> */}
              <SelectDropdown
                data={cuurency}
                onSelect={(selectedItem, index) => {
                  list[5](selectedItem);
                }}
                buttonStyle={{
                  backgroundColor: '#D9D9D9',
                  marginVertical: 12,
                  color: '#585858',
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: '#C4C4C4',
                  height: 51,
                  width: '25%',
                }}
                buttonTextStyle={{
                  color: '#585858',
                  fontSize: 16,
                  fontWeight: '300',
                }}
                dropdownStyle={{borderRadius: 15}}
                defaultValueByIndex={findcurrency(list[12])}
              />
            </View>
            <Text style={list[9] ? styles.hide : styles.text_warning}>
              Please Enter valid number
            </Text>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy2;
