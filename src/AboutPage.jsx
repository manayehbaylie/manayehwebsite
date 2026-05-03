import { ArrowRight, Sparkles, Briefcase, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="page-shell">
      <section className="page-hero about-hero">
        <div className="hero-copy">
          <span className="section-tag">About Me</span>
          <h1 className="section-title">I’m Manayeh Baylie — Computer Science student.</h1>
          <p className="section-copy">
            My name is Manayeh Baylie, I am 25 years old and studying Computer Science in my third year at
            Mekdela Amba University. I am male and passionate about building strong digital experiences,
            learning modern web technologies, and growing as a creative problem solver.
          </p>
          <Link to="/contact" className="button button-primary">
            Contact me <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section container about-grid">
        <div className="info-card">
          <div className="info-icon"><Sparkles size={24} /></div>
          <h2>Creativity</h2>
          <p>I develop unique visuals, compelling layouts, and memorable brand experiences that feel personal.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><Briefcase size={24} /></div>
          <h2>Professionalism</h2>
          <p>I deliver polished work on time, communicate clearly, and adapt quickly to new tools and workflows.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><Handshake size={24} /></div>
          <h2>Collaboration</h2>
          <p>I enjoy working with clients and teams to turn ideas into websites, galleries, and digital stories.</p>
        </div>
      </section>

      <section className="section container about-story">
        <div>
          <h2 className="section-title">About my background</h2>
          <p className="section-copy">
            I study Computer Science at Mekdela Amba University, where I am in my third year. I am driven
            by curiosity, enjoy learning new technologies, and like to solve problems with clear,
            practical solutions.
          </p>
        </div>
        <div className="about-list">
          <div>
            <strong>Student mindset</strong>
            <p>I focus on learning, improving, and applying what I know through projects and real work.</p>
          </div>
          <div>
            <strong>Technical interest</strong>
            <p>I enjoy programming, web development, and understanding how software and design come together.</p>
          </div>
          <div>
            <strong>Future ambition</strong>
            <p>I aim to become a strong developer with a creative edge, building useful and beautiful digital products.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
