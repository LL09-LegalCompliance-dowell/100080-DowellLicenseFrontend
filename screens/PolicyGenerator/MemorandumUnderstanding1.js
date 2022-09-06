import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import Memorandum from "./MemorandumUnderstanding";
const Memorandum1= ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.templateImage}>
        <TouchableOpacity onPress={()=>navigation.navigate('Memorandum2')}>
          <Image source={require("../../../assets/images/imagememo1.png")} />
</TouchableOpacity>
          
        </View>
        <View style={styles.templateImage}>
        <TouchableOpacity onPress={()=>navigation.navigate('Memorandum2')}>
          <Image source={require("../../../assets/images/imagememo1.png")} />
</TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Memorandum1
