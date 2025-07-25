import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Users,
  Cross,
  Church,
  Home,
  Users as UsersIcon,
  Globe,
  Youtube
} from "lucide-react";

import pastorImg from "../assets/pastor.jpg";
import worshipImg from "../assets/worship.jpg";

const milestones = [
  {
    year: "2010",
    title: "City of Hope Founded",
    icon: <Church className="text-primary me-2" size={22} />,
    description: "A small prayer fellowship was born in a living room in Nairobi.",
  },
  {
    year: "2013",
    title: "First Church Building",
    icon: <Home className="text-primary me-2" size={22} />,
    description: "We moved into our first permanent building with 80 seats.",
  },
  {
    year: "2016",
    title: "Community Outreach Begins",
    icon: <UsersIcon className="text-primary me-2" size={22} />,
    description: "Started food drives, mentorships, and family support programs.",
  },
  {
    year: "2019",
    title: "Global Missions",
    icon: <Globe className="text-primary me-2" size={22} />,
    description: "Sent our first international mission team and partnered abroad.",
  },
  {
    year: "2023",
    title: "Online Ministry",
    icon: <Youtube className="text-primary me-2" size={22} />,
    description: "Launched livestreams and YouTube outreach, reaching thousands.",
  },
];

function About() {
  return (
    <Container className="my-5">
      {/* Title */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BookOpenCheck size={40} className="text-primary mb-2" />
        <h1 className="fw-bold text-primary">About City of Hope</h1>
        <p className="text-muted">
          A Christ-centered church with a passion for people and the presence of God.
        </p>
      </motion.div>

      {/* Timeline / Milestones */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="fw-bold text-primary mb-4">Our Journey</h3>
      </motion.div>

      <div className="timeline-container position-relative mb-5">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card bg-glass shadow-sm">
              <div className="d-flex align-items-center mb-2">
                {item.icon}
                <h5 className="fw-bold mb-0">{item.title}</h5>
              </div>
              <small className="text-muted">{item.year}</small>
              <p className="mt-2 mb-0 text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <Row className="mb-5 g-4">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 border-0 shadow rounded-4 bg-light h-100">
              <h3 className="text-primary fw-bold mb-3">Our Mission</h3>
              <p>
                To passionately proclaim Jesus, disciple believers, care for the
                broken, and transform our community with the light of Christ.
              </p>
            </Card>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 border-0 shadow rounded-4 bg-light h-100">
              <h3 className="text-primary fw-bold mb-3">Our Vision</h3>
              <p>
                A Spirit-filled church influencing culture, raising godly
                generations, and sending leaders to the nations.
              </p>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="align-items-center mb-5 g-4">
        <Col md={6} className="order-md-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={worshipImg}
              fluid
              rounded
              className="shadow"
              alt="Worship"
              style={{ borderRadius: "20px" }}
            />
          </motion.div>
        </Col>
        <Col md={6} className="order-md-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-primary fw-bold mb-3">Our Story</h3>
            <p>
              From humble beginnings in 2010, City of Hope began as a small home fellowship—a gathering of passionate believers hungry for God’s presence. Over the years, that seed of faith has grown into a vibrant, thriving congregation marked by transformation, unity, and impact. We’ve witnessed marriages restored, addictions broken, callings awakened, and countless lives radically changed by the power of the Gospel. Through dynamic worship, sound biblical teaching, intentional discipleship, and Spirit-led outreach, City of Hope continues to be a beacon of light—bringing hope to the city and reaching beyond borders with the love of Christ.

            </p>
          </motion.div>
        </Col>
      </Row>

      {/* Leadership */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Users size={36} className="text-primary mb-2" />
        <h3 className="text-primary fw-bold">Our Leadership</h3>
      </motion.div>

      <Row className="justify-content-center mb-5">
        <Col md={4}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="text-center border-0 shadow-lg rounded-4 bg-light">
              <Card.Img
                variant="top"
                src={pastorImg}
                className="rounded-top"
                style={{ height: "330px", objectFit: "cover" }}
                alt="Lead Pastor"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-dark">
                  Rev. Zablon Moseti
                </Card.Title>
                <Card.Text className="text-muted">Lead Shepherd</Card.Text>
                <Button variant="outline-primary" href="/contact">
                  Request Prayer
                </Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* Closing Statement */}
      <motion.div
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Cross size={40} className="text-danger mb-3" />
        <h4 className="fw-bold">We are more than a church — we are a family.</h4>
        <p className="text-muted">
          Join us and be part of the mission to bring hope, healing, and Jesus to the world.
        </p>
      </motion.div>
    </Container>
  );
}

export default About;
