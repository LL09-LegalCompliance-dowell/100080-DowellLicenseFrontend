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
});

export default styles;
