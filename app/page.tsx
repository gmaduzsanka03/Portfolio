import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { DesignProjects } from '@/components/sections/DesignProjects'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'
import { AnalyticsWrapper } from '@/components/AnalyticsWrapper'

export default function Home() {
  return (
    <AnalyticsWrapper>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignProjects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </AnalyticsWrapper>
  )
}
