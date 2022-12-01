import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const PolicyTemplate = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/agree.png")} />
        </View>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/agree2.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PolicyTemplate;
