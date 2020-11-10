import GlobalStyles from '../styles/GlobalStyles'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default MyApp
