import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    // height:"100%",
    paddingTop: 65,
    alignSelf:"center"
  },

  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily:'roboto'
  },
  contactText:{
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    marginHorizontal:20,
  },
  // Contact Container
  contactContainer: {
    paddingHorizontal: 13,
  },

  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  description: {
    marginLeft: 20,
  },

  aboutText: {
    marginLeft: 20,
  },

  inputsContainer: {
    paddingHorizontal: 13,
  },

  //   Button
  button: {
    marginVertical: 30,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    elevation: 5,
    width: '30%',
    paddingVertical: 7,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    textTransform: 'capitalize',
    fontSize: 16,
  },

  imageStyle: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 10,
  },
  aboutText:{
    color: colors.textDark,
    fontFamily:'roboto'
  }
});

export default styles;
