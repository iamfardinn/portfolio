import Header from './components/stelvio/Header';
import Hero from './components/ui/demo';
import ProjectGrid from './components/stelvio/ProjectGrid';
import { About } from './components/About';
import Footer from './components/stelvio/Footer';

function App() {
  return (
    <div className="bg-[#111] min-h-screen selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;

