import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    zIndex: 99999999,
  },
  textStyle: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: fonts.SFPRODISPLAY_BOLD,
  },
  darkContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryDark,
    zIndex: 99999999,
  },
  darkTextStyle: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: fonts.SFPRODISPLAY_REGULAR,
  },
});
export default styles;
