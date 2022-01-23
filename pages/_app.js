import '../styles/globals.css'
import  Header  from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'



function MyApp({ Component, pageProps }) {
  return ( 
    <>
  <Component {...pageProps} />
  <Header />
  <Footer />
  </>
  ) 
}

export default MyApp
