import {
  // FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {
//   FlatList,
//   Image,
//   Pressable,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors/colors';
import listData from './sliderData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './../SoftwereLicense/style';

const SliderScreen = ({navigation}) => {
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

  return (
    <>
      <Header title="Open Source License Compatibility" />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <FlatList
            data={listData}
            // ketExtractor={item => item.id}
            horizontal
            // showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index, separators}) => (
              <View style={styles.cardContainer1} key={index}>
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
                            console.log(
                              item.eventId_1,
                              item.eventId_2,
                              userId,
                              orgId,
                            );
                          }}
                          style={{fontSize: 11, margin: 0, color: 'white', paddingHorizontal:10, paddingVertical:4}}>
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

        <View style={[styles.miniContainer, {height: '100%'}]}>
          {/* section 2 */}
          <View style={styles.section2}>
            <Text style={styles.heading}>
              Check your license compatibility now
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate('LicenseCompatibility');
              }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="arrow-up-bold"
                  size={20}
                  color={'white'}
                />
                <MaterialCommunityIcons
                  style={styles.downIcontyle}
                  name="arrow-down-bold"
                  size={20}
                  color={'white'}
                />
              </View>
              <Text style={styles.buttonText}>Check here!</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default SliderScreen;
