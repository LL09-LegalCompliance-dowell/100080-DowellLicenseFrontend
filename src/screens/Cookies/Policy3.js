import React from 'react'
import styles from './style'
import colors from '../../../assets/colors/colors'
import { ScrollView ,View,Text,TextInput,} from 'react-native'
import { useState } from 'react'

const Policy3 = () => {
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [input_3, setInput_3] = useState("");
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400", marginTop: 20}}>
          Other Details:
          </Text>
          <View style={{paddingHorizontal:11,paddingTop:16}}>
            <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Details about information the third party cookies will be collecting from users of the website.</Text>
            <TextInput
            style={styles.input_vm}
            value={input_1}
            placeholder="Enter here"
            placeholderTextColor="gray"            
            onChangeText={(value)=>setInput_1(value)}
            /> 
            <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>State the name of the third party cookies or similar technology that is used on the website, together with the name of its owner. (purposes).</Text>
            <TextInput
            style={styles.input_vm}
            value={input_2}
            onChangeText={(value)=>setInput_2(value)}
            placeholder="Name"
            placeholderTextColor="gray"  
            /> 

            <TextInput
            style={styles.input_vm}
            value={input_3}
            onChangeText={(value)=>setInput_3(value)}
            placeholder="Owner’s Name"
            placeholderTextColor="gray"  
            /> 
          </View>
    </ScrollView>
  )
}

export default Policy3