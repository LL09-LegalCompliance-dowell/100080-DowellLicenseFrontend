import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Br,
} from "react-native";
import { styles } from "./styles";
import { ModalDatePicker } from "react-native-material-date-picker";
import EvilIcons from "react-native-vector-icons/EvilIcons"

import Header from '../../components/Header';



const  PolicyGenerator5 = () => {
  const navigation = useNavigation();
  const goToSummary = () =>{
    console.warn("Go to Summary!")
    // navigation.navigate("Generate Policies", {
    //   screen: 'PolicyGenerator2',
    //   params: {},
    // })
  }

  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>

      <View style={styles.agree}>
        <Text style={styles.boldfont}>Execution:</Text>
        <Text style={styles.normaltext}>
        Subsection: Execution of contract by first party (individual, company, or partnership)<Text style={styles.TextStyle}> </Text>{" "}
        </Text>
        <Text>Will the contract be signed by the (first-party) contracting individual, or a person on behalf of the (first-party) contracting entity?</Text>
      
        <View style={styles.section2}>
          
          <TextInput style={styles.input} placeholder="Name of signatory" />
          <TextInput style={styles.input} placeholder="E-signature scanned copy" />
          <Text>What is the full name of the first party signatory?</Text>
          
          <TextInput style={styles.input} placeholder="Eg. John smith Doe" />
          
          <Text>On what date is the first party signing the contract?</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={"calendar"} size={30} />
              </View>
            }
            color="#489503"
            onSelect={(value) => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
         
          
          <Text>Add the full name of the person who will sign the document on behalf of the first party.</Text>
          <TextInput style={styles.input} placeholder="Eg.John smith Doe" />
        
         
          <Text>On what date is the contract being signed on behalf of the first party?</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={"calendar"} size={30} />
              </View>
            }
            color="#489503"
            onSelect={(value) => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
         
      
          <Text>Subsection: Execution of contract by a second party (individual, company, or partnership)</Text>
          
          <Text>Will the contract be signed by the (second party) contracting individual, or by a person on behalf of the (second party) contracting entity?</Text>
          <TextInput style={styles.input} placeholder="Name OF signatory" />
          <TextInput style={styles.input} placeholder="E-signatory scanned copy" />
          <Text>
          What is the full name of the second party signatory?
          </Text>

          
          <TextInput style={styles.input} placeholder="Eg.John smmith Doe" />
          <Text>On what date is the second party signing the contract?</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={"calendar"} size={30} />
              </View>
            }
            color="#489503"
            onSelect={(value) => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
          
          <Text>
          Add the full name of the person who will sign the document on behalf of the second party.
          </Text>
          <TextInput style={styles.input} placeholder="Eg. John Smith Doe" />
        
          <Text>On what date is the contract being signed on behalf of the second party?</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={"calendar"} size={30} />
              </View>
            }
            color="#489503"
            onSelect={(value) => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
          
          
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.nextButton} onPress={goToSummary}>
          <Text style={styles.nextText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  );
}

export default PolicyGenerator5;
