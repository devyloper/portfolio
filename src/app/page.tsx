import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#091922]">
      <Navbar />
      <Hero />
      <Experience />
    </main>
  )
}
