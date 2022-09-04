import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '100%',
    paddingBottom: 300,
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
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesTitle: {
    fontFamily: 'InriaSans-Bold',
    fontSize: 34,
    textAlign: 'center',
  },
  policyWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  policyText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 15,
  },

  inputsContainer: {
    width: '100%',
    marginTop: 30,
  },

  passwordInputsContainer: {
    backgroundColor: '#d3d3d3',
    borderRadius: 18,
    width: '100%',
    padding: 2,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  inputStyle: {
    fontSize: 18,
    width: '90%',
    textDecorationLine: 'none',
  },

  getStarted: {
    marginTop: 45,
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 260,
    height: 57,
    elevation: 3,
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    alignItems: 'center',
  },
  poweredWrapper: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poweredText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  introLogoSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  smallLogo: {
    width: 42,
    height: 29,
  },
});

export default styles;
