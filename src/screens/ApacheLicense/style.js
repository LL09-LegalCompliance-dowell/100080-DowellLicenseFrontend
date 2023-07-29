import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 80,
  },

  // Upper Container
  upperContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textDark,
    paddingTop: 7,
    paddingBottom: 15,
    fontFamily:'roboto',
  },

  heading1: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.textDark,
    paddingTop: 2,
    fontFamily:'roboto',
    letterSpacing: 0.5,
    textAlign:'justify'
  },

  heading2: {
    textAlign:'justify',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingTop: 5,
    fontFamily:'roboto',
    paddingBottom: 20,
  },
  heading4: {
    fontSize: 15,
    fontFamily:'roboto',
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 2,
    paddingBottom: 5,
    paddingTop: 25,
  },
  // Bottom container
  middleContainer: {},

  link: {
    color: colors.primary,
    fontSize: 15,
    textDecorationLine: 'underline',
  },

  //bottomContainer
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200,
  },
  heading3: {
    fontSize: 15,
    fontWeight: '400',
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 20,
    fontFamily:'roboto',
    color:'gray',
    textAlign:'justify'
  },
  separator: {
    width: '100%',
    backgroundColor: 'gray',
    height: 1,
  },
});

export default styles;
