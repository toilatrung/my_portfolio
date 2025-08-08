import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/hero-section/HeroMain';
import AboutMeMain from './components/aboutme-section/AboutMeMain';
import SkillsMain from './components/myskill-section/SkillsMain';
import ProjectMain from './components/project-section/ProjectMain';
import ResumeBtn from './components/resume-section/ResumeBtn';
import BlogPage from './components/blog-section/BlogPage';

function App() {
  return (
    <main className='font-jersey15'>
      <NavbarMain />
      <HeroMain />
      <div className="flex flex-col items-center gap-20 py-10 md:py-20">
        <section id="about">
          <AboutMeMain />
        </section>
        <section id="skills">
          <SkillsMain />
        </section>
        <section id="projects" className="flex flex-col items-center gap-5">
          <ProjectMain />
          <div id="resume">
            <ResumeBtn />
          </div>
        </section>
        <section id="blog">
          <BlogPage />
        </section>
      </div>
    </main>
  );
}

export default App;
