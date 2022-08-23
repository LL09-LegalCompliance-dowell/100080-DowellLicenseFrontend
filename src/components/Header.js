import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import colors from '../../assets/colors/colors';

const Header = ({title, leftIcon, rightIcon}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {leftIcon === 'menu' ? (
        <TouchableOpacity>
          <Ionicons
            style={styles.menuIcon}
            name="menu"
            size={30}
            color={colors.textDark}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons
            style={styles.menuIcon}
            name="keyboard-backspace"
            size={30}
            color={colors.textDark}
          />
        </TouchableOpacity>
      )}

      {title ? (
        <Text style={styles.heading}>{title}</Text>
      ) : (
        <TouchableWithoutFeedback>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </TouchableWithoutFeedback>
      )}
      {rightIcon === 'user' ? (
        <TouchableOpacity>
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
    height: 65,
    width: 60,
    aspectRatio: 1.5,
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 5,
    marginLeft: 25,
  },

  heading: {
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    marginLeft: 25,
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
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
