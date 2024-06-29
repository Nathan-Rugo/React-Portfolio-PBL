import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
    <div id="app" className="App">
        <Header />
        <Body />
        <About />
        <Projects />
        <Skills />
    </div>
  );
}

export default App;
