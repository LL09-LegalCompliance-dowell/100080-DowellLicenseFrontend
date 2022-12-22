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
    const [input_2, setInput_2] = useState("");
    const [input_3, setInput_3] = useState("");
    const [input_4, setInput_4] = useState("");
    const [input_5, setInput_5] = useState("");
    const [input_6, setInput_6] = useState("");
    const [radioButtons, setRadioButtons] = useState([{
        id: '1',
        label: 'Days',
        value: 'Days',
        size: 12,
        color: '#489503',
        labelStyle:{color:"#585858"},
        borderColor: '#C4C4C4',   
      },{
      id: '2',
      label: 'Months',
      value: 'Months',
      size: 12,
      color: '#489503',
      borderColor: '#C4C4C4',
      containerStyle:{marginLeft:5}  ,
      labelStyle:{color:"#585858"},
      selected: true,
      }]);
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={styles.text_1}>Details:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
            <View >
                <Text style={styles.text_2}>
                Date:
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
            <Text style={styles.text_2}>Website/App Name:</Text>
            <TextInput
              style={styles.input_vm}
              value={input_1}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_1(value)}
              />
            <Text style={styles.text_2}>Company Information:</Text>
            <TextInput
              style={styles.input_vm}
              value={input_2}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_2(value)}
              />
            <Text style={styles.text_2}>Website URL:</Text>
            <TextInput
              style={styles.input_vm}
              value={input_3}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_3(value)}
              />
            <Text style={styles.text_2}>Cancellation rights  of Order within days(in number):</Text>
            <TextInput
              style={styles.input_vm}
              value={input_4}
              placeholder="  Enter number"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_4(value)}
              maxLength={15}
              />
            <View style ={{position:"absolute",top:465,left:155}} >
            <RadioGroup
              radioButtons={radioButtons}
              onPress={(data)=>setRadioButtons(data)}
              layout='row'
            />
            </View>
            <Text style={styles.text_2}>Reimbursement of cancellation Money:</Text>
            <TextInput
              style={styles.input_vm}
              value={input_5}
              placeholder="  Enter Amount(₹)"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_5(value)}
              />
            <Text style={styles.text_2}>Website Contact Email:</Text>
            <TextInput
              style={styles.input_vm}
              value={input_6}
              placeholder="  johndoe@gmail.com"
              placeholderTextColor="gray"            
              onChangeText={(value)=>setInput_6(value)}
              />  
        </View>
    </ScrollView>
    </>
  )
}

export default Policy1