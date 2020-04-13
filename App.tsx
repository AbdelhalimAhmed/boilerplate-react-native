import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Counter } from './src/components'
import { CountProvider } from './src/contexts/count-context'
import { UserProvider } from './src/contexts/user-context'
import { Colors } from './src/services';
import UserProfile from './src/containers/profile/user-profile'

export default function App() {
  return (
    <CountProvider>
      <View style={styles.container}>
        <Counter />
        <UserProvider>
          <UserProfile />
        </UserProvider>
      </View>
    </CountProvider>
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
