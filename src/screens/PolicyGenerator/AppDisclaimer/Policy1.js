import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../assets/colors/colors';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
const Policy1 = () => {
    const [date, setDate] = useState(new Date());
    const [input_1, setInput_1] = useState("");
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Date:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
            <View >
                <Text style={styles.text_2}>
                Privacy Policy Last updated:
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
        <Text style={styles.text_1}>Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
            <Text style={styles.text_2}>Name of the App:</Text>
            <TextInput
              style={styles.input_vm}
              value={input_1}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_1(value)}
              />
        </View>



    </ScrollView>
    </>
  )
}

export default Policy1