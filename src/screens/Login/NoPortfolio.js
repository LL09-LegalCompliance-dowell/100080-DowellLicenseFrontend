import {Text, View, StatusBar,Image, Linking, Alert } from 'react-native'
import React, {useCallback} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    <Text style={[styles.noPortfolioText, {marginVertical:30, paddingBottom:0}]}>OR</Text>
    <TouchableOpacity style={styles.createPortfolio} onPress={goToBrowser}>
        <Text style={styles.createPortfolioText}>Go to Browser</Text>
    </TouchableOpacity>
    </View>
  )
}

export default NoPortfolio

//const styles = StyleSheet.create({})