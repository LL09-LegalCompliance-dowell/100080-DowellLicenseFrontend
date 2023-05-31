import {Platform, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 85 : 60,
    flex: 1,
  },

  // Upper Container
  // upperContainer: {
  //   paddingLeft: 20,
  //   paddingBottom: 130,
  // },

  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 15,
  },

  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
    height: 1,
    elevation: 1,
    marginTop: 20,
  },

  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  textStyle: {
    marginLeft: 20,
    paddingBottom: 30,
    color: colors.textDark,
  },
});

export default styles;
