import {CustomHeader} from '@components';
import store from '@redux/store';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = store.store.dispatch;

  return (
    <>
      <CustomHeader title="Home" drawer />
      <View style={styles.container}>
        <Text style={styles.label}>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
