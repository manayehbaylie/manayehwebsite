import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="page-shell">
      <section className="page-hero about-hero">
        <div className="hero-copy">
          <span className="section-tag">About Me</span>
          <h1 className="section-title">I’m Manayeh Baylie</h1>
          <p className="section-copy">
            A Computer Science student focused on learning web development, software engineering,
            and modern technologies. I build coursework projects and experiments that showcase
            my growth and interests as I prepare for internships and future professional work.
          </p>
          <Link to="/contact" className="button button-primary">
            Contact me <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      

      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Languages</h3>
            <p>C++ · Java · JavaScript · PHP</p>
          </div>
          <div className="feature-card">
            <h3>Frontend</h3>
            <p>HTML5 · CSS3 · JavaScript</p>
          </div>
          <div className="feature-card">
            <h3>Database</h3>
            <p>MySQL</p>
          </div>
          <div className="feature-card">
            <h3>Tools</h3>
            <p>Git · GitHub · VS Code</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="about-grid">
          <div className="info-card">
            <h3>Bachelor of Computer Science</h3>
            <p>Mekdela Amba University</p>
            <p>Activities: Academic Projects · Web Development Practice · Software Development Learning</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
