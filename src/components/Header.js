import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

import colors from '../../assets/colors/colors';

const Header = ({title, leftIcon, rightIcon, historyIcon, openHistory}) => {
  const navigation = useNavigation();

  const opennDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const gotoProfile = () => {
    navigation.navigate('ProfileHome');
    //  navigation.navigate('AuthNavigator', {screen: 'Profile'});
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {leftIcon === 'menu' ? (
        <TouchableOpacity onPress={opennDrawer}>
          <Ionicons
            style={styles.menuIcon}
            name="menu"
            size={30}
            color={colors.textDark}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            style={styles.menuIcon}
            name="keyboard-backspace"
            size={30}
            color={colors.textDark}
          />
        </TouchableOpacity>
      )}

      {title ? (
        <Text numberOfLines={1} style={styles.heading}>
          {title}
        </Text>
      ) : (
        <TouchableWithoutFeedback>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </TouchableWithoutFeedback>
      )}
      {rightIcon === 'user' ? (
        <TouchableOpacity onPress={gotoProfile}>
          <FontAwesome
            style={styles.userIcon}
            name="user-circle"
            size={25}
            color={colors.textDark}
          />
        </TouchableOpacity>
      ) : (
        ''
      )}
      {historyIcon === 'history' ? (
        <TouchableOpacity onPress={openHistory}>
          <Image
          style={{width:30, width:35, resizeMode:'contain', marginTop:8}}
            source={require('../screens/LicenseCompatibility/images/SearchHistory.png')}
          />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    paddingHorizontal: 18,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.borderLight,
    borderBottomWidth: 3,
    elevation: 8,
    position: 'absolute',
    zIndex: 1,
  },

  logo: {
    height: 54,
    width: 65,
    resizeMode: 'contain',
    // aspectRatio: 3.8,
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 5,
    marginLeft: 5,
  },

  heading: {
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    lineHeight: 28.13,
  },

  menuIcon: {
    marginTop: 'auto',
    marginBottom: 10,
  },

  userIcon: {
    marginTop: 'auto',
    marginBottom: 14,
  },
});
