import React from 'react'
import Image from 'next/image'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import AboutPage from '../components/AboutPage'

function About() {
  return (
    <main className="bg-[#091922] ">
      <Nav />
      <AboutPage />
      <Footer />
    </main>
  )
}

export default About