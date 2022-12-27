import React from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from './style'
import colors from '../../../../assets/colors/colors';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'


const Policy1 = () => {
  const [date, setDate] = useState(new Date());
  const [name_entity, setName_entity] = useState("");
  var [ isPress1, setIsPress1 ] = useState(false);
  var [ isPress2, setIsPress2 ] = useState(false);
  var [ isPress3, setIsPress3 ] = useState(false);
  var [ isPress4, setIsPress4 ] = useState(false);
  var [ isPress5, setIsPress5 ] = useState(false);
  const [radioButtons, setRadioButtons] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected: true,
    labelStyle:{color:"#585858"},
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  labelStyle:{color:"#585858"},
  borderColor: '#C4C4C4',
  }]);
  const [radioButtons1, setRadioButtons1] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    selected: true
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  labelStyle:{color:"#585858"},
  borderColor: '#C4C4C4',
  }]);
  var touchProps1 = {                               
    style: isPress1 ? styles.Pressed : styles.Normal, 
    onPress: () => setIsPress1(true),                 
  };
  var touchProps2 = {                               
    style: isPress2 ? styles.Pressed : styles.Normal, 
    onPress: () => setIsPress2(true),                 
  };
  var touchProps3 = {                               
    style: isPress3 ? styles.Pressed : styles.Normal, 
    onPress: () => setIsPress3(true),                 
  };
  var touchProps4 = {                               
    style: isPress4 ? styles.Pressed : styles.Normal, 
    onPress: () => setIsPress4(true),                 
  };
  var touchProps5 = {                               
    style: isPress5 ? styles.Pressed : styles.Normal, 
    onPress: () => setIsPress5(true),                 
  };
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={{position: 'relative', marginTop: 20,fontWeight:"400"}}>
          <Text style={{color: colors.textDark,fontSize:20}}>
          Date of execution of the document:
          </Text>
          <TextInput
            style={styles.input}
            value={date.toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray" 
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={35} color="gray"/>
              </View>
            }
            color="#489503"
            onSelect={value => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
      </View>
      <Text style={{color: colors.textDark,fontSize:20,fontWeight:"400"}}>Policy details:</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Full Name of the entity that owns and runs the website:</Text>
        <TextInput
            style={styles.input_vm}
            value={name_entity}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setName_entity(value)}
          />  
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Check the box if the website has a data protection officer</Text>  
        <View >
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(data)=>setRadioButtons(data)}
            containerStyle={styles.radio}
          />
        </View>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Describe how users of the website can raise questions regarding the website use of cookies options:</Text>
        <View style={{flex:1 ,display:"flex",flexDirection:"row",marginVertical:19}}>
          <TouchableHighlight {...touchProps1}>
             <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Via Website Chat Services </Text>
              <TouchableOpacity  style={isPress1 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress1(false)}><Text > x  </Text></TouchableOpacity>
             </View>
            
          </TouchableHighlight>
          
          <TouchableHighlight {...touchProps2}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Via Email </Text>
              <TouchableOpacity style={isPress2 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress2(false)}><Text> x  </Text></TouchableOpacity>
             </View>
          </TouchableHighlight>

        </View>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Check the box if the website uses other similar Technologies to perform some of the functions which are usually achieved via cookie use</Text>
        <View >
          <RadioGroup
            radioButtons={radioButtons1}
            onPress={(data)=>setRadioButtons1(data)}
            containerStyle={styles.radio}
          />
        </View>
        <Text style={{color: colors.textDark,fontSize:18,fontWeight:"400"}}>Will the cookies store personal information that have been provided by users via the website</Text>
        <View style={{flex:1 ,display:"flex",flexDirection:"row",marginVertical:19}}>
          <TouchableHighlight {...touchProps3}>
             <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Address </Text>
              <TouchableOpacity  style={isPress3 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress3(false)}><Text> x  </Text></TouchableOpacity>
             </View>
            
          </TouchableHighlight>
          
          <TouchableHighlight {...touchProps4}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>Contact Details </Text>
              <TouchableOpacity style={isPress4 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress4(false)}><Text> x  </Text></TouchableOpacity>
             </View>
          </TouchableHighlight>
          <TouchableHighlight {...touchProps5}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{color:"#585858"}}>IP Addresses </Text>
              <TouchableOpacity style={isPress5 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress5(false)}><Text> x  </Text></TouchableOpacity>
             </View>
          </TouchableHighlight>

        </View>    
      </View>

    </ScrollView>
    </>
  )
}

export default Policy1