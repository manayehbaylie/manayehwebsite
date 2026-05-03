import { photos } from "@/data/photos";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  return (
    <main className="page-shell">
      <section className="page-hero gallery-hero">
        <div className="hero-copy">
          <span className="section-tag">Gallery</span>
          <h1 className="section-title">Photos from my website.</h1>
          <p className="section-copy">
            Browse the full gallery of images used on my site, all sourced from my personal collection.
          </p>
          <p className="section-copy">
            This page shows the complete website photo collection in one place so visitors can explore every image clearly.
          </p>
          <Link to="/contact" className="button button-primary">
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="gallery-grid">
          {photos.map((photo) => (
            <article key={photo.id} className="gallery-card">
              <img src={photo.src} alt={photo.alt} className="gallery-image" />
              <div className="gallery-meta">
                <span>{photo.category}</span>
                <h3>{photo.alt}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
