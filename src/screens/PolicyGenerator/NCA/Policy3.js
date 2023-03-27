import React, {Fragment} from 'react';
import {useState, useRef} from 'react';
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
import RBSheet from 'react-native-raw-bottom-sheet';

const Policy3 = ({list}) => {
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scanedImage, setScanedImage] = useState(null);
  const [scanedImage1, setScanedImage1] = useState(null);
  const refBottomSheet1 = useRef();
  const refBottomSheet2 = useRef();
  return (
    <>
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
                    list[4](image.data);
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
                    list[4](image.data);
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
                    list[18](image.data);
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
                    list[18](image.data);
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
        <Text style={styles.text_1}>Company Details:</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={[styles.text_1, {fontSize: 15}]}>
            Company nature of work:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[5]}
            placeholder="Enter here "
            placeholderTextColor="gray"
            onChangeText={value => list[6](value)}
          />
          <Text style={[styles.text_1, {fontSize: 15}]}>
            Employee job title:
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[7]}
            placeholder="Enter here "
            placeholderTextColor="gray"
            onChangeText={value => list[8](value)}
          />

          <Text style={[styles.text_1, {fontSize: 15}]}>
            Name, address and signature of the witnesse 1
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
          <TextInput
            style={styles.input_vm}
            value={list[9]}
            placeholder="  Address Line 1"
            placeholderTextColor="gray"
            onChangeText={value => list[10](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[11]}
            placeholder="  Address Line 2"
            placeholderTextColor="gray"
            onChangeText={value => list[12](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[13]}
            placeholder="  Address Line 3"
            placeholderTextColor="gray"
            onChangeText={value => list[14](value)}
          />
          {/* Fitness 2 */}
          <Text style={[styles.text_1, {fontSize: 15}]}>
            Name, address and signature of the witnesse 2
          </Text>
          <TextInput
            style={styles.input_vm}
            value={list[15]}
            placeholder=" Name of signatory"
            placeholderTextColor="gray"
            onChangeText={value => list[16](value)}
          />
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

          <TextInput
            style={styles.input_vm}
            value={list[19]}
            placeholder="  Address Line 1"
            placeholderTextColor="gray"
            onChangeText={value => list[20](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[21]}
            placeholder="  Address Line 2"
            placeholderTextColor="gray"
            onChangeText={value => list[22](value)}
          />
          <TextInput
            style={styles.input_vm}
            value={list[23]}
            placeholder="  Address Line 3"
            placeholderTextColor="gray"
            onChangeText={value => list[24](value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
