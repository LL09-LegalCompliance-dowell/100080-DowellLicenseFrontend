import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
const deviceHieght = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 60,
  },

  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 15,
  },

  inputsContainer: {
    paddingHorizontal: 15,
  },

  downIcontyle: {
    paddingLeft: 22,
    marginTop: -24,
    elevation: 15,
  },

  iconContainer: {
    marginRight: 10,
    position: 'absolute',
    right: 25,
    top: 159,
  },

  buttonContainer: {
    marginTop: 10,
    alignSelf: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    // backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 143,
    height: 41,
    elevation: 5,
    width: '30%',
    paddingVertical: 5,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  inputsStyleContainer: {
    backgroundColor: '#D9D9D9',
    borderColor: '#33585858',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    height: 57,
    padding: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputsStyleText: {
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginLeft: 10,
    color: 'gray',
  },
  inputsTitleText: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginLeft: 10,
    color: colors.textDark,
    fontWeight: '800',
  },
  resultsText: {
    color: colors.textDark,
    paddingHorizontal: 15,
  },
  SearchContainer: {
    width: '98.5%',
    marginHorizontal: '1.5%',
    height: deviceHieght,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    borderRadius: 15,
  },
  separator: {
    width: '100%',
    // backgroundColor: colors.borderLight,
    height: 1,
    // elevation: ,
  },
  serchResultContainer: {
    borderRadius: 15,
    borderColor: '#33585858',
    borderWidth: 2,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  serchResultItemContainer: {
    paddingHorizontal: 17,
    paddingVertical: 7,
    backgroundColor: 'white',
  },
  serchResultHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textDark,
  },
  serchResultDetails: {
    color: colors.textDark,
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 3,
    paddingLeft: 15,
    marginTop: -8,
  },
  tableHeaderText: {
    fontWeight: '800',
    alignSelf: 'center',
    paddingVertical: 10,
    fontSize: 16,
  },
  tableDatarText: {
    fontWeight: '500',
    alignSelf: 'center',
    paddingVertical: 10,
    fontSize: 16,
  },
  readMoreContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 500,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
    borderRadius: 30,
  },
  readMoreText: {
    color: colors.primary,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  readMoreIcon: {
    marginLeft: 25,
    paddingHorizontal: -10,
  },
});

export default styles;
