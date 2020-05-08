import React from "react";
import { ScrollView, Button, ActivityIndicator, Text } from "react-native";
import { useCalendarState, useCalendarDispatch, getHolidays } from '../../contexts/calendar-context'

export default ({ navigation }) => {
  const { holidaysList, status, error } = useCalendarState()
  const calendarDispatch = useCalendarDispatch()

  function handleSubmit() {
    getHolidays(calendarDispatch)
  }

  return (
    <ScrollView contentContainerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 100,
    }}>
      <Button title="Get Holidays In Egypt" onPress={() => handleSubmit()} />
      {status === 'pending' && <ActivityIndicator color={'red'} />}
      {holidaysList.map(item => {
        return (
          <Text key={item.id} style={{ marginVertical: 5 }}>{item.summary}</Text>
        )
      })}
    </ScrollView>
  )
};