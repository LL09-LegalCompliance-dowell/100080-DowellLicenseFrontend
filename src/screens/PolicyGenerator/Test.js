import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import {ModalDatePicker} from 'react-native-material-date-picker'; 
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Test = () => {
  return (
    <ScrollView>        
    <View style={{flex: 1, alignSelf: 'stretch'}}>
        <ModalDatePicker 
            button={<View>
                <EvilIcons name={"calendar"} size={25} />
                </View>} 
            onSelect={(date) => console.warn(date) }
            isHideOnSelect={true}
            initialDate={new Date()}
        />    

      </View> 
      <MaterialIcons name={"keyboard-arrow-down"} size={50} color={"#000"} />  
      <MaterialIcons name={"keyboard-arrow-up"} size={50} color={"#000"} />        
    </ScrollView>
  )
}

export default Test