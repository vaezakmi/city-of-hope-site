import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>PEFA City of Hope Cathedral</h5>
            <small>&copy; {new Date().getFullYear()} All rights reserved</small>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <Nav className="justify-content-center">
              <Nav.Link href="/" className="text-light px-2">Home</Nav.Link>
              <Nav.Link href="/contact" className="text-light px-2">Contact</Nav.Link>
              <Nav.Link href="/giving" className="text-light px-2">Giving</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light me-3">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-light me-3">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light">
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
