import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },

  // cardContainer styles
  cardContainer: {
    marginTop: 80,
    marginBottom: 20,
    marginHorizontal: 15,
  },

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
    elevation: 10,
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
    paddingTop: 20,
    paddingBottom: 15,
  },
  section2: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 35,
    borderBottomColor: colors.borderLight,
    borderBottomWidth: 1,
    alevation: 2,
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
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
    paddingVertical: 30,
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
    fontSize: 24,
    fontWeight: '600',
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
    height: 1,
    elevation: 1,
  },
});

export default styles;
