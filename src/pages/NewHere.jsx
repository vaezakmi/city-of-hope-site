import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { FaChurch, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/NewHere.css";

const carouselImages = [
  {
    src: "src/assets/cathedral.jpg",
    alt: "Main Sanctuary",
  },
  {
    src: "src/assets/cathedral2.jpg",
    alt: "Spirit-filled Worship",
  },
  {
    src: "src/assets/cathedral3.jpg",
    alt: "Church Community",
  },
  {
    src: "src/assets/cathedral4.jpg",
    alt: "Church Community",
  },
];

function NewHere() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container className="new-here-container my-5 py-5 px-4 rounded-4 shadow-lg">
        <Row className="align-items-center g-5">
          {/* Welcome Text */}
          <Col md={6}>
            <div className="text-section">
              <h2 className="text-primary fw-bold mb-3">New to City of Hope?</h2>
              <p className="text-muted mb-4 fs-5">
                Whether you're new to faith, exploring your beliefs, or seeking a community — you belong here.
              </p>

              <ul className="list-unstyled mb-4 fs-5">
                <li className="mb-3">
                  <FaChurch className="me-2 text-primary" /> Spirit-filled Worship Experiences
                </li>
                <li className="mb-3">
                  <FaHandshake className="me-2 text-success" /> A Warm, Caring Family
                </li>
                <li className="mb-3">
                  <FaMapMarkedAlt className="me-2 text-info" /> Easy-to-Find Location in Nyatechi
                </li>
              </ul>

              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="px-4 py-2 rounded-pill shadow-sm"
              >
                Plan Your Visit
              </Button>
            </div>
          </Col>

          {/* Welcome Carousel */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0.8 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="img-wrapper"
            >
              <Carousel fade interval={4000} controls={false} indicators={true} className="rounded-4 shadow">
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="d-block w-100 rounded-4"
                      style={{ objectFit: "cover", height: "360px" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default NewHere;
