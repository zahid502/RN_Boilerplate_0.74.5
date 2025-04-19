import {ScreenEnum, VectorIcons, colors} from '@constants';
import {DrawerItem} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import {RootState} from '@redux/store';
import React, {memo} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import VersionInfo from 'react-native-version-info';
import {connect} from 'react-redux';
import {navigate} from '../../../root-navigation';
import styles from './styles';

//-----------------------------------------------------------------
interface IDrawerContentProps {
  navigation: DrawerNavigationHelpers;
}

//-----------------------------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {};
};
//-----------------------------------------------------------------

const Drawer = memo(({navigation}: IDrawerContentProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.drawerItemContainer}>
            <DrawerItem
              inactiveTintColor={colors.primary}
              label={({focused, color}) => {
                return (
                  <View style={styles.drawerItem}>
                    <Text style={styles.itemText}>Profile</Text>
                  </View>
                );
              }}
              icon={({color, size}) => (
                <VectorIcons.MaterialCommunity
                  name="account"
                  color={colors.primary}
                  size={size}
                />
              )}
              onPress={() => {
                navigate(ScreenEnum.Profile);
              }}
            />
          </View>
        </View>
      </ScrollView>
      <Text style={styles.caption}>Version {VersionInfo.appVersion}</Text>
    </SafeAreaView>
  );
});

export default connect(mapStateToProps)(Drawer);
