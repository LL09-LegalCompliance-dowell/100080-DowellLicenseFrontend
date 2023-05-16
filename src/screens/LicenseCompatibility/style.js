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
    fontFamily: 'roboto',
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
    fontFamily: 'roboto',
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
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'roboto',
    width: '100%',
  },
  SearchContainer: {
    paddingTop: 12,
    width: '98.5%',
    marginHorizontal: '1.5%',
    zIndex: 10,
    borderRadius: 15,
    justifyContent:"flex-start",
    alignItems:"flex-start"
    
  },
  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
    height: 1,
    marginTop: 10,
    // elevation: ,
  },
  serchResultContainer: {
    borderRadius: 15,
    borderColor: '#33585858',
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 50,
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
    fontFamily: 'roboto',
  },
  serchResultDetails: {
    color: colors.textDark,
    fontFamily: 'roboto',
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
    fontWeight: '700',
    alignSelf: 'center',
    margin: 2,
    fontFamily: 'roboto',
    color: colors.textDark,
    fontSize: 17,
  },
  tableDatarText: {
    fontWeight: '500',
    alignSelf: 'center',
    // marginVertical: 10,
    fontSize: 16,
    fontFamily: 'roboto',
  },
  readMoreContainer: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 25,
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
  logosConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vsText: {
    fontSize: 12,
    color: '#A7A7A7',
    marginBottom: 35,
  },
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
  },
  imagesContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  logoStyle: {
    width: 100,
    height: 100,
  },
  lightColor: {
    fontSize: 15,
    color: '#A7A7A7',
    fontWeight: '400',
    marginBottom: 15,
    fontFamily: 'roboto',
  },
  percentage: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: 'bold',
    paddingLeft: 7,
    fontFamily: 'roboto',
  },
  progressBarConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  tableHederConatainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
  },
  tableItemConatainer: {
    borderColor: 'black',
    borderRightWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  tableDataConatainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    flex: 1,
  },
});

export default styles;
