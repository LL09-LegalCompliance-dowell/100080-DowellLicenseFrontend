import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Pressable,
} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';
import Header from '../../components/Header';
import AppLoader from '../../components/AppLoader';
import Card from './card';
import colors from '../../../assets/colors/colors';
import HelpIcon from './HelpIcon';
import HelpBot from '../HelpBot';

const data = [
  {
    id: '1',
    title: 'Software License',
    tagline:
      'scroll through our list of software licenses curated just for you',
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
  const [showHelp, setShowHelp] = useState(false);
  return (
    <View style={styles.container}>
      <HelpIcon style={styles.help} onPress={() => setShowHelp(true)}>
        <HelpBot />
      </HelpIcon>
      {/* Header */}
      <Header leftIcon="menu" rightIcon="user" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card Component */}
        <TouchableOpacity style={styles.cardContainer}>
          <Card />
        </TouchableOpacity>

        <View style={styles.miniContainer}>
          {/* Product and Services */}
          <Text style={styles.heading}>Products & Services</Text>
          <FlatList
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
            <View style={{flexDirection:"row", alignItems:"center", marginBottom:4}}>
              <Image
                source={require(`./images/1.png`)}
                style={{width: 60, height: 60, color: 'black', marginRight:8}}
              />
              <Text style={styles.heading}>Apache vs MIT</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image
                source={require(`./images/2.png`)}
                style={{width: 60, height: 60, color: 'black', marginRight:8}}
              />
              <Text style={styles.heading}>GNU GPL v 1.0</Text>
            </View>
          </View>
          <Text
            style={{alignSelf: 'center', marginVertical: 30, color: '#d3d3d3'}}>
            Copyright &copy; 2022 UX Living Lab
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
