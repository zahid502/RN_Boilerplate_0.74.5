import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {CustomHeader} from '@components';

const ProfileScreen = () => {
  return (
    <>
      <CustomHeader title="Profile" isGoBack />
      <View style={styles.container}>
        <Text style={styles.label}>Profile Screen</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
