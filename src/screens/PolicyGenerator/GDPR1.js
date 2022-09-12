import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Gdp1 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ScrollView>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/gpd.png")} />
        </View>
        <View style={styles.templateImage}>
          <Image source={require("../../../assets/images/gdp.png")} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.center} onPress={() => {navigation.navigate("GDPR Privacy Policy", {screen: "Gdpr2"})}}>
          <View style={styles.policyButton}>
            <Text style={styles.generatingText}>Start generating</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default Gdp1
