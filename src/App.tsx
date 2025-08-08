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
      <NavbarMain/>
      <HeroMain />
      <div className="flex flex-col items-center gap-20">
        <div id="about">
          <AboutMeMain />
        </div>
        <SkillsMain />
        <div className='gap-5 flex flex-col items-center'>
          <ProjectMain />
          <div id="resume">
            <ResumeBtn />
          </div>
        </div>
        <div id="blog">
          <BlogPage />
        </div>
      </div>
      <div id='xóa' className='m-[1000px]'></div>
    </main>
  );
}

export default App;
