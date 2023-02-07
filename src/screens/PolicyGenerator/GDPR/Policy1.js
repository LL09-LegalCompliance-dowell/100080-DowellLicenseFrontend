import React from 'react'
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';
import SelectDropdown from 'react-native-select-dropdown'
const Policy1 = ({list}) => {
  const Countries = [
    'India',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Australia',
    
]
const findcountries=(cvalue)=>{
  for (let index = 0; index < Countries.length; index++) {
    if(Countries[index]===cvalue){
      return index 
    }
  }
}
const Jurisdictional  = [
  'Jurisdiction option 1',
  'Jurisdiction option 2',
  'Jurisdiction option 3',
  'Jurisdiction option 4',
  'Jurisdiction option 5',
  
]
const findJurisdictional=(cvalue)=>{
for (let index = 0; index < Jurisdictional.length; index++) {
  if(Jurisdictional[index]===cvalue){
    return index 
  }
}
}
  return (
   <>
   <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={list[list.length-1]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
      <Text style={styles.text_1}>Location Details:</Text>
      <View style={{paddingHorizontal: 11, paddingTop: 16}}>
        <Text style={styles.text_2}>Where are you located?</Text>
        <SelectDropdown
              data={Countries}
              onSelect={(selectedItem, index) => {
                list[1](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={findcountries(list[0])}
        />
        <Text style={styles.text_3_big_m_b}>Your privacy policy will be adapted for the location you select.</Text>
        <Text style={styles.text_2}>Jurisdictional laws</Text>
        <SelectDropdown
              data={Jurisdictional}
              onSelect={(selectedItem, index) => {
                list[3](selectedItem)
              }}
              buttonStyle={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51,width:"100%"}}
              buttonTextStyle={{color:"#585858",fontSize:16,fontWeight:"300"}}
              dropdownStyle={{borderRadius: 15}}
              defaultValueByIndex={findJurisdictional(list[2])}
        />
      </View>
    
   </ScrollView></>
  )
}

export default Policy1