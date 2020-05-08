import * as React from 'react';
import { getHolidaysApi } from '../apis/calendar';

//define types
type Action =
  | { type: 'GET_HOLIDAYS_REQUEST' }
  | { type: 'GET_HOLIDAYS_SUCCESS'; payload: Array<object> }
  | { type: 'GET_HOLIDAYS_FAILURE'; error: string };
type Dispatch = (action: Action) => void;
type State = { holidaysList: Array<object>; status: string; error: string };
type CalendarProviderProps = { children: React.ReactNode };

//create contextes
const CalendarStateContext = React.createContext<State | undefined>(undefined);
const CalendarDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

//define reducers
function calendarReducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_HOLIDAYS_REQUEST': {
      return { ...state, status: 'pending', error: '' };
    }
    case 'GET_HOLIDAYS_SUCCESS': {
      return { holidaysList: action.payload, status: 'resolved', error: '' };
    }
    case 'GET_HOLIDAYS_FAILURE': {
      return { ...state, status: 'rejected', error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

//define Context Prodvider
function CalendarProvider({ children }: CalendarProviderProps) {
  const [state, dispatch] = React.useReducer(calendarReducer, {
    holidaysList: [],
    status: 'idle',
    error: '',
  });
  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
}

//add custome-hook to using CalendarStateContext
function useCalendarState() {
  const context = React.useContext(CalendarStateContext);
  if (context === undefined) {
    throw new Error('useCalendarState must be used within a CalendarProvider');
  }
  return context;
}

//add custome-hook to using CalendarDispatchContext
function useCalendarDispatch() {
  const context = React.useContext(CalendarDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCalendarDispatch must be used within a CalendarProvider'
    );
  }
  return context;
}

// update user details endpoint
async function getHolidays(dispatch: Dispatch) {
  dispatch({ type: 'GET_HOLIDAYS_REQUEST' });
  try {
    const updatedCalendar = await getHolidaysApi();
    dispatch({ type: 'GET_HOLIDAYS_SUCCESS', payload: updatedCalendar });
  } catch (error) {
    dispatch({ type: 'GET_HOLIDAYS_FAILURE', error });
  }
}

export { CalendarProvider, useCalendarState, useCalendarDispatch, getHolidays };
