// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Headers/Header";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/Services/Service";
import Specialist from "./Components/Specialists/Specialist";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <Specialist />
      <About />
      <Footer />
    </div>
  );
}

export default App;
