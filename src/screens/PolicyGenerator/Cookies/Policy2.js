import React from 'react'
import styles from './style'
import colors from '../../../../assets/colors/colors';
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import { useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import { email_validation } from '../validations';

const Policy2 = ({list}) => {
  const [valid_email , setValid_email]=useState(true);
  var touchProps1 = {                               
    style: list[4] ? styles.Pressed : styles.Normal, 
    onPress: () => list[5](true),                 
  };
  var touchProps2 = {                               
    style: list[6] ? styles.Pressed : styles.Normal, 
    onPress: () => list[7](true),                 
  };
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text style={list[14]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
          <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400", marginTop: 20}}>
          Other Details:
          </Text>
          <View style={{paddingHorizontal:11,paddingTop:16}}>
            <Text style={styles.text_2}>Does your website/app show ads?</Text>
            <View >
              <RadioGroup
                radioButtons={list[0]}
                onPress={(data)=>{
                  list[1](data)
                }}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>Does the website uses other similar Technologies to perform some of the functions which are usually achieved via cookie use?</Text>
            <View >
              <RadioGroup
                radioButtons={list[2]}
                onPress={(data)=>{
                  list[3](data)
                }}
                containerStyle={styles.radio_hm}
              />
            </View>
            <Text style={styles.text_2}>Describe how users of the website can raise questions regarding the website use of cookies options.</Text>
            <View style={{flex:1 ,display:"flex",flexDirection:"row",marginVertical:20}}>
              <TouchableHighlight {...touchProps1}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>Via Email</Text>
                  <TouchableOpacity  style={list[4] ? {display:"flex"} : {display:"none"}} onPress={()=>list[5](false)}><Text style ={{color:"#585858"}} > x  </Text></TouchableOpacity>
                </View>
                
              </TouchableHighlight>
              
              <TouchableHighlight {...touchProps2}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>Via website chat services</Text>
                  <TouchableOpacity style={list[6] ? {display:"flex",} : {display:"none"}} onPress={()=>list[7](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
            </View>
            <TextInput
              style={list[4]?styles.input_vm:styles.hide}
              value={list[8]}
              placeholder="Enter Email here"
              placeholderTextColor="gray" 
              onChangeText={(value)=>{
                if(value===""){
                    setValid_email(true)
                }
                else{
                    email_validation(value)?setValid_email(true):setValid_email(false)
                }
                list[9](value)
                
            }}
            />
            <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
            <TextInput
              style={list[6]?styles.input_vm:styles.hide}
              value={list[10]}
              placeholder="Enter Website Chat URL here"
              placeholderTextColor="gray" 
              onChangeText={(value)=>list[11](value)}
            />
             <Text style={styles.text_2}>Provide the situations where cookies may be collected without the consent of website users.</Text>
             <TextInput
              style={styles.input_vm}
              value={list[12]}
              placeholderTextColor="gray" 
              onChangeText={(value)=>list[13](value)}
            />
          </View>
    </ScrollView>
  )
}

export default Policy2