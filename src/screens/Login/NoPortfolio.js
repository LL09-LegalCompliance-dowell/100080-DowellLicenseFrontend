import {Text, View, StatusBar,Image, Linking, Alert, Button, Share } from 'react-native'
import React, {useCallback} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Foundation from "react-native-vector-icons/Foundation"
import styles from './style';

const NoPortfolio = ({navigation, route}) => {
  const params= route.params;
  const {session_id, username} = route.params;
  const url = `https://100093.pythonanywhere.com/new/?session_id=${session_id}`
  //console.log(params)
  const goToBrowser = () => {
    try{
     Linking.openURL(url);
    }catch(error){
      Alert.alert(`Unable to open this URL: ${url}`);
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const goToCreatePortfolio = () => {
    navigation.navigate("CreatePortfolio", {"session_id":session_id})
  }
  return (
    <View contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.introLogoTop}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.topLogo}
          />
        </View>

      <Text style={styles.noPortfolioText}>Hello {username}.</Text>
      <Text style={styles.noPortfolioText}>You do not have a portfolio </Text>
      <TouchableOpacity style={styles.createPortfolio} onPress={goToCreatePortfolio}>
        <Text style={styles.createPortfolioText}>Create One</Text>
      </TouchableOpacity>
      <Text style={[styles.noPortfolioText, {marginVertical:0, paddingBottom:0}]}>OR</Text>
      <TouchableOpacity style={styles.createPortfolio} onPress={goToBrowser}>
          <Text style={styles.createPortfolioText}>Go to Browser</Text>
      </TouchableOpacity>
        <Text style={[styles.noPortfolioText, {marginLeft:10, marginTop:30, fontSize:22, fontWeight:"bold"}]}>Copy Paste Link in Your Browser </Text>
      <View style={{marginTop: 40, height:100}}>
        <Button onPress={onShare} title="Copy/Share Link" />
      </View>
    </View>
  )
}

export default NoPortfolio

//const styles = StyleSheet.create({})