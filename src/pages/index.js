import Head from "next/head"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Homepage() {
  return (
    <>
      <Head>
        <title>davidshulkin.io</title>
        <meta name="description" content="David Shulkin is a front-end developer, software engineer and 
        graphic designer based in Indiana. Explore his portfolio showcasing professional web development projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <div className="contact-footer-container">
        <Contact />
        <Footer />
      </div>
    </>
  )
}