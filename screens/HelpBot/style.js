import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.primary,
    padding: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 45,
  },

  miniContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 25,
  },

  text: {
    color: 'white',
    paddingTop: 2,
  },
});

export default styles;
