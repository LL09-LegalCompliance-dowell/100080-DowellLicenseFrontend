import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },

  // cardContainer styles
  cardContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },

  // Below Servies and product
  miniContainer: {
    display: 'flex',
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

  productItemsContainer: {
    paddingHorizontal: 23,
    display: 'flex',
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItem: 'center',
    
  },

  singleItemContainer: {
    display: 'flex',
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },

  itemIcon: {},

  itemText: {
    marginTop: 12,
    color: colors.textDark,
  },
});

export default styles;
