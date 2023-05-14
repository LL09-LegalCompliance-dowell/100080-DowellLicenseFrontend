import {React,useState,useEffect} from 'react';

import {ScrollView, View, Text, TextInput,TouchableOpacity, Modal} from 'react-native';
import styles from '../Cookies/style';
import { SelectList } from 'react-native-dropdown-select-list'
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { email_validation } from '../validations';
import Date from '../Date';

const Policy1 = ({list}) => {
  
  const [valid_email , setValid_email]=useState(true);
  const [open, setOpen] = useState(false)
  const openHandler=(state)=>{
      setOpen(state)
  }
  const states = [
    {key:'1', value:'Maharashtra'},
    {key:'2', value:'Karnataka'},
    {key:'3', value:'Goa'},
    {key:'4', value:'Gujarat'}
  ]
  const Countires = [
    {key:'1', value:'India'},
    {key:'2', value:'United Arab Emirates'},
    {key:'3', value:'United Kingdom'},
    {key:'4', value:'United States'},
    {key:'5', value:'Australia'},
  ]
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[22]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <Text style={valid_email?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Enter Valid Email  </Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={styles.text_1}>Date of execution of the document:</Text>
          <Date date={list[0]} setDate = {list[1]} open ={open} openHandler={openHandler} margin={true}/>
        </View>
        <Text style={styles.text_1}>Party details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Full Name of the Party:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[3](value)}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#585858',
              lineHeight: 14,
              position: 'relative',
              right: -220,
              marginTop: 6,
              marginBottom: 20,
            }}>
            *Include Middle Name
          </Text>
          <Text style={styles.text_2}>Name of the company:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[4]}
            placeholder="  Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[5](value)}
          />
          <Text style={styles.text_2}>Website/App Name:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[23]}
            placeholder="Enter here"
            placeholderTextColor="gray" 
            onChangeText={(value)=>list[24](value)}
          />
          <Text style={styles.text_2}>Address of the company:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[6]}
            placeholder="  Address Line 1"
            placeholderTextColor="gray"
            onChangeText={value => list[7](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[8]}
            placeholder="  Address Line 2"
            placeholderTextColor="gray"
            onChangeText={value => list[9](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[10]}
            placeholder="  Address Line 3"
            placeholderTextColor="gray"
            onChangeText={value => list[11](value)}
          />
          <Text style={styles.text_2}>PIN Code:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[12]}
            placeholder="  Eg. 202002"
            placeholderTextColor="gray"
            onChangeText={value => list[13](value)}
          />
          <Text style={styles.text_2}>State:</Text>
          <SelectList 
            setSelected={(value) =>list[15](value)} 
            data={states} 
            save="value"
            placeholder={list[14]}
            boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
            inputStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            dropdownTextStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            searchPlaceholder=""
            search={false}
          />
          <Text style={styles.text_2}>Country:</Text>
          {/* <TextInput
            style={styles.input_vm}
            value={list[16]}
            placeholder="  Eg. India"
            placeholderTextColor="gray"
            onChangeText={value => list[17](value)}
          /> */}
          <SelectList 
            setSelected={(value) =>list[17](value)} 
            data={Countires} 
            save="value"
            placeholder={list[16]}
            boxStyles={{backgroundColor:"#D9D9D9",marginVertical:12,color:"#585858",fontSize:16,fontWeight:"300",borderWidth: 1,borderRadius: 15,borderColor: '#C4C4C4',height: 51}}
            inputStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            dropdownTextStyles={{color:"#585858",fontSize:16,fontWeight:"300"}}
            searchPlaceholder=""
            search={false}
          />
          <Text style={styles.text_2}>Telephone:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[18]}
            placeholderTextColor="gray"
            onChangeText={value => list[19](value)}
          />
          <Text style={styles.text_2}>Email:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[20]}
            placeholder="  Eg. johndoe@gmail.com"
            placeholderTextColor="gray"
            onChangeText={(value)=>{
              if(value===""){
                  setValid_email(true)
              }
              else{
                  email_validation(value)?setValid_email(true):setValid_email(false)
              }
              list[21](value)
              
          }}
          />
          <Text  style={valid_email ? styles.hide: styles.text_warning}>Please Enter valid email</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
