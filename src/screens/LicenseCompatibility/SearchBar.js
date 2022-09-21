import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import IoniMaterialCommunityIconscons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../../assets/colors/colors';

const deviceHieght = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const HelpIcon = () => {
  const [modelY, setModelY] = useState(new Animated.Value(-deviceHieght));
  const open = () => {
    Animated.timing(modelY, {
      duration: 500,
      toValue: 0,
      useNativeDrive: true,
    }).start();
  };

  const close = () => {
    Animated.timing(modelY, {
      duration: 500,
      toValue: 0,
      useNativeDrive: true,
    }).start();
  };
  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: modelY}]}]}>
      <Text style={styles.text}>How to</Text>
      <TouchableOpacity onPress={close}></TouchableOpacity>
      {/* <View style={styles.miniContainer}>
        <IoniMaterialCommunityIconscons name="help" size={25} color={colors.primary} />
      </View>
      <View style={{width: '100%', color: colors.borderLight, height: 1, }}></View>
      <Text style={styles.text}>How to</Text> */}
    </Animated.View>
  );
};

export default HelpIcon;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    backgroundColor: colors.primary,
    // padding: 8,
    // paddingHorizontal: 2,
    // alignItems: 'center',
    // borderTopLeftRadius: 18,
    // borderBottomLeftRadius: 18,
    width: deviceWidth,
    height: deviceHieght,
    position: 'absolute',
    left: 0,
    top: 0,
    // zIndex: 1,
    // borderBottomColor: '#acacac',
    // borderBottomWidth: 2,
    // elevation: 5,
  },

  miniContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 25,
  },

  text: {
    color: 'red',
    paddingTop: 2,
    fontSize: 30,
  },
});
