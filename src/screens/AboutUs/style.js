import {Platform, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    // height:"100%",
    // paddingTop: 50,
    alignSelf: 'center',
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 90 : 50,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: 'roboto',
  },
  contactText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
    lineHeight: 22,
    color: "#36454F",
    textAlign: "justify"
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
});

export default styles;
