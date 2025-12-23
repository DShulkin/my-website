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
        <title>David Chemrukov</title>
        <meta name="description" content="David Chemrukov is a front-end developer, software engineer and 
        graphic designer based in Indiana. Explore his portfolio showcasing professional web development projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "David Chemrukov",
              "url": "https://davidchemrukov.com",
              "jobTitle": "Front-End Developer",
              "description":
                "Front-end developer with a background in graphic design, focused on building clean, functional, user-centered interfaces.",
              "knowsAbout": [
                "React components",
                "Component-based UI",
                "Modern CSS",
                "CSS Grid",
                "Flexbox",
                "Semantic HTML",
                "Responsive web design",
                "Web accessibility",
                "REST API consumption",
                "JSON data handling",
                "Build tooling",
                "GitHub Pages deployment",
                "Swiss design principles",
                "Grid-based layout",
                "UI/UX design",
                "Typography"
              ],
              "sameAs": [
                "https://github.com/dshulkin",
                "https://www.behance.net/DavidChemrukov",
                "https://www.linkedin.com/in/davidchemrukov/"
              ]
            })
          }}
        />
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