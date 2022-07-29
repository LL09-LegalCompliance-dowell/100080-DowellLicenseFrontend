import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    introLogoTop:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
    },
    topLogo:{
      width: 148,
      height: 101,
    },
    titlesWrapper:{
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titlesTitle:{
      fontFamily:'InriaSans-Bold',
      fontSize: 34,
      textAlign: 'center',
    },
    titlesSubtitle:{
      fontFamily:'Roboto-Regular',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 25,
    },
    policyWrapper:{
      flexDirection: "row",
      marginTop: 105,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox: {
    alignSelf: "center",
    },
    policyText:{
      fontFamily:'Roboto-Regular',
      fontSize: 17,
      textAlign: 'center',
      marginTop: 15,
    },
    getStarted:{
      marginTop: 15,
      backgroundColor: colors.primary,
      borderRadius: 15,
      paddingVertical: 12,
      justifyContent: 'center',
      alignItems: 'center',
      width: 260,
      height: 57,
    },
    getStartedText:{
      color: 'white',
      fontFamily:'Roboto-Medium',
      fontSize: 26,
      alignItems: 'center',
    },
    poweredWrapper:{
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    poweredText:{
      fontFamily:'Roboto-Regular',
      fontSize: 20,
      textAlign: 'center',
    },
    introLogoSmall:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    smallLogo:{
      width: 42,
      height: 29,
    },
})

export default styles;