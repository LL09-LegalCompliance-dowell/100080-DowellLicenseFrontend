import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import { email_validation } from '../validations'

const Policy3 = ({list}) => {
  const [valid_email  , setValid_email ] =  useState(true);
  console.log(list[2])
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[2]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <Text style={styles.text_1}>Other Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
          <Text style={styles.text_3}>Clause 8.7</Text>
          <Text style={styles.text_2}>Enter your Email ID for Requesting Access/Correction of Personal Information:</Text>
          <TextInput
              style={styles.input_vm}
              value={list[0]}
              placeholder="  johndoe@gmail.com"
              placeholderTextColor="gray" 
              onChangeText={(value)=>{
                if(value===""){
                    setValid_email(true)
                }
                else{
                    email_validation(value)?setValid_email(true):setValid_email(false)
                }
                list[1](value)
            }}
          />
          <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
        </View>

      </ScrollView>
    
    </>
  )
}

export default Policy3