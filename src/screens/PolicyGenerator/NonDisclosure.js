import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ProgressStepper from "./ProgressSteps";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { styles } from "./styles";

import {
  EyeIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";

const NonDisclosure = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      SpecificRoute: {
        screen: ProgressStepper,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <ScreenStackHeaderBackButtonImage
              onPress={(_) => navigation.navigate("Somewhere")}
            />
          ),
        }),
      },
    });
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text>
      We help with the legal requirements, so you can focus on the business. 
Below is the sample for Software License Policy Template. .{" "}
      </Text>
      <View style={styles.imageWrapper}>
        <Image source={require("../../../assets/images/nondisclosure1.png")} />
        <TouchableOpacity style={styles.centerLink}>
          <Text style={styles.imageText}>
            <EyeIcon size={20} color="green" /> View Sample
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.disclaimer}>Disclaimer or Statement</Text>
        </View>
        <View style={styles.center}>
          <TouchableOpacity style={styles.policyButton}>
            <Text style={styles.generatingText}>Start generating</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <Text style={styles.FAQtext}>
            <QuestionMarkCircleIcon size={12} color="green" /> Generator FAQs
          </Text>
        </View>
        <View style={styles.center}>
          <Text style={{ justifyContent: "center", fontSize: 13 }}>
            Get your documents and make your site or app compliant in minutes
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NonDisclosure
