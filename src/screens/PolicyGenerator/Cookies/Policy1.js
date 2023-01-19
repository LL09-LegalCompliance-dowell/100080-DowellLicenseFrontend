import React, { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from './style'
import colors from '../../../../assets/colors/colors';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'


const Policy1 = ({list}) => {
  const [flag, setFlag] = useState(true);
  var touchProps1 = {                               
    style: list[4] ? styles.Pressed : styles.Normal, 
    onPress: () => list[5](true),                 
  };
  var touchProps2 = {                               
    style: list[6] ? styles.Pressed : styles.Normal, 
    onPress: () => list[7](true),                 
  };
  var touchProps3 = {                               
    style: list[8] ? styles.Pressed : styles.Normal, 
    onPress: () => list[9](true),                 
  };
  var touchProps4 = {                               
    style: list[10] ? styles.Pressed : styles.Normal, 
    onPress: () => list[11](true),                 
  };
  var touchProps5 = {                               
    style: list[12] ? styles.Pressed : styles.Normal, 
    onPress: () => list[13](true),                 
  };
  useEffect(()=>{
    if (list[18][0].selected=== true){
      setFlag(true)
    }
    else{
      setFlag(false)
    }
  },)
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
    <Text style={list[20]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please enter name of the entity  </Text>
      <View style={{position: 'relative', marginTop: 20,fontWeight:"400"}}>
          <Text style={{color: colors.textDark,fontSize:20}}>
          Date of execution of the document:
          </Text>
          <TextInput
            style={styles.input}
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
      <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400"}}>Policy details:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Full Name of the entity that owns and runs the website:</Text>
        <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[3](value)}
          />  
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Check the box if the website has a data protection officer</Text>  
        <View >
          <RadioGroup
            radioButtons={list[14]}
            onPress={(data)=>list[15](data)}
            containerStyle={styles.radio}
          />
        </View>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Describe how users of the website can raise questions regarding the website use of cookies options:</Text>
        <View style={{flex:1 ,display:"flex",flexDirection:"row",marginVertical:19}}>
          <TouchableHighlight {...touchProps1}>
             <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Via Website Chat Services </Text>
              <TouchableOpacity  style={list[4] ? {display:"flex"} : {display:"none"}} onPress={()=>list[5](false)}><Text > x  </Text></TouchableOpacity>
             </View>
            
          </TouchableHighlight>
          
          <TouchableHighlight {...touchProps2}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Via Email </Text>
              <TouchableOpacity style={list[6] ? {display:"flex"} : {display:"none"}} onPress={()=>list[7](false)}><Text> x  </Text></TouchableOpacity>
             </View>
          </TouchableHighlight>

        </View>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Check the box if the website uses other similar Technologies to perform some of the functions which are usually achieved via cookie use</Text>
        <View >
          <RadioGroup
            radioButtons={list[16]}
            onPress={(data)=>list[17](data)}
            containerStyle={styles.radio}
          />
        </View>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Will the cookies store personal information that have been provided by users via the website</Text>
        <View >
          <RadioGroup
            radioButtons={list[18]}
            onPress={(data)=>{
              list[19](data)
              if(data[0].selected== true){
                setFlag(true)
              }
              else {
                setFlag(false)
                list[9](false)
                list[11](false)
                list[13](false)
              }
          }}
            containerStyle={styles.radio}
          />
        </View>
        <View style={flag?{flex:1 ,display:"flex",flexDirection:"row",marginVertical:10}:styles.hide}>
          <TouchableHighlight {...touchProps3}>
             <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Address </Text>
              <TouchableOpacity  style={list[8] ? {display:"flex"} : {display:"none"}} onPress={()=>list[9](false)}><Text> x  </Text></TouchableOpacity>
             </View>
            
          </TouchableHighlight>
          
          <TouchableHighlight {...touchProps4}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Contact Details </Text>
              <TouchableOpacity style={list[10] ? {display:"flex"} : {display:"none"}} onPress={()=>list[11](false)}><Text> x  </Text></TouchableOpacity>
             </View>
          </TouchableHighlight>
          <TouchableHighlight {...touchProps5}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>IP Addresses</Text>
              <TouchableOpacity style={list[12] ? {display:"flex"} : {display:"none"}} onPress={()=>list[13](false)}><Text> x  </Text></TouchableOpacity>
             </View>
          </TouchableHighlight>

        </View>    
      </View>

    </ScrollView>
    </>
  )
}

export default Policy1