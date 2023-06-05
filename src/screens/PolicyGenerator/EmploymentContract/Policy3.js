import React from 'react';
import {useState, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';
import {ModalDatePicker} from 'react-native-material-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';
import AppLoader from '../../../components/AppLoader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../assets/colors/colors';
import CountryPicker from 'react-native-country-picker-modal';
import RBSheet from 'react-native-raw-bottom-sheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Date from '../Date';
const Policy3 = ({list}) => {
  const [scanedImage, setScanedImage] = useState(null);
  const [scanedImage1, setScanedImage1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };
  const [open1, setOpen1] = useState(false);
  const openHandler1 = state => {
    setOpen1(state);
  };
  const refBottomSheet1 = useRef();
  const refBottomSheet2 = useRef();

  return (
    <>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        {loading ? <AppLoader /> : null}

        <RBSheet
          ref={refBottomSheet1}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 25,
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
                      console.log(image);
                      setScanedImage(image);
                      list[10](image.data);
                      setLoading(false);
                      refBottomSheet1.current.close();
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
                    includeBase64: true,
                  }).then(async image => {
                    try {
                      setLoading(true);
                      console.log(image);
                      setScanedImage(image);
                      list[10](image.data);
                      setLoading(false);
                      refBottomSheet1.current.close();
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
            </View>
          </View>
        </RBSheet>
        {/* Sheet  2 start */}
        <RBSheet
          ref={refBottomSheet2}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 25,
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
                      console.log(image);
                      setScanedImage1(image);
                      list[16](image.data);
                      setLoading(false);
                      refBottomSheet2.current.close();
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
                    includeBase64: true,
                  }).then(async image => {
                    try {
                      setLoading(true);
                      console.log(image);
                      setScanedImage1(image);
                      list[16](image.data);
                      setLoading(false);
                      refBottomSheet2.current.close();
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
            </View>
          </View>
        </RBSheet>

        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[0]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>User Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>Jurisdiction/Applicable Law</Text>
            <TextInput
              style={styles.input_vm}
              value={list[1]}
              placeholder="  Enter Jurisdiction"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => {
                list[2](value);
              }}
            />

            <Text style={styles.text_2}>Which State are you situated in?</Text>
            <TextInput
              style={styles.input_vm}
              value={list[3]}
              placeholder="  Enter State"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => {
                list[4](value);
              }}
            />

            <Text style={styles.text_2}>
              Which Country are you situated in?
            </Text>
            <View style={styles.input_vm}>
              {list[5] === '' ? (
                <CountryPicker
                  withFilter
                  withFlag
                  withCountryNameButton={list[5]}
                  withCallingCode
                  onSelect={value => {
                    list[6](value.name);
                  }}
                />
              ) : (
                <Text style={[styles.text_1, {fontSize: 17}]}>{list[5]}</Text>
              )}
            </View>
          </View>
          <Text style={styles.text_1}>Execution Part (Company):</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>
              Full Name & Signature of Authorized Signatory
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[7]}
              placeholder="  Enter here"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={value => {
                list[8](value);
              }}
            />
            {/* Scaned copy 1*/}
            <TouchableOpacity
              onPress={() => {
                refBottomSheet1.current.open();
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

            <Text style={styles.text_2}>Date</Text>
            <Date
              date={list[11]}
              setDate={list[12]}
              open={open}
              openHandler={openHandler}
            />
          </View>
          <Text style={styles.text_1}>Execution Part (Employee):</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>
              Full Name & Signature of Authorized Signatory
            </Text>
            <TextInput
              style={styles.input_vm}
              autoCapitalize="none"
              value={list[13]}
              placeholder="  Eg. John Smith Doe"
              placeholderTextColor="gray"
              onChangeText={value => {
                list[14](value);
              }}
            />
            {/* Image will be there */}
            {/* Scaned copy 1*/}
            <TouchableOpacity
              onPress={async () => {
                refBottomSheet2.current.open();
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
            </TouchableOpacity>
            <Text style={styles.text_2}>Date</Text>
            <Date
              date={list[17]}
              setDate={list[18]}
              open={open1}
              openHandler={openHandler1}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy3;
