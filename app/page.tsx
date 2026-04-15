import HeroNew from "./components/hero-new"
import FeaturedProjects from "./components/featured-projects"
import ThinkingSection from "./components/thinking-section"
import LeadershipSection from "./components/leadership-section"
import TestimonialsNew from "./components/testimonials-new"

import FooterNew from "./components/footer-new"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroNew />
      <FeaturedProjects />
      <ThinkingSection />
      <LeadershipSection />
      <TestimonialsNew />
      <FooterNew />
    </main>
  )
}
