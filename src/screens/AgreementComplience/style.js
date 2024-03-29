import {Platform, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },

  heading: {
    fontFamily: 'roboto',
    fontSize: 15,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 35,
    paddingTop: 80,
    position: 'absolute',
    paddingHorizontal: 12,
  },

  iconContainer: {
    backgroundColor: '#D9D9D9',
    height: 40,
    widht: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 5,
    margin: 10,
    marginRight: 15,
    flex: 1,
  },

  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 12,
  },

  listHeading: {
    width: '100%',
    fontSize: 18,
    fontWeight: '500',
    color: colors.textDark,
    fontFamily: 'roboto',
    flex: 11,
  },

  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
    height: 1,
    // elevation: ,
  },
});

export default styles;
