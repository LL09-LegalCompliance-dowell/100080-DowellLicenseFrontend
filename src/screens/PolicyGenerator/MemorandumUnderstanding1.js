import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import Memorandum from "./MemorandumUnderstanding";
const Memorandum1= () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/imagememo1.png")} />
        </View>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/imagememo1.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Memorandum1
