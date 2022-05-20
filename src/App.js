import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/pages/Home/index'
import Company from './components/pages/Company/index'
import Contact from './components/pages/Contact/index'
import NewProject from './components/pages/NewProject/index'
import Container from "./components/layout/Container/Index";
import NavBar from "./components/layout/Navbar/Index";
import Footer from "./components/layout/Footer/Index";
import Projects from "./components/pages/Projects/Index";

function App() {
  return (
    <Router>

      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route axact path="/" element={<Home />} />
          <Route axact path="/projects" element={<Projects />} />
          <Route axact path="/company" element={<Company />} />
          <Route axact path="/contact" element={<Contact />} />
          <Route axact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>


      <Footer />

    </Router>
  );
}

export default App;
