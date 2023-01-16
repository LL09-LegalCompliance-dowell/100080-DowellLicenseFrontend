import {React,useState} from 'react';

import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { email_validation } from '../validations';

const Policy1 = ({list}) => {

  const [valid_email , setValid_email]=useState(true);
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[22]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <Text style={valid_email?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Enter Valid Email  </Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={styles.text_1}>Date of execution of the document:</Text>
          <TextInput
            style={styles.input}
            value={list[0].toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray"
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={35} color="gray" />
              </View>
            }
            color="#489503"
            onSelect={value => list[1](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
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
          <TextInput
            style={styles.input_vm}
            value={list[14]}
            placeholder="  Eg. Maharashtra"
            placeholderTextColor="gray"
            onChangeText={value => list[15](value)}
          />
          <Text style={styles.text_2}>Country:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[16]}
            placeholder="  Eg. India"
            placeholderTextColor="gray"
            onChangeText={value => list[17](value)}
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