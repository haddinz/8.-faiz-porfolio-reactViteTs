import { useLocation } from 'react-router-dom'
import Layout from '../components/layout'
import About from './pages/abouts'
import { useEffect } from 'react'
import Contact from './pages/contact'
import Experience from './pages/experience'
import Hero from './pages/hero'

function Homepage() {
  const { state } = useLocation()
  const { targetID } = state || {}
  useEffect(() => {
    const goto = document.getElementById( targetID )
    if ( goto ) {
      goto.scrollIntoView({behavior: 'smooth'})
    }
  },[targetID])
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default Homepage