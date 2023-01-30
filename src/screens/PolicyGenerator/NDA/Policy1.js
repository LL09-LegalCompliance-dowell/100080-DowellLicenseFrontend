import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown'
const Policy1 = ({list}) => {
  const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
  const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);
  
  const togglePartyOne = e => {
    setIsPartyOneOpen(prev => !prev);
  };

  const togglePartyTwo = e => {
    setIsPartyTwoOpen(prev => !prev);
  };
  const cities=["Mumbai","Kolkata","Banglore","Delhi"]
  const states=["Maharashtra","Karnataka","Goa","Gujarat"]
  const countries=["India","Australia","United States of America","Germany"]
  const find_data=(cvalue,data)=>{
    for (let index = 0; index < data.length; index++) {
      if(data[index]===cvalue){
        return index 
      }
    }
  }
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[32]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
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
              value={list[0]}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[1](value)}
              />
              <Text style={{fontSize:12,fontWeight:"300",color:"#585858",lineHeight:14,position:"relative",right:-220,marginTop:6,marginBottom:20}}>*Include Middle Name</Text>
              <Text style={styles.text_2}>Address of the the party entering into the agreement:</Text>
              <TextInput
              style={styles.input_vm}
              value={list[2]}
              placeholder="  Address Line 1"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[3](value)}
              />
              <TextInput
              style={styles.input_vm}
              value={list[4]}
              placeholder="  Address Line 2"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[5](value)}
              />
              <TextInput
              style={styles.input_vm}
              value={list[6]}
              placeholder="  Address Line 3"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[7](value)}
              />
              <Text style={styles.text_2}>PIN Code:</Text>
              <TextInput
              style={styles.input_vm}
              value={list[8]}
              placeholder="  Eg. 202002"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[9](value)}
              />
              <Text style={styles.text_2}>City:</Text>
              {/* <TextInput
              style={styles.input_vm}
              value={input_6}
              placeholder="  Eg. Mumbai"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_6(value)}
              /> */}
              <SelectDropdown
              data={cities}
              onSelect={(selectedItem, index) => {
                list[11](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={find_data(list[10],cities)}
            />
              <Text style={styles.text_2}>State:</Text>
              {/* <TextInput
              style={styles.input_vm}
              value={input_7}
              placeholder="  Eg. Maharashtra"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_7(value)}
              /> */}
              <SelectDropdown
              data={states}
              onSelect={(selectedItem, index) => {
                list[13](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={find_data(list[12],states)}
            />
              
              <Text style={styles.text_2}>Country:</Text>
              {/* <TextInput
              style={styles.input_vm}
              value={input_8}
              placeholder="  Eg. India"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_8(value)}
              /> */}
              <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                list[15](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={find_data(list[14],countries)}
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
              value={ list[16]}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"            
              onChangeText={(value)=> list[17](value)}
              />
              <Text style={{fontSize:12,fontWeight:"300",color:"#585858",lineHeight:14,position:"relative",right:-220,marginTop:6,marginBottom:20}}>*Include Middle Name</Text>
              <Text style={styles.text_2}>Address of the the party entering into the agreement:</Text>
              <TextInput
              style={styles.input_vm}
              value={ list[18]}
              placeholder="  Address Line 1"
              placeholderTextColor="gray"            
              onChangeText={(value)=> list[19](value)}
              />
              <TextInput
              style={styles.input_vm}
              value={ list[20]}
              placeholder="  Address Line 2"
              placeholderTextColor="gray"            
              onChangeText={(value)=> list[21](value)}
              />
              <TextInput
              style={styles.input_vm}
              value={ list[22]}
              placeholder="  Address Line 3"
              placeholderTextColor="gray"            
              onChangeText={(value)=> list[23](value)}
              />
              <Text style={styles.text_2}>PIN Code:</Text>
              <TextInput
              style={styles.input_vm}
              value={ list[24]}
              placeholder="  Eg. 202002"
              placeholderTextColor="gray"            
              onChangeText={(value)=> list[25](value)}
              />
              <Text style={styles.text_2}>City:</Text>
              <SelectDropdown
              data={cities}
              onSelect={(selectedItem, index) => {
                list[27](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={find_data(list[26],cities)}
            />
              <Text style={styles.text_2}>State:</Text>
              <SelectDropdown
              data={states}
              onSelect={(selectedItem, index) => {
                list[29](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={find_data(list[28],states)}
            />
              <Text style={styles.text_2}>Country:</Text>
              <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                list[31](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={find_data(list[30],countries)}
            />
        </View>
      </ScrollView>
    
    </>
      
  )
}

export default Policy1