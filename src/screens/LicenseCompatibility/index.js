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
import React, {useState, useMemo} from 'react';
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

import Image1 from './Compatibility1.png';
import Image2 from './Compatibility2.png';
import Image3 from './Compatibility3.png';
import Image4 from './Compatibility4.png';
import Image5 from './Compatibility5.png';

const LicenseCompatibility = ({navigation}) => {
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

  const [isCompatible, setIsCompatible] = useState(false);
  const [compatibiltyPercentage, setCompatibiltyPercentage] = useState('');
  const [disclaimer, setDisclaimer] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [licenseOne, setLicenseOne] = useState('');
  const [licenseTwo, setLicenseTwo] = useState('');
  const [licenseComaparison, setLicenseComaparison] = useState({});
  const [tableLicenseTwo, setTableLicenseTwo] = useState('');
  const [licenseLogo1, setLicenseLogo1] = useState('');
  const [licenseLogo2, setLicenseLogo2] = useState('');
  const [comparison, setComparison] = useState([]);

  let firstFive = comparison.slice(0, 5);
  if (firstFive.length < 5) {
    firstFive = comparison.slice(0, comparison.length);
  }

  //Fetching all licencses into the state
  useMemo(async () => {
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
    try {
      const LicensesCompatibilityData = await axios.post(
        'https://100080.pythonanywhere.com/api/licenses/',
        {
          action_type: 'check-compatibility',
          license_event_id_one: id1,
          license_event_id_two: id2,
        },
      );

      if (
        Object.keys(LicensesCompatibilityData.data.license_comparison).length !=
        0
      ) {
        // if (LicensesCompatibilityData.data.license_comparison)
        setLicenseComaparison(
          LicensesCompatibilityData.data.license_comparison,
        );
        setCompatibiltyPercentage(
          LicensesCompatibilityData.data?.license_comparison
            ?.percentage_of_compatibility,
        );

        setDisclaimer(
          LicensesCompatibilityData.data?.license_comparison?.disclaimer,
        );
        setRecommendation(
          LicensesCompatibilityData.data?.license_comparison?.recommendation,
        );
        setIsCompatible(LicensesCompatibilityData.data.is_compatible);
        setLicenseOne(
          LicensesCompatibilityData.data.license_comparison?.license_1_name,
        );
        setLicenseTwo(
          LicensesCompatibilityData.data.license_comparison?.license_2_name,
        );
        setLicenseLogo1(
          LicensesCompatibilityData.data.license_comparison?.license_1_logo_url,
        );
        setLicenseLogo2(
          LicensesCompatibilityData.data.license_comparison?.license_2_logo_url,
        );
        setComparison(
          LicensesCompatibilityData.data.license_comparison?.comparisons,
        );
        console.log(LicensesCompatibilityData.data);

        // console.log(comparison);
        setResult(true);
        setLoading(false);
        // await AsyncStorage.removeItem('licenseEventId1');
        // await AsyncStorage.removeItem('licenseEventId2');
        // setFeild1('temp');
        // setFeild2('temp');
      } else {
        setResult(false);
        setLoading(false);
        Alert.alert(
          'Error message',
          `Compatibility result for this pair is not available yet, you can try other licenses"`,
        );
      }
    } catch (error) {
      console.log(error);
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
          animationOutTiming={1000}
          avoidKeyboard={true}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setModal1Visible(false)}
          onBackButtonPress={() => setModal1Visible(false)}>
          <View style={styles.SearchContainer}>
            <MyTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search licence"
              style={{paddingLeft: 10}}
              marginVertical={3}
              placeholderTextColor="gray"
              onChangeText={text => searchLicensesFunction1(text)}
            />
            <ScrollView style={styles.serchResultContainer}>
              {searchedData1.map((item, index) => {
                return (
                  <>
                    <View style={styles.serchResultItemContainer}>
                      <TouchableOpacity
                        key={index}
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
                        <Text
                          numberOfLines={1}
                          style={styles.serchResultDetails}>
                          {item['softwarelicense']['description']}
                        </Text>
                        <View style={styles.separator}></View>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              })}
            </ScrollView>
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
              placeholderTextColor="gray"
              onChangeText={text => searchLicensesFunction2(text)}
            />
            <ScrollView style={styles.serchResultContainer}>
              {searchedData2.map((item, index) => {
                return (
                  <>
                    <View key={index} style={styles.serchResultItemContainer}>
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
                        <Text
                          numberOfLines={1}
                          style={styles.serchResultDetails}>
                          {item['softwarelicense']['description']}
                        </Text>
                        <View style={styles.separator}></View>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              })}
            </ScrollView>
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
                    style={{resizeMode: 'contain', flex: 1, width: '100%', marginTop:-620, marginBottom:-600}}
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
                            uri: licenseLogo1,
                          }}
                        />
                        <Text style={{paddingTop: 0, color: colors.textDark}}>
                          {licenseOne}
                        </Text>
                      </View>
                      <Text style={styles.vsText}>VS</Text>
                      <View style={styles.imagesContainer}>
                        <Image
                          resizeMode="contain"
                          style={styles.logoStyle}
                          source={{uri: licenseLogo2}}
                        />
                        <Text style={{paddingTop: 0, color: colors.textDark}}>
                          {licenseTwo}
                        </Text>
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
                          progress={compatibiltyPercentage / 100}
                          width={313}
                          height={20}
                          borderRadius={20}
                          color={colors.primary}
                          unfilledColor={'#D3D3D3'}
                          borderColor={'#D3D3D3'}
                        />
                      </View>
                      <Text style={styles.percentage}>
                        {compatibiltyPercentage}%
                      </Text>
                    </View>

                    <Text
                      style={{
                        paddingBottom: 10,
                        fontSize: 21,
                        color: isCompatible == true ? colors.primary : 'red',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        alignSelf: 'center',
                      }}>
                      "Can {isCompatible !== 'false' ? 'not' : null} be used
                      together in a project"
                    </Text>

                    <Text
                      style={[
                        styles.heading,
                        {
                          fontWeight: '700',
                          fontFamily: 'roboto',
                          fontSize: 20,
                          paddingBottom: 10,
                        },
                      ]}>
                      Comparison
                    </Text>
                    {/* Table starts here */}
                    <View>
                      <View style={styles.tableHederConatainer}>
                        <View style={[styles.tableItemConatainer, {flex: 2}]}>
                          <Text style={styles.tableHeaderText}>Category</Text>
                        </View>
                        <View style={styles.tableItemConatainer}>
                          <Text style={styles.tableHeaderText}>
                            {licenseOne}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.tableItemConatainer,
                            {borderRightWidth: 0},
                          ]}>
                          <Text style={styles.tableHeaderText}>
                            {licenseTwo}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                }
                ListFooterComponent={
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ResultsDetailsScreen', {
                        comparison,
                        licenseLogo1,
                        licenseLogo2,
                        licenseOne,
                        licenseTwo,
                        compatibiltyPercentage,
                        isCompatible,
                        disclaimer,
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
                }
                // scrollEnabled={false}
                data={firstFive}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
                renderItem={item => (
                  <View style={styles.tableDataConatainer}>
                    <View style={[styles.tableItemConatainer, {flex: 2}]}>
                      <Text style={{padding: 7, color: colors.textDark}}>
                        {item.item.category}
                      </Text>
                    </View>
                    <View style={styles.tableItemConatainer}>
                      <Text
                        style={[
                          styles.tableDatarText,
                          {
                            color:
                              item.item.licence_1.comparison_value == 'Yes'
                                ? 'green'
                                : 'red',
                          },
                        ]}>
                        {item.item.licence_1.comparison_value}
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
                              item.item.licence_2.comparison_value == 'Yes'
                                ? 'green'
                                : 'red',
                          },
                        ]}>
                        {item.item.licence_2.comparison_value}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </>
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
            <Text style={{fontSize: 18}}>DISCLAIMER</Text>
            <Text
              style={{fontSize: 15, textAlign: 'justify', paddingBottom: 85}}>
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
              your own risk. Legalzard App (Dowell) reserves the right, in its
              sole discretion, to correct any error or omission in any portion
              of the site. In no event will we be liable for any loss or damage
              including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data
              or profits arising out of, or in connection with, the use of this
              website.
            </Text>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default LicenseCompatibility;
