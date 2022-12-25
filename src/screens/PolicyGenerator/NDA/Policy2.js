import React from 'react'
import { useState,useEffect } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import RadioGroup from 'react-native-radio-buttons-group';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy2 = () => {
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [input_3, setInput_3] = useState("1");
  const [prev_input_3, setprev_Input_3] = useState(1);
  const [witness, setWitness] =useState ([{id:0 , name:"" , address_1:"" , address_2:"" , address_3:""}])
  const [date, setDate] = useState(new Date());

  const [radioButtons, setRadioButtons] = useState([{
    id: '1',
    label: 'Days',
    value: 'Days',
    size: 12,
    color: '#489503',
    borderColor: '#C4C4C4',   
  },{
  id: '2',
  label: 'Months',
  value: 'Months',
  size: 12,
  color: '#489503',
  borderColor: '#C4C4C4',
  containerStyle:{marginLeft:5}  ,
  selected: true,
  },{
    id: '3',
    label: 'Years',
    value: 'Years',
    size: 12,
    color: '#489503',
    borderColor: '#C4C4C4',
    containerStyle:{marginLeft:5}  
    }]);
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Other Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
          <Text style={styles.text_2}>What shall be the term of this agreement?</Text>
          <TextInput
            style={styles.input_vm}
            value={input_1}
            placeholder="Enter number"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput_1(value)}
            maxLength={10}
          />
          <View style ={{position:"absolute",top:60,left:120}} >
            <RadioGroup
              radioButtons={radioButtons}
              onPress={(data)=>setRadioButtons(data)}
              layout='row'
            />
          </View>
          <Text style={styles.text_2}>What shall be the governing laws of this agreement? Location in case of jurisdictions.</Text>
          <TextInput
            style={styles.input_vm}
            value={input_2}
            placeholder="  Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput_2(value)}
          />
          <View style={{fontWeight:"400"}}>
            <Text style={styles.text_2}>
            Date for execution of this agreement.
            </Text>
            <TextInput
              style={styles.input_vm}
              value={date.toLocaleDateString()}
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
              onSelect={value => setDate(value)}
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
            value={input_3}
            onChangeText={(value)=>{
              if (value!==""){
                if(parseInt(value)>prev_input_3)
                {
                  var temp=[...witness]
                  for(let i=witness.length ; i<parseInt(value) ;i++ ){
                    temp=temp.concat([{id:i , name:"" , address_1:"" , address_2:"" , address_3:""}])
                  }
                  setWitness(temp)
                }
                else if(parseInt(value)<prev_input_3){
                  var temp=witness.slice(0,parseInt(value))
                  setWitness(temp)
                }
                setInput_3(value)
                setprev_Input_3(parseInt(value))
                
              }
              else{
                setInput_3(value)
              }

            }
          }
          />
          {witness.map((item,index)=>{
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
                      setWitness(witness.map((element)=>{
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
                      setWitness(witness.map((element)=>{
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
                      setWitness(witness.map((element)=>{
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
                      setWitness(witness.map((element)=>{
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