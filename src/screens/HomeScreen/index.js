import Toast from 'react-native-toast-message';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Pressable,
  Platform,
  Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import Header from '../../components/Header';
import Card from './card';
import HelpIcon from './HelpIcon';
import axios from 'axios';

const data = [
  {
    id: '1',
    title: 'Open Source Software License',
    tagline:
      'scroll through our list of open source software licenses curated just for you',
    image: 'softwereLicenses',
    route: 'Software License',
  },
  {
    id: '2',
    title: 'Agreement Compliance',
    tagline: 'generate policies using our agreement compliance system',
    image: 'legalAPIs',
    route: 'Agreement Compliance',
  },
];

const Home = ({navigation}) => {
  const [orgId, setOrgId] = useState('');
  const [userId, setUserId] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const {width, height} = Dimensions.get('window');

  const helpHanlder = () => {
    setShowHelp(true);
  };
  const helpHanlderClose = () => {
    setShowHelp(false);
  };
  const getAPIKey = async(id) => {
    try {
      const response = await axios.get(`https://100105.pythonanywhere.com/api/v3/user/?type=get_api_key&workspace_id=${id}`)
      const {api_key, services, is_paid, total_credits} = response.data.data
      console.log("API KEY: ", is_paid)
      api_key && (await AsyncStorage.setItem('api_key', api_key));
      is_paid && (await AsyncStorage.setItem('is_paid', "True"));
      total_credits && (await AsyncStorage.setItem('total_credits', total_credits.toString()));
      // console.log("Services: ", services)
      const service = services.filter((s) => s.service_id === "DOWELL10029")
      console.log("Service: ", service)
      Toast.show({
        type: 'success',
        text1: `API Key Obtained successfully`,
        text2: `API Key Obtained successfully`,
      });
    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        text1: `Error Getting your API Key: ${error.message}`,
        text2: `Error Getting your API Key: ${error.message}`,
      });
    }
  }

  useEffect(() => {
    const getOrgId = async () => {
      try {
        const org_id = await AsyncStorage.getItem('org_id');
        const user_id = await AsyncStorage.getItem('user_id');
        setOrgId(org_id);
        setUserId(user_id);
        org_id && getAPIKey(org_id)
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: `Error Getting your API Key: ${error.message}`,
          text2: `Error Getting your API Key: ${error.message}`,
        });
      }
    };
    getOrgId();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header leftIcon="menu" rightIcon="user" />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        {/* Card Component */}
        <TouchableOpacity style={styles.cardContainer}>
          <Card />
        </TouchableOpacity>

        <View style={styles.miniContainer}>
          {/* Product and Services */}
          <Text style={styles.heading}>Products & Services</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal
            renderItem={({item}) => {
              return (
                <ImageBackground
                  source={require('./images/Gradient.png')}
                  style={{
                    height: 250,
                    width: 188,
                    marginRight: 7,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 6,
                  }}>
                  <View>
                    {/* <Image
                    source={require(`./images/softwereLicenses.png`)}
                    style={{width: 20, height: 20, color:"black"}}
                  /> */}
                    <Text
                      style={[
                        styles.heading,
                        {fontSize: 17, textAlign: 'center'},
                      ]}>
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.aboutText,
                        {fontSize: 14, textAlign: 'center'},
                      ]}>
                      {item.tagline}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      navigation.navigate(`${item.route}`);
                    }}
                    style={{
                      backgroundColor: 'black',
                      height: 33,
                      width: 114,
                      marginBottom: 15,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>
                      Explore Now
                    </Text>
                  </Pressable>
                </ImageBackground>
              );
            }}
            keyExtractor={item => item.id}
          />

          {/* Quik Links */}
          <Text style={styles.heading}>Most Visited</Text>
          <View style={styles.linkContainer}>
            <Pressable
              onPress={() => {
                navigation.navigate('SliderItemDetails', {
                  eventId_1: "FB1010000000166184126356826496",
                  eventId_2: "FB1010000000016618417215307426",
                  userId: userId,
                  organizationId: orgId,
                });
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4,
              }}>
              <Image
                source={require(`./images/1.png`)}
                style={{width: 60, height: 60, color: 'black', marginRight: 8}}
              />
              <Text style={styles.heading}>Apache vs MIT</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('SliderItemDetails', {
                  eventId_1: "FB1010000000166184145150015366",
                  eventId_2: "FB1010000000167525869052204814",
                  userId: userId,
                  organizationId: orgId,
                });
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require(`./images/2.png`)}
                style={{width: 60, height: 60, color: 'black', marginRight: 8}}
              />
              <Text style={styles.heading}>GNU vs GPL v 1.0</Text>
            </Pressable>
          </View>
          <Text
            style={{alignSelf: 'center', marginVertical: 30, color: '#d3d3d3'}}>
            Copyright &copy; 2022 UX Living Lab
          </Text>
        </View>
      </ScrollView>
      <HelpIcon
        style={styles.help}
        onPress={() => navigation.navigate('Help')}
      />
    </View>
  );
};

export default Home;
