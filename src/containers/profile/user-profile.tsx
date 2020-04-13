import React from 'react';
import { ScrollView, Text, ActivityIndicator, Button } from 'react-native'
import { useUserState, useUserDispatch, updateUser } from '../../contexts/user-context'
import styles from './styles'

const UserProfile = () => {
  const { user, status, error } = useUserState()
  const userDispatch = useUserDispatch()

  function handleSubmit() {
    updateUser(userDispatch, user, { id: 1, name: 'is not halim', hint: 'go' })
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Button title={'update data User'} onPress={() => handleSubmit()}></Button>
      {status === 'pending' && <ActivityIndicator color={'red'} />}
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </ScrollView>
  )
};



export default UserProfile