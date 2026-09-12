import { SUPPORT_EMAIL } from "../config/constants";

const TOC = [
  ["what-we-do", "1. What We Do"],
  ["who-we-are", "2. Who We Are"],
  ["contact", "3. Contact"],
] as const;

export default function About() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">About</span>
        <h1>About Flow AI Studio</h1>
        <p className="updated">Last updated: September 12, 2026</p>

        <div className="legal-body">
          <nav className="legal-toc" aria-label="About sections">
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="legal-content">
            <section id="what-we-do">
              <h2>1. What We Do</h2>
              <p>
                Flow AI Studio is a Chrome extension that helps people batch-generate images and
                videos with Google Flow. It provides a Prompt Studio for writing and queuing
                generation jobs, automatic downloading and organizing of generated files, and a
                Prompt Library for reusing prompts across projects. It is an independent
                third-party tool and is not affiliated with, endorsed by, or operated by Google.
              </p>
            </section>

            <section id="who-we-are">
              <h2>2. Who We Are</h2>
              <p>
                Flow AI Studio is built and maintained by an individual developer based in India,
                as an independent software product. It is sold directly to users through the
                Chrome Web Store and this website — there is no separate company behind it.
              </p>
            </section>

            <section id="contact">
              <h2>3. Contact</h2>
              <p>
                Questions about Flow AI Studio can be sent to{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
