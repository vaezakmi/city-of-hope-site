import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { FaMusic } from "react-icons/fa";
import "../styles/Events.css";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM – 10:30 AM",
    location: "City of Hope Church, Nyatechi",
    icon: <CalendarDays className="text-primary" size={32} />,
  },
  {
    title: "Sunday Main Service",
    date: "Every Sunday",
    time: "10:30 AM – 12:30 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <CalendarDays className="text-primary" size={32} />,
  },
  {
    title: "Midweek Prayer & Word",
    date: "Every Thursday",
    time: "6:00 PM – 8:00 PM",
    location: "Main Hall",
    icon: <Clock className="text-success" size={32} />,
  },
  {
    title: "Youth Gathering",
    date: "Every Saturday",
    time: "3:00 PM – 5:00 PM",
    location: "Youth Wing",
    icon: <MapPin className="text-danger" size={32} />,
  },
  {
    title: "Worship Practice",
    date: "Every Tuesday & Saturday",
    time: "3:00 PM – 4:00 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <FaMusic className="text-primary" size={32} />,
  },
  {
    title: "Choir Practice",
    date: "Every Tuesday & Saturday",
    time: "4:00 PM – 5:00 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <FaMusic className="text-warning" size={32} />,
  },
];

function EventsSection() {
  return (
    <Container className="events-section my-5 py-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="fw-bold text-primary">Upcoming Events</h2>
        <p className="text-muted">
          Join us in worship, prayer, and community. You're always welcome.
        </p>
      </motion.div>

      <Row className="g-4">
        {events.map((event, idx) => (
          <Col md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="event-card h-100">
                <div className="event-icon mb-3">{event.icon}</div>
                <h5 className="fw-bold text-dark">{event.title}</h5>
                <p className="text-muted small mb-1">{event.date}</p>
                <p className="text-muted small mb-1">{event.time}</p>
                <p className="text-muted small">{event.location}</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventsSection;
