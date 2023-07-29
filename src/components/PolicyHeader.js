import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

import colors from '../../assets/colors/colors';

const Header = ({title, leftIcon, rightIcon}) => {
  const navigation = useNavigation();

  const opennDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const gotoProfile = () => {
    navigation.navigate('AuthNavigator', {screen: 'Profile'});
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Important',
            'Are you sure you want to go back? By clicking "Yes", you will lose the work you have done so far.',
            [
              {
                text: 'No',
                onPress: () => console.log('User clicked No'),
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => navigation.goBack(),
              },
            ],
          );
        }}>
        <MaterialIcons
          style={styles.menuIcon}
          name="keyboard-backspace"
          size={30}
          color={colors.textDark}
        />
      </TouchableOpacity>

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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 40 : 0,
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
