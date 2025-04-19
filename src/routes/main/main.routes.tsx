import {ScreenEnum} from '@constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavParamList} from '@routes/param-list';
import {ProfileScreen} from '@screens';
import React, {memo} from 'react';
import BottomTabNav from './bottom-tabs.routes';

const MainNav = memo(() => {
  const {Navigator, Screen} = createNativeStackNavigator<MainNavParamList>();

  return (
    <Navigator
      initialRouteName={'BottomTabNav'}
      screenOptions={{headerShown: false}}>
      <Screen name="BottomTabNav" component={BottomTabNav} />
      <Screen
        name={ScreenEnum.Profile}
        component={ProfileScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Navigator>
  );
});

export default MainNav;
