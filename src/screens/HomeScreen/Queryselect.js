import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'


const Queryselect = ({query_handler}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>query_handler("Agreement Compliance")}><Text style={styles.Text}>Agreement Compliance</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>query_handler("License Compatibility")}><Text style={styles.Text}>License Compatibility</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>query_handler("Software License")}><Text style={styles.Text}>Software License</Text></TouchableOpacity>
    </View>
  )
}

export default Queryselect
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#078F04",
        borderRadius:40,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft:38,
        paddingRight: 38,
        width:271,
        height:170,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:32,
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"


          
      
      

       
    },
    Text:{
        fontSize:16,
        fontWeight: "400",
        lineHeight:18.75,
        color:"#078F04",
        backgroundColor:"white",
        borderRadius:40,
        paddingBottom:7,
        paddingStart:7,
        paddingLeft:11,
        paddingRight:11,
        paddingTop:7,
        marginBottom:10
      

    }
   
})

