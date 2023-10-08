import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import store from '../../redux/store'


const queryClient=new QueryClient()
export default function App({ Component, pageProps }) {
  return(<Provider store={store}><SessionProvider session={pageProps.session}>
  <QueryClientProvider client={queryClient}>

   <Component {...pageProps} />
   <ToastContainer limit={1}/>
   </QueryClientProvider></SessionProvider></Provider>)
}
