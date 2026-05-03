import { useState } from "react";
import { photos } from "@/data/photos";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setCurrent((p) => (p + 1) % photos.length);
  const prev = () => setCurrent((p) => (p - 1 + photos.length) % photos.length);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden gradient-bg">
        <div className="absolute inset-0">
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            Welcome to my world
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6">
            <span className="text-gradient">Manayeh</span> Baylie
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore my journey through photos, stories, and creative expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Explore Gallery <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl font-display font-bold text-foreground mt-2">Featured Photos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              onClick={() => { setCurrent(i); setLightbox(true); }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer hover-lift group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <span className="text-sm font-medium text-foreground">{photo.alt}</span>
                  <span className="block text-xs text-primary mt-0.5">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            View All Photos <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-20">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center" onClick={() => setLightbox(false)}>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(false); }} className="absolute top-4 right-4 text-foreground hover:text-primary transition">
            <X size={32} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-foreground hover:text-primary transition">
            <ChevronLeft size={40} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-foreground hover:text-primary transition">
            <ChevronRight size={40} />
          </button>
          <img
            src={photos[current].src}
            alt={photos[current].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-center text-foreground">
            <p className="text-sm">{current + 1} / {photos.length} — {photos[current].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
