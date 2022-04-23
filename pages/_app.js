import GeneralLayout from '../components/Layouts/GeneralLayout';
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import toastConfig from "../configs/toast.config.json"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const getLayout = Component.getLayout || ((page) => <GeneralLayout>{page}</GeneralLayout>);

  return getLayout(
    <SessionProvider session={session}>
      <Component 
        {...pageProps } 
        configs={ toastConfig } 
      />
    </SessionProvider>
  )
}

export default MyApp
