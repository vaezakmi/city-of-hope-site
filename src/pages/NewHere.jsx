import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Church,
  Heart,
  ArrowRight,
  Images,
  Calendar,
  MapPin,
  Play,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Cross} from 'lucide-react';
import "../styles/NewHere.css";


// Sample gallery images - replace with your actual images
const SAMPLE_IMAGES = [
  {
    src: "src/assets/cathedral27.jpg",
    alt: "",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral28.jpg",
    alt: "The Church",
    name: "cathedral2.jpg"
  },
   {
    src: "src/assets/cathedral29.jpg",
    alt: "The Youth",
    name: "cathedral3.jpg"
  },
   {
    src: "src/assets/cathedral30.jpg",
    alt: "",
    name: "cathedral4.jpg"
  },
   {
    src: "src/assets/cathedral31.jpg",
    alt: "",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral32.jpg",
    alt: "",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral33.jpg",
    alt: "Sunday school Teacher",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral34.jpg",
    alt: "Sunday school Teacher",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral9.jpg",
    alt: "Dance",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral24.jpg",
    alt: "",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral19.jpg",
    alt: "Dr From India",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral18.jpg",
    alt: "Prophet",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral21.jpg",
    alt: "Pst. Obi Bisare",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral16.jpg",
    alt: "First church members",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral15.jpg",
    alt: "Outdoor Worship Service",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral14.jpg",
    alt: "Crusade",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral12.jpg",
    alt: "Laying of Foundation",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral40.jpg",
    alt: "Laying foundation",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral11.jpg",
    alt: "The Church",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral10.jpg",
    alt: "2019 ",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral7.jpg",
    alt: "2022",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral4.jpg",
    alt: "The Cathedral",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral37.jpg",
    alt: "Church Elder",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral36.jpg",
    alt: "Youth Director",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral38.jpg",
    alt: "Church Elder",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral35.jpg",
    alt: "Joseph Masero",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral30.jpg",
    alt: "",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral26.jpg",
    alt: "",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral2.jpg",
    alt: "Worship Service",
    name: "cathedral1.jpg"
  },
   {
    src: "src/assets/cathedral39.jpg",
    alt: "Women of Hope",
    name: "cathedral1.jpg"
  },
];

