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

function PolicyGenerator3() {
  var radio_props = [
    { label: "day", value: 0 },
    { label: "month", value: 1 },
    { label: "year", value: 2 },
  ];
  var [date, setDate] = useState([radio_props]);
  function initState() {
    return {
      value: 0,
    };
  }
  return (
    <View style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={styles.agree}>
        <Text style={styles.boldfont}>Agreement:</Text>
        <Text style={styles.normaltext}>
          Clause 2: Credit <Text style={styles.TextStyle}> </Text>
        </Text>
        <Text style={styles.normaltext}>
          Clasuse:Free documents licensing warning
        </Text>
        <View style={styles.section2}>
          <Text>
            Optional element. Although you need to retain the credit, you should
            remove the inline copyright warning from this document before use.
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>Clause 3: Term</Text>
          <Text>Clause 3.2</Text>
          <Text>
            Is the term of the contract indefinite, or will it come to an end
            upon some agreed date, or upon the occurrence of a defined event?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />

          <Text>Upon what date will the contract terminate?</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <CalendarIcon width={20} height={25} />
              </View>
            }
            color="#489503"
            onSelect={(value) => setDate(value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />

          <Text>
            Upon the occurrence of what event will the contract terminate?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />

          <Text>Clause 4: Supply of Software</Text>
          <Text>Clause 4.1 </Text>
          <Text>
            How many copies of the software will the Licensor deliver to the
            Licensee?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />

          <Text>How will the software be delivered?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>Within what period must the software be delivered?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>What exactly did the Licensor supply to the License?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>Clause 5: License</Text>
          <Text>Clause 5.2</Text>
          <Text>
            Specify the purposes by reference to which sub-licensing is
            permitted.
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />

          <Text>Clause 8: Payments</Text>
          <Text>Clause 8.1 </Text>
          <Text>When should invoices be issued?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>Specify invoicing dates.</Text>

          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Clause 8.2 </Text>
          <Text>What is the period for payment of invoices?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>
            When does the period for payment of an invoice begin to run?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text style={styles.italic}>Clause 8.3 </Text>
          <Text>Using what methods should payments be made?</Text>
          <TextInput style={styles.input} placeholder="Eg." />
          <Text>Clause 8.4 </Text>
          <Text>
            What contractual interest rate should apply to late payments?
          </Text>
          <TextInput style={styles.input} placeholder="Eg." />
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

export default PolicyGenerator3;
