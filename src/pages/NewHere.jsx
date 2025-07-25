import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaChurch, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";

function NewHere() {
  return (
    <Container className="my-5 py-5 bg-light rounded-4 shadow-sm">
      <Row className="align-items-center">
        {/* Welcome Text */}
        <Col md={6}>
          <h2 className="text-primary fw-bold mb-3">New to City of Hope?</h2>
          <p className="text-muted mb-4">
            We’re so glad you’re here! Whether you’re new to faith, exploring, or looking for a church home — you’re welcome.
          </p>

          <ul className="list-unstyled mb-4">
            <li className="mb-2"><FaChurch className="me-2 text-primary" /> Spirit-filled Worship Services</li>
            <li className="mb-2"><FaHandshake className="me-2 text-success" /> Friendly, Welcoming Community</li>
            <li className="mb-2"><FaMapMarkedAlt className="me-2 text-info" /> Easy-to-Find Location in Nairobi</li>
          </ul>

          <Button variant="primary" size="lg" href="/contact">
            Plan Your Visit
          </Button>
        </Col>

        {/* Welcome Image */}
        <Col md={6}>
          <Card className="border-0 shadow-sm overflow-hidden rounded-4">
            <Card.Img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
              alt="Welcome to City of Hope"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default NewHere;
