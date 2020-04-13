import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native'
import { useCountDispatch, useCountState } from '../contexts/count-context'

const Counter = () => {
  const { count } = useCountState()
  const dispatch = useCountDispatch()
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Text onPress={() => dispatch({ type: 'increment' })}>+</Text>
      <Text>{count}</Text>
      <Text onPress={() => dispatch({ type: 'decrement' })}>-</Text>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100
  }
});

export default Counter