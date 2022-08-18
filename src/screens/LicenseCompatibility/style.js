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

  icontyle: {
    transform: [{rotate: '90deg'}],
    marginTop: -55,
    marginLeft: 200,
    paddingRight: 'auto',
    },

  button: {
    marginTop: 100,
  },
});

export default styles;
