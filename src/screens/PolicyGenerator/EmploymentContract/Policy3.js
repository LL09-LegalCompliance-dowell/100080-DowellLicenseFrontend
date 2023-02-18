import React from 'react';
import {useState} from 'react';
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
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../assets/colors/colors';
import CountryPicker from 'react-native-country-picker-modal';

const Policy3 = ({list}) => {
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);
  const [scanedImage, setScanedImage] = useState(null);
  const [scanedImage1, setScanedImage1] = useState(null);
  const [loading, setLoading] = useState(false);

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
                    console.log(image);
                    setScanedImage(image);
                    list[10](image.data);
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
                  includeBase64: true,
                }).then(async image => {
                  try {
                    setLoading(true);
                    console.log(image);
                    setScanedImage(image);
                    list[10](image.data);
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
      {/* Model start 2*/}
      <Modal
        propagateSwipe
        isVisible={isModal2Visible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        coverScreen={false}
        backdropColor="white"
        backdropOpacity={1}
        animationInTiming={700}
        animationOutTiming={700}
        avoidKeyboard={true}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setModal2Visible(false)}
        onBackButtonPress={() => setModal2Visible(false)}>
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
                    console.log(image);
                    setScanedImage1(image);
                    list[16](image.data);
                    setLoading(false);
                    setModal2Visible(false);
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
                    setModal2Visible(false);
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
            </TouchableOpacity>
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
          Please Check your inputs... You must fill all{' '}
        </Text>
        <Text style={styles.text_1}>User Details:</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>Jurisdiction/Applicable Law</Text>
          <TextInput
            style={styles.input_vm}
            value={list[1]}
            placeholder="  Enter Jurisdiction"
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
            placeholderTextColor="gray"
            onChangeText={value => {
              list[4](value);
            }}
          />

          <Text style={styles.text_2}>Which Country are you situated in?</Text>
          <View style={styles.input_vm}>
            {list[5] === '' ? (
              <CountryPicker
                // countryCode={country}
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
            placeholderTextColor="gray"
            onChangeText={value => {
              list[8](value);
            }}
          />
          {/* Image will be there */}
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

          <Text style={styles.text_2}>Date</Text>
          <TextInput
            style={[styles.input, {marginHorizontal: 0}]}
            value={list[11].toLocaleDateString()}
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
            onSelect={value => list[12](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>
        <Text style={styles.text_1}>Execution Part (Employee):</Text>
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <Text style={styles.text_2}>
            Full Name & Signature of Authorized Signatory
          </Text>
          <TextInput
            style={styles.input_vm}
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
              setModal2Visible(true);
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
          <TextInput
            style={[styles.input, {marginHorizontal: 0}]}
            value={list[17].toLocaleDateString()}
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
            onSelect={value => list[18](value)}
            isHideOnSelect={true}
            initialDate={new Date()}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy3;
