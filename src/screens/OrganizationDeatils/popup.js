import React from 'react'
import { View, Text, TouchableOpacity, Modal,StyleSheet } from 'react-native';
const popup = ({modalVisible,setModalVisible}) => {
  return (
    <Modal 
    visible={modalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.modalContainer}>
          <View style={styles.modal}> 
            <Text style={styles.text_1}> Policy Name</Text>
            <Text style={styles.text_1}> waiting for api</Text>
            <TouchableOpacity style={{ position: 'absolute', bottom: 18,left:"50%" ,marginTop:18 }}onPress={() => setModalVisible(false)}>
              <Text style={styles.text_close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>

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
    width:"80%",
    height:"80%",
    padding: 20,
    borderRadius: 10,
  },
  text_1:{
    fontSize:24,
    fontWeight:"600",
    lineHeight:28.13,
    color:"#000000",
    textAlign:"center"
  },
  text_close:{
    fontSize:20,
    fontWeight:"400",
    lineHeight:23.44,
    color:"#FF0000",
    textAlign:"center"
  }
});



