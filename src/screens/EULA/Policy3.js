import React, { Fragment } from 'react'
import { useState } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../Cookies/style'
import colors from '../../../assets/colors/colors'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import { TouchableOpacity } from 'react-native-gesture-handler'
import SearchableDropdown from 'react-native-searchable-dropdown';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import { SafeAreaView } from 'react-native-safe-area-context'
import { SelectList } from 'react-native-dropdown-select-list'

const Policy3 = () => {

  var [ isPress1, setIsPress1 ] = useState(false);
  var [ isPress2, setIsPress2 ] = useState(false);
  var [ isPress3, setIsPress3 ] = useState(false);

  const [date, setDate] = useState(new Date());
  const [input1, setInput1] = useState("");
  
  const [radioButtons, setRadioButtons] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected:false,
    containerStyle:{paddingBottom:20}
    
  },{
  id: '2',
  label: 'Not Available',
  value: 'Not Available',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  containerStyle:{paddingTop:5},
  selected: true
}]);

  const [radioButtons1, setRadioButtons1] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  selected: true
  }]);
  const [radioButtons2, setRadioButtons2] = useState([{
    id: '1',
    label: 'When they download ',
    value: 'When they download ',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    
  },{
  id: '2',
  label: 'When they open the package',
  value: 'When they open the package',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  selected: true
  }]);
  const [radioButtons3, setRadioButtons3] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  selected: true,
  
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
        <View >
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(data)=>setRadioButtons(data)}
            containerStyle={styles.radio_hm}
          />
        </View>{
          console.log(radioButtons[0].selected)
        } 
        {radioButtons[0].selected && <View style={{flex:1 ,display:"flex",flexDirection:"row",marginVertical:15,position:"absolute",right:48,top:215}}>
        <TouchableHighlight {...touchProps1}>
          <View style={{display:"flex",flexDirection:"row"}}>
            <Text>Over phone</Text>
            <TouchableOpacity  style={isPress1 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress1(false)}><Text > x  </Text></TouchableOpacity>
          </View>
          
        </TouchableHighlight>
        
        <TouchableHighlight {...touchProps2}>
          <View style={{display:"flex",flexDirection:"row"}}>
            <Text>Via Email </Text>
            <TouchableOpacity style={isPress2 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress2(false)}><Text> x  </Text></TouchableOpacity>
          </View>
        </TouchableHighlight>

        <TouchableHighlight {...touchProps3}>
          <View style={{display:"flex",flexDirection:"row"}}>
            <Text>In-person</Text>
            <TouchableOpacity style={isPress3 ? {display:"flex"} : {display:"none"}} onPress={()=>setIsPress3(false)}><Text> x  </Text></TouchableOpacity>
          </View>
        </TouchableHighlight>

  </View> }
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