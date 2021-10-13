import './App.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="section-app">
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
