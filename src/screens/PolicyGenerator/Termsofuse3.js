import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Term2 = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage} className="w-full">
          <Image source={require("../../../assets/images/Term2.png")} />
        </View>
       
      </ScrollView>
    </View>
  );
};

export default Term2
