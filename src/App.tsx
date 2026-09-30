import Header from './components/stelvio/Header';
import Hero from './components/stelvio/Hero';
import { About } from './components/About';
import { Research } from './components/sections/Research';
import { Hackathons } from './components/sections/Hackathons';
import ProjectGrid from './components/stelvio/ProjectGrid';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Leadership } from './components/sections/Leadership';
import Footer from './components/stelvio/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-[#ff3c00] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Hackathons />
        <ProjectGrid />
        <Certifications />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}

export default App;
