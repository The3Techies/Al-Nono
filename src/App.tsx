import './index.css'
import { Analytics } from '@vercel/analytics/react';
 
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import AboutMe from './Component/AboutMe'
import MyHistory from './Component/MyHistory'
import Achievements from './Component/Achievements'
import Awards from './Component/Awards'
import Education from './Component/Education'
import Gallery from './Component/Gallery'
import Contact from './Component/Contact'



function App() {

  return (
    <div className='font-josefin-sans max-w-[2000px] m-auto'>
    <Navbar />
     <Hero/>
     <AboutMe/>
     <MyHistory/>
     <Achievements/>
     <Awards/>
     <Gallery/>
     <Education/>
     <Contact/>
     <Analytics mode={'production'} />;
    </div>
  )
}

export default App