// Particle Background Component
const ParticleBackground = ({ count = 15 }) => {
  const particles = Array.from({ length: count }, (_, i) => i);
  
  return (
    <div className="particle-bg">
      {particles.map((p) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 10;
        
        return (
          <div
            key={p}
            className="particle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, text, index = 0, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200 + 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`feature-card ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="feature-card-inner">
        <div className="feature-icon-wrapper">
          <div className="feature-icon">
            <Icon size={32} />
          </div>
          <div className="icon-bg" />
        </div>

        <h3 className="feature-title">{title}</h3>
        <p className="feature-text">{text}</p>

        <div className="feature-actions">
          <button
            className="feature-btn"
            onClick={onClick}
            aria-label={`${title} - Learn more`}
          >
            Learn More 
            <ArrowRight 
              size={16} 
              className={`arrow ${isHovered ? "bouncing" : ""}`} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

// Gallery Carousel Component
const GalleryCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return;
    
    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [isAutoPlaying, images.length]);

  const goTo = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  const prev = () => goTo((currentIndex - 1 + images.length) % images.length);
  const next = () => goTo((currentIndex + 1) % images.length);

  if (images.length === 0) {
    return <div className="carousel-empty">No images available</div>;
  }

  return (
    <div className="gallery-carousel">
      <div className="carousel-container">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`carousel-slide ${i === currentIndex ? "active" : ""}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="slide-overlay">
              <p>{img.alt}</p>
            </div>
          </div>
        ))}

        <button 
          className="carousel-btn prev" 
          onClick={prev} 
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          className="carousel-btn next" 
          onClick={next} 
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Lightbox Modal Component
const LightboxModal = ({ images = [], startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex || 0);

  useEffect(() => {
    setIndex(startIndex || 0);
  }, [startIndex]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };
    
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="lightbox-root">
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-content">
        <button 
          className="lightbox-close" 
          onClick={onClose} 
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>

        <button 
          className="lightbox-prev" 
          onClick={prev} 
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="lightbox-image-wrap">
          <img 
            src={images[index].src} 
            alt={images[index].alt} 
            className="lightbox-image" 
          />
          <div className="lightbox-caption">
            <span>{images[index].alt}</span>
            <small>{`${index + 1} / ${images.length}`}</small>
          </div>
        </div>

        <button 
          className="lightbox-next" 
          onClick={next} 
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// Main NewHere Component
export default function NewHere() {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);

  // Use sample images - replace with your actual image loading logic
  const images = SAMPLE_IMAGES;

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Feature cards data
  const featureData = [
    {
      icon: Church,
      title: "Join Our Sunday Service",
      text: "Experience a warm, Spirit-filled worship environment where everyone is welcome to encounter God's presence.",
      onClick: () => navigate("/events"),
    },
    {
      icon: Users,
      title: "Connect with Family",
      text: "Meet genuine people, join a small group, and discover a community that celebrates your journey.",
      onClick: () => navigate("/ministries"),
    },
    {
      icon: Heart,
      title: "Grow in Faith",
      text: "Deepen your relationship with God through Bible studies, prayer, and transformative discipleship.",
      onClick: () => navigate("/events"),
    },
  ];

  const previewLimit = 6;
  const previewImages = images.slice(0, previewLimit);
  const displayedImages = showAllImages ? images : previewImages;

  const openLightboxAt = (index) => {
    setLightboxStartIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const handleImageError = (e) => {
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%239ca3af'%3EImage not available%3C/text%3E%3C/svg%3E";
  };

  return (
    <div className="new-here-page">
      {/* Hero Section */}
      <section className="hero-section">
        <ParticleBackground />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className={`hero-text ${heroVisible ? "visible" : ""}`}>
            <div className="hero-badge">
              <Cross size={18} className="cross-icon" />
              Welcome Home
            </div>

            <h1>
              <span className="line">Find Your</span>
              <span className="line highlight">Sacred Place</span>
              <span className="line">to Belong</span>
            </h1>

            <p>
              Whether you're beginning your faith journey or seeking a spiritual family,
              discover where authentic community and God's love intersect.
            </p>

            <div className="hero-buttons">
              <button 
                className="btn-primary" 
                onClick={() => navigate("/about")}
              >
                Discover More <ArrowRight size={20} />
              </button>

              <button 
                className="btn-secondary" 
                onClick={() => navigate("/sermons")}
              >
                <Play size={20} /> Watch Live
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">What to Expect</div>
            <h2>Your Journey Starts Here</h2>
            <p>
              We're honored you're considering joining us. Here's what awaits 
              when you step through our doors.
            </p>
          </div>

          <div className="features-grid">
            {featureData.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                index={idx}
                onClick={feature.onClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Gallery</div>
            <h2>Life in Our Community</h2>
            <p>
              Witness the beautiful moments where faith comes alive and hearts are transformed.
            </p>
          </div>

          {/* Carousel Preview */}
          {!showAllImages && (
            <div className="gallery-carousel-wrapper">
              <GalleryCarousel images={previewImages} />
            </div>
          )}

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {displayedImages.map((img, idx) => (
              <div 
                key={idx} 
                className="gallery-item" 
                onClick={() => openLightboxAt(idx)}
                role="button" 
                tabIndex={0}
                onKeyDown={(e) => { 
                  if (e.key === "Enter" || e.key === " ") openLightboxAt(idx); 
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  onError={handleImageError} 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

          <div className="gallery-toggle">
            <button 
              className="btn-outline" 
              onClick={() => setShowAllImages(!showAllImages)}
            >
              <Images size={20} />
              {showAllImages ? "Show Less" : "View Full Gallery"}
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <LightboxModal 
          images={images} 
          startIndex={lightboxStartIndex} 
          onClose={closeLightbox} 
        />
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <Heart size={48} className="cta-icon" />
              <div className="cta-text">
                <h2>Ready to Take the Next Step?</h2>
                <p>
                  Your story matters to us. Let us know you're coming and we'll ensure 
                  your first experience with our family is unforgettable.
                </p>
              </div>
            </div>

            <div className="cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate("/contact")}
              >
                <Calendar size={20} /> Plan Your Visit
              </button>

              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.950823329179!2d34.6626!3d-0.7607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182cb70f6db79497%3A0xab95cf8bf2f38e62!2sPEFA%20CITY%20OF%20HOPE%20CHURCH%2C%20NYATECHI!5e0!3m2!1sen!2ske!4v1753419707062!5m2!1sen!2ske"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MapPin size={20} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}