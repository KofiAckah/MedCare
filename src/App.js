import "./App.css";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Book from "./Components/Book";
import Doctors from "./Components/Doctors";
import Home from "./Components/Home";
import InfoHome from "./Components/InfoHome";
import NavBar from "./Components/NavBar";
import Review from "./Components/Review";
import Services from "./Components/Services";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <InfoHome />
      <Services />
      <About />
      <Doctors />
      <Book />
      <Review />
      <Blogs />
    </div>
  );
}

export default App;
