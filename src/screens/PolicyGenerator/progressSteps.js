import React from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { View, Text } from "react-native";
import PolicyGenerator5 from "./PolicyGenerator5";
import PolicyGenerator1 from "./PolicyGenerator1";
import PolicyGenerator2 from "./PolicyGenerator2";
import PolicyGenerator3 from "./PolicyGenerator3";
import PolicyGenerator4 from "./PolicyGenerator4";
import PolicyGenerator6 from "./policyGenerator6";

function ProgressStepper() {
  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps style={{ width: "100px" }}>
        <ProgressStep>
          <View style={{ alignItems: "center" }}>
            <PolicyGenerator1 />
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={{ alignItems: "center" }}>
            <PolicyGenerator2 />
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={{ alignItems: "center" }}>
            <PolicyGenerator3 />
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={{ alignItems: "center" }}>
            <PolicyGenerator4 />
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={{ alignItems: "center" }}>
            <PolicyGenerator5 />
          </View>
        </ProgressStep>
        <ProgressStep>
          <View style={{ alignItems: "center" }}>
            <PolicyGenerator6 />
          </View>
        </ProgressStep>
     
      </ProgressSteps>
    </View>
  );
}

export default ProgressStepper;
