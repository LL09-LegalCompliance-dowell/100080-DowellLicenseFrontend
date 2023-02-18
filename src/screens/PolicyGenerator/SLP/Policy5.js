import React, {Fragment} from 'react';
import {useState} from 'react';
import {ScrollView, View, Text, TextInput, Pressable} from 'react-native';
import styles from '../Cookies/style';

import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import {SelectList} from 'react-native-dropdown-select-list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../../../../assets/colors/colors';
import AppLoader from '../../../components/AppLoader';
import RBSheet from 'react-native-raw-bottom-sheet';

const Policy5 = ({list}) => {
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);

  const [scanedImage1, setScanedImage1] = useState(null);
  const [scanedImage2, setScanedImage2] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <AppLoader /> : null}

      {/* Model start 1*/}
      <Modal
        propagateSwipe
        isVisible={isModal1Visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        coverScreen={false}
        backdropColor="white"
        backdropOpacity={1}
        animationInTiming={700}
        animationOutTiming={700}
        avoidKeyboard={true}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setModal1Visible(false)}
        onBackButtonPress={() => setModal1Visible(false)}>
        <View style={{width: '100%'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Pressable
              onPress={async () => {
                ImagePicker.openCamera({
                  width: 300,
                  height: 400,
                  cropping: true,
                  includeBase64: true,
                }).then(async image => {
                  setLoading(true);
                  console.log(image);
                  setScanedImage1(image);
                  list[4](image.data);
                  setLoading(false);
                  setModal1Visible(false);
                });
              }}
              style={{
                backgroundColor: colors.primary,
                marginVertical: 10,
                width: '70%',
                borderRadius: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Camera</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                  includeBase64: true,
                }).then(async image => {
                  setLoading(true);
                  console.log(image);
                  setScanedImage1(image);
                  list[6](image.data);
                  setLoading(false);
                  setModal1Visible(false);
                });
              }}
              style={{
                backgroundColor: colors.primary,
                marginVertical: 10,
                width: '70%',
                borderRadius: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>
                Choose from gallery
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setModal1Visible(false);
              }}
              style={{
                backgroundColor: colors.primary,
                marginVertical: 10,
                width: '70%',
                borderRadius: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Model 1 end */}

      {/* Model start 2*/}
      <Modal
        propagateSwipe
        isVisible={isModal2Visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        coverScreen={false}
        backdropColor="white"
        backdropOpacity={1}
        animationInTiming={700}
        animationOutTiming={700}
        avoidKeyboard={true}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setModal2Visible(false)}
        onBackButtonPress={() => setModal2Visible(false)}>
        <View style={{position: 'absolute', top: 150, width: '100%'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Pressable
              onPress={async () => {
                ImagePicker.openCamera({
                  width: 300,
                  height: 400,
                  cropping: true,
                  includeBase64: true,
                }).then(async image => {
                  setLoading(true);
                  console.log(image);
                  setScanedImage2(image);
                  list[20](image.data);
                  setLoading(false);
                  setModal2Visible(false);
                });
              }}
              style={{
                backgroundColor: colors.primary,
                marginVertical: 10,
                width: '70%',
                borderRadius: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Camera</Text>
            </Pressable>
            <Pressable
              onPress={async () => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                  includeBase64: true,
                }).then(async image => {
                  setLoading(true);
                  console.log(image);
                  setScanedImage2(image);
                  list[20](image.data);
                  setLoading(false);
                  setModal2Visible(false);
                });
              }}>
              <Text style={{color: 'white', fontSize: 16}}>
                Choose from gallery
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setModal2Visible(false);
              }}
              style={{
                backgroundColor: colors.primary,
                marginVertical: 10,
                width: '70%',
                borderRadius: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Model 2 end */}

      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Text
          style={
            list[0]
              ? styles.hide
              : {color: 'red', textAlign: 'center', fontSize: 20}
          }>
          Please Check your inputs... You must fill all fields
        </Text>
        <Text style={styles.text_1}>Execution:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_3}>
            Subsection: Execution of contract by first party (individual,
            company, or partnership)
          </Text>

          <Text style={styles.text_2}>
            Will the contract be signed by the (first-party) contracting
            individual, or a person on behalf of the (first-party) contracting
            entity?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[1]}
              onPress={data => list[2](data)}
              containerStyle={styles.radio_hm}
              // layout="row"
            />
          </View>
          <TextInput
            style={styles.input_vm}
            value={list[3]}
            placeholder="  Name of signatory"
            placeholderTextColor="gray"
            onChangeText={value => list[4](value)}
          />
          {/* Scaned copy 1*/}
          <Pressable
            onPress={async () => {
              setModal1Visible(true);
            }}
            style={[
              styles.input_vm,
              {
                flexDirection: 'row',
                justifyContent: scanedImage1 == null ? 'space-between' : null,
              },
            ]}>
            {scanedImage1 == null ? (
              <Text style={{color: 'gray', fontSize: 16}}>
                E-signature scanned copy
              </Text>
            ) : (
              <Text style={{color: 'black', fontSize: 16, marginRight: 5}}>
                Uploaded
              </Text>
            )}
            {scanedImage1 == null ? (
              <>
                <MaterialCommunityIcons
                  // style={styles.userIcon}
                  name="image-plus"
                  size={35}
                  color="gray"
                />
              </>
            ) : (
              <MaterialCommunityIcons
                // style={styles.userIcon}
                name="check-bold"
                size={25}
                color={colors.primary}
              />
            )}
          </Pressable>

          <Text style={styles.text_2}>
            What is the full name of the first party signatory?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[8](value)}
          />

          <Text style={styles.text_2}>
            On what date is the first party signing the contract?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              value={list[9].toLocaleDateString()}
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
              onSelect={value => list[10](value)}
              isHideOnSelect={true}
              initialDate={new Date()}
            />
          </View>

          <Text style={styles.text_2}>
            Add the full name of the person who will sign the document on behalf
            of the first party.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[11]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[12](value)}
          />
          <Text style={styles.text_2}>
            On what date is the contract being signed on behalf of the first
            party?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              value={list[13].toLocaleDateString()}
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
              onSelect={value => list[14](value)}
              isHideOnSelect={true}
              initialDate={new Date()}
            />
          </View>

          <Text style={styles.text_3}>
            Subsection: Execution of contract by a second party (individual,
            company, or partnership)
          </Text>
          <Text style={styles.text_2}>
            Will the contract be signed by the (second party) contracting
            individual, or by a person on behalf of the (second party)
            contracting entity?
          </Text>
          <View>
            <RadioGroup
              radioButtons={list[15]}
              onPress={data => list[16](data)}
              containerStyle={styles.radio_hm}
              // layout="row"
            />
          </View>
          <TextInput
            style={styles.input_vm}
            value={list[17]}
            placeholder="  Name of signatory"
            placeholderTextColor="gray"
            onChangeText={value => list[18](value)}
          />

          {/* Scaned copy 2*/}
          <Pressable
            onPress={async () => {
              setModal2Visible(true);
            }}
            style={[
              styles.input_vm,
              {
                flexDirection: 'row',
                justifyContent: scanedImage2 == null ? 'space-between' : null,
              },
            ]}>
            {scanedImage2 == null ? (
              <Text style={{color: 'gray', fontSize: 16}}>
                E-signature scanned copy
              </Text>
            ) : (
              <Text style={{color: 'black', fontSize: 16, marginRight: 5}}>
                Image selected
              </Text>
            )}
            {scanedImage2 == null ? (
              <>
                <MaterialCommunityIcons
                  // style={styles.userIcon}
                  name="image-plus"
                  size={35}
                  color="gray"
                />
              </>
            ) : (
              <MaterialCommunityIcons
                // style={styles.userIcon}
                name="check-bold"
                size={25}
                color={colors.primary}
              />
            )}
          </Pressable>

          <Text style={styles.text_2}>
            What is the full name of the second party signatory?
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[21]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[22](value)}
          />

          <Text style={styles.text_2}>
            On what date is the second party signing the contract?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              value={list[23].toLocaleDateString()}
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
              onSelect={value => list[24](value)}
              isHideOnSelect={true}
              initialDate={new Date()}
            />
          </View>

          <Text style={styles.text_2}>
            Add the full name of the person who will sign the document on behalf
            of the second party.
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[25]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            onChangeText={value => list[26](value)}
          />

          <Text style={styles.text_2}>
            On what date is the contract being signed on behalf of the second
            party?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              value={list[27].toLocaleDateString()}
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
              onSelect={value => list[28](value)}
              isHideOnSelect={true}
              initialDate={new Date()}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy5;
