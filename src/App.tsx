import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import { useStore } from "./store/useStore";

const App = () => {
  const {isShowModal} = useStore()
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const customersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, hash: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = hash;
    }
  };

  return (
    <div>
      <div ref={homeRef}>
        {isShowModal ? <Modal/> : <Home 
          onNavigateAbout={() => scrollToSection(aboutRef, '#about')}
          onNavigateProjects={() => scrollToSection(projectsRef, '#projects')}
          onNavigateCustomers={() => scrollToSection(customersRef, '#customers')}
          onNavigateContact={() => scrollToSection(contactRef, '#contact')}

        />}
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={customersRef}>
        <Customer />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer
        onNavigateAbout={() => scrollToSection(aboutRef, '#about')}
        onNavigateHome={() => scrollToSection(homeRef, '#home')}
        onNavigateContact={() => scrollToSection(contactRef, '#contact')}
      />
    </div>
  );
};

export default App;