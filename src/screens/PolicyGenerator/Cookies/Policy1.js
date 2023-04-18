import React, { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from './style'
import colors from '../../../../assets/colors/colors';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown'

const Policy1 = ({list}) => {
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(true);
  const data = ["IP Addresses", "Contact Details", "Address"]
  const data1 = ["IP Addresses", "User Behavior"]
  useEffect(()=>{
    if (list[4][0].selected=== true){
      setFlag(true)
    }
    else{
      setFlag(false)
    }
    if (list[21][0].selected=== true){
      setFlag1(true)
    }
    else{
      setFlag1(false)
    }
  },)

    return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[26]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
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
            initialDate={list[0]}
          />
      </View>
      <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400"}}>Policy details:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_2}>Full Name of the entity that owns and runs the website:</Text>
        <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[3](value)}
          />  
        <Text style={styles.text_2}>Will the cookies store personal information that have been provided by users via the website</Text>  
        <View >
          <RadioGroup
            radioButtons={list[4]}
            onPress={(data)=>{
              list[5](data)
              if(data[0].selected== true){
                setFlag(true)
              }
              else {
                setFlag(false)
              }
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <View style={flag?{}:styles.hide}>
          <View style={{display:"flex",flexDirection:"row",marginBottom:10}} >
              {list[7].map((item,index)=>{
                return <View key ={index} style={styles.Pressed_flex}>
                <Text style={{color:"#585858"}}>{item} </Text>
                <TouchableOpacity onPress={()=>{list[8](item)}}   ><Text style={{color:"#585858"}} > x  </Text></TouchableOpacity>
                </View>
              })}
          </View>    
          
          
          <SelectDropdown
              data={data}
              onSelect={(selectedItem) => {
                list[6](selectedItem)
              }}
            buttonTextAfterSelection={()=> "Enter Here"}
            defaultButtonText="Enter Here"
            buttonStyle={{backgroundColor: '#D8D8D8',borderRadius:15,width:"100%"}}
            buttonTextStyle={{fontSize:18,color:"#585858",textAlign:"center"}}
            dropdownStyle={{borderRadius:15}}
          />
        </View>
        <Text style={flag?{color: colors.textDark,fontSize:18,fontWeight:"400",marginTop:20}:{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Details about information the third party cookies will be collecting from users of the website.</Text>
        <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder="Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[10](value)}
          />
        <Text style={styles.text_2}>Does your website/app use Essential Cookies? (eg. These cookies are strictly necessary to enable core functionality such as security, network management, your cookie preferences and accessibility.)</Text>
        <View >
          <RadioGroup
            radioButtons={list[11]}
            onPress={(data)=>{
              list[12](data)
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Does your website/app use any Performance and Functionality Cookies? (eg. Performance and Functionality Cookies help you remember that an user had logged in previously.)</Text>
        <View >
          <RadioGroup
            radioButtons={list[13]}
            onPress={(data)=>{
              list[14](data)
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Does your website/app use Marketing cookies? (eg. Marketing Cookies enable you to identify future prospects and personalize sales and marketing interactions.)</Text>
        <View >
          <RadioGroup
            radioButtons={list[15]}
            onPress={(data)=>{
              list[16](data)
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Does your website/app use Analytics and Customization Cookies? (eg. These cookies collect information that is used to help you understand how your platform is being used or how effective your marketing campaigns are.)</Text>
        <View >
          <RadioGroup
            radioButtons={list[17]}
            onPress={(data)=>{
              list[18](data)
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Does your website/app use Social Media Cookies? (eg. These cookies are used when users log in with Facebook, Twitter or Google.)</Text>
        <View >
          <RadioGroup
            radioButtons={list[19]}
            onPress={(data)=>{
              list[20](data)
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Does your website/app use Third Party Cookies? (eg. Third party service providers control many of the performance and functionality, advertising, marketing and analytics cookies.)</Text>
        <View >
          <RadioGroup
            radioButtons={list[21]}
            onPress={(data)=>{
              list[22](data)
              if(data[0].selected== true){
                setFlag1(true)
              }
              else {
                setFlag1(false)
              }
            }}
            containerStyle={styles.radio_hm}
          />
        </View>
        <View style={flag1?{}:styles.hide}>
          <View style={{display:"flex",flexDirection:"row",marginBottom:10}} >
              {list[23].map((item,index)=>{
                return <View key ={index} style={styles.Pressed_flex}>
                <Text style={{color:"#585858"}}>{item} </Text>
                <TouchableOpacity onPress={()=>{list[25](item)}}   ><Text style={{color:"#585858"}} > x  </Text></TouchableOpacity>
                </View>
              })}
          </View>    
          
          
          <SelectDropdown
              data={data1}
              onSelect={(selectedItem) => {
                list[24](selectedItem)
              }}
            buttonTextAfterSelection={()=> "Enter Here"}
            defaultButtonText="Enter Here"
            buttonStyle={{backgroundColor: '#D8D8D8',borderRadius:15,marginBottom:20,width:"100%"}}
            buttonTextStyle={{fontSize:18,color:"#585858",textAlign:"center"}}
            dropdownStyle={{borderRadius:15}}
          />
        </View>
        <Text style={styles.text_2}>Website/App Name:</Text>
        <TextInput
            style={styles.input_vm}
            value={list[27]}
            placeholder="Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[28](value)}
          />
      </View>

    </ScrollView>
    </>
  )
}

export default Policy1