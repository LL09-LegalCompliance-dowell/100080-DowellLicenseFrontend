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

const Policy5 = ({list}) => {
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);
  const [scanedImage, setScanedImage] = useState(null);
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
        <View style={{position: 'absolute', top: 150, width: '100%'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Pressable
              onPress={() => {}}
              style={{
                backgroundColor: colors.primary,
                marginVertical: 10,
                width: '70%',
                borderRadius: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Take photo</Text>
            </Pressable>
            <Pressable
              onPress={async () => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                }).then(async image => {
                  setLoading(true);
                  console.log(image);
                  setScanedImage(image);
                  setModal1Visible(false);

                  const data = new FormData();
                  data.append('file', {
                    filename: 'img_47dbffd8-50c1-4f5c-af54-819db6d902ab.png',
                    actual_filename: 'AFL.png',
                    file_extension: 'png',
                    url: 'https://100080.pythonanywhere.com/media/img/img_47dbffd8-50c1-4f5c-af54-819db6d902ab.png',
                  });
                  let res = await fetch(
                    'https://100080.pythonanywhere.com/api/attachments/',
                    {
                      method: 'post',
                      body: data,
                      headers: {
                        'Content-Type': 'multipart/form-data; ',
                      },
                    },
                  );
                  let responseJson = await res.json();
                  console.log(responseJson);
                  setLoading(false);

                  // let res = await fetch(
                  //   'http://localhost//webservice/user/uploadImage',
                  //   {
                  //     method: 'post',
                  //     body: data,
                  //     headers: {
                  //       'Content-Type': 'multipart/form-data; ',
                  //     },
                  //   }
                  // );
                  //   let responseJson = await res.json();
                  //   if (responseJson.status == 1) {
                  //     alert('Upload Successful');
                  //   }
                  // } else {
                  //   //if no file selected the show alert
                  //   alert('Please Select File first');
                  // }
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
      {/* Model end */}
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
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder="  Name of signatory"
            placeholderTextColor="gray"
            onChangeText={value => list[2](value)}
          />
          {/* Scaned copy 1*/}
          <Pressable
            onPress={async () => {
              setModal1Visible(true);
            }}
            style={[
              styles.input_vm,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Text style={{color: 'gray', fontSize: 16}}>
              E-signature scanned copy
            </Text>
            {scanedImage == null ? (
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
            // value={list[2  ]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            // onChangeText={value => list[3](value)}
          />

          <Text style={styles.text_2}>
            On what date is the first party signing the contract?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              // value={list[5].toLocaleDateString()}
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
              // onSelect={value => list[6](value)}
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
            // value={list[2]}
            placeholder="  Eg."
            placeholderTextColor="gray"
            // onChangeText={value => list[3](value)}
          />

          <Text style={styles.text_3}>Clause 9.4</Text>
          <Text style={styles.text_2}>
            What is the jurisdictional coverage of the warranty?
          </Text>
          <TextInput
            style={styles.input_vm}
            // value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            // onChangeText={value => list[3](value)}
          />

          <Text style={styles.text_2}>
            On what date is the contract being signed on behalf of the first
            party?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              // value={list[5].toLocaleDateString()}
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
              // onSelect={value => list[6](value)}
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
            contracting entity?{' '}
          </Text>
          <TextInput
            style={styles.input_vm}
            // value={list[2]}
            placeholder="  Name of signatory"
            placeholderTextColor="gray"
            // onChangeText={value => list[3](value)}
          />
          {/* Scaned copy 2*/}
          <Pressable
            onPress={async () => {
              setModal1Visible(true);
            }}
            style={[
              styles.input_vm,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Text style={{color: 'gray', fontSize: 16}}>
              E-signature scanned copy
            </Text>
            <MaterialCommunityIcons
              // style={styles.userIcon}
              name="image-plus"
              size={35}
              // color={colors.textDark}
            />
          </Pressable>

          <Text style={styles.text_2}>
            What is the full name of the second party signatory?
          </Text>
          <TextInput
            style={styles.input_vm}
            // value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            // onChangeText={value => list[3](value)}
          />

          <Text style={styles.text_2}>
            On what date is the second party signing the contract?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              // value={list[5].toLocaleDateString()}
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
              // onSelect={value => list[6](value)}
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
            // value={list[2]}
            placeholder="  Eg. John Smith Doe"
            placeholderTextColor="gray"
            // onChangeText={value => list[3](value)}
          />

          <Text style={styles.text_2}>
            On what date is the contract being signed on behalf of the second
            party?
          </Text>
          <View
            style={{position: 'relative', marginTop: 20, fontWeight: '400'}}>
            <TextInput
              style={styles.input}
              // value={list[5].toLocaleDateString()}
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
              // onSelect={value => list[6](value)}
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
