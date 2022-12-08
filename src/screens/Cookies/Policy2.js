import React from 'react'
import styles from './style'
import colors from '../../../assets/colors/colors'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import { useState } from 'react'

const Policy2 = () => {
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [input_3, setInput_3] = useState("");
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400", marginTop: 20}}>
          Other Details:
          </Text>
          <View style={{paddingHorizontal:11,paddingTop:16}}>
            <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>List the types of personal information which may be obtained and stored and why?</Text>
            <TextInput
            style={styles.input_um}
            value={input_1}
            onChangeText={(value)=>setInput_1(value)}
            /> 
            <Text style={styles.textoptional}>*Optional</Text>
            <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>List the name and location of all privacy documents which the website holds for example the privacy policy and privacy notice.</Text>
            <TextInput
            style={styles.input_um}
            value={input_2}
            onChangeText={(value)=>setInput_2(value)}
            /> 
            <Text style={styles.textoptional}>*Optional</Text>
            <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Provide the situations where cookies may be collected without the consent of website users.</Text>
            <TextInput
            style={styles.input_vm}
            value={input_3}
            onChangeText={(value)=>setInput_3(value)}
            /> 
          </View>
    </ScrollView>
  )
}

export default Policy2