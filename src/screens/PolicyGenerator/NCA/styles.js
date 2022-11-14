import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
    color: colors.textDark,
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

  // generators styles starts here
  calendarPosition: {
    position: 'absolute',
    right: 20,
    top: -45,
    elevation: 3,
  },
  center: {
    alignItems: 'center',
    postion: 'absolute',
    top: 0,
  },
  chevron: {
    backgroundColor: '#C4C4C4',
    width: 23,
    height: 23,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hide: {
    display: 'none',
  },
  horizontalLine: {
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
    width: '70%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4C4C4',
    padding: 10,
    backgroundColor: '#D8D8D8',
  },
  formGroup: {
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: '#489503',
    color: '#00000',
    paddingHorizontal: 30,
    borderRadius: 15,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    elevation: 3,
    marginBottom: 10,
    marginTop: 30,
  },
  cancelButton: {
    color: colors.primary,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nextText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  partyDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  radio: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioWrapper: {
    marginLeft: 20,
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  agree: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  normaltext: {
    fontWeight: 'normal',
    fontSize: 12,
  },
  boldfont: {
    fontWeight: 'bold',
  },
  TextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  section2: {
    paddingTop: 20,
  },
  italic: {
    fontStyle: 'italic',
    fontWeight: '100',
    fontSize: 12,
  },
  imageWrapper: {
    position: 'relative',
    backgroundColor: 'white',
    height: 150,
  },
  centerLink: {
    position: 'absolute',
    top: 180,
    left: 100,
    justifyContent: 'center',
  },
  imageText: {
    color: 'green',
    backgroundColor: 'white',
    width: 150,
    textDecorationLine: 'underline',
  },
  disclaimer: {
    paddingLeft: 80,
    paddingTop: 10,
  },
  generatingText: {
    color: 'white',
  },
  policyButton: {
    backgroundColor: '#489503',
    color: '#00000',
    paddingHorizontal: 30,
    borderRadius: 15,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 3,
    marginBottom: 10,
    marginTop: 10,
  },
  FAQtext: {
    color: 'green',
    textDecorationLine: 'underline',
  },
});

export default styles;
