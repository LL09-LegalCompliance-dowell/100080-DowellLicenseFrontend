import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Policy1 = ({list}) => {
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[4]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please enter name of the app  </Text>
        <Text style={styles.text_1}>Date:</Text>
        <View style={{paddingHorizontal:11,paddingTop:16}}>
            <View >
                <Text style={styles.text_2}>
                Privacy Policy Last updated:
                </Text>
                <TextInput
                    style={styles.input_vm}
                    value={list[0].toLocaleDateString()}
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
                    onSelect={value => list[1](value)}
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
              value={list[2]}
              placeholder="  Enter here"
              placeholderTextColor="gray"            
              onChangeText={(value)=>list[3](value)}
              />
        </View>



    </ScrollView>
    </>
  )
}

export default Policy1