import {
    Text,
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    TextInput,
    ScrollView
    
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
  const query_handler=(query)=>{
    setquery(query)
  }

  const [license_compatibility,set_license_compatibility]=useState("")
  const license_compatibility_handler=(question)=>{
    set_license_compatibility(question)
  }

  const [moreq,set_moreq]=useState("")
  const moreq_handler=(state)=>{
    set_moreq(state)
  }
  useEffect(()=>{
    if(moreq ==="Yes"){
      setquery("")
      set_license_compatibility("")
      set_moreq("")
    }
    else if (moreq ==="No"){
      helpHanlderClose()
      set_moreq("")
    }
  },[moreq])

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
            <View style={{backgroundColor:"white",flex:1,borderTopLeftRadius: 30,borderTopRightRadius:30,paddingVertical:20,paddingHorizontal:5}}>
              <View style={{height:"90%"}}>
                <ScrollView  >
                  <View style={{minHeight:500}}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                      <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                      <View>
                        <Message Message="Hi, we're here to help you." customer_app ="app"/>
                        <Message Message="please select your preferred language." customer_app ="app"/>
                      </View>
                    </View>
                    {language==="" && <LanguageSelect language_handler={language_handler}/>}
                    {language!=="" && <View style={{alignSelf:'flex-end'}}><Message Message={language} customer_app ="customer" /></View>}
                    {(language!=="" ) &&  (
                    <View style={{display:"flex",flexDirection:"row"}}>
                      <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                      <View>
                        <Message Message="Select your query." customer_app ="app"/>
                      </View>
                    </View>
                    )}
                    {(query ==="" && language!=="") && <Queryselect handler={query_handler} items={["Agreement Compliance","License Compatibility","Software License"]}/>}
                    {query!=="" && <View style={{alignSelf:'flex-end'}}><Message Message={query} customer_app ="customer" /></View>}
                    {query === "License Compatibility" && (
                    <>
                      <View style={{display:"flex",flexDirection:"row"}}>
                        <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                        <Message Message="identify your query from these options." customer_app ="app"/>
                      
                      </View>
                      
                      {license_compatibility==="" &&<Queryselect handler={license_compatibility_handler} items={["What is License Compatibility?","How to check the compatibility of two licenses?","What is recommendation percentage?","How much accurate is recommendation percentage?","Do I need to pay to check license compatibility?","Can I compare any two licenses?","Would I be able to know why licenses are compatible or not?","Can I use this Legalzard for my organization or company?"]}/>}
                      {license_compatibility!=="" &&<View style={{alignSelf:'flex-end'}}><Message Message={license_compatibility} customer_app ="customer" top={license_compatibility.length} /></View>}
                      {license_compatibility==="What is License Compatibility?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="License Compatibility is a compatibility test between two licenses." customer_app ="app"/>
                            <Message Message="It gives you a test result where it shows whether you can use those two compared licenses in your application." customer_app ="app"/>
                          </View>
                        </View>
                      )}

                      {license_compatibility==="How to check the compatibility of two licenses?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="You can find a tutorial on how to check compatibility on the compatibility test page" customer_app ="app"/>
                            <Message Message="We have described it in step by step manner" customer_app ="app"/>
                          </View>
                        </View>
                      )}

                      {license_compatibility==="What is recommendation percentage?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="Recommendation percentage is a approximate number of how much compatible are those licenses" customer_app ="app"/>
                            <Message Message="Also it checks whether you can use them in your application" customer_app ="app"/>
                          </View>
                        </View>
                      )}

                      {license_compatibility==="How much accurate is recommendation percentage?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="Recommendation percentage is calculated by using different parameters i.e. versions, limitations, permissions, conditions, warranty disclaimers, etc." customer_app ="app"/>
                            <Message Message="So considering these factors recommendation percentage is pretty accurate" customer_app ="app"/>
                          </View>
                        </View>
                      )}

                      {license_compatibility==="Do I need to pay to check license compatibility?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="No, license compatibility is totally free to use. You do not need to pay anything" customer_app ="app"/>
                          </View>
                        </View>
                      )}

                      {license_compatibility==="Would I be able to know why licenses are compatible or not?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="Full in depth comparison is provided after the results from the check are displayed" customer_app ="app"/>
                            <Message Message="Click on “read more” below the result to find out" customer_app ="app"/>
                          </View>
                        </View>
                      )}

                      {license_compatibility==="Can I use this Legalzard for my organization or company?" && (
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <View>
                            <Message Message="Yes. You can set up a personal account or an account for your organization" customer_app ="app"/>
                          </View>
                        </View>
                      )}


                      {license_compatibility!=="" && (
                        <>
                        <View style={{display:"flex",flexDirection:"row"}}>
                          <MaterialCommunityIcons name="android" size={25} backgroundColor="#078F04" color="#078F04" />
                          <Message Message="DO you need more questions? " customer_app ="app"/>
                        </View>
                        <Queryselect handler={moreq_handler} items={["Yes", "No"]}/>
                        </>)}
                    </>
                    )}
                  </View>
                </ScrollView>  
              </View>
              <View style={{display :"flex",flexDirection:"row",alignItems:"center",width:"100%",paddingVertical:12}}>
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
        marginVertical:0,
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