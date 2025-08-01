import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { FaMicrophoneAlt, FaMusic } from "react-icons/fa"; // ✅ Add FaMusic

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
    title: "Choir Practice",
    date: "Every Tuesday & Saturday", // ✅ changed from `day` to `date`
    time: "2:00 PM – 5:00 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <FaMusic className="text-warning" size={32} />, // ✅ Correct icon
  },
];

function EventsSection() {
  return (
    <Container className="my-5">
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
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card
                className="p-4 border-0 shadow-lg rounded-4 bg-white h-100 event-card hover-scale"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div className="mb-3">{event.icon}</div>
                <h5 className="fw-bold mb-1 text-dark">{event.title}</h5>
                <p className="text-muted mb-1">{event.date}</p>
                <p className="text-muted mb-1">{event.time}</p>
                <small className="text-muted">{event.location}</small>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventsSection;
