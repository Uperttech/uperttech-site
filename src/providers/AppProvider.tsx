/* eslint-disable @typescript-eslint/no-empty-function */
import { useRouter } from 'next/router'
import { createContext, useContext, useReducer } from 'react'
import { toast } from 'react-toastify'
interface AppProviderState {
  error?: string
  loading?: boolean
}

interface AppContextData extends AppProviderState {
  redirectSubmit: (message: string, url: string) => void
}

const AppContext = createContext<AppContextData>({
  redirectSubmit: () => {}
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
  const router = useRouter()
  const [state, dispatch] = useReducer(authReducer, {
    error: undefined,
    loading: false
  })

  const redirectSubmit = (message: string, url: string) => {
    try {
      toast.success(message)
      router.push(url).then(() => window.scrollTo(0, 0))
    } catch {
      dispatch({
        type: AppActionTypes.Error,
        payload: {
          error: 'Ocorreu um problema ao enviar, tente novamente !'
        }
      })
    }
  }
  const { error, loading } = state

  return (
    <AppContext.Provider
      value={{ redirectSubmit, error, loading }}
      {...props}
    />
  )
}

AppProvider.Consumer = AppContext.Consumer

export default AppProvider

export const useApp = (): AppContextData => useContext(AppContext)
