import {
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,TextInput
    
  } from 'react-native';
  import React from 'react';
  import IoniMaterialCommunityIconscons from 'react-native-vector-icons/AntDesign';

const Help = ({showHelp,helpHanlderClose}) => {
  return (
   <Modal visible={showHelp} animationType ="slide" transparent={true} onRequestClose={helpHanlderClose}>
        <View style={styles.modal}>
            <View style={{display :"flex",flexDirection:"row",alignItems:"center",padding:18}}>
                <Text style={{fontSize:20 ,fontFamily:"Roboto",fontWeight:"500" ,color:"#FFFFFF",marginLeft:"38%"}}>HELPBOT</Text>
                <TouchableOpacity onPress={helpHanlderClose}>
                    <Text style={{fontSize:25 ,fontFamily:"Roboto",fontWeight:"500" ,color:"#FFFFFF",marginLeft:"55%"}}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"white",height:"100%",borderTopLeftRadius: 30,borderTopRightRadius:30}}>
                <Text style={{color:"red",margin:20,fontSize:20}}>WAITING FOR API</Text>
                <View style={{display :"flex",flexDirection:"row",alignItems:"center",position:"absolute",bottom:70}}>
                    <TextInput
                        style={styles.input}
                    
                        placeholder="  Type your message here..."
                        placeholderTextColor="gray"            
                        
                    />
                    <TouchableOpacity>
                        <IoniMaterialCommunityIconscons name="caretright" size={25} color="#078F04" />
                    </TouchableOpacity>

                </View>
                


            </View>
            
                    
        </View> 
   </Modal>
    
  )
}

export default Help
const styles = StyleSheet.create({
      modal: {
        backgroundColor: '#078F04',
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"100%",
        padding: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30
      },
      input: {
        height: 51,
        width:"87%",
        marginLeft: 15,
        marginVertical:20,
        marginRight:4,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#C4C4C4',
        padding: 10,
        backgroundColor: '#D8D8D8',
        fontSize:16,
        color:"#585858",
        
        
      },

})