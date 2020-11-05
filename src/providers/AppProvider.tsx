/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useReducer } from 'react'
import { API, Budget } from '../util/API'

interface AppProviderState {
  error?: string
  loading?: boolean
}

interface AppContextData extends AppProviderState {
  createBudget: (budgetData: Budget) => Promise<void>
}

const AppContext = createContext<AppContextData>({
  createBudget: async () => {}
})

type Provider<T> = React.FC<{ children: JSX.Element[] | JSX.Element }> & {
  Consumer: React.Consumer<T>
}

enum AppActionTypes {
  EmptyRecaptcha,
  CreateBudgetStart,
  SigninSuccess,
  CreateBudgetSuccess,
  CreateBudgetError
}

const authReducer = (
  state: AppProviderState,
  action: { type: AppActionTypes; payload?: AppProviderState }
) => {
  switch (action.type) {
    case AppActionTypes.EmptyRecaptcha:
      return { ...state, error: 'Preencha o reCAPTCHA' }
    case AppActionTypes.CreateBudgetStart:
      return { ...state, loading: true }
    case AppActionTypes.CreateBudgetSuccess:
      return {
        ...state,
        loading: false,
        error: undefined
      }
    case AppActionTypes.CreateBudgetError:
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

      dispatch({ type: AppActionTypes.CreateBudgetStart })

      await API.createBudget(budgetData)

      dispatch({ type: AppActionTypes.CreateBudgetSuccess })
    } catch (err) {
      dispatch({
        type: AppActionTypes.CreateBudgetError,
        payload: {
          error: err.message
        }
      })
    }
  }

  const { error, loading } = state

  return (
    <AppContext.Provider value={{ createBudget, error, loading }} {...props} />
  )
}

AppProvider.Consumer = AppContext.Consumer

export default AppProvider

export const useApp = (): AppContextData => useContext(AppContext)
