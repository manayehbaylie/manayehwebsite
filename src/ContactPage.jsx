import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <div className="hero-copy">
          <span className="section-tag">Contact</span>
          <h1 className="section-title">Let’s make something great together.</h1>
          <p className="section-copy">
            Reach out for collaborations, commissions, or creative partnerships. I’m available to help
            with website builds, photo projects, and visual storytelling.
          </p>
        </div>
      </section>

      <section className="section container contact-grid">
        <div className="contact-card contact-info">
          <h2>Contact details</h2>
          <div className="contact-line">
            <MapPin size={18} />
            <span>Remote / Global</span>
          </div>
          <div className="contact-line">
            <Mail size={18} />
            <span>manayehtenaw@gmail.com</span>
          </div>
          <div className="contact-line">
            <Phone size={18} />
            <span>0924392994</span>
          </div>
        </div>

        <form className="contact-card contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell me about your project" />
          </label>
          <button type="submit" className="button button-primary submit-button">
            Send message <Send size={18} />
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
