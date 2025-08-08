import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/city-of-hope-logo.jpg'; 
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Logo + Brand */}
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <img src={logo} alt="City of Hope Logo" height="75" />
              <div>
                <h5 className="fw-bold mb-0">PEFA CITY OF HOPE</h5>
                <small className="text-muted">Cathedral – Nyatechi</small>
              </div>
            </div>
            <small className="d-block mt-3">&copy; {new Date().getFullYear()} All rights reserved.</small>
          </Col>

          {/* Nav Links */}
         <Col md={4} className="mb-4 mb-md-0">
  <Nav className="justify-content-center">
    <Nav.Link as={Link} to="/" className="footer-link px-3">Home</Nav.Link>
    <Nav.Link as={Link} to="/contact" className="footer-link px-3">Contact</Nav.Link>
    <Nav.Link as={Link} to="/giving" className="footer-link px-3">Giving</Nav.Link>
  </Nav>
</Col>

{/* Social Media Icons */}
<Col md={4} className="text-center text-md-end">
  <div className="d-flex justify-content-center justify-content-md-end gap-3 social-icons">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      aria-label="Facebook"
    >
      <FaFacebookF size={20} />
    </a>
    <a
      href="https://www.youtube.com/@City_of_Hope_Cathedral"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      aria-label="YouTube"
    >
      <FaYoutube size={22} />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
      aria-label="Instagram"
    >
      <FaInstagram size={22} />
    </a>
  </div>
</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
