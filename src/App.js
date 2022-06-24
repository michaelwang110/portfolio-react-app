import NavBar from "./components/NavBar";
import Home from './components/Home';
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
