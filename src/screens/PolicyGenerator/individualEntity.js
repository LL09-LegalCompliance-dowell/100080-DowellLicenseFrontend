import React from "react";
import { View, Text, TextInput } from 'react-native';

import { styles } from "./styles";

const IndividualEntity = () => {

    return (
        <View>
            <View styles={styles.formGroup}>
                <Text>Full Name of the Individual:</Text>
                <TextInput 
                    placeholder="Eg. Jhhn SMith Doe"
                    style={styles.input}
                />
            </View>
            <View styles={styles.formGroup}>
                <Text>Postal Address:</Text>
                <TextInput 
                    placeholder="Eg. 202002"
                    style={styles.input}
                />
            </View>
            <View styles={styles.formGroup}>
                <Text>In which jurisdiction is the party incorporated?</Text>
                <TextInput 
                    placeholder="Eg."
                    style={styles.input}
                />
            </View>
            <View styles={styles.formGroup}>
                <Text>What is the registration number of the party?</Text>
                <TextInput 
                    placeholder="Eg. 202002"
                    style={styles.input}
                />
            </View>
            <View styles={styles.formGroup}>
                <Text>What is the registerd office address of the party?</Text>
                <TextInput 
                    placeholder="Eg."
                    style={styles.input}
                />
            </View>
            <View styles={styles.formGroup}>
                <Text>Where is the principal place of businness of the party?</Text>
                <TextInput 
                    placeholder="Eg."
                    style={styles.input}
                />
            </View>
        </View>
    );
}

export default IndividualEntity;