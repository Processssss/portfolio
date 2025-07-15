import Home from './sections/home';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import './styles/home.css';
import './styles/header.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;