import {height_screen} from '@app-utils/dimensions';
import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    // paddingTop: height_screen * 0.04,
    backgroundColor: colors.background,
  },
  drawerItemContainer: {
    paddingTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: colors.primary,
    fontSize: 14,
    width: 110,
    fontFamily: fonts.SFPRODISPLAY_MEDIUM,
  },
  caption: {
    fontSize: 12,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SFPRODISPLAY_BOLD,
    paddingVertical: 10,
  },
});

export default styles;
