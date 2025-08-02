import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

// Replace with your actual uploaded sermon details
const sermons = [
  {
    title: "Faith in the Fire",
    date: "July 21, 2025",
    preacher: "Rev. Obi Bisare",
    duration: "42 min",
    videoUrl: "https://www.youtube.com/embed/U5lPDX7MUow",
  },
  {
    title: "Walking in Grace",
    date: "July 14, 2025",
    preacher: "Rev. Zablon Moseti",
    duration: "35 min",
    videoUrl: "https://www.youtube.com/embed/yy9Sin5Wywo?si=E2u_SbSedr31PC-h",
  },
  {
    title: "Hope for the Hurting",
    date: "July 7, 2025",
    preacher: "Rev. Grace Mwangi",
    duration: "45 min",
    videoUrl: "https://www.youtube.com/embed/8sVMP_Jmt3k",
  },
];

function Sermons() {
  return (
    <Container className="my-5 sermons-section">
      {/* SECTION HEADER */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-bold text-primary">Worship with Us Online</h2>
        <p className="text-muted">
          Whether live or on demand, you're always welcome to encounter the Word through our sermons.
        </p>
      </motion.div>

      {/* LIVE STREAM SECTION */}
      <Row className="justify-content-center mb-5">
        <Col md={10}>
          <Card className="border-0 shadow-lg overflow-hidden rounded-4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=UC5vRTYmwC-MdL6Cbp9dVz2A"
                title="Live Service Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Card.Body className="text-center">
              <h5 className="fw-bold mb-2">Live from City of Hope Cathedral</h5>
              <p className="text-muted mb-3">
                Join us for a powerful worship experience, streamed straight from our sanctuary.
              </p>
              <Button
                variant="danger"
                href="https://www.youtube.com/@City_of_Hope_Cathedral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="me-2" />
                Visit Our YouTube Channel
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* RECENT SERMONS */}
      <Row>
        {sermons.map((sermon, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={sermon.videoUrl}
                    title={sermon.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{sermon.title}</Card.Title>
                  <Card.Text className="text-muted small mb-1">
                    <strong>Date:</strong> {sermon.date}
                  </Card.Text>
                  <Card.Text className="text-muted small mb-1">
                    <strong>Preacher:</strong> {sermon.preacher}
                  </Card.Text>
                  <Card.Text className="text-muted small">
                    <strong>Duration:</strong> {sermon.duration}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Sermons;
