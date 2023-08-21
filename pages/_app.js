import '../styles/navbar.css';


import '../styles/plugins.css'
import '../styles/style.css'
import '../styles/templete.css'
import '../styles/skin.css'

import '../styles/plugins/slick/slick.min.css';
import '../styles/plugins/slick/slick-theme.min.css';
import 'react-modal-video/css/modal-video.min.css';
import Navbar from '../components/Navbar';




function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp

