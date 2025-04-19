import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  label: {
    fontSize: 18,
    lineHeight: 22,
    color: colors.primary,
    fontFamily: fonts.SFPRODISPLAY_REGULAR,
  },
});
export default styles;
