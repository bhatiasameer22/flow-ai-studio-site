import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { SUPPORT_EMAIL } from "../config/constants";

export default function Footer() {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const year = new Date().getFullYear();

  const sectionLink = (hash: string, label: string) =>
    onHome ? <a href={hash}>{label}</a> : <Link to={`/${hash}`}>{label}</Link>;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="nav__brand" style={{ pointerEvents: "none" }}>
            <Logo size={24} />
            <span>Flow AI Studio</span>
          </div>
          <p>Create. Generate. Organize.</p>
          <p className="footer__disclaimer">
            Independent third-party Chrome extension. Not affiliated with or endorsed by Google.
          </p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__heading">Product</span>
            {sectionLink("#features", "Features")}
            {sectionLink("#how-it-works", "How It Works")}
            {sectionLink("#faq", "FAQ")}
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Legal</span>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Help</span>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
            <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span>© {year} Flow AI Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
