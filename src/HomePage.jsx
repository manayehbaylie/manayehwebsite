import heroPhoto from "./assets/man/New folder/photo_2026-04-12_09-13-44.jpg";
import photo2 from "./assets/man/New folder/photo_2026-04-28_11-40-14.jpg";
import profilePhoto from "./assets/man/New folder/photo_2026-04-28_11-41-40.jpg";
// removed unused project thumbnail import
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // simple client-side validation placeholder
    alert('Thanks — your message was submitted (demo).');
  };

  return (
    <div className="page-root">
      <section className="hero page-hero">
        <img src={heroPhoto} alt="Manayeh Baylie" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-left">
            <Link to="/" aria-label="Home">
              <img src={profilePhoto} alt="Manayeh Baylie" className="hero-avatar" />
            </Link>
          </div>
          <div className="hero-right">
            <span className="hero-badge">Welcome</span>
            <h1 className="hero-title">Manayeh Baylie</h1>
            <h2 className="hero-subtitle">Computer Science Student & Web Developer</h2>
            <p className="hero-copy">
              Passionate about building modern websites, web applications, and digital experiences. I enjoy transforming ideas into functional, user-friendly, and visually appealing digital products.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">View Projects <ArrowRight size={18} /></Link>
              <Link to="/contact" className="button button-secondary">Contact Me</Link>
            </div>
          </div>
        </div>
      </section>

      <main>

        
        {/* Services section removed per request */}

        {/* Featured Projects removed from homepage */}

        {/* Experience section moved to About page */}

        {/* Gallery section removed from homepage */}

        {/* Testimonials section removed from homepage */}

        {/* Contact section removed from homepage */}
      </main>
    </div>
  );
};

export default HomePage;
