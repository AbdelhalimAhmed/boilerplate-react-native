import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from './src/services';
import AppNavigator from "./src/navigations/AppNavigator";

export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
