import Layoutcomponent from '../components/LayoutComponent';
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import toastConfig from "../configs/toast.config.json"

function MyApp({ Component, pageProps }) {
  return <Layoutcomponent><Component {...pageProps } configs={ toastConfig } /></Layoutcomponent>
}

export default MyApp
