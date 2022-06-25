import Header from "./components/Header";
import Home from './components/Home';
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Padding from "./components/Padding";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Padding />
      <About />
      <Padding />
      <Skills />
      <Padding />
      <Resume />
      <Padding />
      <Footer />
    </div>
  );
}

export default App;
