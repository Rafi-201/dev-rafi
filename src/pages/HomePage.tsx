import Info from "../components/hero/Hero"
import Contact from "../components/Contact/Contact"
import SkillTabs from "../components/Skills/skill-section"
import Experience from "../components/Experience/experience"
import Projects from "../components/Projects/project-section"


function HomePage() {

  return (
    <>
      <Info />
      <SkillTabs />
      <Experience />  
      <Projects />
      <Contact />
    </>
  )
}

export default HomePage
