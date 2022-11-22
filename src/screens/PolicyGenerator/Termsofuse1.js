import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Term1 = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/Term1.png")} />
        </View>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/Term1.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Term1
