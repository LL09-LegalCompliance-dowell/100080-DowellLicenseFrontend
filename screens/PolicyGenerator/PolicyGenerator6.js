import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Br,
} from "react-native";
import { styles } from "./styles";
import {
  EyeIcon,
  DownloadIcon,
} from "react-native-heroicons/outline";
import StepIndicator from "react-native-step-indicator";

function PolicyGenerator6({ navigation }) {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      {/* <StepIndicator
        customStyles={styles.stepStyle}
        currentPosition={5}
      /> */}
      <View>
        <View style={styles.agree}>
          <Text style={styles.boldfont}>Finish Up:</Text>
          <Text>Enter Your Email address to receive the policy:</Text>
          <View style={styles.section2}>
            <TextInput style={styles.input} placeholder="Eg.John Smith Doe" />
            <Text className="italic text-gray-400 text-md pb-3">
              You will receive the policy to the entered email.
            </Text>
            <View className="pl-10 bg-white">
              <Image source={require("../../../assets/images/image3.png")} />
            </View>
          </View>
        </View>
        <View style={styles.center} className="pt-5">
          <TouchableOpacity className="justify-center gap-3 bg-gray-300 p-2 rounded-lg w-40 h-12 flex-row">
            <Text>
              <DownloadIcon color="green" size={25} />
            </Text>
            <Text className="text-green-700 text-bold text-normal justify-between ">
              Download
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center} className="pt-5">
          <TouchableOpacity className="justify-center gap-3 bg-gray-300 p-2 rounded-lg w-40 h-12 flex-row">
            <Text>
              <EyeIcon color="green" size={25} />
            </Text>
            <Text className="text-green-700 text-bold text-normal justify-between ">
              Preview Policy
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center} className="pt-20">
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>



  );
}

export default PolicyGenerator6;
