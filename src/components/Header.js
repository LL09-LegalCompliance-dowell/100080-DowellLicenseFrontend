import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../../assets/colors/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <TouchableOpacity>
        <Ionicons
          style={styles.menuIcon}
          name="menu"
          size={30}
          color={colors.textDark}
        />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <TouchableOpacity>
        <FontAwesome
          style={styles.userIcon}
          name="user-circle"
          size={25}
          color={colors.textDark}
        />
      </TouchableOpacity>
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

  menuIcon: {
    marginTop: 'auto',
    marginBottom: 10,
  },

  userIcon: {
marginTop: 'auto',
    marginBottom: 14,
  }
});
