import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import Header from '../../components/Header';
import styles from './style';
import colors from '../../../assets/colors/colors';
import MyTextInput from '../../components/MyTextInput';
import AppBotton from '../../components/AppBottun';

const listData = [
  {
    id: '1',
    name: 'name',
  },
  {
    id: '2',
    name: 'name',
  },
  {
    id: '3',
    name: 'name',
  },
  {
    id: '4',
    name: 'name',
  },
  {
    id: '5',
    name: 'name',
  },
  {
    id: '6',
    name: 'name',
  },
  {
    id: '7',
    name: 'name',
  },
];

const SoftwereLicense = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      {/* section 1 */}
      <View style={styles.cardContainer}>
        <FlatList
          data={listData}
          ketExtractor={item => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity
              style={styles.cardContainer1}
              key={item.key}
              // onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              // onHideUnderlay={separators.unhighlight}
            >
              <>
                <View style={styles.row1}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.row1Text}>License</Text>
                    <Text style={styles.row1Text}>Compatibility</Text>
                  </View>
                  <Octicons name="image" size={70} color={colors.textDark} />
                </View>

                <View style={styles.row2}>
                  <Text style={styles.row2Text}>
                    Check your License Compatibility
                  </Text>

                  <View style={styles.row3}>
                    <Text style={styles.row3Text}>T&C Apply</Text>
                    <AppBotton
                      style={styles.cardButton}
                      title="Check Now"
                      width="30%"
                      color={colors.primary}
                      fontSize={12}
                      padding={5}
                      onPress={() => {
                        navigation.navigate('LicenseCompatibility');
                      }}
                    />
                  </View>
                </View>
              </>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.miniContainer}>
        {/* section 2 */}
        <View style={styles.section2}>
          <Text style={styles.heading}>
            Check your license compatibility now
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {
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
          </TouchableOpacity>
        </View>

        {/* section 3 */}
        <View style={styles.setion3}>
          <View style={styles.searchInput}>
            <MyTextInput
              placeholder="Search license here"
              icon={'search'}
              iconSize={30}
              paddingHorizontal={12}
            />
          </View>
        </View>
      </View>
      {/* Section 4 */}
      <ScrollView style={styles.section4}>
        <View style={styles.section4Container}>
          <Text style={styles.listHeading}>Aparche lisence</Text>
          <View style={styles.VersionDateContainer}>
            <Text>version 2.0</Text>
            <Text>January 2009</Text>
          </View>
        </View>
        <View style={styles.separator}></View>

        <View style={styles.section4Container}>
          <Text style={styles.listHeading}>Aparche lisence</Text>
          <View style={styles.VersionDateContainer}>
            <Text>version 2.0</Text>
            <Text>January 2009</Text>
          </View>
        </View>
        <View style={styles.separator}></View>

        <View style={styles.section4Container}>
          <Text style={styles.listHeading}>Aparche lisence</Text>
          <View style={styles.VersionDateContainer}>
            <Text>version 2.0</Text>
            <Text style={{paddingLeft: 5}}>January 2009</Text>
          </View>
        </View>
        <View style={styles.separator}></View>
      </ScrollView>
    </View>
  );
};

export default SoftwereLicense;
