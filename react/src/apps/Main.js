import '../App.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Nav from '../components/Nav';
function App() {
  return (
    <div className="app">
      <Nav />
      <h1 className='app__header'>Junior Front-end Developer</h1>
      <p className='app__phrase'>I love to design and implement code. I treat websites and applications like virtual real estate. Much like my work in real estate,
        I like to produce a strong and beautiful foundation of code.</p>
      
      <img src={require("../images/trinity.png")} alt="HTML, CSS, and JS"/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;