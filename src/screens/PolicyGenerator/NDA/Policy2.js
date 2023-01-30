import React from 'react'
import { useState,useEffect } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import RadioGroup from 'react-native-radio-buttons-group';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { number_validation } from '../validations';

const Policy2 = ({list}) => {
  const [valid_number,setValid_number]=useState(true)
  const [valid_number_1,setValid_number_1]=useState(true)

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[14]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <Text style={styles.text_1}>Other Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16,position:"relative"}}>
          <Text style={styles.text_2}>What shall be the term of this agreement?</Text>
          <TextInput
            style={styles.input_vm}
            value={list[0]}
            placeholder="Enter number"
            placeholderTextColor="gray" 
            onChangeText={(value)=>{
              if(value===""){
                setValid_number(true)
              }
              else{
                number_validation(value)?setValid_number(true):setValid_number(false)
              }
              list[1](value)
              
          }}
            maxLength={10}
          />
          <Text  style={valid_number? styles.hide: styles.text_warning}>Please Enter valid number</Text>
          <View style ={{position:"absolute",top:63,left:120}} >
            <RadioGroup
              radioButtons={list[12]}
              onPress={(data)=>list[13](data)}
              layout='row'
            />
          </View>
          <Text style={styles.text_2}>What shall be the governing laws of this agreement? Location in case of jurisdictions.</Text>
          <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="  Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[3](value)}
          />
          <View style={{fontWeight:"400"}}>
            <Text style={styles.text_2}>
            Date for execution of this agreement.
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[10].toLocaleDateString()}
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
              onSelect={value => list[11](value)}
              isHideOnSelect={true}
              initialDate={new Date()}
            />
          </View>
        </View>
        <Text style={styles.text_1}>Witness Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
          <Text style={styles.text_2}>No. of Witness/es:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[4]}
            onChangeText={(value)=>{
              if (value!==""){
                if (number_validation(value)===true) {
                  setValid_number_1(true)
                  if(parseInt(value)>list[6])
                  {
                    var temp=[...list[8]]
                    for(let i=list[8].length ; i<parseInt(value) ;i++ ){
                      temp=temp.concat([{id:i , name:"" , address_1:"" , address_2:"" , address_3:""}])
                    }
                    list[9](temp)
                  }
                  else if(parseInt(value)<list[6]){
                    var temp=list[8].slice(0,parseInt(value))
                    list[9](temp)
                  }
                  list[5](value)
                  list[7](parseInt(value))
                }
                else{
                  setValid_number_1(false)
                }
              }
              else{
                list[5](value)
                setValid_number_1(true)
              }


            }
          }
          />
          <Text  style={valid_number_1? styles.hide: styles.text_warning}>Please Enter valid number</Text>
          {list[8].map((item,index)=>{
            return <View key={index}>
              <Text style={styles.text_2}>Witness {item.id+1}:</Text>
              <View style={{marginBottom:16}}></View>
              <Text style={styles.text_2}>Full Name of the witness:</Text>
              <TextInput
                    style={styles.input_vm}
                    value={item.name}
                    placeholder="  Eg. John Smith Doe"
                    placeholderTextColor="gray" 
                    onChangeText={(value)=>{
                      const temp={id:item.id , name:value , address_1:item.address_1 , address_2:item.address_2 , address_3:item.address_3}
                      list[9](list[8].map((element)=>{
                        if(element.id ==index)return temp
                        else return element
                      }))
                    }}
                    
              />
              <Text style={{fontSize:12,fontWeight:"300",color:"#585858",lineHeight:14,position:"relative",right:-220,marginTop:6,marginBottom:20}}>*Include Middle Name</Text>
              <Text style={styles.text_2}>Address of the Witness:</Text>
              <TextInput
                    style={styles.input_vm}
                    value={item.address_1}
                    placeholder="  Address Line 1"
                    placeholderTextColor="gray" 
                    onChangeText={(value)=>{
                      const temp={id:item.id , name:item.name , address_1:value , address_2:item.address_2 , address_3:item.address_3}
                      list[9](list[8].map((element)=>{
                        if(element.id ==index)return temp
                        else return element
                      }))
                    }}
                    
              />
              <TextInput
                    style={styles.input_vm}
                    value={item.address_2}
                    placeholder="  Address Line 2"
                    placeholderTextColor="gray" 
                    onChangeText={(value)=>{
                      const temp={id:item.id , name:item.name , address_1:item.address_1 , address_2:value , address_3:item.address_3}
                      list[9](list[8].map((element)=>{
                        if(element.id ==index)return temp
                        else return element
                      }))
                    }}
                    
              />
              <TextInput
                    style={styles.input_vm}
                    value={item.address_3}
                    placeholder="  Address Line 3"
                    placeholderTextColor="gray" 
                    onChangeText={(value)=>{
                      const temp={id:item.id , name:item.name , address_1:item.address_1 , address_2:item.address_2 , address_3:value}
                      list[9](list[8].map((element)=>{
                        if(element.id ==index)return temp
                        else return element
                      }))
                    }}
                    
              />
          </View>
          })
          
          }

        </View>


      </ScrollView>
    </>
  )
}
export default Policy2