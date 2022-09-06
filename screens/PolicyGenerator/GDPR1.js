import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Gdp1 = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/gpd.png")} />
        </View>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/gdp.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Gdp1
