import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!username.trim() || !email.trim() || !password) {
      setMessage("Please complete all fields before logging in.");
      return;
    }
    setMessage(`Welcome back, ${username}!`);
  }

  return (
    <main className="page-shell login-page">
      <section className="page-hero">
        <div className="hero-copy">
          <span className="section-tag">Login</span>
          <h1 className="section-title">Sign in to your account</h1>
          <p className="section-copy">
            Enter your username, email, and password to access your personal web page.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="login-panel">
          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            <button type="submit" className="button button-primary">
              Sign In
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
