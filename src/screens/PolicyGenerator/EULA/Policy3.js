import React, { Fragment } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import colors from '../../../../assets/colors/colors'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Policy3 = () => {

  var [ isPress1, setIsPress1 ] = useState(false);
  var [ isPress2, setIsPress2 ] = useState(false);
  var [ isPress3, setIsPress3 ] = useState(false);

  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState("");

  const [value3Index, setvalue3Index] = useState(1);

  const [radioButtons1, setRadioButtons1] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    labelStyle:{color:"#585858"},
    borderColor: '#C4C4C4',
    
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
  }]);
  const [radioButtons2, setRadioButtons2] = useState([{
    id: '1',
    label: 'When they download ',
    value: 'When they download ',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
  },{
  id: '2',
  label: 'When they open the package',
  value: 'When they open the package',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
  }]);
  const [radioButtons3, setRadioButtons3] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  selected: true,
  labelStyle:{color:"#585858"},
  
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


  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.text_1}>Maintenance and Support</Text>
      <View style={{paddingHorizontal:11,paddingTop:16}}>
        <View style={{position: 'relative',fontWeight:"400"}}>
          <Text style={styles.text_2}>
          What will be the commencement date?
          </Text>
          <TextInput
            style={styles.input_vm}
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
        <Text style={styles.text_2}>Whether maintenance and support will be available for the app and will it be delivered over phone, via email or in person?</Text>
        <RadioForm
          formHorizontal={false}
          animation={true}
          style={{marginHorizontal:27,marginVertical:7}}
        >
   
              <RadioButton labelHorizontal={true} key={0} style={value3Index ===0? {marginBottom:20}:{marginBottom:4}} >
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={{label: 'Yes', value: 0 }}
                  index={0}
                  isSelected={value3Index === 0}
                  onPress={()=>setvalue3Index(0)}
                  borderWidth={1}
                  buttonInnerColor={colors.primary}
                  buttonOuterColor={"#C4C4C4"}
                  buttonSize={9}
                  buttonOuterSize={18}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <RadioButtonLabel
                  obj={{label: 'Yes', value: 0 }}
                  index={0}
                  labelHorizontal={true}
                  onPress={()=>setvalue3Index(0)}
                  labelStyle={{fontSize:14, color: '#585858',fontWeight:"300",lineHeight:18.75}}
                />
              </RadioButton>
              {value3Index===0 && <View style={{flex:1 ,display:"flex",flexDirection:"row",}}>
              <TouchableHighlight {...touchProps1}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>Over phone</Text>
                  <TouchableOpacity  style={isPress1 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress1(false)}><Text > x  </Text></TouchableOpacity>
                </View>
                
              </TouchableHighlight>
              
              <TouchableHighlight {...touchProps2}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>Via Email </Text>
                  <TouchableOpacity style={isPress2 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress2(false)}><Text> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>

              <TouchableHighlight {...touchProps3}>
                <View style={{display:"flex",flexDirection:"row"}}>
                  <Text style={{color:"#585858"}}>In-person</Text>
                  <TouchableOpacity style={isPress3 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress3(false)}><Text> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>

              </View> }

              <RadioButton labelHorizontal={true} key={1} style={value3Index ===0? {marginTop:20}:{marginTop:4}} >
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={{label: 'Not Available', value: 1 }}
                  index={1}
                  isSelected={value3Index === 1}
                  onPress={()=>setvalue3Index(1)}
  
                  borderWidth={1}
                  buttonInnerColor={colors.primary}
                  buttonOuterColor={"#C4C4C4"}
                  buttonSize={9}
                  buttonOuterSize={18}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <RadioButtonLabel
                  obj={{label: 'Not Available', value: 1 }}
                  index={1}
                  labelHorizontal={true}
                  onPress={()=>setvalue3Index(1)}
                  labelStyle={{fontSize:14, color: '#585858',fontWeight:"300",lineHeight:18.75}}
                />
              </RadioButton>

        </RadioForm>

        <Text style={styles.text_2}>Will it state how often maintenance will occur and on what schedule?</Text>
        <View >
          <RadioGroup
            radioButtons={radioButtons1}
            onPress={(data)=>setRadioButtons1(data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>What will be the start date for the users to be bound by the terms and conditions?</Text>
        <View >
          <RadioGroup
            radioButtons={radioButtons2}
            onPress={(data)=>setRadioButtons2(data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>Will the user be able to install the software on more than one device?</Text> 
        <View >
          <RadioGroup
            radioButtons={radioButtons3}
            onPress={(data)=>setRadioButtons3(data)}
            containerStyle={styles.radio_hm}
          />
        </View>
        <Text style={styles.text_2}>What violations give the software provider the rights to cancel the agreement?</Text>
        <TextInput
            style={styles.input_vm}
            value={input1}
            onChangeText={(value)=>setInput1(value)}
        /> 
      </View>


    </ScrollView>
    </>
  )
}

export default Policy3