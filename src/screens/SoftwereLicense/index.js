import {
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import axios from 'axios';

import Header from '../../components/Header';
import styles from './style';
import colors from '../../../assets/colors/colors';
import MyTextInput from '../../components/MyTextInput';
import AppBotton from '../../components/AppBottun';
import AppLoader from '../../components/AppLoader';

const listData = [
  {
    id: '1',
    name: 'name',
  },
  {
    id: '2',
    name: 'name',
  },
];

const SoftwereLicense = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [licenses, setLicenses] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState([]);

  useMemo(async () => {
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
      console.log(error);
    }
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
        <Header title="Software Licenses" leftIcon="menu" rightIcon="user" />
        <View
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          {/* Header */}
          
          

          {/* section 1 */}
          {/* <View style={styles.cardContainer}>
            <FlatList
              data={listData}
              ketExtractor={item => item.id}
              horizontal
              // showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index, separators}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('LicenseCompatibility');
                  }}
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
                      <Octicons
                        name="image"
                        size={70}
                        color={colors.textDark}
                      />
                    </View>

                    <View style={styles.row2}>
                      <Text style={styles.row2Text}>
                        Check your License Compatibility
                      </Text>

                      <View style={styles.row3}>
                        <Text style={styles.row3Text}>T&C Apply</Text>
                        <AppBotton
                          style={styles.cardButton}
                          title="Learn More"
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
          </View> */}
          <View style={styles.miniContainer}>
            {/* section 2 */}
            <View style={styles.section2}>
              <Text style={styles.heading}>
                Check your license compatibility now
              </Text>
              <TouchableOpacity
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
              </TouchableOpacity>
            </View>

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
                <>
                  <View style={styles.serchResultItemContainer} key={item['_id']}>
                    <TouchableOpacity
                    style={{justifyContent:'center'}}
                      key={index}
                      onPress={() => {
                        const id = item['_id'];
                        const eventId = item['eventId'];
                        const licenseNname =
                          item['softwarelicense']['license_name'];
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
                  </View>
                </>
              );
            })}
          </ScrollView>
        </View>
    </>
  );
};

export default SoftwereLicense;
