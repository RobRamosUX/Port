import Hero from "./components/hero"
import Highlights from "./components/highlights"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import LinkedInPosts from "./components/linkedin-posts"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Highlights />
      <Gallery />
      <Portfolio />
      <LinkedInPosts />
      <Contact />
      <Footer />
    </main>
  )
}
