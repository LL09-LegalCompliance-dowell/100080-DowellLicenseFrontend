import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {color} from 'react-native-reanimated';

const PolicyWebView = ({route}) => {
  const {url} = route.params;
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <Entypo
          name="cross"
          size={30}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{width: 250}}>
          <Text style={styles.heading}>Preview Policy</Text>
          <Text numberOfLines={1} style={{color: 'white'}}>
            {url}
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={25} color="white" />
      </View>
      <WebView
        startInLoadingState
        originWhitelist={['*']}
        source={{uri: url}}
      />
    </>
  );
};

export default PolicyWebView;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#545454',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'roboto',
    color: 'white',
    alignSelf: 'center',
  },
});
