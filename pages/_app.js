import '../styles/globals.css'
import  Header  from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'
import SideBar from '../components/SideBar/index.js'


function MyApp({ Component, pageProps }) {
  return ( 
    <>
  <Header />
  <div className='main'>
    <div className='maincontainer'>
  <SideBar />
  </div>
  <Component {...pageProps} />
  </div>
  <Footer />
  </>
  ) 
}

export default MyApp
