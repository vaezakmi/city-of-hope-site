import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Banknote, Smartphone, Globe, HelpCircle } from "lucide-react";
import "../styles/Giving.css";

function Giving() {
  return (
    <Container className="my-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-bold text-primary">Support the Mission</h2>
        <p className="text-muted">
          Your generosity helps us reach more people with the Gospel and grow the Kingdom.
        </p>
      </motion.div>

      <Row className="g-4">
        {/* KCB Bank */}
        <Col md={6} lg={4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-4 border-0 shadow-sm rounded-4 giving-card h-100 hover-scale">
              <div className="mb-3 text-primary">
                <Banknote size={36} />
              </div>
              <h5 className="fw-bold mb-3">KCB Bank Transfer</h5>
              <p><strong>Bank:</strong> KCB Kenya</p>
              <p><strong>Paybill:</strong> 522522</p>
              <p><strong>Number:</strong> 1256761273</p>
              <p><strong>Branch:</strong> Kehancha</p>
              <p><strong>Swift:</strong> KCBLKENX</p>
            </Card>
          </motion.div>
        </Col>

        {/* M-PESA
        <Col md={6} lg={4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 border-0 shadow-sm rounded-4 giving-card h-100 hover-scale">
              <div className="mb-3 text-success">
                <Smartphone size={36} />
              </div>
              <h5 className="fw-bold mb-3">M-PESA Paybill</h5>
              <p><strong>Paybill:</strong> 123456</p>
              <p><strong>Account:</strong> Offering / Tithe / Missions</p>
              <small className="text-muted">
                Specify purpose in the account field.
              </small>
            </Card>
          </motion.div>
        </Col>*/}

        {/* International Giving */}
        <Col md={12} lg={4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-4 border-0 shadow-sm rounded-4 giving-card h-100 hover-scale bg-light">
              <div className="mb-3 text-info">
                <Globe size={36} />
              </div>
              <h5 className="fw-bold mb-3">Global Giving</h5>
              <p>
                <strong>PayPal:</strong> <a href="https://paypal.me/cityofhope" target="_blank" rel="noopener noreferrer">paypal.me/cityofhope</a>
              </p>
              <p>
                <strong>Stripe:</strong> <a href="/stripe-give">Give via Card</a>
              </p>
              <p>
                <strong>Wise:</strong> Available on request
              </p>
              <small className="text-muted">
                International donors welcome.
              </small>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* CTA */}
      <motion.div
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline-primary" size="lg" href="/contact">
          <HelpCircle className="me-2" size={20} /> Need Help Giving?
        </Button>
      </motion.div>
    </Container>
  );
}

export default Giving;
