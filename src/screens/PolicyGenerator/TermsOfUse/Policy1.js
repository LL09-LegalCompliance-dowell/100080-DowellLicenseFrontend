import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  return (
  <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.text_1}>Party details:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_3_no_m}>Clause 2.3</Text>
        <View style={{position: 'relative', marginTop: 20,fontWeight:"400"}}>
          <Text style={styles.text_2}>
          When were the terms last updated?
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
        <Text style={styles.text_3_m_b}>Clause 3</Text>
        <Text style={styles.text_2}>Enter your Full Legal Name of the Party</Text>
        <TextInput
            style={styles.input_vm}
            value={input1}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput1(value)}
        />
        <Text style={styles.text_2}>Website URL:</Text>
        <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="  Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput2(value)}
        />
        <Text style={styles.text_3_m_b}>Clause 4.2b</Text>  
        <Text style={styles.text_2}>Enter your Email ID:</Text>
        <TextInput
            style={styles.input_vm}
            value={input3}
            placeholder="  johndoe@gmail.com"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput3(value)}
        />
      </View>
      <Text style={styles.text_1}>Written Permission:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_3_m_b}>Clause 4.4</Text>
        <Text style={styles.text_2}>Enter your Email ID for acquiring Written Permission:</Text>
        <TextInput
            style={styles.input_vm}
            value={input4}
            placeholder="  johndoe@gmail.com"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput4(value)}
        />
      </View>

    </ScrollView>
  
  </>

  )
}

export default Policy1