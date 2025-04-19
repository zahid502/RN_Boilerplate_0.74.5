import {colors, fonts, Images, VectorIcons} from '@constants';
import React, {memo, ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {navigationRef} from '../../../../navigation-helper';
import {goBack} from '../../../../root-navigation';

interface CustomHeaderProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  drawer?: boolean;
  isGoBack?: boolean;
  rightChildren?: ReactNode;
  onBackPress?: () => void;
  isCapitalized?: boolean;
}

const CustomHeader = memo(
  ({
    isGoBack,
    title,
    style,
    drawer,
    onBackPress,
    isCapitalized = true,
  }: CustomHeaderProps) => {
    const openDrawer = () => {
      navigationRef.current.dispatch(DrawerActions.openDrawer());
    };

    const onGoBackPress = () => {
      if (onBackPress) {
        onBackPress();
      } else {
        goBack();
      }
    };

    return (
      <View style={[styles.container, style]}>
        <View style={styles.mainWrapper}>
          <View style={{flex: 0.2, alignItems: 'flex-start'}}>
            {isGoBack ? (
              <TouchableOpacity
                style={styles.backIconWrapper}
                onPress={onGoBackPress}>
                <VectorIcons.MaterialCommunity
                  name={'arrow-left'}
                  size={28}
                  color={colors.white}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                disabled={drawer ? false : true}
                onPress={openDrawer}>
                {drawer && <Images.MENU height={30} width={30} />}
              </TouchableOpacity>
            )}
          </View>
          <View style={{flex: 0.6, alignItems: 'center'}}>
            <Text
              style={[
                styles.title,
                {textTransform: isCapitalized ? 'capitalize' : 'none'},
              ]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {title}
            </Text>
          </View>
          <View style={{flex: 0.2, alignItems: 'flex-end'}}>
            <View style={styles.empty} />
          </View>
        </View>
      </View>
    );
  },
);

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: colors.primary,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
  mainWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  backIconWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    width: 50,
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.SFPRODISPLAY_BOLD,
    textTransform: 'capitalize',
  },
  empty: {
    height: 10,
    width: 10,
  },
});
