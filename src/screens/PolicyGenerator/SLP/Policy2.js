import React, { Fragment } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'


import RadioGroup from 'react-native-radio-buttons-group';

import { SelectList } from 'react-native-dropdown-select-list'

const Policy2 = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");

const cities = [
    {key:'1', value:'Mumbai'},
    {key:'2', value:'Kolkata'},
    {key:'3', value:'Banglore'},
    {key:'4', value:'Delhi'}
]
const states = [
  {key:'1', value:'Maharashtra'},
  {key:'2', value:'Karnataka'},
  {key:'3', value:'Goa'},
  {key:'4', value:'Gujarat'}
]
  
const [radioButtons, setRadioButtons] = useState([{
    id: '1',
    label: 'Individual',
    value: 'Individual',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected: true
  },{
  id: '2',
  label: 'Entity',
  value: 'Entity',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
}]);
return (  
<>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
    <Text style={styles.text_1}>Company Details:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
      <Text style={styles.text_2}>Nature of the company :</Text>
      <View >
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(data)=>setRadioButtons(data)}
            containerStyle={styles.radio_hm}
          />
      </View>
      <Text style={styles.text_2}>Software Product License Name:</Text>
      <TextInput
            style={styles.input_vm}
            value={input1}
            onChangeText={(value)=>setInput1(value)}
      /> 
      <Text style={styles.text_3}>Remedies Under Limitation Of Liability</Text> 
      <Text style={styles.text_2}>Which state laws will apply for this EULA?</Text>
      <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="  Enter Amount(₹)"
            placeholderTextColor="gray"
            onChangeText={(value)=>setInput2(value)}
      />
      <Text style={styles.text_3}>Applicable Law</Text>
      <Text style={styles.text_2}>Which state laws will apply for this EULA?</Text>
      <SelectList 
      setSelected={(val) => setInput3(val)} 
      data={states} 
      save="value"
      placeholder="Select State"
      boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
      />
      <Text style={styles.text_3}>Conflict</Text>
      <Text style={styles.text_2}>What will be the Jurisdiction State?</Text>
      <SelectList 
      setSelected={(val) => setInput4(val)} 
      data={states} 
      save="value"
      placeholder="Select State"
      boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
      />
      <Text style={styles.text_2}>What will be the Jurisdiction city?</Text>
      <SelectList 
      setSelected={(val) => setInput5(val)} 
      data={cities} 
      save="value"
      placeholder="Select City"
      boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
      />
    </View>
   </ScrollView> 


</>)
  
}

export default Policy2