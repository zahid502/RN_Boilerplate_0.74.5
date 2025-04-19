import {colors, ScreenEnum} from '@constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavParamList} from '@routes/param-list';
import {LoginScreen} from '@screens';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const {Navigator, Screen} = createNativeStackNavigator<AuthNavParamList>();
const AuthNav = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <Navigator
          initialRouteName={ScreenEnum.Login}
          screenOptions={{headerShown: false}}>
          <Screen
            name={ScreenEnum.Login}
            component={LoginScreen}
            options={{animation: 'slide_from_bottom'}}
          />
        </Navigator>
      </SafeAreaView>
    </>
  );
};

export default AuthNav;
