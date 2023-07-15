import Header from '../../components/Header';
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
import React, {useEffect, useMemo, useState} from 'react';
import styles from '../LicenseCompatibility/style';

import * as Progress from 'react-native-progress';
import colors from '../../../assets/colors/colors';
import axios from 'axios';
import AppLoader from '../../components/AppLoader';

const SliderItemDetails = ({route}) => {
  const [permissions, setPermissions] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [limitations, setLimitations] = useState([]);
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);
  const [haveTable, setHaveTable] = useState(false);
  const [results, setResults] = useState(false);

  useEffect(() => {
    const {eventId_1, eventId_2, userId, organizationId} = route.params;
    //Feting the compatibility results
    const fetchResults = async () => {
      setLoading(true);
      try {
        const LicensesCompatibilityData = await axios.post(
          'https://100080.pythonanywhere.com/api/licenses/',
          {
            action_type: 'check-compatibility',
            license_event_id_one: eventId_1,
            license_event_id_two: eventId_2,
            user_id: userId,
            organization_id: organizationId,
          },
        );
        setRes(LicensesCompatibilityData.data);
        setResults(true);
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
          setLimitations([
            {
              action: 'Liability',
              limitation1:
                LicensesCompatibilityData?.data?.license_1?.limitations[0]
                  ?.permission,
              limitation2:
                LicensesCompatibilityData?.data?.license_2?.limitations[0]
                  ?.permission,
            },
            {
              action: 'Warranty',
              limitation1:
                LicensesCompatibilityData?.data?.license_1?.limitations[1]
                  ?.permission,
              limitation2:
                LicensesCompatibilityData?.data?.license_2?.limitations[1]
                  ?.permission,
            },
            {
              action: 'Trademark use',
              limitation1:
                LicensesCompatibilityData?.data?.license_1?.limitations[2]
                  ?.permission,
              limitation2:
                LicensesCompatibilityData?.data?.license_2?.limitations[2]
                  ?.permission,
            },
          ]);
        }

        setRes(LicensesCompatibilityData?.data);

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

    fetchResults();
  }, []);

  return (
    <>
      {loading ? <AppLoader /> : null}
      <Header title="Full In-Depth Comparison"/>
      <View
        style={{
          height: results === false ? '100%' : 'auto',
          backgroundColor: 'white',
        }}>
        {results && (
          <>
            <View
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingBottom: 30,
                height: haveTable === false ? '100%' : 'auto',
              }}>
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
                            {res?.license_2?.license_name}
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
                        {res?.percentage_of_compatibility < 50 ? 'not' : null}{' '}
                        be used together in a project"
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
                    {haveTable ? (
                      <>
                        <Text
                          style={{
                            color: 'black',
                            paddingBottom: 7,
                            paddingTop: 30,
                          }}>
                          The Explanation is based on the below given table.
                        </Text>
                        <View>
                          <View style={styles.tableHederConatainer}>
                            <View
                              style={[styles.tableItemConatainer, {flex: 2}]}>
                              <Text style={styles.tableHeaderText}>
                                Category
                              </Text>
                            </View>
                            <View style={styles.tableItemConatainer}>
                              <Text style={styles.tableHeaderText}>
                                {res?.license_1?.license_name}
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.tableItemConatainer,
                                {borderRightWidth: 0},
                              ]}>
                              <Text style={styles.tableHeaderText}>
                                {res?.license_2?.license_name}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={[
                              styles.tableHederConatainer,
                              {alignItems: 'center', justifyContent: 'center'},
                            ]}>
                            <Text
                              style={[
                                styles.heading,
                                {
                                  fontWeight: '400',
                                  fontFamily: 'roboto',
                                  fontSize: 16,
                                  padding: 10,
                                  textAlign: 'center',
                                },
                              ]}>
                              Permissions in Addition to Commercial Use,
                              Distribution and Modification
                            </Text>
                          </View>
                        </View>
                      </>
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
                    )}
                  </View>
                }
                ListFooterComponent={
                  haveTable && (
                    <>
                      <View
                        style={[
                          styles.tableHederConatainer,
                          {alignItems: 'center', justifyContent: 'center'},
                        ]}>
                        <Text
                          style={[
                            styles.heading,
                            {
                              fontWeight: '400',
                              fontFamily: 'roboto',
                              fontSize: 16,
                              padding: 10,
                              textAlign: 'center',
                            },
                          ]}>
                          Conditions
                        </Text>
                      </View>
                      {conditions.map((item, index) => {
                        return (
                          <View key={index} style={styles.tableDataConatainer}>
                            <View
                              style={[styles.tableItemConatainer, {flex: 2}]}>
                              <Text
                                style={{padding: 7, color: colors.textDark}}>
                                {item?.action}
                              </Text>
                            </View>
                            <View style={styles.tableItemConatainer}>
                              <Text
                                style={[
                                  styles.tableDatarText,
                                  {
                                    color:
                                      item?.license_1_permission == 'Yes'
                                        ? 'green'
                                        : 'red',
                                  },
                                ]}>
                                {item?.license_1_permission}
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
                                      item?.license_2_permission == 'Yes'
                                        ? 'green'
                                        : 'red',
                                  },
                                ]}>
                                {item?.license_2_permission}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                      <View
                        style={[
                          styles.tableHederConatainer,
                          {alignItems: 'center', justifyContent: 'center'},
                        ]}>
                        <Text
                          style={[
                            styles.heading,
                            {
                              fontWeight: '400',
                              fontFamily: 'roboto',
                              fontSize: 16,
                              padding: 10,
                              textAlign: 'center',
                            },
                          ]}>
                          Limitations/ Disclaimer
                        </Text>
                      </View>
                      {limitations.map((item, index) => {
                        return (
                          <View key={index} style={styles.tableDataConatainer}>
                            <View
                              style={[styles.tableItemConatainer, {flex: 2}]}>
                              <Text
                                style={{padding: 7, color: colors.textDark}}>
                                {item?.action}
                              </Text>
                            </View>
                            <View style={styles.tableItemConatainer}>
                              <Text
                                style={[
                                  styles.tableDatarText,
                                  {
                                    color:
                                      item?.limitation1 == 'Yes'
                                        ? 'green'
                                        : 'red',
                                  },
                                ]}>
                                {item?.limitation1}
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
                                      item?.limitation1 == 'Yes'
                                        ? 'green'
                                        : 'red',
                                  },
                                ]}>
                                {item?.limitation1}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                      <Text
                        style={[
                          styles.tableHeaderText,
                          {
                            alignSelf: 'flex-start',
                            paddingVertical: 15,
                            paddingTop: 30,
                            marginBottom: 0,
                            fontSize: 20,
                          },
                        ]}>
                        Warranty Disclaimer:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontFamily: 'roboto',
                          fontSize: 17,
                          padding: 0,
                          margin: 0,
                          alignSelf: 'flex-start',
                          color: 'black',
                        }}>
                        {`${res.license_1.license_name}`}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontFamily: 'roboto',
                          fontSize: 15,
                          padding: 0,
                          margin: 0,
                          alignSelf: 'flex-start',
                          color: 'black',
                        }}>
                        {`${res.license_1.risk_for_choosing_license}`}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontFamily: 'roboto',
                          fontSize: 17,
                          padding: 0,
                          marginTop: 10,
                          alignSelf: 'flex-start',
                          color: 'black',
                        }}>
                        {`${res.license_2.license_name}`}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontFamily: 'roboto',
                          fontSize: 15,
                          padding: 0,
                          margin: 0,
                          alignSelf: 'flex-start',
                          color: 'black',
                        }}>
                        {`${res?.license_2?.risk_for_choosing_license}`}
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
                                item?.item?.permission1 == 'Yes'
                                  ? 'green'
                                  : 'red',
                            },
                          ]}>
                          {item?.item?.permission1}
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
                                item?.item?.permission2 == 'Yes'
                                  ? 'green'
                                  : 'red',
                            },
                          ]}>
                          {item?.item?.permission2}
                        </Text>
                      </View>
                    </View>
                  )
                }
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default SliderItemDetails;

