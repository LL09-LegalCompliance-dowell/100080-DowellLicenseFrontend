import {StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AboutUs from '../screens/AboutUs';
import SoftwereLicense from '../screens/SoftwereLicense';
import AgreementComplience from '../screens/AgreementComplience';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({Navigation}) => {
  const Logout = () => {
    Alert.alert('Loguot', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <Drawer.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Softwere License"
          component={SoftwereLicense}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Agreement Complience"
          component={AgreementComplience}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={AboutUs}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
