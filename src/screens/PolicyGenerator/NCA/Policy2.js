import React, {Fragment} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from '../Cookies/style';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import CountryPicker from 'react-native-country-picker-modal';

const Policy2 = ({list}) => {
  return (
    <>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text
          style={
            list[0]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all{' '}
        </Text>
        <Text style={styles.text_1}>Company Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Type of company :</Text>
          <View>
            <RadioGroup
              radioButtons={list[1]}
              onPress={data => list[2](data)}
              containerStyle={styles.radio_hm}
            />
          </View>
          <Text style={{paddingVertical: 7, color: 'gray'}}>
            Under Clause 1
          </Text>

          <Text style={styles.text_2}>
            What will be the Restricted area (geographical)?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[3]}
            placeholder="Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[4](value)}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#585858',
              lineHeight: 14,
              position: 'relative',
              right: -220,
              marginTop: 6,
              marginBottom: 20,
            }}>
            *Mention areas
          </Text>

          <Text style={{paddingVertical: 7, color: 'gray'}}>
            Under Clause 2
          </Text>
          <Text style={styles.text_2}>
            What will be the date for termination?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[5].toLocaleDateString()}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="gray"
          />
          <ModalDatePicker
            button={
              <View style={styles.calendarPosition}>
                <EvilIcons name={'calendar'} size={35} color="gray" />
              </View>
            }
            color="#489503"
            onSelect={value => list[6](value)}
            isHideOnSelect={true}
            initialDate={list[5]}
          />

          <Text style={styles.text_2}>
            What will be the duration for solicit:
          </Text>
          <View
            style={[
              styles.input_vm,
              {
                margin: 0,
                padding: 0,
                paddingLeft: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <TextInput
              value={list[7]}
              keyboardType="numeric"
              placeholder="Enter number"
              placeholderTextColor="gray"
              onChangeText={value => list[8](value)}
            />
            <View>
              <RadioGroup
                radioButtons={list[9]}
                onPress={data => list[10](data)}
                // containerStyle={styles.radio_hm}
                layout="row"
              />
            </View>
          </View>

          <Text style={styles.text_2}>What will be the governing laws?</Text>
          <View style={styles.input_vm}>
            {list[11] === '' ? (
              <CountryPicker
                // countryCode={country}
                withFilter
                withFlag
                withCountryNameButton={list[11]}
                withCallingCode
                onSelect={value => {
                  list[12](value.name);
                }}
              />
            ) : (
              <Text style={[styles.text_1, {fontSize: 17}]}>{list[11]}</Text>
            )}
          </View>

          <Text style={styles.text_2}>
            In case of dispute resolution will there be a litigation matter or
            arbitration and which state should abide these disputes?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[13]}
              onPress={data => list[14](data)}
              containerStyle={styles.radio_hm}
            />
          </View>
          <TextInput
            style={styles.input_vm}
            value={list[15]}
            placeholder="Enter stete name"
            placeholderTextColor="gray"
            onChangeText={value => list[16](value)}
          />
          <Text style={styles.text_2}>Will electronic notices be allowed?</Text>
          <View>
            <RadioGroup
              radioButtons={list[17]}
              onPress={data => list[18](data)}
              containerStyle={styles.radio_hm}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
