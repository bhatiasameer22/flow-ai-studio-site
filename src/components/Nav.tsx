import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import AddToChromeButton from "./AddToChromeButton";

const NAV_LINKS = [
  { label: "Features", hash: "#features" },
  { label: "How It Works", hash: "#how-it-works" },
  { label: "Screenshots", hash: "#screenshots" },
  { label: "FAQ", hash: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Flow AI Studio home">
          <Logo />
          <span>Flow AI Studio</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) =>
            onHome ? (
              <a key={l.label} href={l.hash}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={`/${l.hash}`}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="nav__actions">
          <AddToChromeButton className="btn btn-primary btn-sm" />
        </div>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile" role="dialog" aria-modal="true">
          {NAV_LINKS.map((l) =>
            onHome ? (
              <a key={l.label} href={l.hash} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={`/${l.hash}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            )
          )}
          <Link to="/privacy" onClick={() => setOpen(false)}>
            Privacy Policy
          </Link>
          <Link to="/support" onClick={() => setOpen(false)}>
            Support
          </Link>
          <AddToChromeButton className="btn btn-primary" style={{ marginTop: 8 }} />
        </div>
      )}
    </header>
  );
}
