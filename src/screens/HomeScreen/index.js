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
          <Text style={styles.heading}>Priducts & Services</Text>
          <View style={styles.productItemsContainer}>
            <View style={styles.singleItemContainer}>
              <Image
                source={require('./images/carbon_cloud-satellite-services.png')}
              />
            </View>
            <View style={styles.singleItemContainer}>
              <Image source={require('./images/Group5.png')} />
            </View>
            <View style={styles.singleItemContainer}>
              <Image source={require('./images/Group11.png')} />
            </View>
            <View style={styles.singleItemContainer}>
              <Image source={require('./images/Group8.png')} />
            </View>
          </View>
          <View style={styles.productItemsContainer}>
            <Text style={styles.itemText}>Software License</Text>

            <Text style={styles.itemText}>Agreement Compliance</Text>

            <Text style={styles.itemText}>Pricing</Text>

            <Text style={styles.itemText}>Contact us</Text>
          </View>

          {/* About Company */}
          <Text style={styles.heading}>About Company</Text>
          <Text style={styles.aboutText}>
            Here we can matter for company. We can give in-depth information
            about company. If required we can also provied information about the
            services and products which we provide
          </Text>

          {/* Quik Links */}
          <Text style={styles.heading}>Quik Links</Text>
          <View style={styles.linkContainer}>
            <Text style={styles.link}>Quik link 1 with the label</Text>
            <Text style={styles.link}>Quik link 1 with the label</Text>
            <Text style={styles.link}>Quik link 1 with the label</Text>
            <Text style={styles.link}>Quik link 1 with the label</Text>
          </View>

          {/* Contact Info */}
          <Text style={styles.heading}>Contact Info</Text>
          <View style={styles.contactContainer}>
            <View style={styles.contactItem}>
              <Ionicons
                name="location-outline"
                size={30}
                color={colors.primary}
              />
              <Text style={styles.contactText}>
                Level 42, Six Battery Road Singapore-049909
              </Text>
            </View>
            <View style={styles.contactItem}>
              <AntDesign name="mail" size={30} color={colors.primary} />
              <Text style={styles.contactText}>
                livinglabfinance@dowellrsearch.sg
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Feather name="phone" size={30} color={colors.primary} />
              <Text style={styles.contactText}>65 6232 2314</Text>
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
