import GlobalStyles from '../styles/GlobalStyles'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppProvider from '~/providers/AppProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default MyApp
