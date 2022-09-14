import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Gdpr2 = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage} className="w-full">
          <Image source={require("../../../assets/images/Gpd2.png")} />
        </View>
       
      </ScrollView>
    </View>
  );
};

export default Gdpr2
