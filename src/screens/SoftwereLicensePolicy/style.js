import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    paddingTop: 80,
  },

  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    paddingBottom: 15,
  },

  textStyle: {
    fontSize: 15,
    color: colors.textDark,
    fontWeight: '400',
  },

  blurImage: {
    marginVertical: 20,
  },

  getStarted: {
    marginTop: 15,
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 50,
    elevation: 3,
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    alignItems: 'center',
  },

  faq: {
    color: colors.primary,
    fontSize: 17,
    textDecorationLine: 'underline',
    marginTop: 30,
  },

  textlight: {
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 15,
  },

  viewSampleContainer: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 330,
    zIndex: 1,
  },

  viewSample: {
    flexDirection: 'row',
    color: colors.primary,
  },

  faqq: {
    color: colors.primary,
    fontSize: 17,
    textDecorationLine: 'underline',
    paddingLeft: 5,
  },
});

export default styles;
