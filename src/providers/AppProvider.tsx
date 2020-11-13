/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useReducer } from 'react'
import { API, Budget, ContactData } from '../util/API'

interface AppProviderState {
  error?: string
  loading?: boolean
}

interface AppContextData extends AppProviderState {
  createBudget: (budgetData: Budget) => Promise<void>
  sendContact: (contactData: ContactData) => Promise<void>
}

const AppContext = createContext<AppContextData>({
  createBudget: async () => {},
  sendContact: async () => {}
})

type Provider<T> = React.FC<{ children: JSX.Element[] | JSX.Element }> & {
  Consumer: React.Consumer<T>
}

enum AppActionTypes {
  EmptyRecaptcha,
  Start,
  Success,
  Error
}

const authReducer = (
  state: AppProviderState,
  action: { type: AppActionTypes; payload?: AppProviderState }
) => {
  switch (action.type) {
    case AppActionTypes.EmptyRecaptcha:
      return { ...state, error: 'Preencha o reCAPTCHA' }
    case AppActionTypes.Start:
      return { ...state, loading: true }
    case AppActionTypes.Success:
      return {
        ...state,
        loading: false,
        error: undefined
      }
    case AppActionTypes.Error:
      return { ...state, loading: false, error: action.payload?.error }
    default:
      throw new Error('Unknown action.type')
  }
}

const AppProvider: Provider<AppContextData> = props => {
  const [state, dispatch] = useReducer(authReducer, {
    error: undefined,
    loading: false
  })

  const createBudget = async (budgetData: Budget) => {
    try {
      if (!budgetData.grecaptchaResponse) {
        return dispatch({ type: AppActionTypes.EmptyRecaptcha })
      }

      dispatch({ type: AppActionTypes.Start })

      await API.createBudget(budgetData)

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

  const sendContact = async (contactData: ContactData) => {
    try {
      dispatch({ type: AppActionTypes.Start })
      await API.sendContact(contactData)
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
      value={{ sendContact, createBudget, error, loading }}
      {...props}
    />
  )
}

AppProvider.Consumer = AppContext.Consumer

export default AppProvider

export const useApp = (): AppContextData => useContext(AppContext)
