import {PrimaryButton} from '@components';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login Screen</Text>
      <PrimaryButton title="Submit" />
    </View>
  );
};

export default LoginScreen;
