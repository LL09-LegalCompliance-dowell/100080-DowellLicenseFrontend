import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    
    width: '100%',
    
  },

  heading: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textDark,
    paddingTop: 20,
    paddingBottom: 35,
    paddingTop: 80,
    position: 'absolute',
    paddingHorizontal: 12,
  },

  iconContainer: {
    backgroundColor: '#dcdcdc',
    height: 30,
    widht: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 1,
    margin: 10,
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
    fontSize: 20,
    fontWeight: '600',
    color: colors.textDark,
  },

  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
    height: 1,
    // elevation: ,
  },
});

export default styles;
