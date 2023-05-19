import {
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,TextInput
    
  } from 'react-native';
  import React,{useEffect,useState} from 'react';
  import IoniMaterialCommunityIconscons from 'react-native-vector-icons/AntDesign';
  import AppLoader from '../../components/AppLoader';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import make_room_api from './HelpApi';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Message from './Message';
  import LanguageSelect from './LanguageSelect';
  import Queryselect from './Queryselect';

const Help = ({showHelp,helpHanlderClose}) => {
  const [loading, setLoading] = useState(false);
  const [language,setlangauge]=useState("")
  const language_handler=(language)=>{
    setlangauge(language)
  }
  const [query,setquery]=useState("")
  const query_handler=(language)=>{
    setquery(language)
  }

  const make_room = async() => {
    
    try{
      setLoading(true);
      const session_id = await AsyncStorage.getItem("session_id");
      
    
      const result = await make_room_api(session_id);
      
      console.log(session_id)
      console.log(result)
    
       setLoading(false);
      
    }catch(error){
      setLoading(false);
      alert('Something went wrong, please try again later');
    }
  }
  

  useEffect(() => {
    // make_room()
    
  }, [])
  return (
   <Modal visible={showHelp} animationType ="slide" transparent={true} onRequestClose={helpHanlderClose}>
        {loading ? <AppLoader /> : null}
        <View style={styles.modal}>
            <View style={{display :"flex",flexDirection:"row",alignItems:"center",padding:18}}>
                <Text style={{fontSize:20 ,fontFamily:"Roboto",fontWeight:"500" ,color:"#FFFFFF",marginLeft:"38%"}}>HELPBOT</Text>
                <TouchableOpacity onPress={helpHanlderClose}>
                    <Text style={{fontSize:25 ,fontFamily:"Roboto",fontWeight:"500" ,color:"#FFFFFF",marginLeft:"55%"}}>x</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"white",height:"100%",borderTopLeftRadius: 30,borderTopRightRadius:30,paddingVertical:20,paddingHorizontal:5}}>
              <View style={{display:"flex",flexDirection:"row"}}>
                <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                <View>
                  <Message Message="Hi, we're here to help you." customer_app ="app"/>
                  <Message Message="please select your preferred language." customer_app ="app"/>
                </View>
              </View>
              {language==="" && <LanguageSelect language_handler={language_handler}/>}
              {language!=="" && <Message Message={language} customer_app ="customer" top={120}/>}
              {(language!=="" ) &&  (
              <View style={{display:"flex",flexDirection:"row",marginTop:50}}>
                <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                <View>
                  <Message Message="Select your query." customer_app ="app"/>
                </View>
              </View>
              )}
              {(query ==="" && language!=="") && <Queryselect query_handler={query_handler}/>}
              {query!=="" && <Message Message={query} customer_app ="customer" top={220}/>}


                
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