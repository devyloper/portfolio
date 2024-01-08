import Image from 'next/image'
import Hero from '../app/components/Hero'
import Footer from './components/Footer'
import Nav from './components/Nav'


export default function Home() {
  return (
    <main className="bg-[#091922]">
      <Nav />
      <Hero />
      <Footer />
    </main>
  )
}
