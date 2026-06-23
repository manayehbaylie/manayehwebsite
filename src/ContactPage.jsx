import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <div className="hero-copy">
          <span className="section-tag">Contact</span>
          <h1 className="section-title">Let’s connect and learn together.</h1>
          <p className="section-copy">
            I’m a Computer Science student (CS department) building skills in web development,
            algorithms, and software engineering. This site showcases coursework, learning projects,
            and experiments — not professional services. I’m open to internship opportunities,
            collaborative learning, and mentorship conversations. Prefer contact via Telegram
            @manayeh or email manayehtenaw@gmail.com.
          </p>
        </div>
      </section>

      <section className="section container contact-grid">
        <div className="contact-card contact-info">
          <h2>Contact details</h2>
          <div className="contact-line">
            <MapPin size={18} />
            <a
              href="https://t.me/manayeh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Telegram — @manayeh
            </a>
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
            <textarea
              rows="5"
              placeholder="Your current studies, interests, or internship goals"
            />
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
