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
} from 'react-native';
import React from 'react';
import styles from './style';

import * as Progress from 'react-native-progress';
import colors from '../../../assets/colors/colors';

const ResultsDetailsScreen = ({route}) => {
  const {res, permissions, conditions} = route.params;
  console.log(conditions);

  console.log(res?.license_1?.limitations);

  const limitation = [
    {
      action: 'Liability',
      limitation1: res?.license_1?.limitations[0]?.permission,
      limitation2: res?.license_2?.limitations[0]?.permission,
    },
    {
      action: 'Warranty',
      limitation1: res?.license_1?.limitations[1]?.permission,
      limitation2: res?.license_2?.limitations[1]?.permission,
    },
    {
      action: 'Trademark use',
      limitation1: res?.license_1?.limitations[2]?.permission,
      limitation2: res?.license_2?.limitations[2]?.permission,
    },
  ];

  return (
    <>
      <Header title="Full In-Depth Comparison" />
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingBottom: 30,
        }}>
        {/* {comparison ? ( */}
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
                    "Can {res?.percentage_of_compatibility < 50 ? 'not' : null}{' '}
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
                <Text
                  style={{color: 'black', paddingBottom: 7, paddingTop: 30}}>
                  The Explanation is based on the below given table.
                </Text>

                {/* Table starts here */}
                <View>
                  <View style={styles.tableHederConatainer}>
                    <View style={[styles.tableItemConatainer, {flex: 2}]}>
                      <Text style={styles.tableHeaderText}>Category</Text>
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
                      Permissions in Addition to Commercial Use, Distribution
                      and Modification
                    </Text>
                  </View>
                </View>
              </View>
            }
            ListFooterComponent={
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
                      <View style={[styles.tableItemConatainer, {flex: 2}]}>
                        <Text style={{padding: 7, color: colors.textDark}}>
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
                {limitation.map((item, index) => {
                  return (
                    <View key={index} style={styles.tableDataConatainer}>
                      <View style={[styles.tableItemConatainer, {flex: 2}]}>
                        <Text style={{padding: 7, color: colors.textDark}}>
                          {item?.action}
                        </Text>
                      </View>
                      <View style={styles.tableItemConatainer}>
                        <Text
                          style={[
                            styles.tableDatarText,
                            {
                              color:
                                item?.limitation1 == 'Yes' ? 'green' : 'red',
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
                                item?.limitation1 == 'Yes' ? 'green' : 'red',
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
                  {`${res.license_2.risk_for_choosing_license}`}
                </Text>
                {/* Permissions, Conditions & Limitations starts here */}
              </>
            }
            // scrollEnabled={false}
            data={permissions}
            keyExtractor={item => item.action}
            showsVerticalScrollIndicator={false}
            renderItem={item => (
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
                          item?.item?.permission1 == 'Yes' ? 'green' : 'red',
                      },
                    ]}>
                    {item?.item?.permission1}
                  </Text>
                </View>
                <View
                  style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
                  <Text
                    style={[
                      styles.tableDatarText,
                      {
                        color:
                          item?.item?.permission2 == 'Yes' ? 'green' : 'red',
                      },
                    ]}>
                    {item?.item?.permission2}
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

export default ResultsDetailsScreen;
