import React from 'react'
import styles from './style'
import colors from '../../../../assets/colors/colors';
import { ScrollView ,View,Text,TextInput,Image,TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react'
import { email_validation } from '../validations';

const Policy4 = ({list}) => {
  const [valid_email , setValid_email]=useState(true);
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          
          <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400", marginTop: 20}}>
          Finish Up:
          </Text>
          <View style={{paddingHorizontal:11,paddingTop:16}}>
            <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Enter Your Email address to receive the policy:</Text>
            <TextInput
            style={styles.input}
            value={list[0]}
            placeholder="Eg. johndoe@mail.com"
            placeholderTextColor="gray"            
            onChangeText={(value)=>{
              if(value===""){
                  setValid_email(true)
              }
              else{
                  email_validation(value)?setValid_email(true):setValid_email(false)
              }
              list[1](value)
              
          }}
            /> 
            <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
            <Text style={{color: "#585858",fontSize:18,fontWeight:"300"}}>You will receive the policy to the entered email.</Text>
            <View style={{alignItems:"center",marginVertical:30}}>
                <Image
                source={require('../../../../assets/images/TheLittleThingsWorking.png')}
                style={styles.blurImage}
                />
                <TouchableOpacity style={styles.button_p4}>
                    <AntDesign name="download" size={24} color={colors.primary} />
                    <Text style={styles.text_b_p4}>Download Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_p4}>
                    <AntDesign name="eye" size={24} color={colors.primary} />
                    <Text style={styles.text_b_p4}>Preview Policy</Text>
                </TouchableOpacity>
            </View>
          </View>
    </ScrollView>
  )
}

export default Policy4