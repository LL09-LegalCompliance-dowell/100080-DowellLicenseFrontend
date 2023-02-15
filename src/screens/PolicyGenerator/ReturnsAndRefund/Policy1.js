import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { email_validation,number_validation,url_validation } from '../validations';
import SelectDropdown from 'react-native-select-dropdown'

const Policy1 = ({list}) => {
  const [valid_email  , setValid_email ] =  useState(true);
  const [valid_number  ,  setValid_number ] =  useState(true); 
  const [valid_number1  , setValid_number1 ] =  useState(true); 
  const [valid_url , setValid_url]=useState(true);
  const cuurency = [
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
        <Text style={list[16]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <Text style={styles.text_1}>Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
            <View >
                <Text style={styles.text_2}>
                Date:
                </Text>
                <TextInput
                    style={styles.input_vm}
                    value={list[0].toLocaleDateString()}
                    placeholder="dd/mm/yyyy"
                    placeholderTextColor="gray" 
                />
                <ModalDatePicker
                    button={
                    <View style={styles.calendarPosition}>
                        <EvilIcons name={'calendar'} size={35} color="gray"/>
                    </View>
                    }
                    color="#489503"
                    onSelect={value => list[1](value)}
                    isHideOnSelect={true}
                    initialDate={new Date()}
                />
            </View>
            <Text style={styles.text_2}>Website/App Name:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[2]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[3](value)}
              />
            <Text style={styles.text_2}>Company Information:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[4]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[5](value)}
              />
            <Text style={styles.text_2}>Website URL:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[6]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>{
                if(value===""){
                    setValid_url(true)
                }
                else{
                    url_validation(value)?setValid_url(true):setValid_url(false)
                }
                list[7](value)
                
            }}
            />
            <Text  style={valid_url ? styles.hide: styles.text_warning}>Please Enter valid URL</Text>
            <Text style={styles.text_2}>Cancellation rights  of Order within days(in number):</Text>
            <TextInput
              style={styles.input_vm}
              value={list[8]}
              placeholder="  Enter number"
              keyboardType='numeric'
              placeholderTextColor="gray"            
              onChangeText={(value)=>{
                if(value===""){
                    setValid_number(true)
                }
                else{
                    number_validation(value)?setValid_number(true):setValid_number(false)
                }
                list[9](value)
            }}
              maxLength={15}
            />
            <Text  style={valid_number ? styles.hide: styles.text_warning}>Please Enter valid number</Text>
            <View style ={valid_url?{position:"absolute",top:490,left:170}:{position:"absolute",top:515,left:170}} >
            <RadioGroup
              radioButtons={list[10]}
              onPress={(data)=>list[11](data)}
              layout='row'
            />
            </View>
            <Text style={styles.text_2}>Reimbursement of cancellation Money:</Text>
            <View style={{display:"flex",flexDirection:"row"}}>
            <TextInput
              style={styles.input_vm_w}
              value={list[12]}
              placeholder="  Enter Amount(₹)"
              keyboardType='numeric'
              placeholderTextColor="gray"            
              onChangeText={(value)=>{
                if(value===""){
                    setValid_number1(true)
                }
                else{
                    number_validation(value)?setValid_number1(true):setValid_number1(false)
                }
                list[13](value)
            }}
              />
              <SelectDropdown
              data={cuurency}
              onSelect={(selectedItem, index) => {
                list[18](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"25%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={findcurrency(list[17])}
            />
            </View>
            <Text  style={valid_number1 ? styles.hide: styles.text_warning}>Please Enter valid number</Text>
            <Text style={styles.text_2}>Website Contact Email:</Text>
            <TextInput
              style={styles.input_vm}
              value={list[14]}
              placeholder="  johndoe@gmail.com"
              placeholderTextColor="gray"            
              onChangeText={(value)=>{
                if(value===""){
                    setValid_email(true)
                }
                else{
                    email_validation(value)?setValid_email(true):setValid_email(false)
                }
                list[15](value)
            }}
              />  
              <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
        </View>
    </ScrollView>
    </>
  )
}

export default Policy1