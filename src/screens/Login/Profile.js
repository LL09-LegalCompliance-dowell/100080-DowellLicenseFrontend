import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import colors from '../../../assets/colors/colors';
import AppLoader from '../../components/AppLoader';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [member, setMember] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [role, setRole] = useState('');
  const [profile_image, setProfileImage] = useState('');
  const [data_type, setData_type] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [action, setAction] = useState('');
  const navigation = useNavigation();

  const pressHandler = async () => {
    // console.log(username);
    // console.log(action);
    try {
      setLoading(true);
      const response = await fetch(
        `https://100014.pythonanywhere.com/api/removeaccount/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username: username, status: action}),
        },
      );
      const parseResponse = await response.json();

      if (!response.ok) {
        throw new Error(parseResponse);
      } else {
        AsyncStorage.clear();
        navigation.navigate('AuthNavigator', {screen: 'IntroductionScreen'});
        // console.log(parseResponse);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getDetails = async () => {
    const username = await AsyncStorage.getItem('username');
    const email = await AsyncStorage.getItem('email');
    const member = await AsyncStorage.getItem('member_type');
    const org = await AsyncStorage.getItem('org_name');
    const portfolio = await AsyncStorage.getItem('portfolio_name');
    const role = await AsyncStorage.getItem('role');
    const data_type = await AsyncStorage.getItem('data_type');

    const profile_image = await AsyncStorage.getItem('profile_image');
    setUsername(username);
    setEmail(email);
    setMember(member);
    setOrg(org);
    setPortfolio(portfolio);
    setRole(role);
    setData_type(data_type);
    profile_image && setProfileImage(profile_image);
  };

  useEffect(() => {
    getDetails();
  }, []);
  console.log(profile_image);
  console.log(isVisible);
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to {action} your account
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  pressHandler();
                  setIsVisible(false);
                }}>
                <Text style={styles.textstyle}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  setIsVisible(false);
                }}>
                <Text style={styles.textstyle}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {loading ? <AppLoader /> : null}
      <StatusBar color="white" />
      <Header title="Account Details" />
      <View style={styles.innerContainer}>
        <Image
          // profile_image? {uri:profile_image} :
          source={require('./profileIcon.png')}
          style={styles.profileIcon}
        />
        <Text style={styles.label}>Username</Text>
        <Text style={styles.feildData}>{username}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.feildData}>{email}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Organization</Text>
        <Text style={styles.feildData}>{org}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Member Type</Text>
        <Text style={styles.feildData}>{member}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>portfolio</Text>
        <Text style={styles.feildData}>{portfolio}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Role</Text>
        <Text style={styles.feildData}>{role}</Text>
        <View style={styles.separator}></View>

        <Text style={styles.label}>Data Type</Text>
        <Text style={styles.feildData}>{data_type}</Text>
        <View style={styles.separator}></View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              setAction('disable');
              setIsVisible(true);
            }}>
            <Text style={styles.textstyle}>Disable</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              setAction('delete');
              setIsVisible(true);
            }}>
            <Text style={styles.textstyle}>Delete</Text>
          </TouchableOpacity>
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
    color: 'black',
  },
  feildData: {
    paddingLeft: 17,
    fontSize: 19,
    paddingVertical: 5,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'roboto',
  },
  separator: {
    width: '100%',
    backgroundColor: '585858',
    height: 0.9,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  textstyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
});