// onPress={async () => {
//   setLoading(true);
//   try {
//     const LicensesCompatibilityData =
//       await axios.post(
//         'https://100080.pythonanywhere.com/api/licenses/',
//         {
//           action_type: 'check-compatibility',
//           license_event_id_one: item.eventId_1,
//           license_event_id_two: item.eventId_2,
//           user_id: userId,
//           organization_id: orgId,
//         },
//       );

//     if (
//       Object.keys(
//         LicensesCompatibilityData.data
//           .license_comparison,
//       ).length != 0
//     ) {
//       // console.log(LicensesCompatibilityData.data.license_comparison.comparisons)
//       setLicenseComaparison(
//         LicensesCompatibilityData.data
//           .license_comparison,
//       );
//       setCompatibiltyPercentage(
//         LicensesCompatibilityData.data
//           ?.license_comparison
//           ?.percentage_of_compatibility,
//       );

//       setDisclaimer(
//         LicensesCompatibilityData.data
//           ?.license_comparison?.disclaimer,
//       );
//       setRecommendation(
//         LicensesCompatibilityData.data
//           ?.license_comparison?.recommendation,
//       );
//       setIsCompatible(
//         LicensesCompatibilityData.data.is_compatible,
//       );
//       setLicenseOne(
//         LicensesCompatibilityData.data
//           .license_comparison?.license_1_name,
//       );
//       setLicenseTwo(
//         LicensesCompatibilityData.data
//           .license_comparison?.license_2_name,
//       );
//       setLicenseLogo1(
//         LicensesCompatibilityData.data
//           .license_comparison?.license_1_logo_url,
//       );
//       setLicenseLogo2(
//         LicensesCompatibilityData.data
//           .license_comparison?.license_2_logo_url,
//       );
//       setComparison(
//         LicensesCompatibilityData.data
//           .license_comparison?.comparisons,
//       );
//       setLicense1Version(
//         LicensesCompatibilityData.data
//           .license_comparison?.license_1_version,
//       );
//       setLicense2Version(
//         LicensesCompatibilityData.data
//           .license_comparison?.license_2_version,
//       );
//       setRecommendation_details(
//         LicensesCompatibilityData.data
//           .license_comparison?.recommendation_details,
//       );

//       navigation.navigate('SliderItemDetails', {
//         comparison,
//         licenseLogo1,
//         licenseLogo2,
//         licenseOne,
//         licenseTwo,
//         compatibiltyPercentage,
//         isCompatible,
//         disclaimer,
//         recommendation_details,
//         license1Version,
//         license2Version,
//         recommendation,
//       });
//       console.log(licenseLogo1);
//       setLoading(false);
//     } else {
//       setLoading(false);
//       Alert.alert(
//         'Error message',
//         `Compatibility result for this pair is not available yet, you can try other licenses"`,
//       );
//     }
//   } catch (error) {
//     console.log(error);
//     setLoading(false);
//   }
// }}
