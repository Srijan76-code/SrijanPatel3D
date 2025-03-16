import React from 'react'
import Navbar from './sections/Navbar'
import Experience2 from './sections/Experience2'
import About from './sections/About'
import Spline from './components/Spline'


import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ShowOnScroll from './components/ShowOnScroll'


const App = () => {

  return (
    <main className='max-w-7xl mx-auto ' id='main' >




      <ShowOnScroll>
        <Navbar />
      </ShowOnScroll>


      <Spline />




      <About />
      <Projects />
      <Experience2 />
      <Contact />
      <Footer />

    </main>

  )
}

export default App
