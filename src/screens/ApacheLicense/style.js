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
    fontSize: 22,
    fontWeight: '600',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily:'roboto',
  },

  heading1: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.textDark,
    paddingTop: 2,
    paddingBottom: 5,
    fontFamily:'roboto',
    letterSpacing: 1.2,

  },

  heading2: {
    letterSpacing: 1.4,

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
    letterSpacing: 1.5,
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
    fontSize: 18,
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
  },
  separator: {
    width: '100%',
    backgroundColor: 'gray',
    height: 1,
  },
});

export default styles;
