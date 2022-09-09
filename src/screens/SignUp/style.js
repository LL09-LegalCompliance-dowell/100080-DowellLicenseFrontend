import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  heading: {
    fontSize: 28,
    fontWeight: '500',
    color: colors.primary,
    paddingTop: 20,
    paddingBottom: 15,
  },
});

export default styles;
