import { AppProvider } from '../datas/context/AppContext'
import { AuthProvider } from '../datas/context/AuthContext'
import './../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  
    <AuthProvider>  
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </AuthProvider>

  )
}

export default MyApp
