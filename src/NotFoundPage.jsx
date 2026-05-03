import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="page-shell not-found-shell">
      <div className="not-found-card">
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="button button-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
