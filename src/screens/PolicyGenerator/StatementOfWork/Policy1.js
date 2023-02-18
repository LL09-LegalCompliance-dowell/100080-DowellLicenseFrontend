import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Policy1 = ({list}) => {
  
  

 
  
  

  var touchProps1 = {
    style: list[10] ? styles.Pressed : styles.Normal,
    onPress: () => list[11](true),
  };
  var touchProps2 = {
    style: list[12] ? styles.Pressed : styles.Normal,
    onPress: () => list[13](true),
  };
  var touchProps3 = {
    style: list[14] ? styles.Pressed : styles.Normal,
    onPress: () => list[15](true),
  };

  var touchProps4 = {
    style: list[16] ? styles.Pressed : styles.Normal,
    onPress: () => list[17](true),
  };

  const onPress=()=>{
    if(list[20]!==""){
      let flag=true
      for (let index = 0; index < list[22].length; index++) {
        if (list[20] ===list[22][index]){
          flag=false
        }
      }
      if (flag==true) {
        list[23](list[20])
      }
      list[21]("")
      
    }
    
  }

  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text style={list[list.length-1]?styles.hide:{color:"red",textAlign:"center",fontSize:20}}>Please Check your inputs... You must fill all  </Text>
        <View style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
          <Text style={styles.text_1}>Client details:</Text>
          {/* Details start here */}
          <View style={{marginHorizontal: 15}}>
            <Text style={[styles.text_1, {fontSize: 15}]}>
              What is the Client’s full name?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[0]}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"
              onChangeText={value => list[1](value)}
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

            <Text style={[styles.text_1, {fontSize: 15}]}>
              Where is the Jurisdiction?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[2]}
              placeholder="Enter here"
              placeholderTextColor="gray"
              onChangeText={value => list[3](value)}
            />

            <Text style={[styles.text_1, {fontSize: 15}]}>
              What is the Project Name?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[4]}
              placeholder="Enter here"
              placeholderTextColor="gray"
              onChangeText={value => list[5](value)}
            />
            <Text style={[styles.text_1, {fontSize: 15}]}>
              When is the Effective Date?
            </Text>
          </View>
          <TextInput
            style={styles.input}
            value={list[6].toLocaleDateString()}
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
            onSelect={value => list[7](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>

        {/* Party details start here */}

        <Text style={styles.text_1}>Purpose of Agreement:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the Freelancer’s full name?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[8]}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[9](value)}
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
        </View>

        {/* Authorization starts here */}

        <Text style={styles.text_1}>Authorization:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What can the Freelancer access?
          </Text>
          <TouchableHighlight {...touchProps1}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Client’s web hosting account (AWS) </Text>
              <TouchableOpacity
                style={list[10] ? {display: 'flex'} : {display: 'none'}}
                onPress={() => list[11](false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>

          <TouchableHighlight {...touchProps2}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Client’s source code repository (GitHub)</Text>
              <TouchableOpacity
                style={list[12] ? {display: 'flex'} : {display: 'none'}}
                onPress={() => list[13](false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>

          <TouchableHighlight {...touchProps3}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Client’s project management tool (Jira)</Text>
              <TouchableOpacity
                style={list[14] ? {display: 'flex'} : {display: 'none'}}
                onPress={() => list[15](false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>

          <TouchableHighlight {...touchProps4}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray'}}>Client’s time management took (Everhour)</Text>
              <TouchableOpacity
                style={list[16] ? {display: 'flex'} : {display: 'none'}}
                onPress={() => list[17](false)}>
                <Text> x </Text>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
        </View>

        {/* Project scope starts here */}
        <Text style={styles.text_1}>Project Scope:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            What is the goal of this project?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[18]}
            placeholder="Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[19](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            What are the deliverables expected in this scope of work?
          </Text>
          <View style={{display:"flex",flexDirection:"row"}}>
            <TextInput
                    value={list[20]}
                    placeholder="Enter here"
                    placeholderTextColor="gray"
                    style = {{
                      height: 51,
                      marginVertical: 15,
                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: '#C4C4C4',
                      padding: 12,
                      width:"75%",
                      backgroundColor: '#D8D8D8',
                      fontSize:16,
                      color:"#585858"
                      
    
                    }}
                    onChangeText={value =>list[21](value)}
            />
            <TouchableOpacity onPress={onPress} style = {{
                      height: 51,
                      marginVertical: 15,
                      marginLeft:5,
                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: '#C4C4C4',
                      padding: 12,
                      width:"20%",
                      backgroundColor: '#D8D8D8',
                      fontSize:16,
                      
                    }}>
              <Text style={{color:"gray",padding:5}}>Add</Text>
              
            </TouchableOpacity>
            
            
          

          </View>
          <View style={{flex:1 ,display:"flex",flexDirection:"column",marginVertical:5,marginHorizontal:30}}>
                {list[22].map((item,index)=>{
                  return<TouchableHighlight style={styles.Pressed}key={index}>
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                    <Text style={{width:"90%",color:"#585858"}}>{item}</Text>
                    <TouchableOpacity  onPress={()=>list[24](item)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                  </View>
                </TouchableHighlight>
                }
                )}
                
                 

            </View>
          
                
          
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
