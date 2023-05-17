import {
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
  Keyboard,
} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import Header from '../../components/Header';
import styles from './style';
import MyTextInput from '../../components/MyTextInput';
import AppLoader from '../../components/AppLoader';
import colors from '../../../assets/colors/colors';
import listData from './sliderData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SoftwereLicense = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [licenses, setLicenses] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState([]);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // Get organization ID from local storage
  const [orgId, setOrgId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getOrgId = async () => {
      try {
        const org_id = await AsyncStorage.getItem('org_id');
        const user_id = await AsyncStorage.getItem('user_id');
        setOrgId(org_id);
        setUserId(user_id);
      } catch (error) {
        console.log(error);
      }
    };
    getOrgId();
  }, []);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        setLoading(true);
        const LicensesData = await axios.get(
          'https://100080.pythonanywhere.com/api/licenses/',
        );
        if (LicensesData.data) {
          setLicenses(LicensesData.data.data);
          setSearchedTerm(LicensesData.data.data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchLicenses();
  }, []);

  // Hide and show slider
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Searching functionality is being handled here
  const searchLicensesFunction = text => {
    // alert(text);
    const searchData = licenses.filter(item => {
      return item['softwarelicense']['license_name']
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    setSearchedTerm(searchData);
  };

  return (
    <>
      {loading ? <AppLoader /> : null}
      <Header title="Software Licenses" leftIcon="" rightIcon="user" />
      <View
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {/* Header */}

        {/* section 1 */}
        {!isKeyboardVisible && (
          <View style={styles.cardContainer}>
            <FlatList
              data={listData}
              ketExtractor={item => item.id}
              horizontal
              // showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index, separators}) => (
                <View
                  style={styles.cardContainer1}
                  key={item.key}
                  // onPress={() => this._onPress(item)}
                  onShowUnderlay={separators.highlight}
                  // onHideUnderlay={separators.unhighlight}
                >
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{flex: 3.5}}>
                      <Image
                        resizeMode="contain"
                        style={{
                          height: 60,
                          width: 90,
                        }}
                        source={{
                          uri: item.image1,
                        }}
                      />

                      <Text style={styles.vsText}>VS</Text>

                      <Image
                        resizeMode="contain"
                        style={{
                          height: 60,
                          width: 90,
                        }}
                        source={{
                          uri: item.image2,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 15,
                        alignItems: 'center',
                        flex: 6.5,
                      }}>
                      <Text style={styles.heading}>{item.titel}</Text>
                      <Text style={{color: 'black', textAlign: 'center'}}>
                        {item.recommendation}
                      </Text>
                      <View
                        style={{
                          backgroundColor: colors.primary,
                          paddingHorizontal: 10,
                          paddingVertical: 3,
                          borderRadius: 15,
                          marginTop: 30,
                        }}>
                        <Pressable>
                          <Text
                            onPress={() => {
                              navigation.navigate('SliderItemDetails', {
                                eventId_1: item.eventId_1,
                                eventId_2: item.eventId_2,
                                userId: userId,
                                organizationId: orgId,
                              });
                            }}
                            style={{fontSize: 11, margin: 0}}>
                            Learn More
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        )}

        <View
          style={[
            styles.miniContainer,
            {paddingTop: isKeyboardVisible ? 60 : 0},
          ]}>
          {/* section 3 */}
          <View style={styles.setion3}>
            <View style={styles.searchInput}>
              <MyTextInput
                placeholder="Search license here"
                icon={'search'}
                iconSize={35}
                paddingHorizontal={12}
                onChangeText={text => searchLicensesFunction(text)}
              />
            </View>
          </View>
        </View>

        {/* Section 4 */}
        <ScrollView style={styles.section4}>
          {searchedTerm.map((item, index) => {
            return (
              <TouchableOpacity style={styles.serchResultItemContainer} key={index}
                // style={{justifyContent: 'center'}}
                onPress={() => {
                  navigation.navigate('ApacheLicense', {item});
                }}>
                <Text style={styles.serchResultHeading}>
                  {item['softwarelicense']['license_name']}
                </Text>
                <Text numberOfLines={1} style={styles.serchResultDetails}>
                  {item['softwarelicense']['description']}
                </Text>
                <View style={styles.separator}></View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default SoftwereLicense;
