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
  const {
    comparison,
    licenseLogo1,
    licenseLogo2,
    licenseOne,
    licenseTwo,
    compatibiltyPercentage,
    isCompatible,
  } = route.params;
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingBottom: 30,
      }}>
      <Header title="Full In-Depth Comparison" />
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
                <Text style={styles.percentage}>{compatibiltyPercentage}%</Text>
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
                "Can {isCompatible !== 'false' ? 'not' : null} be used together
                in a project"
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
                    <Text style={styles.tableHeaderText}>{licenseOne}</Text>
                  </View>
                  <View
                    style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
                    <Text style={styles.tableHeaderText}>{licenseTwo}</Text>
                  </View>
                </View>
              </View>
            </View>
          }
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
              <View style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
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
      {/* ) : (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              padding: 20,
              color: colors.primary,
              fontSize: 18,
              fontWeight: '600',
            }}>
            Sorry... compatibility results for this pair of licences is not
            availbe yet. We are working on it, you might be able to get it in
            the next version, thanks.
          </Text>
        </View>
      )} */}
    </View>
  );
};

export default ResultsDetailsScreen;
