import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Container className="my-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-primary fw-bold">Contact Us</h2>
        <p className="text-muted">We would love to hear from you. Reach out today!</p>
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

        {/* Info & Map */}
        <Col md={6} className="mb-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 shadow-sm border-0 rounded-4 mb-3">
              <h5 className="text-primary mb-3">
                <MapPin size={20} className="me-2" /> Our Address
              </h5>
              <p className="mb-2">
                City of Hope Cathedral<br />
                1234 Kingdom Way<br />
                QJR3+M44, Nyatechi, Kenya
              </p>

              <h5 className="text-primary mt-4 mb-2">
                <Clock size={20} className="me-2" /> Service Times
              </h5>
              <p className="mb-0">
          <strong>Sundays:</strong><br />
              • 8:30 AM – 10:30 AM (Morning Service)<br />
              • 10:30 AM – 12:30 PM (Main Service)
          </p>

            </Card>

            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <iframe
          title="City of Hope Church Nyatechi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084665.3872565906!2d30.38406359999999!3d-1.2083673999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182cb70f6db79497%3A0xab95cf8bf2f38e62!2sPEFA%20CITY%20OF%20HOPE%20CHURCH%2C%20NYATECHI!5e0!3m2!1sen!2ske!4v1753419707062!5m2!1sen!2ske"
          style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
