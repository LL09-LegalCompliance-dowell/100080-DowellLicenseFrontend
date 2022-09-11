import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';
import Header from '../../components/Header';
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
        <TouchableOpacity
          style={styles.cardContainer}
          >
          <Card />
        </TouchableOpacity>

        <View style={styles.miniContainer}>
          {/* Product and Services */}
          <Text style={styles.heading}>Priducts & Services</Text>
          <View style={styles.productItemsContainer}>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={40} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
          </View>
          <View style={styles.productItemsContainer}>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
            <View style={styles.singleItemContainer}>
              <AntDesign name="setting" size={35} color={colors.primary} />
              <Text style={styles.itemText}>Product</Text>
            </View>
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
                2912 Meadoebook Road Loss Angeles CA, 90017
              </Text>
            </View>
            <View style={styles.contactItem}>
              <AntDesign name="mail" size={30} color={colors.primary} />
              <Text style={styles.contactText}>Lorem@gmail.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Feather name="phone" size={30} color={colors.primary} />
              <Text style={styles.contactText}>310-383-7872</Text>
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
