// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import {
  Book,
  Music,
  Users,
  ArrowRight,
  MapPin,
  Calendar,
  Heart,
  Star,
  Play,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import '../styles/Home.css';
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "City of Hope transformed my life completely. I found not just a church, but a loving family that supports me through every season.",
    name: "Simon N.",
    role: "Children's Ministry Leader",
    image: "src/assets/cathedral33.jpg"
  },
  {
    quote: "The worship experience here is absolutely incredible — so spirit-filled and authentic. Every service feels like a divine encounter.",
    name: "Elder Maggie.",
    role: "Church Elder",
    image: "src/assets/cathedral37.jpg"
  },
  {
    quote: "Every Sunday leaves me completely uplifted and inspired to live out my faith throughout the week. This place is truly special.",
    name: "Joseph M.",
    role: "Men's Ministry Leader",
    image: "src/assets/cathedral35.jpg"
  }
];

const ministries = [
  { title: "Youth Ministry", desc: "Empowering the next generation through dynamic programs, mentorship, and life-changing encounters with God.", icon: Users, color: "from-purple-500 to-pink-500", stats: "50+ Active Members" },
  { title: "Worship Experience", desc: "Spirit-led, contemporary worship that creates an atmosphere for encounter and transformation.", icon: Music, color: "from-blue-500 to-cyan-500", stats: "3 Services Weekly" },
  { title: "Bible Teaching", desc: "Deep, practical, and life-applicable Bible study that transforms hearts and renews minds.", icon: Book, color: "from-green-500 to-emerald-500", stats: "5+ Study Groups" },
];

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // pointerEvents: 'none' ensures this background won't block clicks
  return <div className="parallax-bg" style={{ transform: `translateY(${scrollY * 0.5}px)`, pointerEvents: 'none' }} />;
};

const FloatingElements = () => (
  <div className="floating-elements" style={{ pointerEvents: 'none' }}>
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="floating-element"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${20 + Math.random() * 15}s`,
          pointerEvents: 'none'
        }}
      />
    ))}
  </div>
);

const MinistryCard = ({ ministry, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);
  const Icon = ministry.icon;
  return (
    <div
      className={`ministry-card ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ['--delay']: `${index * 0.2}s` }}
    >
      <div className="ministry-card-inner">
        <div className={`ministry-icon bg-gradient-to-br ${ministry.color}`}>
          <Icon size={32} />
          <div className="icon-ripple" />
        </div>
        <div className="ministry-content">
          <h3>{ministry.title}</h3>
          <p>{ministry.desc}</p>
          <div className="ministry-stats">
            <Star size={16} />
            <span>{ministry.stats}</span>
          </div>
        </div>
        <div className={`card-glow ${isHovered ? 'active' : ''}`} />
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}>
            <div className="testimonial-content">
              <Quote size={40} className="quote-icon" />
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          className="carousel-btn prev"
          onClick={() => { setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length); setIsAutoPlaying(false); }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="carousel-btn next"
          onClick={() => { setCurrentIndex(prev => (prev + 1) % testimonials.length); setIsAutoPlaying(false); }}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function VisitSection() {
  return (
    <div className="visit-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={16} />
            Plan Your Visit
          </div>
          <h2>Come Experience God's Love</h2>
          <p>Discover your spiritual home in our welcoming community</p>
        </div>

        <div className="visit-grid">
          <div className="visit-card map-card">
            <div className="card-header">
              <MapPin size={24} />
              <h3>Find Us</h3>
            </div>
            <div className="map-container">
              <iframe
                title="City of Hope Church Nyatechi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.950823329179!2d34.6626!3d-0.7607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182cb70f6db79497%3A0xab95cf8bf2f38e62!2sPEFA%20CITY%20OF%20HOPE%20CHURCH%2C%20NYATECHI!5e0!3m2!1sen!2ske!4v1753419707062!5m2!1sen!2ske"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="card-footer">
              <p>QJR3+M44, PEFA City of Hope Church, Nyatechi</p>
            </div>
          </div>

          <div className="visit-card video-card">
            <div className="card-header">
              <Play size={24} />
              <h3>Welcome Message</h3>
            </div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/Y5hN9yZBWKQ?si=DWifADjeYji1kl9X"
                title="Welcome to City of Hope"
                allowFullScreen
              />
            </div>
            <div className="card-footer">
              <p>Watch a special message from our pastoral team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <ParallaxBackground />
        <FloatingElements />
        {/* overlay is non-interactive so it won't block clicks */}
        <div className="hero-overlay" style={{ pointerEvents: 'none' }} />

        {/* hero-content must be above overlay/backgrounds */}
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className={`hero-text ${heroLoaded ? 'loaded' : ''}`}>
            <h1>
              <span className="line">Welcome to</span>
              <span className="line highlight">PEFA City of Hope</span>
              <span className="line">Cathedral</span>
            </h1>
            <p>Transforming lives through the power of God's Word and the love of Christ</p>

            {/* FIXED: single hero-buttons wrapper and Link usage */}
            <div className="hero-buttons">
              <Link to="/about" className="btn-primary hero-btn" aria-label="Discover more about the church">
                Discover More
                <ArrowRight size={20} />
              </Link>

              <Link to="/sermons" className="btn-secondary hero-btn" aria-label="Watch live sermons">
                <Play size={20} />
                Watch Live
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <div className="cta-icon">
                <Heart size={32} />
              </div>
              <div className="cta-text">
                <h3>Join us this Sunday!</h3>
                <p>We gather every Sunday at <strong>8:30 AM</strong> for vibrant worship, powerful teaching, and authentic fellowship.</p>
              </div>
              <button className="cta-button">
                <Calendar size={20} />
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="scripture-section">
        <div className="container">
          <div className="scripture-content">
            <Quote size={48} className="scripture-quote" />
            <h2>"For I know the plans I have for you," declares the Lord.</h2>
            <p>— Jeremiah 29:11</p>
          </div>
        </div>
      </section>

      {/* Ministry Highlights */}
      <section className="ministry-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Star size={16} />
              What We Offer
            </div>
            <h2>Experience Life-Changing Ministry</h2>
            <p>Discover how God is moving through our diverse ministries and programs</p>
          </div>
          <div className="ministry-grid">
            {ministries.map((ministry, index) => (
              <MinistryCard key={index} ministry={ministry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Heart size={16} />
              Testimonials
            </div>
            <h2>Lives Being Transformed</h2>
            <p>Hear from our community about how God is working in their lives</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Visit Section */}
      <VisitSection />
    </div>
  );
}

export default Home;
