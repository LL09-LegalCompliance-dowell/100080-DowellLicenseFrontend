import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {Linking} from 'react-native';

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';

const ApacheLicense = ({route}) => {
  const {item} = route.params;
  return (
    <>
      <Header title={item?.softwarelicense?.license_name} />
      {console.log(item)}
      <ScrollView style={styles.container}>
        {/* Upper Container */}
        <View style={styles.upperContainer}>
          {item?.softwarelicense?.logo_detail?.url !== '' ? (
            <Image
              style={{height: 100, width: 100, resizeMode: 'contain'}}
              source={{uri: item?.softwarelicense?.logo_detail?.url}}
            />
          ) : null}
          {item?.softwarelicense?.license_name ? (
            <Text style={styles.heading}>
              {item?.softwarelicense?.license_name}
            </Text>
          ) : null}
          {item?.softwarelicense?.description ? (
            <Text
              style={{
                textAlign: 'justify',
                color: 'gray',
                fontWeight: '300',
                fontSize: 14,
              }}>
              {item?.softwarelicense?.description}
            </Text>
          ) : null}
          {/* {item?.softwarelicense?.short_description ? (
            <Text style={{textAlign: 'justify', color: 'gray'}}>
              {item?.softwarelicense?.short_description}
            </Text>
          ) : null} */}
        </View>
        {/* Lower Container */}
        <View style={styles.middleContainer}>
          <Text style={styles.heading1}>1.Text Version</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(item?.softwarelicense?.license_url)}>
            {item?.softwarelicense?.license_url}
          </Text>
          <View style={{paddingHorizontal: 20, paddingBottom: 25}}>
            {item?.softwarelicense?.other_links?.map((item1, index) => {
              return (
                // console.log(item1)
                <View key={index}>
                  <Text key={index} style={styles.heading4}>
                    {item1?.description}
                  </Text>
                  <Text
                    style={[styles.link, {marginLeft: 20}]}
                    onPress={() => Linking.openURL(item1?.url)}>
                    {item1?.url}
                  </Text>
                </View>
              );
            })}
          </View>

          <Text style={styles.heading1}>2.Category</Text>
          <Text style={styles.heading2}>
            {item?.softwarelicense?.type_of_license}
          </Text>

          {item?.softwarelicense?.disclaimer !== '' ? (
            <>
              <Text style={styles.heading1}>3.Disclaimer</Text>
              <Text style={styles.heading2}>
                {item?.softwarelicense?.disclaimer}
              </Text>
            </>
          ) : null}

          {item?.softwarelicense?.permissions?.length > 0 && (
            <>
              <Text style={styles.heading1}>
                5.Permissions, Conditions & Limitations:
              </Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: '49%',
                    borderWidth: 1,
                    borderColor: '#078F04',
                    height: 'auto',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#078F04',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        paddingVertical: 8,
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 18,
                        fontFamily: 'roboto',
                      }}>
                      Permissions
                    </Text>
                  </View>
                  {item?.softwarelicense?.permissions?.map((i, index) => {
                    return (
                      <View key={index}>
                        <View
                          style={{
                            flexDirection: 'row',
                            padding: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: '15%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                height: 13,
                                width: 13,
                                backgroundColor: '#078F04',
                                borderRadius: 13,
                              }}></View>
                          </View>
                          <Text
                            style={{
                              color: 'black',
                              fontWeight: '500',
                              fontSize: 18,
                              fontFamily: 'roboto',
                              width: '80%',
                            }}>
                            {i.action}
                          </Text>
                        </View>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: '#078F04',
                            width: '100%',
                          }}></View>
                      </View>
                    );
                  })}
                </View>

                <View
                  style={{
                    width: '49%',
                    borderWidth: 1,
                    borderColor: '#0079E3',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#0079E3',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        paddingVertical: 8,
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 18,
                        fontFamily: 'roboto',
                      }}>
                      Conditions
                    </Text>
                  </View>
                  {item?.softwarelicense?.conditions?.map((i, index) => {
                    return (
                      <View key={index}>
                        <View
                          style={{
                            flexDirection: 'row',
                            padding: 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: '15%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                height: 13,
                                width: 13,
                                backgroundColor: '#0079E3',
                                borderRadius: 13,
                              }}></View>
                          </View>
                          <Text
                            style={{
                              color: 'black',
                              fontWeight: '500',
                              fontSize: 18,
                              fontFamily: 'roboto',
                              width: '80%',
                            }}>
                            {i.action}
                          </Text>
                        </View>
                        <View
                          style={{
                            height: 1,
                            backgroundColor: '#0079E3',
                            width: '100%',
                          }}></View>
                      </View>
                    );
                  })}
                </View>
              </View>

              <View
                style={{
                  width: '49%',
                  borderWidth: 1,
                  borderColor: '#EC1C24',
                  height: 'auto',
                  alignSelf: 'center',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    backgroundColor: '#EC1C24',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      paddingVertical: 8,
                      color: 'white',
                      fontWeight: '500',
                      fontSize: 18,
                      fontFamily: 'roboto',
                    }}>
                    Limitations
                  </Text>
                </View>
                {item?.softwarelicense?.limitations?.map((i, index) => {
                  return (
                    <View key={index}>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 4,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '15%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              height: 13,
                              width: 13,
                              backgroundColor: '#EC1C24',
                              borderRadius: 13,
                            }}></View>
                        </View>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '500',
                            fontSize: 18,
                            fontFamily: 'roboto',
                            width: '80%',
                          }}>
                          {i.action}
                        </Text>
                      </View>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: '#EC1C24',
                          width: '100%',
                        }}></View>
                    </View>
                  );
                })}
              </View>
            </>
          )}

          {/* Teable starts here */}

          <View style={[styles.tableHederConatainer, {marginTop: 50}]}>
            <View style={[styles.tableItemConatainer, {flex: 2}]}>
              <Text style={styles.tableHeaderText}>Permission</Text>
            </View>
            <View style={styles.tableItemConatainer}>
            <Text style={styles.tableHeaderText}>YES/NO</Text>
            </View>
            <View style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
              <Text style={styles.tableHeaderText}>
                Conditions
              </Text>
            </View>
          </View>
          {item?.softwarelicense?.permissions?.map((item, index) => {
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
                        color: item?.permission == 'Yes' ? 'green' : 'red',
                      },
                    ]}>
                    {item?.permission}
                  </Text>
                </View>
                <View
                  style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
                  <Text
                    style={[
                      styles.tableDatarText,
                      {
                        color:
                          item?.has_other_condition == false ? 'red' : 'green',
                      },
                    ]}>
                    {item?.has_other_condition ? 'YES' : 'NO'}
                  </Text>
                </View>
              </View>
            );
          })}

          <View style={[styles.tableHederConatainer, {marginTop: 25}]}>
            <View style={[styles.tableItemConatainer, {flex: 2}]}>
              <Text style={styles.tableHeaderText}>Conditions for license</Text>
            </View>
            <View style={styles.tableItemConatainer}>
            <Text style={styles.tableHeaderText}>YES/NO</Text>
            </View>
            <View style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
              <Text style={styles.tableHeaderText}>
                Conditions
              </Text>
            </View>
          </View>
          {item?.softwarelicense?.conditions?.map((item, index) => {
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
                        color: item?.permission == 'Yes' ? 'green' : 'red',
                      },
                    ]}>
                    {item?.permission}
                  </Text>
                </View>
                <View
                  style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
                  <Text
                    style={[
                      styles.tableDatarText,
                      {
                        color:
                          item?.has_other_condition == false ? 'red' : 'green',
                      },
                    ]}>
                    {item?.has_other_condition ? 'YES' : 'NO'}
                  </Text>
                </View>
              </View>
            );
          })}

          <View style={[styles.tableHederConatainer, {marginTop: 25}]}>
            <View style={[styles.tableItemConatainer, {flex: 2}]}>
              <Text style={styles.tableHeaderText}>Limitations</Text>
            </View>
            <View style={styles.tableItemConatainer}>
            <Text style={styles.tableHeaderText}>YES/NO</Text>
            </View>
            <View style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
              <Text style={styles.tableHeaderText}>
                Conditions
              </Text>
            </View>
          </View>
          {item?.softwarelicense?.limitations?.map((item, index) => {
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
                        color: item?.permission == 'Yes' ? 'green' : 'red',
                      },
                    ]}>
                    {item?.permission}
                  </Text>
                </View>
                <View
                  style={[styles.tableItemConatainer, {borderRightWidth: 0}]}>
                  <Text
                    style={[
                      styles.tableDatarText,
                      {
                        color:
                          item?.has_other_condition == false ? 'red' : 'green',
                      },
                    ]}>
                    {item?.has_other_condition ? 'YES' : 'NO'}
                  </Text>
                </View>
              </View>
            );
          })}

          {/* Teable ends here */}
          {item?.softwarelicense?.risk_for_choosing_license !== '' ? (
            <>
              <Text style={[styles.heading1, {marginTop:40}]}>6.Risks for choosing</Text>
              <Text style={styles.heading2}>
                {item?.softwarelicense?.risk_for_choosing_license}
              </Text>
            </>
          ) : null}
          {item?.softwarelicense?.recommendation !== '' ? (
            <>
              <Text style={styles.heading1}>6.Recommendations (%)</Text>
              <Text style={styles.heading2}>
                {item?.softwarelicense?.recommendation}
              </Text>
            </>
          ) : null}

          {item?.softwarelicense?.limitation_of_liability !== '' ? (
            <>
              <Text style={styles.heading1}>7.Limitation of Liability.</Text>
              <Text style={styles.heading2}>
                {item?.softwarelicense?.limitation_of_liability}
              </Text>
            </>
          ) : null}
          {item?.softwarelicense?.license_url !== '' ? (
            <>
              <Text style={styles.heading1}>
                For more details visit the below link:
              </Text>
              <Text
                style={[styles.link, {marginHorizontal: 15}]}
                onPress={() =>
                  Linking.openURL(item?.softwarelicense?.license_url)
                }>
                {item?.softwarelicense?.license_url}
              </Text>
            </>
          ) : null}
        </View>
        <View style={styles.bottomContainer}>
          <Text
            style={[
              styles.heading1,
              {textDecorationLine: 'underline', marginVertical: 10},
            ]}>
            DISCLAIMER
          </Text>
          <Text style={styles.heading3}>
            You may reproduce and distribute copies of the Work or Derivative
            Works thereof in any medium, with or without modifications, and in
            Source or Object form, provided that You meet the following
            conditions:
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.heading3}>
            You must give any other recipients of the Work or Derivative Works a
            copy of this License; and
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            You must cause any modified files to carry prominent notices stating
            that You changed the files; and
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            You must retain, in the Source form of any Derivative Works that You
            distribute, all copyright, patent, trademark, and attribution
            notices from the Source form of the Work, excluding those notices
            that do not pertain to any part of the Derivative Works; and
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            If the Work includes a "NOTICE" text file as part of its
            distribution, then any Derivative Works that You distribute must
            include a readable copy of the attribution notices contained within
            such NOTICE file, excluding those notices that do not pertain to any
            part of the Derivative Works, in at least one of the following
            places: within a NOTICE text file distributed as part of the
            Derivative Works; within the Source form or documentation, if
            provided along with the Derivative Works; or, within a display
            generated by the Derivative Works, if and wherever such third-party
            notices normally appear. The contents of the NOTICE file are for
            informational purposes only and do not modify the License. You may
            add Your own attribution notices within Derivative Works that You
            distribute, alongside or as an addendum to the NOTICE text from the
            Work, provided that such additional attribution notices cannot be
            construed as modifying the License.
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            You may add Your own copyright statement to Your modifications and
            may provide additional or different license terms and conditions for
            use, reproduction, or distribution of Your modifications, or for any
            such Derivative Works as a whole, provided Your use, reproduction,
            and distribution of the Work otherwise complies with the conditions
            stated in this License.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ApacheLicense;
