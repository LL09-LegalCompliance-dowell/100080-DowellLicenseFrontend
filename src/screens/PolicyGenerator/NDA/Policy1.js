import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Policy1 = () => {
  const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
  const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [input_3, setInput_3] = useState("");
  const [input_4, setInput_4] = useState("");
  const [input_5, setInput_5] = useState("");
  const [input_6, setInput_6] = useState("");
  const [input_7, setInput_7] = useState("");
  const [input_8, setInput_8] = useState("");
  const [input_9, setInput_9] = useState("");
  const [input_10, setInput_10] = useState("");
  const [input_11, setInput_11] = useState("");
  const [input_12, setInput_12] = useState("");
  const [input_13, setInput_13] = useState("");
  const [input_14, setInput_14] = useState("");
  const [input_15, setInput_15] = useState("");
  const [input_16, setInput_16] = useState("");
  const togglePartyOne = e => {
    setIsPartyOneOpen(prev => !prev);
  };

  const togglePartyTwo = e => {
    setIsPartyTwoOpen(prev => !prev);
  };
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Party details:</Text>
        <View style={styles.partyDetails}>
            <Text style={styles.text_4}>Party 1:</Text>
            <View style={styles.horizontalLine} />
            <TouchableOpacity onPress={togglePartyOne}>
              <View style={styles.chevron}>
                {isPartyOneOpen ? (
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={40}
                    color={'#000'}
                  />
                ) : (
                  <MaterialIcons
                    name={'keyboard-arrow-up'}
                    size={40}
                    color={'#000'}
                  />
                )}
              </View>
            </TouchableOpacity>
        </View>
        <View style={isPartyOneOpen ? {paddingHorizontal:11} : styles.hide}>
              <Text style={styles.text_2}>Full Name of the Party:</Text>
              <TextInput
              style={styles.input_um}
              value={input_1}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_1(value)}
              />
              <Text style={{fontSize:12,fontWeight:"300",color:"#585858",lineHeight:14,position:"relative",right:-220,marginTop:6,marginBottom:20}}>*Include Middle Name</Text>
              <Text style={styles.text_2}>Address of the the party entering into the agreement:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_2}
              placeholder="  Address Line 1"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_2(value)}
              />
              <TextInput
              style={styles.input_vm}
              value={input_3}
              placeholder="  Address Line 2"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_3(value)}
              />
              <TextInput
              style={styles.input_vm}
              value={input_4}
              placeholder="  Address Line 3"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_4(value)}
              />
              <Text style={styles.text_2}>PIN Code:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_5}
              placeholder="  Eg. 202002"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_5(value)}
              />
              <Text style={styles.text_2}>City:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_6}
              placeholder="  Eg. Mumbai"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_6(value)}
              />
              <Text style={styles.text_2}>State:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_7}
              placeholder="  Eg. Maharashtra"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_7(value)}
              />
              <Text style={styles.text_2}>Country:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_8}
              placeholder="  Eg. India"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_8(value)}
              />
        </View>
        <View style={styles.partyDetails}>
            <Text style={styles.text_4}>Party 2:</Text>
            <View style={styles.horizontalLine} />
            <TouchableOpacity onPress={togglePartyTwo}>
              <View style={styles.chevron}>
                {isPartyTwoOpen ? (
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={40}
                    color={'#000'}
                  />
                ) : (
                  <MaterialIcons
                    name={'keyboard-arrow-up'}
                    size={40}
                    color={'#000'}
                  />
                )}
              </View>
            </TouchableOpacity>
        </View>
        <View style={isPartyTwoOpen ? {paddingHorizontal:11} : styles.hide}>
              <Text style={styles.text_2}>Full Name of the Party:</Text>
              <TextInput
              style={styles.input_um}
              value={input_9}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_9(value)}
              />
              <Text style={{fontSize:12,fontWeight:"300",color:"#585858",lineHeight:14,position:"relative",right:-220,marginTop:6,marginBottom:20}}>*Include Middle Name</Text>
              <Text style={styles.text_2}>Address of the the party entering into the agreement:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_10}
              placeholder="  Address Line 1"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_10(value)}
              />
              <TextInput
              style={styles.input_vm}
              value={input_11}
              placeholder="  Address Line 2"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_11(value)}
              />
              <TextInput
              style={styles.input_vm}
              value={input_12}
              placeholder="  Address Line 3"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_12(value)}
              />
              <Text style={styles.text_2}>PIN Code:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_13}
              placeholder="  Eg. 202002"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_13(value)}
              />
              <Text style={styles.text_2}>City:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_14}
              placeholder="  Eg. Mumbai"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_14(value)}
              />
              <Text style={styles.text_2}>State:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_15}
              placeholder="  Eg. Maharashtra"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_15(value)}
              />
              <Text style={styles.text_2}>Country:</Text>
              <TextInput
              style={styles.input_vm}
              value={input_16}
              placeholder="  Eg. India"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_16(value)}
              />
        </View>
      </ScrollView>
    
    </>
      
  )
}

export default Policy1