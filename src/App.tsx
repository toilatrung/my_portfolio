import './App.css';
import NavbarMain from './components/navbar/NavbarMain.js';
import HeroMain from './components/hero-section/HeroMain.js';
import AboutMeMain from './components/aboutme-section/AboutMeMain.js';
import WhitePannel from './components/WhitePannel.js';

function App() {
  return (
    <main className='font-jersey15'>
      <NavbarMain/>
      <HeroMain />
      <AboutMeMain />
      <WhitePannel />
    </main>
  );
}

export default App;
