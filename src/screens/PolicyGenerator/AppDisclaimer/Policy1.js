import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';
import Date from '../Date';
const Policy1 = ({list}) => {
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text
          style={
            list[4]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please enter name of the app{' '}
        </Text>
        <Text style={styles.text_1}>Date:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <View>
            <Text style={styles.text_2}>Privacy Policy Last updated:</Text>
            <Date
              date={list[0]}
              setDate={list[1]}
              open={open}
              openHandler={openHandler}
            />
          </View>
        </View>
        <Text style={styles.text_1}>Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Name of the App:</Text>
          <TextInput
            style={styles.input_vm}
            value={list[2]}
            placeholder="  Enter here"
            placeholderTextColor="gray"
            onChangeText={value => list[3](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy1;
