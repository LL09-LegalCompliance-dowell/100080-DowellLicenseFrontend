import {StyleSheet, Dimensions, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/Navigator';
import AboutUs from '../screens/AboutUs';
import ActualAboutUs from '../screens/AboutUs/AboutUs';
import SoftwereLicense from '../screens/SoftwereLicense';
import AgreementComplience from '../screens/AgreementComplience';
import CustomSideBar from './CustomSideBar';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({Navigation}) => {
  const navigation = useNavigation();
  const Logout = () => {
    AsyncStorage.clear();
    navigation.navigate("AuthNavigator")
    Alert.alert("Logged out successfully!")
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
          name="Software License"
          component={SoftwereLicense}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Agreement Compliance"
          component={AgreementComplience}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="ActualAboutUs"
          component={ActualAboutUs}
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
