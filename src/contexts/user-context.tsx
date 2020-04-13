import * as React from 'react'
import { updateUserApi } from '../apis/user'
//define types
type Action = { type: 'start update' } | { type: 'finish update', payload: {} } | { type: 'fail update', error: '' }
type Dispatch = (action: Action) => void
type User = {}
type State = { user: User, status: string, error: string }
type UserProviderProps = { children: React.ReactNode }

//create contextes
const UserStateContext = React.createContext<State | undefined>(undefined)
const UserDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
)


//define reducers
function userReducer(state: State, action: Action) {
  switch (action.type) {
    case 'start update': {
      return { ...state, status: 'pending', error: '' }
    }
    case 'finish update': {
      return { user: action.payload, status: 'resolved', error: '' }
    }
    case 'fail update': {
      return { ...state, status: 'rejected', error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

//define Context Prodvider
function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = React.useReducer(userReducer, { user: {}, status: 'idle', error: '' })
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

//add custome-hook to using UserStateContext
function useUserState() {
  const context = React.useContext(UserStateContext)
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }
  return context
}

//add custome-hook to using UserDispatchContext
function useUserDispatch() {
  const context = React.useContext(UserDispatchContext)
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider')
  }
  return context
}

// update user details endpoint
async function updateUser(dispatch: Dispatch, user: User, updates: User) {
  dispatch({ type: 'start update' })
  try {
    const updatedUser = await updateUserApi(user, updates)
    dispatch({ type: 'finish update', payload: updatedUser })
  } catch (error) {
    dispatch({ type: 'fail update', error })
  }
}

export { UserProvider, useUserState, useUserDispatch, updateUser }