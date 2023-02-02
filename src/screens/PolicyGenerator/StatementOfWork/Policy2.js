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

import { number_validation } from '../validations';
import SelectDropdown from 'react-native-select-dropdown'

const Policy2 = ({list}) => {
  const [valid_number,setValid_number]=useState(true)
  const [valid_number1,setValid_number1]=useState(true)
  const [valid_number2,setValid_number2]=useState(true)
  const [valid_number3,setValid_number3]=useState(true)
  const cuurency = [
    "USD",
    'EUR',
    'GBP',
    'CAD',
    'JPY',
    'CHF',
    'JPY'
]
const findcurrency=(cvalue)=>{
  for (let index = 0; index < cuurency.length; index++) {
    if(cuurency[index]===cvalue){
      return index 
    }
  }
} 

  
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[28]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>

        <Text style={styles.text_1}>Project Management:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What will be the mode of communication between the parties?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[0]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[1](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            When will the Freelancer share his status on deliverables?{' '}
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[2].toLocaleDateString()}
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
            onSelect={value => list[3](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            When will the progress meetings occur?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[4].toLocaleDateString()}
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
            onSelect={value => list[5](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>

        {/* Estimates and Payment starts here */}
        <Text style={styles.text_1}>Estimates and Payment:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the minimum time required to complete this project?{' '}
          </Text>
          
        <TextInput
            style={styles.input_vm}
            value={list[6]}
            placeholder="  Enter number"
            placeholderTextColor="gray" 
            onChangeText={(value)=>{
              if(value===""){
                setValid_number(true)
              }
              else{
                number_validation(value)?setValid_number(true):setValid_number(false)
              }
              list[7](value)
              
          }}
            maxLength={10}
          />
        <Text  style={valid_number? styles.hide: styles.text_warning}>Please Enter valid number</Text>
        <View style ={{position:"absolute",top:74,left:150}} >
          <RadioGroup
            radioButtons={list[8]}
            onPress={(data)=>list[9](data)}
            layout='row'            
          />
        </View>

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the value in respect of the time required?{' '}
          </Text>
          <View style={{display:"flex",flexDirection:"row"}}>
          <TextInput
              style={styles.input_vm_w}
              value={list[10]}
              placeholder="  Enter Amount"
              placeholderTextColor="gray" 
              onChangeText={(value)=>{
                if(value===""){
                  setValid_number1(true)
                }
                else{
                  number_validation(value)?setValid_number1(true):setValid_number1(false)
                }
                list[11](value)
                
            }}
          />
          <SelectDropdown
              data={cuurency}
              onSelect={(selectedItem, index) => {
                list[13](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"25%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={findcurrency(list[12])}
            />
        </View>
        <Text  style={valid_number1 ? styles.hide: styles.text_warning}>Please Enter valid number</Text>

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the billing rate?
          </Text>
          <View style={{display:"flex",flexDirection:"row"}}>
          <TextInput
              style={styles.input_vm_w}
              value={list[14]}
              placeholder="  Enter Amount"
              placeholderTextColor="gray" 
              onChangeText={(value)=>{
                if(value===""){
                  setValid_number2(true)
                }
                else{
                  number_validation(value)?setValid_number2(true):setValid_number2(false)
                }
                list[15](value)
                
            }}
          />
          <SelectDropdown
              data={cuurency}
              onSelect={(selectedItem, index) => {
                list[17](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"25%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={findcurrency(list[16])}
            />
        </View>
        <Text  style={valid_number2 ? styles.hide: styles.text_warning}>Please Enter valid number</Text>
          

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What are the charges for “rush work”?{' '}
          </Text>
          <View style={{display:"flex",flexDirection:"row"}}>
          <TextInput
              style={styles.input_vm_w}
              value={list[18]}
              placeholder="  Enter Amount"
              placeholderTextColor="gray" 
              onChangeText={(value)=>{
                if(value===""){
                  setValid_number3(true)
                }
                else{
                  number_validation(value)?setValid_number3(true):setValid_number3(false)
                }
                list[19](value)
                
            }}
          />
          <SelectDropdown
              data={cuurency}
              onSelect={(selectedItem, index) => {
                list[21](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"25%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={findcurrency(list[20])}
            />
        </View>
        <Text  style={valid_number3 ? styles.hide: styles.text_warning}>Please Enter valid number</Text>

          <Text style={[styles.text_1, {fontSize: 15}]}>
            Whom should the invoices be submitted to?{' '}
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[22]}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[23](value)}
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
        When should the invoices be submitted?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[24].toLocaleDateString()}
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
            onSelect={value => list[25](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
           <Text style={[styles.text_1, {fontSize: 15}]}>
           When will the invoices be payable by after receipt?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[26].toLocaleDateString()}
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
            onSelect={value => list[27](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>
        
      </ScrollView>
    </>
  );
};

export default Policy2;
