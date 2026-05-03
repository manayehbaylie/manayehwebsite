import heroPhoto from "@/assets/my-photo.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page-root">
      <section className="hero">
        <img src={heroPhoto} alt="My hero photo" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">Welcome</span>
          <h1 className="hero-title">Welcome to my website</h1>
          <p className="hero-copy">
            This homepage features a single strong hero image and introduces the modern personal website experience.
          </p>
          <div className="hero-actions">
            <Link to="/gallery" className="button button-primary">
              Explore the full gallery <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="button button-secondary">
              Learn more about me
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="image-panel">
          <img src={heroPhoto} alt="Homepage photo" className="home-image" />
          <div className="image-copy">
            <h2 className="section-title">Featured homepage image</h2>
            <p className="section-copy">
              This page now displays one strong image on the homepage as the main visual highlight.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-card">
          <h2 className="cta-title">Modern personal website</h2>
          <p className="cta-copy">
            The homepage is intentionally simple and focused: one hero image, clear navigation, and a polished introduction.
          </p>
          <p className="cta-copy">
            The complete website includes a dedicated gallery page, about section, and contact page. Unnecessary homepage data has been removed for a cleaner landing experience.
          </p>
          <Link to="/gallery" className="button button-primary">
            View the complete website
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
