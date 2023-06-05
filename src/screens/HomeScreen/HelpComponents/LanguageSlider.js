import React,{useMemo,useState} from 'react'
import {

    Text,
    StyleSheet,
    View,
  } from 'react-native';
  import RadioGroup from 'react-native-radio-buttons-group';
import { log } from 'react-native-reanimated';
const LanguageSlider = () => {
    const [selectedId, setSelectedId] = useState()
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'English',
            value: 'English',
            borderColor:"#078F04",
            color:"#078F04",
            size:20,
            labelStyle:styles.label,
        
            containerStyle:styles.container
        },
        {
            id: '2',
            label: 'Deutsch',
            value: 'Deutsch', 
            borderColor:"#078F04",
            color:"#078F04",
            size:20,
            labelStyle:styles.label ,
            containerStyle:styles.container
        },{
            id: '3',
            label: '简体中文',
            value: '简体中文', 
            borderColor:"#078F04",
            color:"#078F04",
            size:20,
            labelStyle:styles.label,
            containerStyle:styles.container
        },{
            id: '4',
            label: 'Français',
            value: 'Français', 
            borderColor:"#078F04",
            color:"#078F04",
            size:20,
            labelStyle:styles.label,
            containerStyle:styles.container
            
        }
        ,{
            id: '5',
            label: ' Español',
            value: ' Español', 
            borderColor:"#078F04",
            color:"#078F04",
            size:20,
            labelStyle:styles.label,
            containerStyle:styles.container
        },{
            id: '6',
            label: ' हिन्दी',
            value: ' हिन्दी', 
            borderColor:"#078F04",
            color:"#078F04",
            size:20,
            labelStyle:styles.label,
            containerStyle:styles.container
        }
    ]), []);

    
   
  return (
    <View style={{display:"flex",flexDirection:"column",padding:0,alignItems:"center"}}>
        <Text style={{color:"black",fontSize:18,fontWeight:"400",textAlign:'center',lineHeight:21.09}}>Select the language that you'd like the helpbot to speak</Text>
        <View>
            <RadioGroup 
            radioButtons={radioButtons} 
            containerStyle={{display: 'flex',flexDirection:"row", flexWrap: 'wrap',justifyContent:'flex-start',marginVertical:10}}
            onPress={setSelectedId}
            selectedId={selectedId}
            />
        </View>
    </View>
  )
}

export default LanguageSlider
const styles = StyleSheet.create({
    label: {
      fontSize:22,
      fontWeight:"400",
      lineHeight:25.78,
      color:"black"
    },
    container:{
        borderWidth:0.5,
        borderColor:"#000000",
        borderStyle:"solid",
        paddingBottom:18,
        paddingTop:18,
        paddingLeft:24,
        paddingRight:24,
        borderRadius:40,
        width:166
    },
    container_selected:{
        borderWidth:0.5,
        borderColor:"#000000",
        backgroundColor: "#078f044f",
        borderStyle:"solid",
        paddingBottom:18,
        paddingTop:18,
        paddingLeft:24,
        paddingRight:24,
        borderRadius:40,
        width:166
    }
})
