import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="brand-footer">Manayeh</p>
          <p className="footer-copy">Creating thoughtful digital spaces and visual stories.</p>
        </div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
