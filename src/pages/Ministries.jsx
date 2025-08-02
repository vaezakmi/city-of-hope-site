import { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaChild,
  FaHeart,
  FaMusic,
  FaHandsHelping,
  FaBible,
  FaUserTie,
} from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import "../styles/Ministries.css";
import { PhoneCall } from "lucide-react";

const ministries = [
  {
    icon: <FaUsers size={40} className="text-primary mb-3" />,
    title: "Youth Ministry",
    description:
      "Empowering the next generation with purpose, leadership, and passion for Christ.",
    leadership: [
      { name: "Daniel Sinda", role: "Youth Leader" },
      { name: "Tillen Chacha", role: "Mentorship Leader" },
    ],
    whatsapp: "254701936022",
    bg: "linear-gradient(135deg, #e3f2fd, #f8f9fa)",
  },
  {
    icon: <FaChild size={40} className="text-success mb-3" />,
    title: "Children's Church",
    description:
      "Teaching the Word of God in fun, engaging ways for kids to know Jesus early.",
    leadership: [
      { name: "Simon Nyamohanga", role: "Children’s Pastor" },
      { name: "Stephen Mahanga", role: "Volunteer Coordinator" },
    ],
    whatsapp: "254757700186",
    bg: "linear-gradient(135deg, #e8f5e9, #fefefe)",
  },
  {
    icon: <FaHeart size={40} className="text-danger mb-3" />,
    title: "Women of Hope",
    description:
      "A sisterhood built on prayer, strength, healing, and support for every woman.",
    leadership: [
      { name: "Jane Joseph", role: "Women’s Ministry Head" },
      { name: "Esther Nyasae", role: "Assistant Women's Ministry Leader" },
    ],
    whatsapp: "254703121918",
    bg: "linear-gradient(135deg, #fce4ec, #fff0f6)",
  },
   {
    icon: <FaMusic size={40} className="text-warning mb-3" />,
    title: "Worship Team",
    description: "Leading the congregation into God’s presence through anointed music and praise.",
    leadership: [
      { name: "Nyaitange Joseph", role: "Worship Director" },
      { name: "Mrs Nokwi", role: "Assistant Worship Leader" },
    ],
    whatsapp: "254716199897",
    bg: "linear-gradient(135deg, #fff8e1, #fdfdfd)",
  },
  {
    icon: <FaHandsHelping size={40} className="text-info mb-3" />,
    title: "Outreach & Missions",
    description: "Taking the Gospel beyond the walls through missions, charity, and evangelism.",
    leadership: [
      { name: "Elder Maggie", role: "In charge of Ebenezer, Bethsaida and Agape" },
      { name: "Elder Simon Nokwi", role: "In charge of Shalom, Israel and Faith" },
      { name: "Daniel Sinda", role: "In charge of Bethel and Jerusalem" },
    ],
    whatsapp:"254727756829",
    bg: "linear-gradient(135deg, #e0f7fa, #f5fafd)",
  },
  {
    icon: <FaBible size={40} className="text-secondary mb-3" />,
    title: "Bible Study Groups",
    description: "Growing in faith through weekly study groups and fellowship around the Word.",
    leadership: [
      { name: "Michael Karanja", role: "Discipleship Leader" },
      { name: "Beatrice Oloo", role: "Small Groups Manager" },
    ],
    bg: "linear-gradient(135deg, #ede7f6, #fafafa)",
  },
  {
    icon: <FaHandFist size={40} className="text-dark mb-3" />,
    title: "Men of Hope",
    description: "Empowering men to lead with faith, strength, and purpose.",
    leadership: [
      { name: "Joseph Masero", role: "Men's Ministry Leader" },
      { name: "Christopher Ng'wena", role: "Support Coordinator" },
    ],
    whatsapp:"254740721247",
    bg: "linear-gradient(135deg, #f3e5f5, #fff)",
  },

  {
  icon: <FaMusic size={40} className="text-warning mb-3" />,
  title: "Choir Ministry",
  description: "Uplifting hearts through harmonious voices and worship that inspires the soul.",
  leadership: [
    { name: "Annet Song", role: "Choir Director" },
    { name: "Sheila Sinda", role: "Assistant Choir Leader" },
  ],
  bg: "linear-gradient(135deg, #fff3e0, #fffdfb)",
},
{
  icon: <FaUserTie size={40} className="text-dark mb-3" />,
  title: "Church Elders & Leaders",
  description: "Guiding the church with wisdom, prayer, and spiritual oversight.",
  leadership: [
    { name: "Elder Margret Nyahiri", role: "Senior Elder" },
    { name: "Elder Simon Nokwi", role: "Pastoral Oversight" },
  ],
  whatsapp:"254720340628",
  bg: "linear-gradient(135deg, #e0e0e0, #fdfdfd)",
},
{
  icon: <FaUserTie size={40} className="text-primary mb-3" />,
  title: "Church Administration",
  description: "Managing operations with excellence, integrity, and accountability to support the church's mission.",
  leadership: [
    { name: "Elder Margret Nyahiri", role: "Church Secretary" },
    { name: "Esther Nyasae", role: "Church Treasurer" },
  ],
  Phone:"254714638490",
  bg: "linear-gradient(135deg, #e3f2fd, #fdfdfd)",
}

  

];

function Ministries() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const handleCardClick = (ministry) => {
    setSelectedMinistry(ministry);
    setShowModal(true);
  };

  return (
    <Container className="my-5 ministries-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <h2 className="text-primary fw-bold">Our Ministries</h2>
        <p className="text-muted">
          There's a space for everyone to grow, serve, and belong. Explore the
          heartbeat of our church.
        </p>
      </motion.div>

      <Row className="g-4">
        {ministries.map((ministry, idx) => (
          <Col md={4} key={idx}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card
                onClick={() => handleCardClick(ministry)}
                className="ministry-card text-center p-4 shadow-lg border-0 rounded-4 h-100 cursor-pointer"
                style={{ background: ministry.bg }}
              >
                <div className="icon-wrapper mb-3">{ministry.icon}</div>
                <h5 className="fw-bold">{ministry.title}</h5>
                <p className="text-muted">{ministry.description}</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {selectedMinistry && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          className="ministry-modal"
        >
          <Modal.Header closeButton className="border-0">
            <div className="d-flex align-items-center gap-3">
              <div className="modal-icon bg-light rounded-circle p-3">
                {selectedMinistry.icon}
              </div>
              <Modal.Title className="fs-4 fw-bold">
                {selectedMinistry.title}
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body>
            <p className="text-muted mb-4">{selectedMinistry.description}</p>
            <h6 className="fw-semibold text-primary mb-3">Leadership Team</h6>
            <ul className="list-group list-group-flush">
              {selectedMinistry.leadership.map((leader, i) => (
                <li
                  key={i}
                  className="list-group-item border-0 d-flex gap-3 align-items-center px-0"
                >
                  <div
                    className="avatar bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                    style={{ width: 40, height: 40 }}
                  >
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <strong>{leader.name}</strong>
                    <div className="text-muted small">{leader.role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Modal.Body>

          <Modal.Footer className="border-0">
            <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="success"
              as="a"
              target="_blank"
              href={`https://wa.me/${selectedMinistry.whatsapp}`}
            >
              Join This Ministry
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Ministries;
