import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Policy1 = () => {
const [date, setDate] = useState(new Date());
const [input_1, setInput_1] = useState("");
const [input_2, setInput_2] = useState("");
const [input_3, setInput_3] = useState("");
const [input_4, setInput_4] = useState("");
const [input_5, setInput_5] = useState("");
return (
<>
<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
    <Text style={styles.text_1}>Date:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
        <View >
                <Text style={styles.text_2}>
                Policy Last updated:
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
    </View>
    <Text style={styles.text_1}>Company information:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_2}>Company Name:</Text>
        <TextInput
              style={styles.input_vm}
              value={input_1}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_1(value)}
              />
    </View>
    <Text style={styles.text_1}>Details:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={styles.text_2}>Website/App Name:</Text>
        <TextInput
              style={styles.input_vm}
              value={input_2}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_2(value)}
        />
        <Text style={styles.text_2}>Jurisdiction:</Text>
        <TextInput
              style={styles.input_vm}
              value={input_3}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_3(value)}
        />
        <Text style={styles.text_2}>Website URL:</Text>
        <TextInput
              style={styles.input_vm}
              value={input_4}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_4(value)}
        />
        <Text style={styles.text_2}>Website Contact Email:</Text>
        <TextInput
              style={styles.input_vm}
              value={input_5}
              placeholder="  johndoe@gmail.com"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_5(value)}
        />
    </View>
</ScrollView>
</>
)
}

export default Policy1