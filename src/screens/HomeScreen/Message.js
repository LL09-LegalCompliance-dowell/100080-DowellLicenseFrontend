import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,TextInput
    
  } from 'react-native';
  

const Message = ({Message,customer_app}) => {
  return (
    <View style={customer_app==="app"? styles.message_app : styles.message_customer}>
        <Text style={customer_app === "app" ?styles.text_app : styles.text_customer}>
            {Message}
        </Text>
    
    </View>
  )
}

export default Message
const styles = StyleSheet.create({
    message_app:{
        backgroundColor:"#078F04",
        alignSelf:"flex-start",
        paddingTop:10,
        paddingRight:24,
        paddingBottom:10,
        paddingLeft:24,
        marginHorizontal:10,
        marginVertical:5,
        borderTopRightRadius:125,
        borderBottomRightRadius:125,
        borderBottomLeftRadius:200,
        
    },
    text_app:{
       fontSize:16,
       fontWeight:"400",
       lineHeight:19,
       color:"#ffffff"
    },
    message_customer:{
      backgroundColor:"white",
        alignSelf:"flex-start",
        borderStyle:"solid",
        borderWidth:0.5,
        borderColor:"#078F04",
        paddingTop:10,
        paddingRight:24,
        paddingBottom:10,
        paddingLeft:24,
      
        marginVertical:5,
        borderTopRightRadius:200,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:125,
        borderTopLeftRadius:125,
        position:"relative",
        left:"68%"

    },
    text_customer:{
      fontSize:16,
       fontWeight:"400",
       lineHeight:19,
       color:"#078F04"
    }
})
