import React, { Fragment } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import colors from '../../../../assets/colors/colors'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Policy3 = ({list}) => {

  
  var touchProps1 = {                               
    style: list[12] ? styles.Pressed : styles.Normal, 
    onPress: () => list[13](true),                 
  };
  var touchProps2 = {                               
    style: list[14] ? styles.Pressed : styles.Normal, 
    onPress: () => list[15](true),                 
  };
  var touchProps3 = {                               
    style: list[16] ? styles.Pressed : styles.Normal, 
    onPress: () => list[17](true),                 
  };  


  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[18]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
      <Text style={styles.text_1}>Maintenance and Support</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <View style={{position: 'relative',fontWeight:"400"}}>
          <Text style={styles.text_2}>
          What will be the commencement date?
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
        <Text style={styles.text_2}>Whether maintenance and support will be available for the app and will it be delivered over phone, via email or in person?</Text>
        <RadioForm
          formHorizontal={false}
          animation={true}
          style={{marginHorizontal:27,marginVertical:7}}
        >
   
              <RadioButton labelHorizontal={true} key={0} style={list[10] ===0? {marginBottom:20}:{marginBottom:4}} >
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={{label: 'Yes', value: 0 }}
                  index={0}
                  isSelected={list[10] === 0}
                  onPress={()=>list[11](0)}
                  borderWidth={1}
                  buttonInnerColor={colors.primary}
                  buttonOuterColor={"#C4C4C4"}
                  buttonSize={9}
                  buttonOuterSize={18}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <RadioButtonLabel
                  obj={{label: 'Yes', value: 0 }}
                  index={0}
                  labelHorizontal={true}
                  onPress={()=>list[11](0)}
                  labelStyle={{fontSize:14, color: '#585858',fontWeight:"300",lineHeight:18.75}}
                />
              </RadioButton>
              {list[10]===0 && <View style={{flex:1 ,display:"flex",flexDirection:"row",}}>
              <TouchableHighlight {...touchProps1}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>Over phone</Text>
                  <TouchableOpacity  style={list[12] ? {display:"flex"} : {display:"none"}} onPress={()=>list[13](false)}><Text > x  </Text></TouchableOpacity>
                </View>
                
              </TouchableHighlight>
              
              <TouchableHighlight {...touchProps2}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>Via Email </Text>
                  <TouchableOpacity style={list[14] ? {display:"flex"} : {display:"none"}} onPress={()=>list[15](false)}><Text> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>

              <TouchableHighlight {...touchProps3}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>In-person</Text>
                  <TouchableOpacity style={list[16] ? {display:"flex"} : {display:"none"}} onPress={()=>list[17](false)}><Text> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>

              </View> }

              <RadioButton labelHorizontal={true} key={1} style={list[10] ===0? {marginTop:20}:{marginTop:4}} >
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={{label: 'Not Available', value: 1 }}
                  index={1}
                  isSelected={list[10] === 1}
                  onPress={()=>list[11](1)}
  
                  borderWidth={1}
                  buttonInnerColor={colors.primary}
                  buttonOuterColor={"#C4C4C4"}
                  buttonSize={9}
                  buttonOuterSize={18}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <RadioButtonLabel
                  obj={{label: 'Not Available', value: 1 }}
                  index={1}
                  labelHorizontal={true}
                  onPress={()=>list[11](1)}
                  labelStyle={{fontSize:14, color: '#585858',fontWeight:"300",lineHeight:18.75}}
                />
              </RadioButton>

        </RadioForm>

        <Text style={styles.text_2}>Will it state how often maintenance will occur and on what schedule?</Text>
        <View >
          <RadioGroup
            radioButtons={list[2]}
            onPress={(data)=>list[3](data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>What will be the start date for the users to be bound by the terms and conditions?</Text>
        <View >
          <RadioGroup
            radioButtons={list[4]}
            onPress={(data)=>list[5](data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Will the user be able to install the software on more than one device?</Text> 
        <View >
          <RadioGroup
            radioButtons={list[6]}
            onPress={(data)=>list[7](data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>What violations give the software provider the rights to cancel the agreement?</Text>
        <TextInput
            style={styles.input_vm}
            value={list[8]}
            onChangeText={(value)=>list[9](value)}
        /> 
      </View>


    </ScrollView>
    </>
  )
}

export default Policy3