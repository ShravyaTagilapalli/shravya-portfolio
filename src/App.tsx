import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Expertise from '@/components/sections/Expertise';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import CareerTransition from '@/components/sections/CareerTransition';
import Contact from '@/components/sections/Contact';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen">
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Expertise />
        <Projects />
        <Education />
        <CareerTransition />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
