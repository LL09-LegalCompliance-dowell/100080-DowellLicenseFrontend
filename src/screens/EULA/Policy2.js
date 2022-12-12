import React, { Fragment } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import colors from '../../../assets/colors/colors'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'
import SearchableDropdown from 'react-native-searchable-dropdown';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import { SafeAreaView } from 'react-native-safe-area-context'
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
    <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400"}}>Company Details::</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
      <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Nature of the company :</Text>
      <View >
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(data)=>setRadioButtons(data)}
            containerStyle={styles.radio_hm}
          />
      </View>
      <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Software Product License Name:</Text>
      <TextInput
            style={styles.input_vm}
            value={input1}
            onChangeText={(value)=>setInput1(value)}
      /> 
      <Text style={{color: "#585858",fontStyle:"italic",fontSize:18,fontWeight:"300",marginBottom:12,marginTop:8}}>Remedies Under Limitation Of Liability</Text> 
      <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Which state laws will apply for this EULA?</Text>
      <TextInput
            style={styles.input_vm}
            value={input2}
            placeholder="  Enter Amount(₹)"
            placeholderTextColor="gray"
            onChangeText={(value)=>setInput2(value)}
      />
      <Text style={{color: "#585858",fontStyle:"italic",fontSize:18,fontWeight:"300",marginBottom:12,marginTop:8}}>Applicable Law</Text>
      <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Which state laws will apply for this EULA?</Text>
      <SelectList 
      setSelected={(val) => setInput3(val)} 
      data={states} 
      save="value"
      placeholder="Select State"
      boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300"}}
      />
      <Text style={{color: "#585858",fontStyle:"italic",fontSize:18,fontWeight:"300",marginBottom:12,marginTop:8}}>Conflict</Text>
      <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>What will be the Jurisdiction State?</Text>
      <SelectList 
      setSelected={(val) => setInput4(val)} 
      data={states} 
      save="value"
      placeholder="Select State"
      boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300"}}
      />
      <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>What will be the Jurisdiction city?</Text>
      <SelectList 
      setSelected={(val) => setInput5(val)} 
      data={cities} 
      save="value"
      placeholder="Select City"
      boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300"}}
      />
    </View>
   </ScrollView> 


</>)
  
}

export default Policy2