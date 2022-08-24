import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Br,
} from "react-native";
import { styles } from "./styles";
import { ModalDatePicker } from "react-native-material-date-picker";
import CalendarIcon from "../../../assets/calendar-regular.svg";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

function PolicyGenerator3() {
  var radio_props = [
    { label: "day", value: 0 },
    { label: "month", value: 1 },
    { label: "year", value: 2},
  ];
var [date,setDate]=useState([radio_props]);
  function initState() {
    return {
      value: 0,
    };
  }
  return (
    <View style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={styles.agree}>
        <Text style={styles.boldfont}>Finish Up:</Text>
        
        <Text>Enter Your Email address to receive the policy:</Text>
      
        <View style={styles.section2}>
          
          <TextInput style={styles.input} placeholder="Eg.John Smith Doe" />
          
          <Text>You will receive the policy to the entered email.</Text>
          
          <Image source={require("../../../assets/image3.png")} />
         
         
      
        
          
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Download </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next Step</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PolicyGenerator3;
