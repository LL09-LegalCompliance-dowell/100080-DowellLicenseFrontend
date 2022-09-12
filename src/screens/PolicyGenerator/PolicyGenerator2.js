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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const PolicyGenerator2 = () => {
  const navigation = useNavigation();
  const goNextPage = () =>{
    navigation.navigate("Generate Policies", {
      screen: 'PolicyGenerator3',
      params: {},
    })
  }
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
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={styles.agree}>
        <Text style={styles.boldfont}>Agreement:</Text>
        <Text style={styles.normaltext}>
          Clause 1: Definations <Text style={styles.TextStyle}> </Text>{" "}
        </Text>
        <Text style={styles.normaltext}>Clasuse 1.1</Text>
        <View style={styles.section2}>
          <Text style={styles.italic}>Defination of Charges</Text>
          <Text>What charges are payable under this document?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Defination of Documentation</Text>
          <Text>How should the software documentation be indentified?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Defination of Effective Date</Text>
          <Text>When will the contract come into force</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={"calendar"} size={25} />
              </View>
            }
            color="#489503"
            onSelect={(value) => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
          <Text style={styles.italic}>Defination of Minimum Term</Text>
          <Text>What minimum term will apply?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Defination of software</Text>
          <Text>Should the form of sottware be specified?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Defination of software Defect</Text>
          <Text>
            Will non-material defects count as software defects for the purposes
            of this defination?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>In what ways may a relevant defect affect the software?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>
            Should a set of general exclusions from this definatiion be
            included?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>What exclusions should apply here?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>
            Defination of Software Specification.
          </Text>
          <Text>
            Define "Software Specification". NB in many cases it will not be
            appropriate to include a reference to documentation in this
            defination.
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>
            May the specification of the software be verified by the written
            agreement of the parties?
          </Text>

          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Defination of Term</Text>
          <Text>
            Define "Term", the period during which the conract will subsist.
          </Text>
          <TextInput
            style={styles.input}
            type="date"
            placeholder="Enter number"
          />
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true} 
            labelHorizontal={true}
            buttonSize={10}
            onPress={(value) => {
              this.setState({ value: value });
            }}
          />
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.nextButton} onPress={goNextPage}>
          <Text style={styles.nextText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default PolicyGenerator2;
