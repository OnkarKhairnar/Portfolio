import { sections } from './data/sections';
import useActiveSheet from './hooks/useActiveSheet';
import RegMarks from './components/layout/RegMarks';
import Navbar from './components/layout/Navbar';
import BottomBar from './components/layout/BottomBar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Waves from './components/layout/Waves';

const IDS = sections.map((s) => s.id);

const App = () => {
  const active = useActiveSheet(IDS);

  return (
    <>
      <RegMarks />
      <Navbar sections={sections} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <Waves />
      <BottomBar sheet={IDS.indexOf(active) + 1} total={IDS.length} />
    </>
  );
}

export default App;
