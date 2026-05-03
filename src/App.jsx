import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import ContactPage from "./ContactPage.jsx";
import LoginPage from "./personal web/login.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            Manayeh
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
