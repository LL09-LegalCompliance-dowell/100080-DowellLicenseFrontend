import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AboutUs from '../screens/AboutUs';
import SoftwereLicense from '../screens/SoftwereLicense';
import AgreementComplience from '../screens/AgreementComplience';
import PolicyNavigator from './PolicyNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../context/LoginProvider';
import CustomSideBar from './CustomSideBar';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({Navigation}) => {
  const {setIsLoggedIn} = useLogin();
  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomSideBar {...props} />}
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            width: Dimensions.get('window').width / 1.2,
          },
        }}
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
          name="Generate Policies"
          component={PolicyNavigator}
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
