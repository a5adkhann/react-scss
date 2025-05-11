import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reasons from './components/Reasons'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {
  return (
    <>
    {AOS.init()}
        <Navbar />
        <Hero />
        <Reasons />
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default App