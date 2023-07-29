import './index.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import AboutMe from './Component/AboutMe'
import MyHistory from './Component/MyHistory'
import Achievements from './Component/Achievements'
import Education from './Component/Education'
import Gallery from './Component/Gallery'
import OutsideTheFiled from './Component/OutsideTheFiled'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {

  return (
    <div>
     <Navbar/>
     <Hero/>
     <AboutMe/>
     <MyHistory/>
     <Achievements/>
     <Education/>
     <Gallery/>
     <OutsideTheFiled/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
