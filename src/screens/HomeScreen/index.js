import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
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
          <View style={styles.productItemsContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Software License');
              }}
              style={styles.singleItemContainer}>
              <Image
                style={styles.itemImage}
                source={require('./images/carbon_cloud-satellite-services.png')}
              />
              <Text style={styles.itemText}>Software License</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Agreement Compliance');
              }}
              style={styles.singleItemContainer}>
              <Image
                style={styles.itemImage}
                source={require('./images/Group5.png')}
              />
              <Text style={styles.itemText}>Agreement Compliance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleItemContainer}>
              <Image
                style={styles.itemImage}
                source={require('./images/Group11.png')}
              />
              <Text style={styles.itemText}>Pricing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Contact Us');
              }}
              style={styles.singleItemContainer}>
              <Image
                style={styles.itemImage}
                source={require('./images/Group8.png')}
              />
              <Text style={styles.itemText}>Contact us</Text>
            </TouchableOpacity>
          </View>
          

          {/* Quik Links */}
          <Text style={styles.heading}>Quik Links</Text>
          <View style={styles.linkContainer}>
            <Text style={styles.link}>Check compatibility</Text>
            <Text style={styles.link}>Generate Policies</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AuthNavigator', {screen:'PrivacyPolicy'} )}>
              <Text style={styles.link}>View Privacy Policy</Text>
            </TouchableOpacity>            
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
