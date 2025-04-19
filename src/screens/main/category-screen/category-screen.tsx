import {CustomHeader} from '@components';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CategoryScreen = () => {
  return (
    <>
      <CustomHeader title="Categories" drawer />
      <View style={styles.container}>
        <Text style={styles.label}>Category Screen</Text>
      </View>
    </>
  );
};

export default CategoryScreen;
