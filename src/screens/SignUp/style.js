import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: width,
    backgroundColor: 'white',
    height: height,
  },
  introLogoTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  topLogo: {
    width: 148,
    height: 101,
  },
  titlesWrapper: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesTitle: {
    color: colors.textDark,
    fontFamily: 'InriaSans-Bold',
    fontSize: 32,
    textAlign: 'center',
  },
  policyWrapper: {
    flexDirection: 'row',
    marginTop: 18,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'wrap',
  },
  checkbox: {
    // alignSelf: 'center',
    marginBottom: 10,
  },
  policyText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 14,
    color: colors.textDark,
  },

  policyTextLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
    paddingLeft: 3,
  },

  inputsContainer: {
    width: '100%',
    marginTop: 45,
  },

  passwordInputsContainer: {
    backgroundColor: '#D9D9D9',
    borderColor: '#33585858',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    padding: 2,
    height: 57,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
  },

  inputStyle: {
    fontSize: 20,
    width: '90%',
    textDecorationLine: 'none',
  },

  getStarted: {
    marginTop: 40,
    backgroundColor: colors.primary,
    borderRadius: 10,
    // paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 51,
    elevation: 3,
  },
  getStartedd: {
    marginTop: 20,
    backgroundColor: '#006400',
    borderRadius: 10,
    // paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 51,
    elevation: 3,
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    alignItems: 'center',
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 10,
  },
});

export default styles;
