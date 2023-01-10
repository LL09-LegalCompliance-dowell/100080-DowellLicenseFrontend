import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { email_validation } from '../validations';


const Policy1 = ({list}) => {
const [valid_email , setValid_email]=useState(true);
return (
<>
<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
    <Text style={list[12]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
    <Text style={valid_email?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Enter Valid Email  </Text>
    <Text style={styles.text_1}>Date:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
        <View >
                <Text style={styles.text_2}>
                Policy Last updated:
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
    </View>
    <Text style={styles.text_1}>Company information:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_2}>Company Name:</Text>
        <TextInput
              style={styles.input_vm}
              value={list[2]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[3](value)}
              />
    </View>
    <Text style={styles.text_1}>Details:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_2}>Website/App Name:</Text>
        <TextInput
              style={styles.input_vm}
              value={list[4]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[5](value)}
        />
        <Text style={styles.text_2}>Jurisdiction:</Text>
        <TextInput
              style={styles.input_vm}
              value={list[6]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[7](value)}
        />
        <Text style={styles.text_2}>Website URL:</Text>
        <TextInput
              style={styles.input_vm}
              value={list[8]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[9](value)}
        />
        <Text style={styles.text_2}>Website Contact Email:</Text>
        <TextInput
              style={styles.input_vm}
              value={list[10]}
              placeholder="  johndoe@gmail.com"
              placeholderTextColor="gray"            
              onChangeText={(value)=>{
                if(value===""){
                    setValid_email(true)
                }
                else{
                    email_validation(value)?setValid_email(true):setValid_email(false)
                }
                list[11](value)
                
            }}
        />
        <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
    </View>
</ScrollView>
</>
)
}

export default Policy1