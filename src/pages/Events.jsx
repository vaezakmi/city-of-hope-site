import { useState, useEffect } from 'react';
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Users, 
  Music,
  ArrowRight,
  Bell,
  Heart,
  Calendar // Added missing import
} from 'lucide-react';
import '../styles/Events.css';

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM – 10:30 AM",
    location: "City of Hope Church, Nyatechi",
    icon: <CalendarDays size={28} />,
    category: "worship",
    description: "Join us for an inspiring morning service filled with worship and the Word.",
    isRecurring: true,
    attendees: "200+",
    color: "primary"
  },
  {
    title: "Sunday Main Service",
    date: "Every Sunday",
    time: "10:30 AM – 12:30 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <Users size={28} />,
    category: "worship",
    description: "Our main celebration service with powerful worship and transformative teaching.",
    isRecurring: true,
    attendees: "500+",
    color: "primary"
  },
  {
    title: "Midweek Prayer & Word",
    date: "Every Thursday",
    time: "6:00 PM – 8:00 PM",
    location: "Main Hall",
    icon: <Clock size={28} />,
    category: "prayer",
    description: "Gather with us for intimate prayer and deeper study of God's Word.",
    isRecurring: true,
    attendees: "80+",
    color: "success"
  },
  {
    title: "Youth Gathering",
    date: "Every Saturday",
    time: "3:00 PM – 5:00 PM",
    location: "Youth Wing",
    icon: <Heart size={28} />,
    category: "youth",
    description: "High-energy fellowship designed for teens and young adults.",
    isRecurring: true,
    attendees: "60+",
    color: "success"
  },
  {
    title: "Worship Practice",
    date: "Every Tuesday & Saturday",
    time: "3:00 PM – 4:00 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <Music size={28} />,
    category: "music",
    description: "Prepare your heart and voice for Sunday worship with our team.",
    isRecurring: true,
    attendees: "25+",
    color: "primary"
  },
  {
    title: "Choir Practice",
    date: "Every Tuesday & Saturday",
    time: "4:00 PM – 5:00 PM",
    location: "City of Hope Church, Nyatechi",
    icon: <Music size={28} />,
    category: "music",
    description: "Join our choir as we prepare beautiful harmonies for worship.",
    isRecurring: true,
    attendees: "40+",
    color: "primary"
  },
];

const EventCard = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-blue-500 to-purple-600',
      success: 'from-green-500 to-emerald-600',
      danger: 'from-red-500 to-pink-600',
      info: 'from-cyan-500 to-blue-600',
      warning: 'from-yellow-500 to-orange-600'
    };
    return colors[color] || colors.primary;
  };

  return (
    <div
      className={`event-card ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="event-card-inner">
        <div className={`event-icon bg-gradient-to-br ${getColorClasses(event.color)}`}>
          {event.icon}
          <div className="icon-glow"></div>
        </div>
        
        <div className="event-badge">
          {event.isRecurring && <Bell size={12} />}
          {event.category}
        </div>

        <div className="event-content">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-description">{event.description}</p>
          
          <div className="event-details">
            <div className="detail-item">
              <CalendarDays size={16} />
              <span>{event.date}</span>
            </div>
            <div className="detail-item">
              <Clock size={16} />
              <span>{event.time}</span>
            </div>
            <div className="detail-item">
              <MapPin size={16} />
              <span>{event.location}</span>
            </div>
            <div className="detail-item">
              <Users size={16} />
              <span>{event.attendees} expected</span>
            </div>
          </div>
        </div>

        <div className="event-footer">
          <button className="event-btn">
            Learn More
            <ArrowRight size={16} className={`arrow ${isHovered ? 'moving' : ''}`} />
          </button>
        </div>

        <div className="card-glow"></div>
      </div>
    </div>
  );
};

const FloatingElements = () => {
  return (
    <div className="floating-elements">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className="floating-element" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

function EventsSection() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="events-section">
      <FloatingElements />
      
      <div className="container">
        <div className={`section-header ${headerVisible ? 'visible' : ''}`}>
          <div className="section-badge">
            <Calendar size={16} />
            Upcoming Events
          </div>
          <h2>Join Our Community</h2>
          <p>
            Experience the heart of our church through worship, prayer, and fellowship. 
            Every gathering is an opportunity to grow closer to God and each other.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        <div className="events-cta">
          <div className="cta-content">
            <h3>Ready to Join Us?</h3>
            <p>Don't miss out on these life-changing experiences. Mark your calendar!</p>
            <button className="cta-button">
              View Full Calendar
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
