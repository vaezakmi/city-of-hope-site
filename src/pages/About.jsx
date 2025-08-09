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
  YoutubeIcon,
} from "lucide-react";

import pastorImg from "../assets/pastor.jpg";
import worshipImg from "../assets/worship.jpg";
import { FaFacebook } from "react-icons/fa";
import "../styles/About.css";


const milestones = [
  {
    year: "1995",
    title: "Founding of City of Hope",
    icon: <Church className="text-primary me-2" size={22} />,
    description:
      "In 1995, a humble yet powerful prayer fellowship took root in a modest living room in Nyatechi. What began as a small gathering of faithful believers seeking spiritual connection and purpose would eventually grow into the vibrant ministry known today as City of Hope.",
  },
  {
    year: "2013",
    title: "First Temporary Church Building",
    icon: <Home className="text-primary me-2" size={22} />,
    description:
      "In 2013, the first physical structure for the church was established. Ingeniously crafted by deconstructing a local posho mill, this humble building marked a significant milestone — providing a dedicated space for worship, fellowship, and spiritual growth.",
  },
  {
    year: "2015",
    title: "Establishment of the First Church",
    icon: <Home className="text-primary me-2" size={22} />,
    description:
      "In 2015, the first official church was established, beginning with just five devoted members. Though small in number, their faith and unity laid a strong spiritual foundation that would shape the future of the ministry.",
  },
  {
    year: "2020",
    title: "Community Outreach Begins",
    icon: <UsersIcon className="text-primary me-2" size={22} />,
    description:
      "In 2020, the ministry launched its first structured community outreach initiatives, including fellowships, mentorship programs, and family support services. Initial fellowships — Ebenezer, Shalom, and Agape — laid the groundwork for what would later grow into a vibrant network of spiritually grounded and socially impactful groups.",
  },
  {
    year: "2020",
    title: "Online Ministry Launched",
    icon: <YoutubeIcon className="text-primary me-2" size={22} />,
    description:
      "In 2020, the ministry embraced digital platforms by launching live streams and outreach on Facebook and YouTube. This bold shift to online ministry enabled the message of hope to reach thousands of viewers across the globe, expanding the church’s impact beyond physical boundaries.",
  },
  {
    year: "2021",
    title: "Global Missions Launched",
    icon: <Globe className="text-primary me-2" size={22} />,
    description:
      "In 2021, the ministry took a bold step into global missions, drawing the attention and involvement of international partners and believers from the USA, India, Nigeria, and Tanzania. This marked the beginning of a broader spiritual impact beyond national borders.",
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
                We exist to build and expand the Kingdom of God, 
                by preaching and teaching the holistic Gospel of Jesus Christ for the transformation and fulfillment of lives.
                (Matt.28:18-20)
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
                To be A Church That Knows Christ and Makes Him Known To The whole World
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
              
City of Hope began not with grandeur, but with a whisper—a hunger for God's presence in the heart of Nyatechi. In 1995, a small group of believers gathered in a humble living room, seeking fellowship, prayer, and spiritual direction. It wasn’t a building or a name that made it special—it was the genuine passion for God and a vision for revival that stirred within their hearts.

As the years passed, that spark grew. In 2013, a makeshift structure was crafted by dismantling a local posho mill—our very first physical space. It was nothing elaborate, but it was sacred ground. People came not for comfort, but for communion with the Divine.

By 2015, the first official church was planted. It started with just five dedicated souls, each bringing their faith, hope, and sacrifice. That small gathering became the spiritual foundation upon which City of Hope would rise.

In 2020, the heartbeat of the church turned outward. We launched intentional community outreach programs, including mentorships, fellowships, and family support. What began with three groups—Ebenezer, Shalom, and Agape—blossomed into a powerful movement of neighborhood fellowships, each rooted in love, truth, and community transformation.

That same year, the world was shaken by a global pandemic—but rather than retreat, we advanced. Through Facebook and YouTube, City of Hope entered the digital mission field. Our online ministry reached thousands, with livestreams and gospel content breaking into homes and hearts across Kenya and beyond.

In 2021, God expanded our borders. What once gathered in a single room now attracted international believers and partners from the USA, India, Nigeria, and Tanzania. City of Hope became more than a local church—it became a global voice of faith, unity, and healing.

Today, City of Hope stands as a thriving congregation marked by miracles and movement. We've seen marriages restored, addictions broken, callings awakened, and countless lives transformed by the power of Jesus Christ. Every song sung, every message preached, every hand held in prayer carries the DNA of that first gathering in 1995—a people longing for God.

As we look ahead, we remain rooted in our mission: to bring hope to the city, and to reach the world with the love of Christ.

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
                style={{ height: "auto", objectFit: "cover" }}
                alt="Lead Pastor"
              />
              <Card.Body>
  <Card.Title className="fw-bold text-dark">
    Rev. Zablon Moseti
  </Card.Title>
  <Card.Text className="text-muted">Lead Shepherd</Card.Text>
  <Button
    variant="outline-primary"
    href="https://wa.me/254721257919?text=Hello%20Rev.%20Zablon%20Moseti,%20I%20would%20like%20to%20request%20prayer."
    target="_blank"
    rel="noopener noreferrer"
  >
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
