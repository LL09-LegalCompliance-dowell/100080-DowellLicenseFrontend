import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Memorandum2 = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage} className="w-full">
          <Image source={require("../../../assets/images/imagememo2.png")} />
        </View>
       
      </ScrollView>
    </View>
  );
};


export default Memorandum2;
