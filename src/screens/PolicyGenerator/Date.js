import React from 'react'
import DatePicker from 'react-native-date-picker'
import {  View,Text, TouchableOpacity,} from 'react-native'
import styles from './Cookies/style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Date = ({date,setDate,open,openHandler,margin}) => {
  return (
    
    <View >
                
        <TouchableOpacity onPress={()=>openHandler(true)}>
            <Text style={margin?styles.input:styles.input_vm}>
                {date.toLocaleDateString()}
            </Text>
            <EvilIcons style={margin?styles.calendarPositionMargin:styles.calendarPosition} name={'calendar'} size={35} color="gray"/>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={(date) => {
                    openHandler(false)
                    setDate(date)
                }}
                onCancel={() => {
                    openHandler(false)
                }}
            />
        </TouchableOpacity>
    </View>
  )
}

export default Date