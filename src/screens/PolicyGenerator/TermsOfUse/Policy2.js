import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import { SelectList } from 'react-native-dropdown-select-list'

const Policy2 = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const cuurency = [
    {key:'1', value:'EUR'},
    {key:'2', value:'GBP'},
    {key:'3', value:'CAD'},
    {key:'4', value:'JPY'},
    {key:'5', value:'CHF'},
    {key:'6', value:'JPY'}
]
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.text_1}>Other Details:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_3}>Clause 7.2</Text>
        <Text style={styles.text_2_m_b}>Liability Limit</Text>
        <Text style={styles.text_2}>Type your Amount & Choose Currency:</Text>
        <View style={{display:"flex",flexDirection:"row"}}>
          <TextInput
              style={styles.input_vm_w}
              value={input1}
              placeholder="  Enter Amount"
              placeholderTextColor="gray" 
              onChangeText={(value)=>setInput1(value)}
          />
          <SelectList 
            defaultOption={cuurency[0]}
            setSelected={(val) => setInput2(val)} 
            data={cuurency} 
            save="value"
            inputStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            dropdownTextStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            searchPlaceholder=""
            search={false}
            boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
            />
        </View>
        <Text style={styles.text_3}>Clause 7.3</Text>
        <Text style={styles.text_2_m_b}>Liability Must Not Exceed</Text>
        <Text style={styles.text_2}>Type your Amount & Choose Currency:</Text>
        <View style={{display:"flex",flexDirection:"row"}}>
          <TextInput
              style={styles.input_vm_w}
              value={input3}
              placeholder="  Enter Amount"
              placeholderTextColor="gray" 
              onChangeText={(value)=>setInput3(value)}
          />
          <SelectList 
            defaultOption={cuurency[0]}
            setSelected={(val) => setInput4(val)} 
            data={cuurency} 
            save="value"
            inputStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
             dropdownTextStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            searchPlaceholder=""
            search={false}
            boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
            />
        </View>
      </View>

    </ScrollView>


    </>
  )
}

export default Policy2