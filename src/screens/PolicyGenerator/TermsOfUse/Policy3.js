import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import { SelectList } from 'react-native-dropdown-select-list'

const Policy3 = () => {
  const [input1, setInput1] = useState("");
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Other Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
          <Text style={styles.text_3}>Clause 8.7</Text>
          <Text style={styles.text_2}>Enter your Email ID for Requesting Access/Correction of Personal Information:</Text>
          <TextInput
              style={styles.input_vm}
              value={input1}
              placeholder="  johndoe@gmail.com"
              placeholderTextColor="gray" 
              onChangeText={(value)=>setInput1(value)}
          />
        </View>

      </ScrollView>
    
    </>
  )
}

export default Policy3