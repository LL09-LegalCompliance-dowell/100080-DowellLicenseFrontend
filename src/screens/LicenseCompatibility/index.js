import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useMemo, useEffect, useRef} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import Octicons from 'react-native-vector-icons/Octicons';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import styles from './style';
import Header from '../../components/Header';
import HowToIcon from './HowToIcon';
import AppLoader from '../../components/AppLoader';
import RBSheet from 'react-native-raw-bottom-sheet';

import Image1 from './images/Compatibility1.jpg';
import Image2 from './images/Compatibility2.jpg';
import Image3 from './images/Compatibility3.jpg';
import Image4 from './images/Compatibility4.jpg';
import Image5 from './images/Compatibility5.jpg';

const LicenseCompatibility = ({navigation}) => {
  const [res, setRes] = useState({});
  const [historyRes, setHistoryRes] = useState({});
  const [permissions, setPermissions] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [historypermissions, historysetPermissions] = useState([]);
  const [historyconditions, historysetConditions] = useState([]);
  const [haveTable, setHaveTable] = useState(false);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [feild1, setFeild1] = useState('temp');
  const [feild2, setFeild2] = useState('temp');
  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);
  const [isHowto, setHowto] = useState(false);
  const [licenses1, setLicenses1] = useState([]);
  const [licenses2, setLicenses2] = useState([]);

  const [searchedData1, setSearchedData1] = useState(licenses1);
  const [searchedData2, setSearchedData2] = useState(licenses2);
  const [historyData, setHistoryData] = useState([]);

  const refBottomSheet1 = useRef();

  // Get organization and User IDs from local storage
  const [orgId, setOrgId] = useState('');
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const getOrgId = async () => {
      try {
        const org_id = await AsyncStorage.getItem('org_id');
        const user_id = await AsyncStorage.getItem('user_id');
        console.log(await AsyncStorage.getItem('user_id'));
        setOrgId(org_id);
        setUserId(user_id);
      } catch (error) {
        console.log(error);
      }
    };
    getOrgId();
  }, []);

  //Fetching all licencses into the state
  useEffect(() => {
    const FetchLicenses = async () => {
      try {
        setLoading(true);
        const LicensesData = await axios.get(
          'https://100080.pythonanywhere.com/api/licenses/',
        );
        if (LicensesData.data) {
          setLicenses1(LicensesData.data.data);
          setSearchedData1(LicensesData.data.data);
          setLicenses2(LicensesData.data.data);
          setSearchedData2(LicensesData.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchLicenses();
  }, []);

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

  //Feting the compatibility results
  const fetchResults = async () => {
    setLoading(true);
    const id1 = await AsyncStorage.getItem('licenseEventId1');
    const id2 = await AsyncStorage.getItem('licenseEventId2');
    console.log(id1, id2, userId, orgId);
    try {
      const LicensesCompatibilityData = await axios.post(
        'https://100080.pythonanywhere.com/api/licenses/',
        {
          action_type: 'check-compatibility',
          license_event_id_one: id1,
          license_event_id_two: id2,
          user_id: userId,
          organization_id: orgId,
        },
      );
      // console.log(LicensesCompatibilityData.data);
      if (
        LicensesCompatibilityData?.data?.license_1?.permissions &&
        LicensesCompatibilityData?.data?.license_2?.permissions
      ) {
        console.log('hello');
        setHaveTable(true);
        setPermissions([
          {
            action: 'Patent Use',
            permission1:
              LicensesCompatibilityData?.data?.license_1?.permissions[0]
                ?.permission,
            permission2:
              LicensesCompatibilityData?.data?.license_2?.permissions[0]
                ?.permission,
          },
          {
            action: 'Patent Grant',
            permission1:
              LicensesCompatibilityData?.data?.license_1?.permissions[1]
                ?.permission,
            permission2:
              LicensesCompatibilityData?.data?.license_2?.permissions[1]
                ?.permission,
          },
        ]);

        setConditions([
          {
            action: 'Disclose Source',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[0]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[0]
                ?.permission,
          },

          {
            action: 'Network Use is for Distribution',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[1]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[1]
                ?.permission,
          },
          {
            action: 'Release Under Same License',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[2]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[2]
                ?.permission,
          },
          {
            action: 'State Changes',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[3]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[3]
                ?.permission,
          },
          {
            action: 'Code can be used in closed source project',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[4]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[4]
                ?.permission,
          },
        ]);
      }

      setRes(LicensesCompatibilityData?.data);

      // console.log(LicensesCompatibilityData.data.license_1.permissions);
      setResult(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert(
        'Error message',
        `We apologize, but something seems to have gone wrong. Please try again later.`,
      );
    }
  };
  // Searching functionality is being handled here
  const searchLicensesFunction1 = text => {
    const searchData = licenses1.filter(item => {
      return item['softwarelicense']['license_name']
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    setSearchedData1(searchData);
  };

  const searchLicensesFunction2 = text => {
    const searchData = licenses2.filter(item => {
      return item['softwarelicense']['license_name']
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    setSearchedData2(searchData);
  };

  /////////
  const openHistory = async () => {
    refBottomSheet1.current.open();
    try {
      console.log('started');
      console.log(userId, orgId);

      setLoading(true);
      const HistoryData = await axios.get(
        `https://100080.pythonanywhere.com/api/licenses/?collection_type=license-compatibility-history&user_id=${userId}&organization_id=${orgId}`,
      );
      if (HistoryData.data.length != 0) {
        setHistoryData(HistoryData.data.data);
        // console.log(HistoryData.data.data);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHistoryDetails = async item => {
    setLoading(true);

    const id1 =
      item?.license_compatibility_history?.comparison_detail
        ?.license_1_event_id;

    const id2 =
      item?.license_compatibility_history?.comparison_detail
        ?.license_2_event_id;
    console.log(userId, orgId, id1, id2);
    try {
      const LicensesCompatibilityData = await axios.post(
        'https://100080.pythonanywhere.com/api/licenses/',
        {
          action_type: 'check-compatibility',
          license_event_id_one: id1,
          license_event_id_two: id2,
          user_id: userId,
          organization_id: orgId,
        },
      );
      console.log(LicensesCompatibilityData.data);
      if (
        LicensesCompatibilityData?.data?.license_1?.permissions &&
        LicensesCompatibilityData?.data?.license_2?.permissions
      ) {
        console.log('hello');
        // setHaveTable(true);
        historysetPermissions([
          {
            action: 'Patent Use',
            permission1:
              LicensesCompatibilityData?.data?.license_1?.permissions[0]
                ?.permission,
            permission2:
              LicensesCompatibilityData?.data?.license_2?.permissions[0]
                ?.permission,
          },
          {
            action: 'Patent Grant',
            permission1:
              LicensesCompatibilityData?.data?.license_1?.permissions[1]
                ?.permission,
            permission2:
              LicensesCompatibilityData?.data?.license_2?.permissions[1]
                ?.permission,
          },
        ]);

        historysetConditions([
          {
            action: 'Disclose Source',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[0]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[0]
                ?.permission,
          },

          {
            action: 'Network Use is for Distribution',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[1]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[1]
                ?.permission,
          },
          {
            action: 'Release Under Same License',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[2]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[2]
                ?.permission,
          },
          {
            action: 'State Changes',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[3]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[3]
                ?.permission,
          },
          {
            action: 'Code can be used in closed source project',
            license_1_permission:
              LicensesCompatibilityData?.data?.license_1?.conditions[4]
                ?.permission,
            license_2_permission:
              LicensesCompatibilityData?.data?.license_2?.conditions[4]
                ?.permission,
          },
        ]);
        setHistoryRes(LicensesCompatibilityData?.data);
        console.log(historypermissions, historyconditions);
        if (
          historypermissions.length != 0 &&
          historyconditions.length != 0 &&
          LicensesCompatibilityData?.data?.license_1?.limitations.length != 0
        ) {
          navigation.navigate('ResultsDetailsScreen', {
            res: historyRes,
            permissions: historypermissions,
            conditions: historyconditions,
          });
          refBottomSheet1.current.close();
        }
      } else {
        Alert.alert(
          'Error message',
          `We apologize, but these licenses have not yielded results yet. Please try again later.`,
        );
        setLoading(false);
      }

      setHistoryRes(LicensesCompatibilityData?.data);

      // console.log(LicensesCompatibilityData.data.license_1.permissions);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert(
        'Error message',
        `We apologize, but something seems to have gone wrong. Please try again later.`,
      );
    }
  };

  return (
    <>
      <View>
        {/* First Modal starts here */}
        <Modal
          propagateSwipe
          isVisible={isModal1Visible}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInTiming={1000}
          animationOutTiming={200}
          avoidKeyboard={true}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setModal1Visible(false)}
          onBackButtonPress={() => setModal1Visible(false)}>
          <View style={styles.SearchContainer}>
            <MyTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search licence"
              style={{paddingLeft: 10, color: 'black', fontSize: 16}}
              marginVertical={3}
              placeholderTextColor="gray"
              onChangeText={text => searchLicensesFunction1(text)}
            />

            <View style={styles.serchResultContainer}>
              <FlatList
                initialNumToRender={10}
                data={searchedData1}
                renderItem={(i, index) => {
                  return (
                    <View
                      style={styles.serchResultItemContainer}
                      keyExtractor={index}>
                      <TouchableOpacity
                        onPress={async () => {
                          const id_1 = i.item['_id'];
                          const eventId_1 = i.item['eventId'];
                          const licenseNname_1 =
                            i.item['softwarelicense']['license_name'];
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
                          {i.item['softwarelicense']['license_name']}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={styles.serchResultDetails}>
                          {i.item['softwarelicense']['description']}
                        </Text>
                        <View style={styles.separator}></View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
        {/* First Modal ends here */}

        {/* Second Modal starts here */}
        <Modal
          propagateSwipe
          isVisible={isModal2Visible}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInTiming={1000}
          animationOutTiming={200}
          avoidKeyboard={true}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setModal2Visible(false)}
          onBackButtonPress={() => setModal2Visible(false)}>
          <View style={[styles.SearchContainer]}>
            <MyTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search licence"
              style={{paddingLeft: 10, color: 'black', fontSize: 16}}
              marginVertical={3}
              placeholderTextColor="gray"
              onChangeText={text => searchLicensesFunction2(text)}
            />
            <View style={styles.serchResultContainer}>
              <FlatList
                data={searchedData2}
                renderItem={(i, index) => {
                  return (
                    <View
                      initialNumToRender={10}
                      keyExtractor={index}
                      style={styles.serchResultItemContainer}>
                      <TouchableOpacity
                        onPress={async () => {
                          const id_2 = i.item['_id'];
                          const eventId_2 = i.item['eventId'];
                          const licenseNname_2 =
                            i.item['softwarelicense']['license_name'];
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
                          {i.item['softwarelicense']['license_name']}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={styles.serchResultDetails}>
                          {i.item['softwarelicense']['description']}
                        </Text>
                        <View style={styles.separator}></View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
              {/* {searchedData2.length === 0 && (
                <View>
                  <Text style={styles.heading}>No result found</Text>
                </View>
              )} */}
            </View>
          </View>
        </Modal>
        {/* Second Modal ends here */}
        {/* How to Overlay starts here */}
        <Modal
          propagateSwipe
          isVisible={isHowto}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={true}
          onBackdropPress={() => setHowto(false)}
          onBackButtonPress={() => setHowto(false)}
          backdropTransitionOutTiming={0}
          onSwipeComplete={() => setHowto(false)}
          swipeDirection="right"
          customBackdrop={
            <TouchableWithoutFeedback onPress={() => setHowto(false)}>
              <View style={{flex: 1, backgroundColor: 'white'}} />
            </TouchableWithoutFeedback>
          }>
          <>
            <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
              <TouchableOpacity
                style={{marginLeft: 'auto'}}
                onPress={() => setHowto(false)}>
                <Entypo name="cross" size={40} color="darkgray" />
              </TouchableOpacity>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View flex={1} onStartShouldSetResponder={() => true}>
                  <Text
                    style={[
                      styles.heading,
                      {fontSize: 24, alignSelf: 'center'},
                    ]}>
                    How to check license compatibility
                  </Text>
                  <Text style={[styles.heading]}>
                    1. Search and select the license
                  </Text>
                  <Text
                    style={[
                      styles.heading,
                      {fontSize: 16, alignSelf: 'center'},
                    ]}>
                    Enter the name of the licenses you want to check the
                    compatibility for. Search the first license name and select
                    the license. Then search the second license name and select
                    the license.
                  </Text>
                  <Image
                    source={Image1}
                    style={{resizeMode: 'contain', flex: 1, width: '100%'}}
                  />
                  <Image
                    source={Image2}
                    style={{resizeMode: 'contain', flex: 1, width: '100%'}}
                  />

                  <Text style={[styles.heading]}>
                    2. Click check button to view results
                  </Text>
                  <Text
                    style={[
                      styles.heading,
                      {fontSize: 16, alignSelf: 'center'},
                    ]}>
                    After the two licenses are selected, now click the “Check”
                    button to view the compatibility results.
                  </Text>
                  <Image
                    source={Image3}
                    style={{resizeMode: 'contain', flex: 1, width: '100%'}}
                  />

                  <Text style={[styles.heading]}>
                    3. Check the compatibility results
                  </Text>
                  <Image
                    source={Image4}
                    style={{
                      resizeMode: 'contain',
                      flex: 1,
                      width: '100%',
                      marginTop: -620,
                      marginBottom: -600,
                    }}
                  />

                  <View
                    style={{
                      height: 2,
                      width: '100%',
                      backgroundColor: 'gray',
                      marginVertical: 30,
                    }}></View>
                  <Text
                    style={[
                      styles.heading,
                      {fontSize: 24, alignSelf: 'center'},
                    ]}>
                    Video Tutorial for all the above given steps{' '}
                  </Text>
                  <Octicons
                    name="image"
                    size={170}
                    color={colors.textDark}
                    style={{alignSelf: 'center'}}
                  />
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
      <Header
        title="License Compatibility"
        historyIcon="history"
        openHistory={openHistory}
      />
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
          disabled={feild1 && feild2 == 'temp'}
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
            <FlatList
              ListHeaderComponent={
                <View styles={styles.resultsText}>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: '#A7A7A7',
                      marginBottom: 15,
                    }}></View>
                  <Text
                    style={[
                      styles.heading,
                      {
                        fontWeight: '400',
                        alignSelf: 'center',
                        textTransform: 'uppercase',
                      },
                    ]}>
                    Compatibility Results
                  </Text>
                  {/* Logos */}
                  <View style={styles.logosConatainer}>
                    <View style={styles.imagesContainer}>
                      <Image
                        resizeMode="contain"
                        style={styles.logoStyle}
                        source={{
                          uri: res?.license_1?.logo_detail?.url,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            maxWidth: 140,
                            textAlign: 'center',
                          }}>
                          {res?.license_1?.license_name}
                        </Text>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            alignSelf: 'center',
                          }}>
                          {res?.license_1?.version}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.vsText}>VS</Text>
                    <View style={styles.imagesContainer}>
                      <Image
                        resizeMode="contain"
                        style={styles.logoStyle}
                        source={{uri: res?.license_2?.logo_detail?.url}}
                      />
                      <View>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            maxWidth: 140,
                            textAlign: 'center',
                          }}>
                          {res.license_2?.license_name}
                        </Text>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            alignSelf: 'center',
                          }}>
                          {res?.license_2?.version}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.heading,
                      {
                        fontWeight: '700',
                        fontFamily: 'roboto',
                        fontSize: 20,
                        paddingBottom: 0,
                      },
                    ]}>
                    Recommendation Percentage
                  </Text>
                  <Text style={styles.lightColor}>
                    *Numbers are Based on Attributions.
                  </Text>
                  <View style={styles.progressBarConatainer}>
                    <View>
                      <Progress.Bar
                        progress={res?.percentage_of_compatibility / 100}
                        width={313}
                        height={20}
                        borderRadius={20}
                        color={colors.primary}
                        unfilledColor={'#D3D3D3'}
                        borderColor={'#D3D3D3'}
                      />
                    </View>
                    <Text style={styles.percentage}>
                      {res?.percentage_of_compatibility}%
                    </Text>
                  </View>
                  {res?.percentage_of_compatibility < 70 ? (
                    <Text
                      style={{
                        paddingBottom: 10,
                        fontSize: 21,
                        color:
                          res?.percentage_of_compatibility > 50
                            ? colors.primary
                            : 'red',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        alignSelf: 'center',
                      }}>
                      "Can{' '}
                      {res?.percentage_of_compatibility < 50 ? 'not' : null} be
                      used together in a project"
                    </Text>
                  ) : null}

                  {res?.percentage_of_compatibility >= 70 ? (
                    <Text
                      style={{
                        paddingBottom: 10,
                        fontSize: 21,
                        color:
                          res?.percentage_of_compatibility > 50
                            ? colors.primary
                            : 'red',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        alignSelf: 'center',
                      }}>
                      "Highly recommended to use together in a project"
                    </Text>
                  ) : null}

                  {haveTable && (
                    <Text
                      style={{
                        color: 'black',
                        paddingBottom: 7,
                        paddingTop: 30,
                      }}>
                      The Explanation is based on the below given table.
                    </Text>
                  )}

                  {/* Table starts here */}
                  {haveTable && (
                    <View style={{flexDirection: 'column'}}>
                      <View style={styles.tableHederConatainer}>
                        <View style={[styles.tableItemConatainer, {flex: 2}]}>
                          <Text style={styles.tableHeaderText}>Category</Text>
                        </View>
                        <View style={styles.tableItemConatainer}>
                          <Text style={styles.tableHeaderText}>
                            {res.license_1.license_name}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.tableItemConatainer,
                            {borderRightWidth: 0},
                          ]}>
                          <Text style={styles.tableHeaderText}>
                            {res.license_2.license_name}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.tableHederConatainer}>
                        <Text
                          style={[
                            styles.heading,
                            {
                              fontWeight: '400',
                              fontFamily: 'roboto',
                              fontSize: 18,
                              padding: 10,
                              textAlign: 'center',
                            },
                          ]}>
                          Permissions in Addition to Commercial Use,
                          Distribution and Modification
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              }
              ListFooterComponent={
                haveTable ? (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ResultsDetailsScreen', {
                        res: res,
                        permissions: permissions,
                        conditions: conditions,
                      })
                    }
                    style={styles.readMoreContainer}>
                    <Text style={styles.readMoreText}>Read more</Text>
                    <MaterialCommunityIcons
                      style={styles.readMoreIcon}
                      name="chevron-down"
                      size={40}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                ) : (
                  <>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        paddingTop: 30,
                      }}>
                      IMPORTANT
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'justify',
                        paddingBottom: 85,
                        color: 'black',
                        textAlign: 'center',
                      }}>
                      We apologize, but these are not the final results.
                      Legalzard's team is still working on comparing these
                      licenses.
                    </Text>
                  </>
                )
              }
              // scrollEnabled={false}
              data={permissions}
              keyExtractor={item => item.action}
              showsVerticalScrollIndicator={false}
              renderItem={item =>
                haveTable && (
                  <View style={styles.tableDataConatainer}>
                    <View style={[styles.tableItemConatainer, {flex: 2}]}>
                      <Text style={{padding: 7, color: colors.textDark}}>
                        {item.item.action}
                      </Text>
                    </View>
                    <View style={styles.tableItemConatainer}>
                      <Text
                        style={[
                          styles.tableDatarText,
                          {
                            color:
                              item.item.permission1 == 'Yes' ? 'green' : 'red',
                          },
                        ]}>
                        {item.item.permission1}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.tableItemConatainer,
                        {borderRightWidth: 0},
                      ]}>
                      <Text
                        style={[
                          styles.tableDatarText,
                          {
                            color:
                              item.item.permission2 == 'Yes' ? 'green' : 'red',
                          },
                        ]}>
                        {item.item.permission2}
                      </Text>
                    </View>
                  </View>
                )
              }
            />
          </>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 60,
              paddingHorizontal: 10,
            }}>
            <Text style={{fontSize: 18, color: '#828282'}}>DISCLAIMER</Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'justify',
                paddingBottom: 85,
                color: '#828282',
              }}>
              The information provided on this website does not, and is not
              intended to, constitute legal advice; all information, content,
              and materials available on this site are for general informational
              purposes only. The materials on this website may contain
              inaccuracies and typographical errors. While we endeavor to keep
              the information up to date and correct, we make no representations
              or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose. Any reliance on such information is therefore strictly at
              your own risk. Legalzard App (UXLivingLab) reserves the right, in
              its sole discretion, to correct any error or omission in any
              portion of the site. In no event will we be liable for any loss or
              damage including without limitation, indirect or consequential
              loss or damage, or any loss or damage whatsoever arising from loss
              of data or profits arising out of, or in connection with, the use
              of this website.
            </Text>
          </ScrollView>
        )}
        <View style={styles.bottomSheetContainer}>
          <RBSheet
            ref={refBottomSheet1}
            height={450}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                opacity: 1,
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: 'white',
                opacity: 1,
              },
            }}>
            {loading ? <AppLoader /> : null}

            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  backgroundColor: 'white',
                }}>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
                  Compatibilities you've searched
                </Text>
                <ScrollView style={{width: '100%', marginBottom: 50}}>
                  <View style={styles.serchResultItemContainer}>
                    {historyData.length != 0 ? (
                      historyData.map(item => (
                        <TouchableOpacity
                          key={item._id}
                          onPress={() => handleHistoryDetails(item)}>
                          <Text
                            style={[
                              styles.serchResultHeading,
                              {paddingVertical: 10},
                            ]}>
                            {`${item?.license_compatibility_history?.comparison_detail?.license_1?.license_name} vs ${item?.license_compatibility_history?.comparison_detail?.license_2?.license_name}`}
                          </Text>
                          {/* <Text
                          numberOfLines={1}
                          style={styles.serchResultDetails}>
                          Mozila vs MIT
                        </Text> */}
                          <View style={styles.separator}></View>
                        </TouchableOpacity>
                      ))
                    ) : (
                      <Text
                        style={[
                          styles.resultsText,
                          {textAlign: 'center', paddingTop: 30},
                        ]}>
                        Loading...
                      </Text>
                    )}
                  </View>
                </ScrollView>
              </View>
            </View>
          </RBSheet>
        </View>
      </View>
    </>
  );
};

export default LicenseCompatibility;
