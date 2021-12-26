import React from 'react';
import {StyleSheet, View} from 'react-native';

import MainScreen from './src/Screen/MainScreen';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
