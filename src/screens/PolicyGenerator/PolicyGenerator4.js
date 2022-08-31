import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { ModalDatePicker } from "react-native-material-date-picker";
import CalendarIcon from "../../../assets/calendar-regular.svg";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import RNPickerSelect from 'react-native-picker-select';

function Chooselaw(){
  return    <RNPickerSelect 
  onValueChange={(value) => console.log(value)}
  items={[
      { label: 'State Law Option 1', value: 'Option1' },
      { label: 'State Law Option 2', value: ' Option2' },
      { label: 'State Law Option 3', value: 'Option3' },
      { label: 'State Law Option 4', value: ' Option4' },
  ]}
  
/>
}
function Jurisdiction(){
  return    <RNPickerSelect 
  onValueChange={(value) => console.log(value)}
  items={[
      { label: 'Jurisdiction Option 1', value: 'Option1' },
      { label: 'Jurisdiction Option 2', value: ' Option2' },
      { label: 'Jurisdiction Option 3', value: 'Option3' },
      { label: 'Jurisdiction Option 4', value: ' Option4' },
  ]}
  
/>
}

function PolicyGenerator4() {
  var radio_props = [
    { label: "day / ", value: 0 },
    { label: "month ", value: 1 },
  ];
  var [date, setDate] = useState([radio_props]);
  function initState() {
    return {
      value: 0,
    };
  }
  
  return (
    <View style={styles.wrapper} showsVerticalScrollIndicator={false} >
      <View>
        <Text style={styles.boldfont}>Agreement:</Text>
        <Text style={styles.normaltext}>
          Clause 9: Warranties{" "}
          <Text style={styles.TextStyle}>________________</Text>
        </Text>
        <Text style={styles.normaltext}>Clasuse:9.1</Text>
        <View style={styles.section2}>
          <Text>Optional element.</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.optionalText}>*Optional</Text>
          <View>
            <Text>Clause 9.2</Text>
            <Text>Will this warranty relate toa specific period?</Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text>For what period will this warranty apply?</Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text>Clause 9.4</Text>
            <Text>What is the jurisdictional coverage of the warranty?</Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText} className="pb-2 mr-0">*Optional</Text>
          </View>
          <View>
            <Text>Clause 9.5</Text>
            <Text>
              In what circumstances may the Licensor exercise its rights under
              this provision?
            </Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text>
              Should there be an express requirement for the Licensor to act
              reasonably in relation to the exercise of its rights under this
              provision?
            </Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text>
              Are there any express limitations on this right to modify?
            </Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text>Specify the limitations on the right to modify.</Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text style={styles.normaltext}>Clause 12: Termination</Text>
            <Text style={styles.normaltext}>Clause 12.1</Text>
            <Text>What notice period will apply?</Text>
            <TextInput style={styles.input} placeholder="Eg." />
            <Text style={styles.optionalText}>*Optional</Text>
          </View>
          <View>
            <Text>
              Must the notice of termination expire after some particular
              period, or on some particular day?
            </Text>
            <TextInput style={styles.input} placeholder="Eg." />
          </View>
          <Text>Specify the relevant period.</Text>
          <View className="flex-row bg-gray-200 h-15 rounded-lg">
              
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
                className="pt-4"
              />
            </View>
            <View>
           <Text style={styles.normaltext}>Clause 12.3</Text>
            <Text>In what circumstances may a party terminate for a breach?</Text>
            <TextInput style={styles.input} placeholder="Eg." />
          </View>
          <Text>Clause 14: Notices</Text>
          <Text>The time frame for the notice period?</Text>
          <View className="flex-row bg-gray-200 h-15 rounded-lg">
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
                className="pt-4"
              />
            </View>
            <View className="pt-2">
           <Text style={styles.normaltext}>Clause 14.2</Text>
            <Text>Insert all required addressee, address, and contact details for contractual notices sent to the Licensor.</Text>
            <TextInput style={styles.input} placeholder="Address, contact details, etc" />
          </View>
          <View className="pt-2">
            <Text>Insert all required addressee, address and contact details for contractual notices sent to the Licensee.</Text>
            <TextInput style={styles.input} placeholder="Address, contact details, etc" />
          </View>
          <View className="pt-2">
           <Text style={styles.normaltext}>Clause 15.7</Text>
            <Text>Which law will govern the document?</Text>
         <Chooselaw style={styles.input}/>
          </View>
          <View className="pt-2">
           <Text style={styles.normaltext}>Clause 15.8</Text>
            <Text>The courts of which jurisdiction will have the exclusive right to adjudicate disputes relating to the document (subject to applicable law)?</Text>
         <Chooselaw style={styles.input}/>
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PolicyGenerator4;
