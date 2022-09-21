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
    alignSelf: 'center',
    backgroundColor: colors.primary,
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

  resultsText: {
    color: colors.textDark,
    paddingHorizontal: 15,
  },
  Searontainer: {
    width: '98.5%',
    marginHorizontal: '1.5%',
    height: deviceHieght,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
  },
  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
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
});

export default styles;
