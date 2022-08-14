import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


import styles from './style';
import Header from '../../components/Header';
import Card from './card';
import colors from '../../../assets/colors/colors';




const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Card Component */}
      <View style={styles.cardContainer}>
        <Card />
      </View>

      <View style={styles.miniContainer}>
      {/* Product and Services */}
      <Text style={styles.heading}>Priducts & Services</Text>
      <View style={styles.productItemsContainer}>
        <View style={styles.singleItemContainer}>
            <AntDesign name="setting" size={35} color={colors.primary}/>
            <Text style={styles.itemText}>Product</Text>
        </View>
        <View style={styles.singleItemContainer}>
            <AntDesign name="setting" size={35} color={colors.primary}/>
            <Text style={styles.itemText}>Product</Text>
        </View>
        <View style={styles.singleItemContainer}>
            <AntDesign name="setting" size={35} color={colors.primary}/>
            <Text style={styles.itemText}>Product</Text>
        </View>
        <View style={styles.singleItemContainer}>
            <AntDesign name="setting" size={35} color={colors.primary}/>
            <Text style={styles.itemText}>Product</Text>
        </View>
      </View>

      {/* About Company */}
      <Text style={styles.heading}>About Company</Text>

      {/* Quik Links */}
      <Text style={styles.heading}>Quik Links</Text>

      {/* Contact Info */}
      <Text style={styles.heading}>Contact Info</Text>

      </View>

    </ScrollView>
  );
};

export default Home;
