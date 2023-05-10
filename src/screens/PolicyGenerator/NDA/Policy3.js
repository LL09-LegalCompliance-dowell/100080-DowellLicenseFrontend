import React from 'react'
import { useState,useEffect } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import RadioGroup from 'react-native-radio-buttons-group';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { number_validation } from '../validations';
import Date from '../Date';
const Policy3 = ({list}) => {
  const [open, setOpen] = useState(false)
  const openHandler=(state)=>{
      setOpen(state)
  }
  
  
  const [valid_number,setValid_number]=useState(true)
  useEffect(()=>{
    if (list[4][0].selected===false) {
      list[7]("")
      setValid_number(true)
    }
    if (list[10][2].selected===false) {
      list[13]("")
    
    }
  },)
  return (
    <>
    
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
    
    <Text style={list[14]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
    <Text style={styles.text_1}>Other Details:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
      <Text style={styles.text_2}>Will the obligations of confidentiality subsist after the expiry/termination of the agreement?</Text>
      <RadioGroup
               containerStyle={styles.radio_hm}
              radioButtons={list[0]}
              onPress={(data)=>list[1](data)}
              
      />
      <View style={{fontWeight:"400"}}>
            <Text style={styles.text_2}>
            What will be the date for termination of this NDA?
            </Text>
            <Date date={list[2]} setDate = {list[3]} open ={open} openHandler={openHandler}/>
      </View>
      <Text style={styles.text_2}>Will the party be allowed to enter into similar arrangements with other parties while the non disclosure agreement subsits?(exclusive or not).</Text>
      <RadioGroup
              containerStyle={styles.radio_hm}
              radioButtons={list[4]}
              onPress={(data)=>{
                list[5](data)
                if(data[0].selected== true){
                  list[16](true)
                }
                else list[16](false)
              }}
              
      />
      <View  style={list[15] ? "":styles.hide}>
        <Text style={styles.text_2}>If Yes then what will be the time period?</Text>
        <TextInput
            style={styles.input_vm}
            value={list[6]}
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
              list[7](value)
              
          }}
            maxLength={10}
          />
        <Text  style={valid_number? styles.hide: styles.text_warning}>Please Enter valid number</Text>
        <View style ={{position:"absolute",top:45,left:117}} >
          <RadioGroup
            radioButtons={list[8]}
            onPress={(data)=>list[9](data)}
            layout='row'            
          />
        </View>
      </View>  
      <Text style={styles.text_2}>How will the agreement be terminated?</Text>
      
      <RadioGroup
            radioButtons={list[10]}
            containerStyle={styles.radio_hm}
            onPress={(data)=>{
              list[11](data)
              if(data[2].selected== true){
                list[18](true)
              }
              else list[18](false)
            }}
      />
      <TextInput
        style={list[17] ? styles.input_vm : styles.hide}
        value={list[12]}
        placeholder="  Enter here"
        placeholderTextColor="gray" 
        onChangeText={(value)=>list[13](value)}
      />      
    </View>
    </ScrollView>
    </>
  )
}

export default Policy3