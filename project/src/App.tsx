import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
