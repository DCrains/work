import '../styles/globals.css'
import  Header  from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'


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
