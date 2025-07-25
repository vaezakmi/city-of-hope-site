import { Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Giving from './pages/Giving';
import Footer from './components/Footer';
import Ministries from './pages/Ministries';
import NewHere from './pages/NewHere';


function App() {
  const location = useLocation();
const currentPath = location.pathname;

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3">
  <Container>
    <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase letter-spacing">
      PEFA City of Hope Cathedral
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/sermons", label: "Sermons" },
          { path: "/events", label: "Events" },
          { path: "/contact", label: "Contact" },
          { path: "/giving", label: "Giving" },
          {path: "/ministries", label: "Ministries" },
          {path: "/NewHere", label: "New Here" },
        ].map((item, index) => (
          <Nav.Link
  key={index}
  as={Link}
  to={item.path}
  className={`mx-2 fw-semibold nav-hover ${
    currentPath === item.path ? "text-primary" : "text-dark"
  }`}
>
  {item.label}
</Nav.Link>

        ))}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/NewHere" element={<NewHere />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
