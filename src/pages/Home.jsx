import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { Book, Music, Users } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-content">
          <motion.h1
            className="display-4 fw-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to PEFA City of Hope Cathedral
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transforming lives through the power of God's Word.
          </motion.p>
          <motion.div
            className="mt-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button href="/about" variant="primary" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Join Us Section */}
      <Container className="my-5">
        <Card className="p-4 bg-light border-0 shadow-sm rounded-4 text-center">
          <Row className="align-items-center">
            <Col md={8}>
              <h3 className="fw-bold text-dark mb-2">Join us this Sunday!</h3>
              <p className="mb-0 text-muted">
                We gather every Sunday at <strong>8:30 AM</strong> for vibrant worship,
                powerful teaching, and authentic fellowship.
              </p>
            </Col>
            <Col md={4} className="mt-3 mt-md-0">
              <Button href="/contact" variant="primary" size="lg" className="w-100">
                Plan Your Visit
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Scripture Section */}
      <motion.div
        className="text-center my-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="fw-bold text-primary">
          “For I know the plans I have for you,” declares the Lord.
        </h4>
        <p className="text-muted">&ndash; Jeremiah 29:11</p>
      </motion.div>

      {/* Ministry Highlights */}
      <Container className="my-5">
        <h3 className="text-center fw-bold mb-4 text-primary">What We Offer</h3>
        <Row className="g-4 mb-5">
          {[
            { title: "Youth Ministry", desc: "Empowering the next generation.", icon: Users },
            { title: "Worship Experience", desc: "Spirit-led vibrant worship.", icon: Music },
            { title: "Bible Teaching", desc: "Deep and practical Bible study.", icon: Book },
          ].map((ministry, idx) => {
            const Icon = ministry.icon;
            return (
              <Col md={4} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <Card className="p-4 text-center shadow-sm border-0 h-100 rounded-4 card-glow">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="mb-3 card-icon-pulse"
                    >
                      <Icon size={40} color="#0d6efd" />
                    </motion.div>
                    <h5 className="text-primary fw-bold">{ministry.title}</h5>
                    <p className="text-muted">{ministry.desc}</p>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="my-5">
        <h3 className="text-center fw-bold mb-4 text-primary">Testimonials</h3>
        <Carousel fade indicators={false}>
          {[
            {
              quote: "City of Hope changed my life. I found a family here.",
              name: "Grace M.",
            },
            {
              quote: "The worship experience is incredible — so spirit-filled!",
              name: "John K.",
            },
            {
              quote: "Every Sunday leaves me uplifted and inspired.",
              name: "Sarah N.",
            },
          ].map((t, i) => (
            <Carousel.Item key={i}>
              <Card className="p-4 text-center border-0 shadow-sm">
                <blockquote className="blockquote mb-0">
                  <p className="fs-5">“{t.quote}”</p>
                  <footer className="blockquote-footer">{t.name}</footer>
                </blockquote>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Map Section */}
      <Container className="my-5 text-center">
        <h4 className="mb-3 text-primary fw-bold">Visit Us</h4>
        <p className="text-muted">
          We’re located at <strong>QJR3+M44, PEFA City of Hope, Kenya</strong>
        </p>
        <div className="ratio ratio-16x9">
          <iframe
            title="City of Hope Church Nyatechi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.950823329179!2d34.6626!3d-0.7607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182cb70f6db79497%3A0xab95cf8bf2f38e62!2sPEFA%20CITY%20OF%20HOPE%20CHURCH%2C%20NYATECHI!5e0!3m2!1sen!2ske!4v1753419707062!5m2!1sen!2ske"
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>

      {/* Welcome Video */}
      <Container className="my-5 text-center">
        <h4 className="mb-3 text-primary fw-bold">Watch Our Welcome Video</h4>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Welcome Video"
            allowFullScreen
          ></iframe>
        </div>
      </Container>

      {/* Floating Prayer Button */}
      <a href="/prayer" className="btn btn-primary rounded-circle floating-prayer-btn">
        🙏
      </a>
    </>
  );
}

export default Home;
