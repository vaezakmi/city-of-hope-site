import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import logo from "../assets/city-of-hope-logo.jpg"; // ✅ Correct image import

function Contact() {
  return (
    <Container className="my-5">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-primary fw-bold">Contact Us</h2>
        <p className="text-muted">
          We would love to hear from you. Reach out today!
        </p>
      </motion.div>

      <Row>
        {/* Contact Form */}
        <Col md={6} className="mb-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 shadow-sm border-0 rounded-4 h-100">
              <h5 className="mb-3 text-primary">
                <Mail size={20} className="me-2" /> Send Us a Message
              </h5>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message..."
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </motion.div>
        </Col>

        {/* Contact Info */}
        <Col md={6} className="mb-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 shadow-sm border-0 rounded-4 h-100">
              {/* Address Section */}
              <h5 className="text-primary mb-3">
                <MapPin size={20} className="me-2" /> Our Address
              </h5>

              <div className="text-center mb-3">
                <img
                  src={logo}
                  alt="City of Hope Cathedral Logo"
                  style={{ height: "180px", objectFit: "contain" }}
                />
              </div>

              <p className="text-center text-md-start">
                <strong>PEFA City of Hope Cathedral</strong>
                <br />
                QJR3+M44, Nyatechi, Kenya
              </p>

              {/* Service Times */}
              <h5 className="text-primary mt-4 mb-2">
                <Clock size={20} className="me-2" /> Service Times
              </h5>
              <p className="mb-0">
                <strong>Sundays:</strong><br />
                • 8:30 AM – 10:30 AM (Morning Service)<br />
                • 10:30 AM – 12:30 PM (Main Service)
              </p>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
