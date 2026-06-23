import { Link } from "react-router-dom";
import projectThumb from "./assets/man/New folder/photo_2026-04-28_11-41-40.jpg";
import ecomImg from "./assets/man/New folder/Screenshot 2026-06-21 214218.png";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      tech: "React · Vite",
      img: projectThumb,
      live: "#",
      repo: "#",
    },
    {
      id: 2,
      title: "Hotel management system",
      tech: "Node · Express",
      img: ecomImg,
      live: "#",
      repo: "#",
    },
    {
      id: 3,
      title: "University Management System",
      tech: "Full Stack",
      img: projectThumb,
      live: "#",
      repo: "#",
    },
  ];

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="hero-copy container">
          <span className="section-tag">Projects</span>
          <h1 className="section-title">Selected Work</h1>
          <p className="section-copy">A selection of projects demonstrating skills in frontend, backend, and full-stack development.</p>
        </div>
      </section>

      <section className="section container">
        <div className="gallery-grid">
          {projects.map((p) => (
            <article key={p.id} className="gallery-card">
              <img src={p.img} alt={p.title} className="gallery-image" />
              <div className="gallery-meta">
                <span>{p.tech}</span>
                <h3>{p.title}</h3>
                <div style={{marginTop: '0.75rem'}}
                >
                  <a className="button button-primary" href={p.live}>Live Demo</a>
                  <a className="button button-secondary" href={p.repo} style={{marginLeft: '0.5rem'}}>GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
