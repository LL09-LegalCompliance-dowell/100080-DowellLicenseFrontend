import React, {Fragment} from 'react';
import {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../Cookies/style';
import colors from '../../../../assets/colors/colors';
import ImagePicker from 'react-native-image-crop-picker';
import AppLoader from '../../../components/AppLoader';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Policy3 = ({list}) => {
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scanedImage, setScanedImage] = useState(null);

  return (
    <>
      {loading ? <AppLoader /> : null}
      {/* Model start 1*/}
      <Modal
        propagateSwipe
        isVisible={isModal1Visible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        coverScreen={false}
        backdropColor="white"
        backdropOpacity={1}
        animationInTiming={700}
        animationOutTiming={700}
        avoidKeyboard={true}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setModal1Visible(false)}
        onBackButtonPress={() => setModal1Visible(false)}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <TouchableOpacity
              onPress={() => {
                ImagePicker.openCamera({
                  width: 300,
                  height: 400,
                  cropping: true,
                  includeBase64: true,
                }).then(async image => {
                  try {
                    setLoading(true);

                    console.log(image.data);
                    setScanedImage(image);
                    list[4](image.data);
                    setLoading(false);
                    setModal1Visible(false);
                  } catch (error) {
                    console.log(error);
                  }
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
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async () => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                }).then(async image => {
                  try {
                    setLoading(true);

                    // console.log(image);
                    setScanedImage(image);
                    const data = new FormData();
                    data.append('file', {
                      uri: image.path,
                      type: image.mime,
                      name: 'photo.jpg',
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
                    list[4](responseJson.file_data);
                    console.log(responseJson);
                    setLoading(false);
                    setModal1Visible(false);
                  } catch (error) {
                    console.log(error);
                  }
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
            </TouchableOpacity>
            <TouchableOpacity
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
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Model 1 end */}

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
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            Name and signature of the witnesses:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder=" Name of signatory"
            placeholderTextColor="gray"
            onChangeText={value => list[2](value)}
          />

          {/* Scaned copy 1*/}
          <TouchableOpacity
            onPress={async () => {
              setModal1Visible(true);
            }}
            style={[
              styles.input_vm,
              {
                flexDirection: 'row',
                justifyContent: scanedImage == null ? 'space-between' : null,
              },
            ]}>
            {scanedImage == null ? (
              <Text style={{color: 'gray', fontSize: 16}}>
                E-signature scanned copy
              </Text>
            ) : (
              <Text style={{color: 'black', fontSize: 16, marginRight: 5}}>
                Uploaded
              </Text>
            )}
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
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
