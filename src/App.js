import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/pages/Home/index'
import Company from './components/pages/Company/index'
import Contact from './components/pages/Contact/index'
import NewProject from './components/pages/NewProject/index'
import Container from "./components/layout/Container/Index";

function App() {
  return (
    <Router>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/newproject">New Project</Link></li>
      </ul>

      <Container customClass="min-height">
        <Routes>
          <Route axact path="/" element={<Home />} />
          <Route axact path="/company" element={<Company />} />
          <Route axact path="/contact" element={<Contact />} />
          <Route axact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>


      <p>Footer</p>
      
    </Router>
  );
}

export default App;
