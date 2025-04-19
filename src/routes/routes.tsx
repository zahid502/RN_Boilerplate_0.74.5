import {ToastView} from '@components';
import {colors} from '@constants';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from '@redux/store';
import {HelperService} from '@services';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {connect} from 'react-redux';
import {isReadyRef, navigationRef, routeNameRef} from '../../navigation-helper';
import AuthNav from './auth/auth.routes';
import MainDrawerNav from './main/drawer-nav.routes';

//-----------------------------------------------
interface IProps {}

//-----------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {};
};

//-----------------------------------------------

const Routes = ({}: IProps) => {
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1000);

    const unsubscribe = NetInfo?.addEventListener(state => {
      HelperService?.getInstance()?.showNetworkStatus(
        state.isConnected ? state.isConnected : false,
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
        isReadyRef.current = true;
      }}>
      <ToastView />
      <FlashMessage position={'bottom'} />
      <StatusBar backgroundColor={colors.primaryDark} />
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: colors.primaryDark,
        }}
      />

      {true ? <MainDrawerNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default connect(mapStateToProps)(Routes);
