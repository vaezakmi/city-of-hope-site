import { useState } from "react";
import "../styles/Ministries.css";
import { 
  Users, 
  Baby, 
  Heart, 
  Music, 
  HandHeart, 
  Book, 
  UserCheck,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronRight,
  X
} from "lucide-react";

const ministries = [
  {
    icon: Users,
    title: "Youth Ministry",
    description: "Empowering the next generation with purpose, leadership, and passion for Christ.",
    fullDescription: "Our Youth Ministry is dedicated to nurturing young hearts and minds in their faith journey. We provide mentorship, leadership training, and create a safe space for youth to explore their relationship with God while building lasting friendships.",
    leadership: [
      { name: "Daniel Sinda", role: "Youth Leader", phone: "254701936022" },
      { name: "Tillen Chacha", role: "Mentorship Leader", phone: "254707780214" },
    ],
    whatsapp: "254701936022",
    meetingTime: "Sundays 2:00 PM",
    location: "Youth Hall",
    activities: ["Bible Study", "Worship Nights", "Community Service", "Leadership Training"],
    color: "blue",
  },
  {
    icon: Baby,
    title: "Children's Church",
    description: "Teaching the Word of God in fun, engaging ways for kids to know Jesus early.",
    fullDescription: "Our Children's Church creates a loving environment where kids can learn about Jesus through interactive lessons, songs, and activities designed specifically for their age group.",
    leadership: [
      { name: "Simon Nyamohanga", role: "Children's Pastor", phone: "254757700186" },
      { name: "Stephen Mahanga", role: "Volunteer Coordinator", phone: "254701080983" },
    ],
    whatsapp: "254757700186",
    meetingTime: "Sundays 9:00 AM",
    location: "Children's Wing",
    activities: ["Bible Stories", "Worship Songs", "Crafts", "Games"],
    color: "green",
  },
  {
    icon: Heart,
    title: "Women of Hope",
    description: "A sisterhood built on prayer, strength, healing, and support for every woman.",
    fullDescription: "Women of Hope is a ministry dedicated to empowering women through prayer, fellowship, and mutual support. We create a safe space for women to share, grow, and strengthen their faith together.",
    leadership: [
      { name: "Jane Joseph", role: "Women's Ministry Head", phone: "254703121918" },
      { name: "Esther Nyasae", role: "Assistant Women's Ministry Leader", phone: "254714638490" },
    ],
    whatsapp: "254703121918",
    meetingTime: "Wednesdays 4:00 PM",
    location: "Fellowship Hall",
    activities: ["Prayer Meetings", "Bible Study", "Wellness Programs", "Community Outreach"],
    color: "pink",
  },
  {
    icon: Music,
    title: "Worship Team",
    description: "Leading the congregation into God's presence through anointed music and praise.",
    fullDescription: "Our Worship Team is passionate about creating an atmosphere where hearts can connect with God through music. We blend contemporary and traditional worship to minister to all generations.",
    leadership: [
      { name: "Nyaitange Joseph", role: "Worship Director", phone: "254716199897" },
      { name: "Mrs Nokwi", role: "Assistant Worship Leader", phone: "254724624121" },
    ],
    whatsapp: "254716199897",
    meetingTime: "Saturdays 4:00 PM",
    location: "Main Sanctuary",
    activities: ["Worship Practice", "Song Writing", "Music Training", "Special Events"],
    color: "yellow",
  },
  {
    icon: HandHeart,
    title: "Outreach & Missions",
    description: "Taking the Gospel beyond the walls through missions, charity, and evangelism.",
    fullDescription: "Our Outreach & Missions ministry extends God's love to the community through various programs, supporting different church branches and reaching those in need with the Gospel message.",
    leadership: [
      { name: "Elder Maggie", role: "In charge of Ebenezer, Bethsaida and Agape", phone: "254727756829" },
      { name: "Elder Simon Nokwi", role: "In charge of Shalom, Israel and Faith", phone: "254720340628" },
      { name: "Daniel Sinda", role: "In charge of Bethel and Jerusalem", phone: "254701936022" },
    ],
    whatsapp: "254727756829",
    meetingTime: "First Saturday of Month",
    location: "Various Locations",
    activities: ["Community Service", "Evangelism", "Charity Work", "Mission Trips"],
    color: "cyan",
  },
  {
    icon: Book,
    title: "Bible Study Groups",
    description: "Growing in faith through weekly study groups and fellowship around the Word.",
    fullDescription: "Our Bible Study Groups provide intimate settings for deeper exploration of God's Word, fostering spiritual growth through discussion, prayer, and fellowship.",
    leadership: [
      { name: "Michael Karanja", role: "Discipleship Leader" },
      { name: "Beatrice Oloo", role: "Small Groups Manager" },
    ],
    meetingTime: "Thursdays 7:00 PM",
    location: "Multiple Venues",
    activities: ["Scripture Study", "Discussion Groups", "Prayer", "Fellowship"],
    color: "purple",
  },
  {
    icon: UserCheck,
    title: "Men of Hope",
    description: "Empowering men to lead with faith, strength, and purpose.",
    fullDescription: "Men of Hope focuses on developing godly men who can lead their families and communities with integrity, strength, and biblical wisdom.",
    leadership: [
      { name: "Joseph Masero", role: "Men's Ministry Leader", phone: "254740721247" },
      { name: "Christopher Ng'wena", role: "Support Coordinator", phone: "254798586957" },
    ],
    whatsapp: "254740721247",
    meetingTime: "Second Saturday 8:00 AM",
    location: "Men's Fellowship Room",
    activities: ["Men's Breakfast", "Leadership Training", "Mentorship", "Community Projects"],
    color: "purple",
  },
  {
    icon: Music,
    title: "Choir Ministry",
    description: "Uplifting hearts through harmonious voices and worship that inspires the soul.",
    fullDescription: "Our Choir Ministry brings together voices in harmony to worship God and inspire the congregation through special performances and regular ministry during services.",
    leadership: [
      { name: "Annet Song", role: "Choir Director" },
      { name: "Sheila Sinda", role: "Assistant Choir Leader" },
    ],
    meetingTime: "Saturdays 2:00 PM",
    location: "Choir Room",
    activities: ["Choir Practice", "Special Performances", "Voice Training", "Music Ministry"],
    color: "orange",
  },
  {
    icon: UserCheck,
    title: "Church Elders & Leaders",
    description: "Guiding the church with wisdom, prayer, and spiritual oversight.",
    fullDescription: "Our Church Elders provide spiritual leadership, wisdom, and guidance for the church family, ensuring pastoral care and biblical oversight of all church activities.",
    leadership: [
      { name: "Elder Margret Nyahiri", role: "Senior Elder", phone: "254720340628" },
      { name: "Elder Simon Nokwi", role: "Pastoral Oversight", phone: "254720340628" },
    ],
    whatsapp: "254720340628",
    meetingTime: "Monthly Council Meetings",
    location: "Elder's Conference Room",
    activities: ["Church Governance", "Pastoral Care", "Strategic Planning", "Spiritual Guidance"],
    color: "indigo",
  },
  {
    icon: UserCheck,
    title: "Church Administration",
    description: "Managing operations with excellence, integrity, and accountability to support the church's mission.",
    fullDescription: "Our Administration team ensures smooth church operations, financial integrity, and excellent service to support all ministry activities and church growth.",
    leadership: [
      { name: "Elder Margret Nyahiri", role: "Church Secretary", phone: "254714638490" },
      { name: "Esther Nyasae", role: "Church Treasurer", phone: "254714638490" },
    ],
    phone: "254714638490",
    meetingTime: "Office Hours: Mon-Fri",
    location: "Church Office",
    activities: ["Financial Management", "Record Keeping", "Event Coordination", "Member Services"],
    color: "blue",
  }
];

