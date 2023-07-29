import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'


const Queryselect = ({handler,items,style}) => {
  return (
    <View style={style?style:styles.container}>
      {items.map((item, index)=>{
        return (
          <TouchableOpacity key={index} onPress={()=>handler(item)}><Text style={styles.Text}>{item}</Text></TouchableOpacity>
        )
      } )}
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
        
        maxWidth:"85%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:22,
        display: "flex",
        flexDirection:"column",
 
    },
    Text:{
        fontSize:16,
        textAlign:"center",
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

