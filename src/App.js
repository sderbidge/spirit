import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
//import Explore from "./components/pages/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Explore from "./components/pages/Explore";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import OldTestament from "./components/pages/OldTestament";
import NewTestament from "./components/pages/NewTestament";
import BookOfMormon from "./components/pages/BookOfMormon";
import DoctrineAndCovenants from "./components/pages/DoctrineAndCovenants";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/explore" exact element={<Explore />} />
          <Route path="/old-testament" exact element={<OldTestament />} />
          <Route path="/new-testament" exact element={<NewTestament />} />
          <Route path="/book-of-mormon" exact element={<BookOfMormon />} />
          <Route
            path="/doctrine-and-covenants"
            exact
            element={<DoctrineAndCovenants />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
