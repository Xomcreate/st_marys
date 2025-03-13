import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './MainComponents/Home'
import Home2 from './MainComponents/Home2'
import Contact from './MainComponents/Contact'
import Footer from './MainComponents/Footer'
import Mass from './MainComponents/Mass'
import Marygallery from './MainComponents/Marygallery'
import Parishact from './MainComponents/Parishact'
import Header from './MainComponents/Header'
import Gallery from './MainComponents/Gallery'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>
  <Home/>
  <Home2/>
  <Mass/>
  <Marygallery/>
  <Parishact/>
  <Gallery/>
  <Contact/>
  <Footer/>

  </StrictMode>,
)
