import { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import {
  FaUsers,
  FaChild,
  FaHeart,
  FaMusic,
  FaHandsHelping,
  FaBible,
  FaUserTie,
} from "react-icons/fa";
import "../styles/Ministries.css";
import { FaHandFist } from "react-icons/fa6";

const ministries = [
  {
    icon: <FaUsers size={40} className="text-primary mb-3" />,
    title: "Youth Ministry",
    description: "Empowering the next generation with purpose, leadership, and passion for Christ.",
    leadership: [
      { name: "Paul Sinda", role: "Youth Leader" },
      { name: "Tillen Chacha", role: "Mentorship Leader" },
    ],
    bg: "linear-gradient(135deg, #e3f2fd, #f8f9fa)",
  },
  {
    icon: <FaChild size={40} className="text-success mb-3" />,
    title: "Children's Church",
    description: "Teaching the Word of God in fun, engaging ways for kids to know Jesus early.",
    leadership: [
      { name: "Charles Waitere", role: "Children’s Pastor" },
      { name: "James Kariuki", role: "Volunteer Coordinator" },
    ],
    bg: "linear-gradient(135deg, #e8f5e9, #fefefe)",
  },
  {
    icon: <FaHeart size={40} className="text-danger mb-3" />,
    title: "Women of Hope",
    description: "A sisterhood built on prayer, strength, healing, and support for every woman.",
    leadership: [
      { name: "Grace Njeri", role: "Women’s Ministry Head" },
      { name: "Lucy Achieng", role: "Prayer Coordinator" },
    ],
    bg: "linear-gradient(135deg, #fce4ec, #fff0f6)",
  },
  {
    icon: <FaMusic size={40} className="text-warning mb-3" />,
    title: "Worship Team",
    description: "Leading the congregation into God’s presence through anointed music and praise.",
    leadership: [
      { name: "David Otieno", role: "Worship Director" },
      { name: "Esther Njuguna", role: "Sound/Tech Lead" },
    ],
    bg: "linear-gradient(135deg, #fff8e1, #fdfdfd)",
  },
  {
    icon: <FaHandsHelping size={40} className="text-info mb-3" />,
    title: "Outreach & Missions",
    description: "Taking the Gospel beyond the walls through missions, charity, and evangelism.",
    leadership: [
      { name: "Peter Kamau", role: "Outreach Coordinator" },
      { name: "Joan Mutua", role: "Missions Planner" },
    ],
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
    icon: <FaHandFist size={40} className="text-secondary mb-3" />,
    title: "Men of Hope",
    description: "A brotherhood built on prayer, strength, healing, and support for every man.",
    leadership: [
      { name: "Michael Karanja", role: "Discipleship Leader" },
      { name: "Beatrice Oloo", role: "Small Groups Manager" },
    ],
    bg: "linear-gradient(135deg, #ede7f6, #fafafa)",
  },
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
      <h2 className="text-center text-primary fw-bold mb-4">Our Ministries</h2>
      <p className="text-center text-muted mb-5">
        At City of Hope, there’s a place for everyone to serve, grow, and belong. Explore our ministries below.
      </p>

      <Row className="g-4">
        {ministries.map((ministry, idx) => (
          <Col md={4} key={idx}>
            <Card
              onClick={() => handleCardClick(ministry)}
              className="ministry-card text-center p-4 shadow-sm border-0 rounded-4 h-100"
              style={{ background: ministry.bg }}
            >
              <div className="icon-wrapper">{ministry.icon}</div>
              <h5 className="fw-bold mt-2">{ministry.title}</h5>
              <p className="text-muted">{ministry.description}</p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedMinistry && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" className="ministry-modal">
  <Modal.Header closeButton className="border-0 pb-0">
    <div className="d-flex align-items-center gap-3">
      <div className="modal-icon bg-light rounded-circle p-3">
        {selectedMinistry.icon}
      </div>
      <Modal.Title className="fs-4 fw-bold">{selectedMinistry.title}</Modal.Title>
    </div>
  </Modal.Header>

  <Modal.Body className="pt-0">
    <p className="text-muted fs-6 mb-4">{selectedMinistry.description}</p>

    <h6 className="fw-semibold text-primary mb-3">Leadership Team</h6>
    <ul className="list-group list-group-flush">
      {selectedMinistry.leadership.map((leader, i) => (
        <li key={i} className="list-group-item d-flex align-items-center gap-3 border-0 px-0 py-2">
          <div className="avatar bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: 40, height: 40 }}>
            {leader.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <strong>{leader.name}</strong><br />
            <span className="text-muted small">{leader.role}</span>
          </div>
        </li>
      ))}
    </ul>
  </Modal.Body>

  <Modal.Footer className="border-0 pt-0">
    <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
      Close
    </Button>
    <Button variant="primary">
      Join This Ministry
    </Button>
  </Modal.Footer>
</Modal>
      )}
    </Container>
  );
}

export default Ministries;
