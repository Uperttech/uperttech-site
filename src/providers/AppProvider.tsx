/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useReducer } from 'react'
import { toast } from 'react-toastify'
import { API } from '~/util/API-FORM'
interface AppProviderState {
  error?: string
  loading?: boolean
}

interface AppContextData extends AppProviderState {
  sendContact(message: string, data: FormData): Promise<void>
  sendBudget(message: string, data: FormData): Promise<void>
}

const AppContext = createContext<AppContextData>({} as AppContextData)

type Provider<T> = React.FC<{ children: JSX.Element[] | JSX.Element }> & {
  Consumer: React.Consumer<T>
}

enum AppActionTypes {
  Start,
  Success,
  Error
}

const authReducer = (
  state: AppProviderState,
  action: { type: AppActionTypes; payload?: AppProviderState }
) => {
  switch (action.type) {
    case AppActionTypes.Start:
      return { ...state, loading: true }
    case AppActionTypes.Success:
      return {
        ...state,
        loading: false,
        error: ''
      }
    case AppActionTypes.Error:
      return { ...state, loading: false, error: action.payload.error }
    default:
      throw new Error('Unknown action.type')
  }
}

const AppProvider: Provider<AppContextData> = props => {
  const [state, dispatch] = useReducer(authReducer, {
    error: undefined,
    loading: false
  })

  const sendContact = async (message: string, data: FormData) => {
    try {
      dispatch({ type: AppActionTypes.Start })
      await API.sendContact(data)
      toast.success(message)
      dispatch({ type: AppActionTypes.Success })
    } catch (err) {
      dispatch({
        type: AppActionTypes.Error,
        payload: {
          error: err.message
        }
      })
    }
  }

  const sendBudget = async (message: string, data: FormData) => {
    try {
      dispatch({ type: AppActionTypes.Start })
      await API.sendBudget(data)
      toast.success(message)
      dispatch({ type: AppActionTypes.Success })
    } catch (err) {
      dispatch({
        type: AppActionTypes.Error,
        payload: {
          error: err.message
        }
      })
    }
  }
  const { error, loading } = state

  return (
    <AppContext.Provider
      value={{ sendContact, error, loading, sendBudget }}
      {...props}
    />
  )
}

AppProvider.Consumer = AppContext.Consumer

export default AppProvider

export const useApp = (): AppContextData => useContext(AppContext)
