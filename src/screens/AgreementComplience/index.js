import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';
import styles from './style';

const About = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>
          We help with legel requirements, so you can focus on the business
        </Text>
        <ScrollView style={{marginTop: 130}}>
          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="computer" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>Softwere License Policy</Text>
          </View>
          <View style={styles.separator}></View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Privacy Policy</Text>
            
          </View>
          <View style={styles.separator}></View>
          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="clipboard-check-outline"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Terms & Conditions</Text>
            
          </View>
          <View style={styles.separator}></View>
          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="cookie-outline"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Cookies</Text>
            
          </View>
          <View style={styles.separator}>
            </View>
          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Disclaimer</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <AntDesign name="warning" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>EULA</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Return & Refund</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Fontisto
                name="arrow-return-left"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Terms & Service</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>Terms of Use</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>MOU</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>NDA</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="privacy-tip"
                color={colors.primary}
                size={30}
              />
            </View>
            <Text style={styles.listHeading}>GDPR Privacy Policy</Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="open-book" color={colors.primary} size={30} />
            </View>
            <Text style={styles.listHeading}>We help with</Text>
            <View style={styles.separator}></View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default About;
