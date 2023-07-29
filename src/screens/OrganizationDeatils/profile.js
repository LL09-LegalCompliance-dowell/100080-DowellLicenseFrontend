import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import colors from '../../../assets/colors/colors';
import AppLoader from '../../components/AppLoader';
import Header from '../../components/Header';
import Popup from './popup';
import histpryApi from './histpryApi';
import {FlatList} from 'react-native-gesture-handler';
// <Popup modalVisible={modalVisible} setModalVisible={setModalVisible}/>
const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [org, setOrg] = useState('');

  const [data, setData] = useState({});
  const [data_keys, setData_keys] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [conditionMet, setConditionMet] = useState(false);

  const handleItemPress = item => {
    if (conditionMet) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      setSelectedItem(null);
      setModalVisible(false);
    }
  };

  const getOrgDetails = async () => {
    try {
      setLoading(true);
      const org = await AsyncStorage.getItem('org_name');
      const org_id = await AsyncStorage.getItem('org_id');
      org && setOrg(org);

      const result = await histpryApi(org_id);

      console.log(result);
      setData({...result.data});
      setData_keys(Object.keys(result.data));
      // console.log(result);
      setConditionMet(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Something went wrong, please try again later');
    }
  };

  useEffect(() => {
    getOrgDetails();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {loading ? <AppLoader /> : null}
        <StatusBar color="white" />
        <Header title="Organization Details" />
        <View style={styles.innerContainer}>
          <Image source={require('./orgIcon.png')} style={styles.profileIcon} />
          <Text style={styles.label}>Organization Name</Text>
          <Text style={styles.feildData}>{org}</Text>
          <View style={styles.separator}></View>
          <Text style={[styles.feildData1, {paddingTop: 50}]}>
            Agreement Compliance Policies:
          </Text>
          <View style={styles.separator1}></View>
          <View style={{height: '50%'}}>
            <ScrollView>
              {data_keys.map((item, id) => (
                <TouchableOpacity
                  key={id}
                  style={styles.itemContainer}
                  onPress={() => handleItemPress(item)}>
                  <Text style={styles.feildData2}>{item}</Text>
                  <View style={styles.counterContainer}>
                    <Text style={styles.counterText}>{data[item].length}</Text>
                  </View>
                </TouchableOpacity>
              ))}

              {conditionMet && (
                <Popup
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  policy_name={selectedItem}
                  data={data[selectedItem]}
                  setSelectedItem={setSelectedItem}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    marginTop: 160,
    borderTopEndRadius: 29,
    borderTopLeftRadius: 29,
    paddingHorizontal: 25,
  },
  profileIcon: {
    height: 100,
    width: 100,
    display: 'flex',
    alignSelf: 'center',
    marginTop: -50,
  },
  label: {
    color: '585858',
    fontSize: 12,
    paddingTop: 15,
    fontFamily: 'roboto',
  },
  feildData: {
    paddingLeft: 17,
    fontSize: 19,
    paddingVertical: 5,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  feildData1: {
    // paddingLeft: 17,
    fontSize: 17,
    paddingVertical: 15,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  feildData2: {
    // paddingLeft: 17,
    fontSize: 19,
    paddingVertical: 15,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  separator: {
    width: '100%',
    backgroundColor: 'black',
    height: 1.1,
  },
  separator1: {
    width: '100%',
    backgroundColor: '#585858',
    height: 0.8,
  },
  itemContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  counterContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  counterText: {
    color: 'white',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue',
  },
});
