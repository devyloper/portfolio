import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     
    {/* HEADER */}
    <Header />
    {/* HERO */}
    <Hero />
    {/* ABOUT ME */}
    {/* PROJECTS */}
    <Projects />
    {/* CONTACT ME */}
    <Contact />
    {/* FOOTER */}
    <Footer />
    </div>
  )
}
