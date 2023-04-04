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
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import styles from '../LicenseCompatibility/style';

import * as Progress from 'react-native-progress';
import colors from '../../../assets/colors/colors';
import axios from 'axios';
import AppLoader from '../../components/AppLoader';

const SliderItemDetails = ({route}) => {
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
  const [license1Version, setLicense1Version] = useState('');
  const [license2Version, setLicense2Version] = useState('');
  const [recommendation_details, setRecommendation_details] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const {eventId_1, eventId_2, userId, organizationId} = route.params;
    const fetchData = async () => {
      try {
        setLoading(true);
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

        if (
          Object.keys(LicensesCompatibilityData.data.license_comparison)
            .length != 0
        ) {
          // console.log(
          //   LicensesCompatibilityData.data.license_comparison.comparisons,
          // );
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
            LicensesCompatibilityData.data.license_comparison
              ?.license_1_logo_url,
          );
          setLicenseLogo2(
            LicensesCompatibilityData.data.license_comparison
              ?.license_2_logo_url,
          );
          setComparison(
            LicensesCompatibilityData.data.license_comparison?.comparisons,
          );
          setLicense1Version(
            LicensesCompatibilityData.data.license_comparison
              ?.license_1_version,
          );
          setLicense2Version(
            LicensesCompatibilityData.data.license_comparison
              ?.license_2_version,
          );
          setRecommendation_details(
            LicensesCompatibilityData.data.license_comparison
              ?.recommendation_details,
          );
          // console.log(licenseLogo1);
          setLoading(false);
        } else {
          setLoading(false);
          Alert.alert(
            'Error message',
            `Compatibility result for this pair is not available yet, you can try other licenses"`,
          );
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? <AppLoader /> : null}

      <Header title="Full In-Depth Comparison" />
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingBottom: 30,
          paddingTop: 60,
          height:
            compatibiltyPercentage == ''
              ? Dimensions.get('window').height
              : null,
        }}>
        {/* {comparison ? ( */}
        <>
          <FlatList
            ListHeaderComponent={
              Object.keys(licenseComaparison).length != 0 && (
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
                      {licenseLogo1 && (
                        <Image
                          resizeMode="contain"
                          style={styles.logoStyle}
                          source={{
                            uri: licenseLogo1,
                          }}
                        />
                      )}
                      <View>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            maxWidth: 140,
                            textAlign: 'center',
                          }}>
                          {licenseOne}
                        </Text>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            alignSelf: 'center',
                          }}>
                          {license1Version}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.vsText}>VS</Text>
                    <View style={styles.imagesContainer}>
                      {licenseLogo2 && (
                        <Image
                          resizeMode="contain"
                          style={styles.logoStyle}
                          source={{uri: licenseLogo2}}
                        />
                      )}
                      <View>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            maxWidth: 140,
                            textAlign: 'center',
                          }}>
                          {licenseTwo}
                        </Text>
                        <Text
                          style={{
                            paddingTop: 0,
                            color: colors.textDark,
                            alignSelf: 'center',
                          }}>
                          {license2Version}
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

                  {compatibiltyPercentage < 70 ? (
                    <Text
                      style={{
                        paddingBottom: 10,
                        fontSize: 21,
                        color:
                          compatibiltyPercentage > 50 ? colors.primary : 'red',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        alignSelf: 'center',
                      }}>
                      "Can {compatibiltyPercentage < 50 ? 'not' : null} be used
                      together in a project"
                    </Text>
                  ) : null}

                  {compatibiltyPercentage >= 70 ? (
                    <Text
                      style={{
                        paddingBottom: 10,
                        fontSize: 21,
                        color:
                          compatibiltyPercentage > 50 ? colors.primary : 'red',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        alignSelf: 'center',
                      }}>
                      "Highly recommended to use together in a project""
                    </Text>
                  ) : null}

                  {/* Recommendation Details */}

                  {recommendation_details ? (
                    <>
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
                        Recommendation Details
                      </Text>
                      <Text style={{color: 'black'}}>
                        {recommendation_details}
                      </Text>
                    </>
                  ) : null}

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
                        <Text style={styles.tableHeaderText}>{licenseOne}</Text>
                      </View>
                      <View
                        style={[
                          styles.tableItemConatainer,
                          {borderRightWidth: 0},
                        ]}>
                        <Text style={styles.tableHeaderText}>{licenseTwo}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }
            ListFooterComponent={
              <>
                {recommendation ? (
                  <>
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
                      Recommendation
                    </Text>
                    <Text style={{color: 'black'}}>{recommendation}</Text>
                  </>
                ) : null}

                {disclaimer ? (
                  <>
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
                      Disclaimer
                    </Text>
                    <Text style={{color: 'black'}}>{disclaimer}</Text>
                  </>
                ) : null}
              </>
            }
            // scrollEnabled={false}
            data={comparison}
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
                  style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
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
