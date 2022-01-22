import '../styles/globals.css'
import  Header  from '../components/Header/index.js'


function MyApp({ Component, pageProps }) {
  return ( 
    <>
  <Component {...pageProps} />
  <Header />
  </>
  ) 
}

export default MyApp
