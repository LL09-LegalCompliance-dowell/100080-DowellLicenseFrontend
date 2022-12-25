import React from 'react'
import { useState,useEffect } from 'react'
import { ScrollView ,View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../Cookies/style'
import RadioGroup from 'react-native-radio-buttons-group';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy3 = () => {
  const [date, setDate] = useState(new Date());
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [input_1, setInput_1] = useState("");
  const [input_2, setInput_2] = useState("");
  const [radioButtons, setRadioButtons] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected: true,   
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  
  }]);
  const [radioButtons1, setRadioButtons1] = useState([{
    id: '1',
    label: 'Yes, Exclusive',
    value: 'Yes, Exclusive',
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
  const [radioButtons2, setRadioButtons2] = useState([{
    id: '1',
    label: 'Notice',
    value: 'Notice',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected: true,   
  },{
  id: '2',
  label: 'Mutual agreement',
  value: 'Mutual agreement',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  },{
    id: '3',
    label: 'Other',
    value: 'Other',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    
    }]);
  const [radioButtons3, setRadioButtons3] = useState([{
    id: '1',
    label: 'Days',
    value: 'Days',
    size: 12,
    color: '#489503',
    borderColor: '#C4C4C4',   
  },{
  id: '2',
  label: 'Months',
  value: 'Months',
  size: 12,
  color: '#489503',
  borderColor: '#C4C4C4',
  containerStyle:{marginLeft:5}  ,
  selected: true,
  },{
    id: '3',
    label: 'Years',
    value: 'Years',
    size: 12,
    color: '#489503',
    borderColor: '#C4C4C4',
    containerStyle:{marginLeft:5}  
    }]);
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
    <Text style={styles.text_1}>Other Details:</Text>
    <View style={{paddingHorizontal:11,paddingTop:16}}>
      <Text style={styles.text_2}>Will the obligations of confidentiality subsist after the expiry/termination of the agreement?</Text>
      <RadioGroup
               containerStyle={styles.radio}
              radioButtons={radioButtons}
              onPress={(data)=>setRadioButtons(data)}
              
      />
      <View style={{fontWeight:"400"}}>
            <Text style={styles.text_2}>
            Date for execution of this agreement.
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
      <Text style={styles.text_2}>Will the party be allowed to enter into similar arrangements with other parties while the non disclosure agreement subsits?(exclusive or not).</Text>
      <RadioGroup
              containerStyle={styles.radio}
              radioButtons={radioButtons1}
              onPress={(data)=>{
                setRadioButtons1(data)
                if(data[0].selected== true){
                  setFlag(true)
                }
                else setFlag(false)
              }}
              
      />
      <View  style={flag ? "":styles.hide}>
        <Text style={styles.text_2}>If Yes then what will be the time period?</Text>
        <TextInput
            style={styles.input_vm}
            value={input_1}
            placeholder="  Enter number"
            placeholderTextColor="gray" 
            onChangeText={(value)=>setInput_1(value)}
            maxLength={10}
          />
        <View style ={{position:"absolute",top:45,left:117}} >
          <RadioGroup
            radioButtons={radioButtons3}
            onPress={(data)=>setRadioButtons3(data)}
            layout='row'            
          />
        </View>
      </View>  
      <Text style={styles.text_2}>How will the agreement be terminated?</Text>
      <RadioGroup
            radioButtons={radioButtons2}
            containerStyle={styles.radio}
            onPress={(data)=>{
              setRadioButtons2(data)
              if(data[2].selected== true){
                setFlag1(true)
              }
              else setFlag1(false)
            }}
      />
      <TextInput
        style={flag1 ? styles.input_vm : styles.hide}
        value={input_2}
        placeholder="  Enter here"
        placeholderTextColor="gray" 
        onChangeText={(value)=>setInput_2(value)}
      />      
    </View>
    </ScrollView>
    </>
  )
}

export default Policy3