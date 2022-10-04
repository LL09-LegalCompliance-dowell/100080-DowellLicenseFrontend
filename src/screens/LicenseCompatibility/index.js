import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';
import HowToIcon from './HowToIcon';
import {useLicenses} from '../../context/LoginProvider';
import {useLogin} from '../../context/LoginProvider';
import AppLoader from '../../components/AppLoader';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LicenseCompatibility = () => {
  const {loading, setLoading} = useLogin();
  const [result, setResult] = useState(false);
  const [feild1, setFeild1] = useState('temp');
  const [feild2, setFeild2] = useState('temp');
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);
  const [isHowto, setHowto] = useState(false);
  const {setLicenses, licenses} = useLicenses();
  const [isCompatible, setIsCompatible] = useState(false);
  const [compatibiltyPercentage, setCompatibiltyPercentage] = useState('');
  const [disclaimer, setDisclaimer] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [licenseOne, setLicenseOne] = useState('');
  const [licenseTwo, setLicenseTwo] = useState('');
  const [searchedData, setSearchedData] = useState(licenses);

  const resultTableContent = {
    tableHead: ['Category', licenseOne, licenseTwo],
  };

  const handleSelectedLicense1 = async () => {
    const name = await AsyncStorage.getItem('licenseNname1');
    setModal1Visible(false);
    setFeild1(name);
  };

  const handleSelectedLicense2 = async () => {
    const name = await AsyncStorage.getItem('licenseNname2');
    setModal2Visible(false);
    setFeild2(name);
  };

  const fetchResults = async () => {
    setLoading(true);
    const id1 = await AsyncStorage.getItem('licenseEventId1');
    const id2 = await AsyncStorage.getItem('licenseEventId2');
    try {
      const LicensesCompatibilityData = await axios.post(
        'https://100080.pythonanywhere.com/api/licenses/',
        {
          license_event_id_one: id1,
          license_event_id_two: id2,
          action_type: 'check-compatibility',
        },
      );

      if (LicensesCompatibilityData.data) {
        setCompatibiltyPercentage(
          LicensesCompatibilityData.data['percentage_of_comaptibility'],
        );
        setDisclaimer(LicensesCompatibilityData.data['disclaimer']);
        setRecommendation(LicensesCompatibilityData.data['recommendation']);
        setIsCompatible(LicensesCompatibilityData.data['is_compatible']);
        setLicenseOne(LicensesCompatibilityData.data['license_one']);
        setLicenseTwo(LicensesCompatibilityData.data['license_two']);
        setResult(!result);
        setLoading(false);
        await AsyncStorage.removeItem('licenseEventId1');
        await AsyncStorage.removeItem('licenseEventId2');
        setFeild1('temp');
        setFeild2('temp');
      }
    } catch (error) {
      console.log(error.error_msg);
      Alert.alert('Error message', 'error.response', {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      });
    }
  };

  const searchLicensesFunction = text => {
    const searchData = licenses.filter(item => {
      return item['softwarelicense']['license_name']
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    setSearchedData(searchData);
  };

  useEffect(() => {}, []);

  return (
    <>
      <View>
        {/* First Modal start here */}

        <Modal
          propagateSwipe
          isVisible={isModal1Visible}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          avoidKeyboard={true}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setModal1Visible(false)}
          onBackButtonPress={() => setModal1Visible(false)}>
          <View style={[styles.SearchContainer]}>
            <MyTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search licence"
              style={{paddingLeft: 10}}
              marginVertical={3}
              // autoFocus={true}
              onChangeText={text => searchLicensesFunction(text)}
            />
            <View style={styles.serchResultContainer}>
              {searchedData.map(item => {
                return (
                  <>
                    <ScrollView style={styles.serchResultItemContainer}>
                      <TouchableOpacity
                        // key={license['_id']}
                        onPress={async () => {
                          const id_1 = item['_id'];
                          const eventId_1 = item['eventId'];
                          const licenseNname_1 =
                            item['softwarelicense']['license_name'];
                          await AsyncStorage.setItem(
                            'licenseId1',
                            JSON.stringify(id_1),
                          );
                          await AsyncStorage.setItem(
                            'licenseEventId1',
                            eventId_1,
                          );
                          await AsyncStorage.setItem(
                            'licenseNname1',
                            licenseNname_1,
                          );
                          handleSelectedLicense1();
                        }}>
                        <Text style={styles.serchResultHeading}>
                          {item['softwarelicense']['license_name']}
                        </Text>
                        <Text style={styles.serchResultDetails}>
                          {item['softwarelicense']['description']}
                        </Text>
                        <View style={styles.separator}></View>
                      </TouchableOpacity>
                    </ScrollView>
                  </>
                );
              })}
            </View>
          </View>
        </Modal>
        {/* First Modal end here */}

        {/* Second Modal start here */}
        <Modal
          propagateSwipe
          isVisible={isModal2Visible}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          avoidKeyboard={true}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setModal2Visible(false)}
          onBackButtonPress={() => setModal2Visible(false)}>
          <View style={[styles.SearchContainer]}>
            <MyTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search licence"
              style={{paddingLeft: 10}}
              marginVertical={3}
              // autoFocus={true}
              onChangeText={text => searchLicensesFunction(text)}
            />
            <View style={styles.serchResultContainer}>
              {searchedData.map(item => {
                return (
                  <>
                    <ScrollView
                      key={item['_id']}
                      style={styles.serchResultItemContainer}>
                      <TouchableOpacity
                        onPress={async () => {
                          const id_2 = item['_id'];
                          const eventId_2 = item['eventId'];
                          const licenseNname_2 =
                            item['softwarelicense']['license_name'];
                          await AsyncStorage.setItem(
                            'licenseId2',
                            JSON.stringify(id_2),
                          );
                          await AsyncStorage.setItem(
                            'licenseEventId2',
                            eventId_2,
                          );
                          await AsyncStorage.setItem(
                            'licenseNname2',
                            licenseNname_2,
                          );
                          handleSelectedLicense2();
                        }}>
                        <Text style={styles.serchResultHeading}>
                          {item['softwarelicense']['license_name']}
                        </Text>
                        <Text style={styles.serchResultDetails}>
                          {item['softwarelicense']['description']}
                        </Text>
                        <View style={styles.separator}></View>
                      </TouchableOpacity>
                    </ScrollView>
                  </>
                );
              })}
            </View>
          </View>
        </Modal>
        {/* Second Modal end here */}
        {/* How to Overlay start here */}
        <Modal
          propagateSwipe
          isVisible={isHowto}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInTiming={1000}
          animationOutTiming={1000}
          avoidKeyboard={true}
          onBackdropPress={() => setHowto(false)}
          onBackButtonPress={() => setHowto(false)}
          backdropTransitionOutTiming={0}
          // deviceWidth={deviceWidth / 1.3}
          onSwipeComplete={() => setHowto(false)}
          swipeDirection="right"
          customBackdrop={
            <TouchableWithoutFeedback onPress={() => setHowto(false)}>
              <View style={{flex: 1, backgroundColor: 'white'}} />
            </TouchableWithoutFeedback>
          }>
          <>
            <View style={{backgroundColor: 'white', flex: 1}}>
              <ScrollView>
                <TouchableOpacity
                  style={{marginLeft: 'auto'}}
                  onPress={() => setHowto(false)}>
                  <Entypo name="cross" size={40} />
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                  <Text style={[styles.heading, {fontSize: 24}]}>
                    How to check license compatibility
                  </Text>
                  <Text style={[styles.heading]}>1. Search and select the license</Text>

                </View>
              </ScrollView>
            </View>
          </>
        </Modal>
      </View>

      {loading ? <AppLoader /> : null}

      {feild1 && feild2 == 'temp' ? (
        <HowToIcon onPress={() => setHowto(true)} />
      ) : null}
      <Header title="License Compatibility" />
      <View style={styles.container}>
        <Text style={styles.heading}>Check license compatibility below</Text>
        <View style={styles.inputsContainer}>
          <TouchableOpacity
            onPress={async () => {
              setModal1Visible(true);
            }}>
            <View style={styles.inputsStyleContainer}>
              {feild1 == 'temp' ? (
                <Text style={styles.inputsStyleText}>License 1</Text>
              ) : (
                <Text style={styles.inputsTitleText}>{feild1}</Text>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModal2Visible(true);
            }}>
            <View style={styles.inputsStyleContainer}>
              {feild2 == 'temp' ? (
                <Text style={styles.inputsStyleText}>License 2</Text>
              ) : (
                <Text style={styles.inputsTitleText}>{feild2}</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="arrow-up-bold"
            size={50}
            color={colors.primary}
          />
          <MaterialCommunityIcons
            style={styles.downIcontyle}
            name="arrow-down-bold"
            size={50}
            color={colors.primary}
          />
        </View>
        <TouchableOpacity
          disabled={feild1 == 'temp'}
          // disabled={feild2 == 'temp'}
          style={[
            {
              backgroundColor:
                feild1 && feild2 == 'temp' ? '#a9a9a9' : '#078F04',
            },
            styles.button,
          ]}
          onPress={fetchResults}>
          <Text style={styles.text}>Check</Text>
        </TouchableOpacity>
        {result ? (
          <>
            <ScrollView>
              <View styles={styles.resultsText}>
                <Text style={styles.heading}>Compatibility Results for:</Text>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    color: colors.textDark,
                    fontSize: 18,
                    // marginBottom: 10,
                  }}>
                  {licenseOne} and {licenseTwo}
                </Text>
                <Text
                  style={[styles.heading, {textDecorationLine: 'underline'}]}>
                  Highly recommended-
                </Text>
                <Text style={{
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                    fontSize: 18,
                    // marginBottom: 10,
                  }}>{compatibiltyPercentage}% compatible based on attribution and can {isCompatible !== 'false' ? 'not' : null} be used together in a project</Text>
                <Table borderStyle={{borderWidth: 1}}>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={[styles.tableHeaderText, {color: colors.textDark}]}></Row>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={styles.tableDatarText}></Row>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={styles.tableDatarText}></Row>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={styles.tableDatarText}></Row>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={styles.tableDatarText}></Row>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={styles.tableDatarText}></Row>
                  <Row
                    data={resultTableContent.tableHead}
                    flexArr={[3, 1, 1]}
                    textStyle={styles.tableDatarText}></Row>
                </Table>
              </View>
            </ScrollView>
            <View style={styles.readMoreContainer}>
              <Text style={styles.readMoreText}>Read more</Text>
              <MaterialIcons
                style={styles.readMoreIcon}
                name="keyboard-arrow-down"
                size={40}
                color={colors.primary}
              />
            </View>
          </>
        ) : null}
      </View>
    </>
  );
};

export default LicenseCompatibility;
