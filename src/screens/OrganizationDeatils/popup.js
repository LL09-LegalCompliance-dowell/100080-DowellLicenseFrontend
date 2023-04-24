import React from 'react'
import { View, Text, TouchableOpacity, Modal,StyleSheet,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const popup = ({modalVisible,setModalVisible,policy_name,data,setSelectedItem}) => {
  const navigation = useNavigation();
  return (
    <Modal 
    visible={modalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => {
      setModalVisible(false)
      setSelectedItem(null)
    }}
    >{policy_name !==null && (
    <View style={styles.modalContainer}>
      <View style={styles.modal}> 
        <Text style={styles.text_1}> {policy_name}</Text>
        <View style={styles.separator}></View>
           <View style={{height:"75%"}}>
           <ScrollView>
            {
              data.map((item,index)=>(
                <View key={index}>
                  <TouchableOpacity style={{display:"flex",flexDirection:'row',justifyContent:'space-between', paddingVertical:22, paddingHorizontal:10}}  
                  onPress={async () => {
                    try {
                      setSelectedItem(null)
                      setModalVisible(false)
                      navigation.navigate('PolicyWebView', {url: item.agreement.html_doc_url});
                  
                    } catch (error) {
                      console.error(error);
                    }
                  }}>
                  {item.agreement.website_or_app_name ===""?<Text style={{fontSize:18 ,lineHeight:21.09 ,fontWeight:"400",fontFamily: 'roboto',color:"red"}}>No App Name</Text>:<Text style={{fontSize:18 ,lineHeight:21.09 ,fontWeight:"400",fontFamily: 'roboto',color:"black"}}>{item.agreement.website_or_app_name}</Text>}
                    <View>
                      <Text style={{fontSize:12 ,lineHeight:22  ,fontWeight:"300",fontFamily: 'roboto',color:"#585858"}}>Date generated:</Text>      
                      <Text style={{fontSize:12 ,lineHeight:22  ,fontWeight:"300",fontFamily: 'roboto',color:"#585858"}}>{item.agreement.policy_created_datetime?item.agreement.policy_created_datetime.slice(0,10):""}</Text>    
                    </View>
                      
                  </TouchableOpacity>
                  <View style={styles.separator}></View>
                </View>
              ))
            }
              
            </ScrollView>
            
           </View>
        <TouchableOpacity style={{ position: 'absolute', bottom: 18,left:"42%" ,marginTop:18 }} onPress={() => {
          setSelectedItem(null)
          setModalVisible(false)
        }}>
           <Text style={styles.text_close}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>)}

    </Modal>
     
  )

 
}
export default popup


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: 'white',
    width:"95%",
    height:"95%",
    padding: 0,
    borderRadius: 10,
  },
  text_1:{
    fontSize:24,
    fontWeight:"600",
    lineHeight:28.13,
    color:"#000000",
    textAlign:"center",
    paddingVertical:25
  },
  text_close:{
    fontSize:20,
    fontWeight:"400",
    lineHeight:23.44,
    color:"#FF0000",
    textAlign:"center"
  },
  separator: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 1.1,
  },
});



