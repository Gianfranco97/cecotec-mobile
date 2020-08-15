import React from 'react';
import {
  Layout,
  Spinner,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = () => (
  <Layout style={styles.loadingContainer}>
    <Spinner size="large" />
  </Layout>
);

export default Loading;
