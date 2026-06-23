import heroPhoto from "./assets/man/New folder/photo_2026-04-12_09-13-44.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="page-root">
        <section className="hero compact">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to My Website</h1>
            <p className="hero-copy">Explore my projects, skills, and creative work. Thank you for visiting my personal portfolio.</p>
            <div className="hero-actions">
              <Link to="/gallery" className="button button-primary">View Portfolio <ArrowRight size={16} /></Link>
              <Link to="/about" className="button button-secondary">Learn More</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-root">
      <section className="hero">
        <img src={heroPhoto} alt="Manayeh" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">WELCOME</span>
          <h1 className="hero-title">welcome my website</h1>
          <h2 className="hero-subtitle">Web Developer & student </h2>
          <p className="hero-copy">
            Welcome to my personal website. Here you can explore my projects, learn more about me, and discover my work in web development and digital design.
          </p>
          <div className="hero-actions">
            <Link to="/gallery" className="button button-primary">
              View My Projects <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="button button-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
