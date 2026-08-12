import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "180px 0" }}>
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </span>
        <h1 style={{ marginTop: 14, fontSize: 34 }}>Page not found.</h1>
        <p style={{ marginTop: 12 }}>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 28 }}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
