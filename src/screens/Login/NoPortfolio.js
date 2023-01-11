import {Text, View, StatusBar,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const NoPortfolio = ({navigation, route}) => {
  const params= route.params;
  const {session_id, username} = route.params;
  //console.log(params)

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
    </View>
  )
}

export default NoPortfolio

//const styles = StyleSheet.create({})