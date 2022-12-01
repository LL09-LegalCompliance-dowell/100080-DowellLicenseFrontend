import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Nondisclosure1 = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/nondisclosure2.png")} />
        </View>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/nondisclosure2.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Nondisclosure1