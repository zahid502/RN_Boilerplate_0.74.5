import {colors, fonts, Images, ScreenEnum} from '@constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsNavParamList} from '@routes/param-list';
import {CategoryScreen, HomeScreen} from '@screens';
import React from 'react';
import {Platform} from 'react-native';
import {BottomFabBar} from 'rn-wave-bottom-bar';

const {Navigator, Screen} = createBottomTabNavigator<BottomTabsNavParamList>();

const BottomTabNav = () => {
  return (
    <Navigator
      initialRouteName={ScreenEnum.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          height: Platform.OS == 'android' ? 70 : 60,
          marginBottom: Platform.OS == 'ios' ? 20 : null,
        },
        tabBarLabelStyle: {
          color: colors.white,
          fontFamily: fonts.SFPRODISPLAY_REGULAR,
          fontSize: 12,
        },
      }}
      tabBar={props => (
        <BottomFabBar
          mode="default"
          isRtl={false}
          // Add custom spring config for smooth animations
          springConfig={
            {
              // damping: 10, // Adjust damping for smoothness
              // stiffness: 100, // Adjust stiffness for elasticity
              // mass: 1, // Mass of the object being animated
              // overshootClamping: false, // Allow overshooting
              // restSpeedThreshold: 0.001,
              // restDisplacementThreshold: 0.001,
            }
          }
          // Add Shadow and adjust the size of the active tab button
          focusedButtonStyle={{
            backgroundColor: colors.white,

            ///////////---shadow---///////////
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 2,
            // height: 60, // Custom height for the focused button
            // width: 60, // Custom width for the focused button
            // borderRadius: 30, // Ensure it's a round button (adjust as needed)
          }}
          // Add background color for tab bar
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}>
      <Screen
        name={ScreenEnum.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: ScreenEnum.Home,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Images.NOTIFICATION_ACTIVE height={30} width={30} />
            ) : (
              <Images.NOTIFICATION height={25} width={25} />
            ),
        }}
      />
      <Screen
        name={ScreenEnum.Category}
        component={CategoryScreen}
        options={{
          tabBarLabel: ScreenEnum.Category,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Images.NOTIFICATION_ACTIVE height={30} width={30} />
            ) : (
              <Images.NOTIFICATION height={25} width={25} />
            ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabNav;