function Ministries() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const handleCardClick = (ministry) => {
    setSelectedMinistry(ministry);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMinistry(null);
  };

  const handleWhatsAppClick = () => {
    if (selectedMinistry?.whatsapp) {
      window.open(`https://wa.me/${selectedMinistry.whatsapp}?text=Hi! I'm interested in joining the ${selectedMinistry.title} ministry.`, '_blank');
    }
  };

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="ministries-container">
      {/* Header */}
      <div className="ministries-header">
        <h2 className="ministries-title">Our Ministries</h2>
        <p className="ministries-subtitle">
          There's a space for everyone to grow, serve, and belong. Explore the heartbeat of our church 
          and find your calling in one of our vibrant ministry communities.
        </p>
      </div>

      {/* Ministry Cards Grid */}
      <div className="ministries-grid">
        {ministries.map((ministry, idx) => {
          const IconComponent = ministry.icon;
          
          return (
            <div
              key={idx}
              onClick={() => handleCardClick(ministry)}
              className={`ministry-card card-${ministry.color}`}
            >
              <div className="card-header">
                <IconComponent size={40} className={`ministry-icon icon-${ministry.color}`} />
                <ChevronRight size={20} className="chevron-icon" />
              </div>
              
              <h3 className="ministry-title">{ministry.title}</h3>
              <p className="ministry-description">{ministry.description}</p>
              
              <div className="card-footer">
                <div className="meeting-info">
                  <Clock size={14} />
                  {ministry.meetingTime}
                </div>
                {ministry.location && (
                  <div className="meeting-info">
                    <MapPin size={14} />
                    {ministry.location}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && selectedMinistry && (
        <div className="modal-overlay">
          <div className="modal-container">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-content">
                <div className="modal-header-info">
                  <div className={`modal-icon-wrapper card-${selectedMinistry.color}`}>
                    <selectedMinistry.icon size={32} className={`icon-${selectedMinistry.color}`} />
                  </div>
                  <div className="modal-title-section">
                    <h3>{selectedMinistry.title}</h3>
                    <div className="modal-meeting-time">
                      <Clock size={16} />
                      {selectedMinistry.meetingTime}
                    </div>
                  </div>
                </div>
                <button onClick={closeModal} className="close-button">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Full Description */}
              <div className="modal-section">
                <h4 className="section-title">About This Ministry</h4>
                <p className="section-content">
                  {selectedMinistry.fullDescription || selectedMinistry.description}
                </p>
              </div>

              {/* Meeting Details */}
              <div className="modal-section">
                <div className="meeting-details">
                  <h4 className="section-title">Meeting Details</h4>
                  <div className="meeting-details-grid">
                    <div className="meeting-detail-item">
                      <Clock size={18} />
                      <div>
                        <p className="meeting-detail-label">When</p>
                        <p className="meeting-detail-value">{selectedMinistry.meetingTime}</p>
                      </div>
                    </div>
                    {selectedMinistry.location && (
                      <div className="meeting-detail-item">
                        <MapPin size={18} />
                        <div>
                          <p className="meeting-detail-label">Where</p>
                          <p className="meeting-detail-value">{selectedMinistry.location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Activities */}
              {selectedMinistry.activities && (
                <div className="modal-section">
                  <h4 className="section-title">What We Do</h4>
                  <div className="activities-grid">
                    {selectedMinistry.activities.map((activity, i) => (
                      <div key={i} className="activity-item">
                        <div className="activity-bullet"></div>
                        <span className="activity-text">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Leadership Team */}
              <div className="modal-section">
                <h4 className="section-title">Leadership Team</h4>
                <div className="leadership-list">
                  {selectedMinistry.leadership.map((leader, i) => (
                    <div key={i} className="leader-item">
                      <div className="leader-info">
                        <div className="leader-avatar">
                          {leader.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="leader-name">{leader.name}</p>
                          <p className="leader-role">{leader.role}</p>
                        </div>
                      </div>
                      {leader.phone && (
                        <button
                          onClick={() => handlePhoneClick(leader.phone)}
                          className="phone-button"
                          title="Call"
                        >
                          <Phone size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <div className="footer-buttons">
                <button onClick={closeModal} className="footer-button button-secondary">
                  Close
                </button>
                {selectedMinistry.whatsapp && (
                  <button onClick={handleWhatsAppClick} className="footer-button button-primary">
                    <MessageCircle size={18} />
                    Join This Ministry
                  </button>
                )}
                {selectedMinistry.phone && !selectedMinistry.whatsapp && (
                  <button
                    onClick={() => handlePhoneClick(selectedMinistry.phone)}
                    className="footer-button button-blue"
                  >
                    <Phone size={18} />
                    Contact Ministry
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ministries;