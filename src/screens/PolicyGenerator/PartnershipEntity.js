import React from 'react';
import {View, Text, TextInput} from 'react-native';

import {styles} from './styles';

const PartnershipEntity = () => {
  return (
    <View>
      <View styles={styles.formGroup}>
        <Text style={{color: colors.textDark}}>
          Full Name of the party partnership:
        </Text>
        <TextInput
          placeholder="Eg. Jhhn SMith Doe"
          style={styles.input}
          placeholderTextColor="gray"
        />
      </View>
      <View styles={styles.formGroup}>
        <Text style={{color: colors.textDark}}>Postal Address:</Text>
        <TextInput
          placeholder="Eg. 202002"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
      <View styles={styles.formGroup}>
        <Text style={{color: colors.textDark}}>
          In which jurisdiction is the party partnership incorporated?
        </Text>
        <TextInput
          placeholder="Eg."
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
      <View styles={styles.formGroup}>
        <Text style={{color: colors.textDark}}>
          What is the registration number of the party?
        </Text>
        <TextInput
          placeholder="Eg. 202002"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
      <View styles={styles.formGroup}>
        <Text style={{color: colors.textDark}}>
          What is the registerd office address of the party?
        </Text>
        <TextInput
          placeholder="Eg."
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
      <View styles={styles.formGroup}>
        <Text style={{color: colors.textDark}}>
          Where is the principal place of businness of the party?
        </Text>
        <TextInput
          placeholder="Eg."
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default PartnershipEntity;
