import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 65,
  },

  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 15,
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

  contactText: {
    marginLeft: 20,
    color: colors.textDark,
  },

  inputsContainer: {
    paddingHorizontal: 13,
  },

  //   Button
  button: {
    marginTop: 30,
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
});

export default styles;
