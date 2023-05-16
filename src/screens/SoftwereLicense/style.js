import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'lightgray',
  },

  // cardContainer: {
  //   marginTop: 80,
  //   marginBottom: 20,
  //   marginHorizontal: 15,
  // },

  // Below Slider
  miniContainer: {
    display: 'flex',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    width: '100%',
  },

  //   section 1

  cardContainer: {
    marginTop: 80,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '100%',
  },

  cardContainer1: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    width: 335,
    padding: 18,
    borderRadius: 15,
    overflow: 'hidden',
    borderBottomColor: colors.borderLight,
    borderBottomWidth: 2,
    elevation: 5,
    marginRight: 15,
  },
  // Row1 starts here
  row1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },

  row1Text: {
    color: colors.textDark,
    fontSize: 20,
    fontWeight: '700',
  },
  //  Row 2 starts here
  row2: {
    alignItems: 'center',
    marginTop: 15,
  },
  row2Text: {
    color: colors.textDark,
    fontWeight: '600',
  },

  //  Row 3 starts here
  row3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  row3Text: {
    color: colors.textDark,
    fontSiz: 8,
    postion: 'relative',
    left: -34,
  },

  cardButton: {
    postion: 'relative',
    left: -50,
  },

  // Section 2

  heading: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.textDark,
    paddingBottom: 15,
  },
  section2: {
    marginTop: 20,
    alignItems: 'center',
    borderBottomColor: colors.borderLight,
    borderBottomWidth: 1,
    alevation: 2,
    paddingBottom: 20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    width: 185,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textTransform: 'capitalize',
    fontSize: 18,
  },

  iconContainer: {
    marginRight: 10,
  },

  downIcontyle: {
    paddingLeft: 10,
    marginTop: -10,
    elevation: 15,
  },

  // Section 3
  setion3: {
    paddingVertical: 10,
  },
  searchInput: {
    width: '90%',
    alignSelf: 'center',
  },

  //section 4
  section4: {
    backgroundColor: 'white',
  },
  section4Container: {
    marginHorizontal: 25,
    paddingVertical: 7,
  },
  listHeading: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.textDark,
    paddingBottom: 3,
  },
  VersionDateContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  separator: {
    width: '100%',
    backgroundColor: colors.borderLight,
    height: 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  serchResultItemContainer: {
    paddingHorizontal: 17,
    paddingVertical: 3,
    // marginVertical: 3,
    backgroundColor: 'white',
  },
  serchResultHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textDark,
    fontFamily: 'roboto',
    marginTop: 3,
  },
  serchResultDetails: {
    color: colors.textDark,
    fontFamily: 'roboto',
    paddingBottom: 7,
  },
  vsText: {
    fontSize: 12,
    color: '#A7A7A7',
    // marginBottom: 35,
    alignSelf: 'center',
  },
});

export default styles;
