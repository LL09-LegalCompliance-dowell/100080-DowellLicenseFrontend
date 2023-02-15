import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { email_validation,url_validation } from '../validations';

const Policy1 = ({list}) => {
  const [valid_email  , setValid_email ] =  useState(true);
  const [valid_email1 , setValid_email1] =  useState(true);
  const [valid_url , setValid_url]=useState(true);
  return (
  <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[10]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
      <Text style={styles.text_1}>Party details:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_3_no_m}>Clause 2.3</Text>
        <View style={{position: 'relative', marginTop: 20,fontWeight:"400"}}>
          <Text style={styles.text_2}>
          When were the terms last updated?
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
        <Text style={styles.text_3_m_b}>Clause 3</Text>
        <Text style={styles.text_2}>Enter your Full Legal Name of the Party</Text>
        <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[3](value)}
        />
        <Text style={styles.text_2}>Website URL:</Text>
        <TextInput
            style={styles.input_vm}
            value={list[4]}
            placeholder="  Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>{
              if(value===""){
                  setValid_url(true)
              }
              else{
                  url_validation(value)?setValid_url(true):setValid_url(false)
              }
              list[5](value)
              
          }}
          />
          <Text  style={valid_url ? styles.hide: styles.text_warning}>Please Enter valid URL</Text>
        <Text style={styles.text_3_m_b}>Clause 4.2b</Text>  
        <Text style={styles.text_2}>Enter your Email ID:</Text>
        <TextInput
            style={styles.input_vm}
            value={list[6]}
            placeholder="  johndoe@gmail.com"
            placeholderTextColor="gray" 
            onChangeText={(value)=>{
              if(value===""){
                  setValid_email(true)
              }
              else{
                  email_validation(value)?setValid_email(true):setValid_email(false)
              }
              list[7](value)
          }}
        />
        <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
      </View>
      <Text style={styles.text_1}>Written Permission:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_3_m_b}>Clause 4.4</Text>
        <Text style={styles.text_2}>Enter your Email ID for acquiring Written Permission:</Text>
        <TextInput
            style={styles.input_vm}
            value={list[8]}
            placeholder="  johndoe@gmail.com"
            placeholderTextColor="gray" 
            onChangeText={(value)=>{
              if(value===""){
                  setValid_email1(true)
              }
              else{
                  email_validation(value)?setValid_email1(true):setValid_email1(false)
              }
              list[9](value)
          }}
        />
        <Text  style={valid_email1 ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
      </View>

    </ScrollView>
  
  </>

  )
}

export default Policy1