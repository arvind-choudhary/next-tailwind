import GeneralLayout from '../components/Layouts/GeneralLayout';
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import toastConfig from "../configs/toast.config.json"

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <GeneralLayout>page</GeneralLayout>);

  return getLayout(
      <Component 
        {...pageProps } 
        configs={ toastConfig } 
      />
  )
}

export default MyApp
