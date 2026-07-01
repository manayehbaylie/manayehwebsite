import heroPhoto from "./assets/man/New folder/photo_2026-04-28_11-43-59.jpg";
import projectThumb from "./assets/man/New folder/Screenshot 2026-06-21 214218.png";
import ecomImg from "./assets/man/New folder/Screenshot 2026-06-21 215153.png";
import otherProjectImg from "./assets/man/New folder/photo_2026-04-28_11-41-40.jpg";
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
              <Link to="/projects" className="button button-primary">View Portfolio <ArrowRight size={16} /></Link>
              <Link to="/about" className="button button-secondary">Learn More</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const projects = [
    {
      id: 1,
      title: "Hotel Management System",
      tech: "Node · Express",
      img: projectThumb,
      live: "#",
      repo: "#",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      tech: "React · Vite",
      img: ecomImg,
      live: "#",
      repo: "#",
    },
    {
      id: 3,
      title: "Loan Default Prediction",
      tech: "Full Stack",
      img: otherProjectImg,
      live: "#",
      repo: "#",
    },
  ];

  return (
    <div className="page-root">
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <img src={heroPhoto} alt="Manayeh" className="hero-avatar" />
          </div>
          <div className="hero-right">
            <span className="hero-badge">WELCOME</span>
            <h1 className="hero-title">welcome my website</h1>
            <h2 className="hero-subtitle">Web Developer & student</h2>
            <p className="hero-copy">
              Welcome to my personal website. Here you can explore my projects, learn more about me, and discover my work in web development and digital design.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">
                View My Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="button button-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">I’m Manayeh Baylie</h2>
          <p className="section-copy">
            A Computer Science student focused on learning web development, software engineering, and modern technologies.
            I build coursework projects and experiments that showcase my growth and interests as I prepare for internships and future professional work.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Languages</h3>
            <p>C++</p>
            <p>Java</p>
            <p>JavaScript</p>
            <p>PHP</p>
          </div>
          <div className="feature-card">
            <h3>Frontend</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
          </div>
          <div className="feature-card">
            <h3>Database</h3>
            <p>MySQL</p>
          </div>
          <div className="feature-card">
            <h3>Tools</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>VS Code</p>
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
            <p>Activities: Academic Projects</p>
            <p>Web Development Practice</p>
            <p>Software Development Learning</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-copy">A selection of projects demonstrating skills in frontend, backend, and full-stack development.</p>
        </div>
        <div className="gallery-grid">
          {projects.map((project) => (
            <article key={project.id} className="gallery-card">
              <img src={project.img} alt={project.title} className="gallery-image" />
              <div className="gallery-meta">
                <span>{project.tech}</span>
                <h3>{project.title}</h3>
                <div style={{ marginTop: "0.75rem" }}>
                  <a className="button button-secondary" href={project.repo}>GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="page-hero contact-hero">
          <div className="hero-copy">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Let’s connect and learn together.</h2>
            <p className="section-copy">
              I’m a Computer Science student building skills in web development, algorithms, and software engineering.
              I’m open to internship opportunities, collaborative learning, and mentorship conversations.
            </p>
            <div className="contact-card contact-info" style={{ marginTop: '2rem' }}>
              <h3>Contact details</h3>
              <p>Telegram — <a href="https://t.me/manayeh" target="_blank" rel="noopener noreferrer">@manayeh</a></p>
              <p>Email — <a href="mailto:manayehtenaw@gmail.com">manayehtenaw@gmail.com</a></p>
              <p>Phone — 0924392994</p>
            </div>
            <Link to="/contact" className="button button-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
