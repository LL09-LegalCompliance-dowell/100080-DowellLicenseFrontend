import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    height: '100%',
  },
  introLogoTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  topLogo: {
    width: 190,
    height: 180,
    resizeMode: 'contain',
  },
  titlesWrapper: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesTitle: {
    fontFamily: 'InriaSans-Bold',
    fontSize: 34,
    textAlign: 'center',
    color: colors.textDark,
  },
  titlesSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    paddingHorizontal: 32,
    textAlign: 'center',
    marginTop: 65,
    color: colors.textDark,
  },
  getStarted: {
    marginTop: 90,
    backgroundColor: colors.primary,
    borderRadius: 15,
    // paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 230,
    height: 57,
    flexDirection: 'row',
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    alignItems: 'center',
    paddingRight: 15,
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
    color: colors.textDark,
  },
  introLogoSmall: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  smallLogo: {
    width: 70,
    height: 50,
  },
});

export default styles;
