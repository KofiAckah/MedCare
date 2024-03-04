import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import InfoHome from "./Components/InfoHome";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <InfoHome />
      <Services />
      <About />
    </div>
  );
}

export default App;
