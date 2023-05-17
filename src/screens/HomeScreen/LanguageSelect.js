import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'


const LanguageSelect = ({language_handler}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>language_handler("English")}><Text style={styles.Text}>English</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>language_handler("Deutsch")}><Text style={styles.Text}>Deutsch</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>language_handler("简体中文")}><Text style={styles.Text}>简体中文</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>language_handler("Français")}><Text style={styles.Text}>Français</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>language_handler("Español")}><Text style={styles.Text}>Español</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>language_handler("हिन्दी")}><Text style={styles.Text}>हिन्दी</Text></TouchableOpacity>
    </View>
  )
}

export default LanguageSelect
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
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        flexWrap:"wrap"

       
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

