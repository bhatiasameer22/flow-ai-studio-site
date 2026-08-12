import { SUPPORT_EMAIL } from "../config/constants";

const TOC = [
  ["introduction", "1. Introduction"],
  ["use", "2. Use of the Extension"],
  ["third-party", "3. Google Flow / Third-Party Services"],
  ["ip", "4. Intellectual Property"],
  ["availability", "5. Availability"],
  ["liability", "6. Limitation of Liability"],
  ["changes", "7. Changes"],
  ["contact", "8. Contact"],
] as const;

export default function Terms() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Terms of Use</h1>
        <p className="updated">Last updated: August 12, 2026</p>

        <div className="legal-body">
          <nav className="legal-toc" aria-label="Terms sections">
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="legal-content">
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
                These Terms of Use govern your use of Flow AI Studio, an independent third-party
                Chrome extension. By installing or using Flow AI Studio, you agree to these terms.
                Flow AI Studio is not affiliated with, endorsed by, or operated by Google.
              </p>
            </section>

            <section id="use">
              <h2>2. Use of the Extension</h2>
              <p>
                You may use Flow AI Studio to create prompts, queue generation jobs, and organize
                files generated with Google Flow, subject to these terms and to Google's own terms
                for Google Flow. You agree to use the extension only for lawful purposes and not to
                misuse, disrupt, or attempt to circumvent how it or Google Flow operates.
              </p>
            </section>

            <section id="third-party">
              <h2>3. Google Flow / Third-Party Services</h2>
              <p>
                Flow AI Studio is designed to work with Google Flow, a third-party service operated
                by Google. Your use of Google Flow is governed entirely by Google's own terms. Flow
                AI Studio does not control, and is not responsible for, Google Flow's availability,
                output, pricing, or policies.
              </p>
            </section>

            <section id="ip">
              <h2>4. Intellectual Property</h2>
              <p>
                Flow AI Studio's own software, branding, and design belong to its developer. Content
                you generate through Google Flow remains subject to Google's own terms regarding
                ownership and usage rights.
              </p>
            </section>

            <section id="availability">
              <h2>5. Availability</h2>
              <p>
                Flow AI Studio depends on Google Flow being available and accessible in your
                browser. We do not guarantee the availability, speed, or output of Google Flow, and
                the extension's behavior may be affected by changes Google makes to Google Flow at
                any time.
              </p>
            </section>

            <section id="liability">
              <h2>6. Limitation of Liability</h2>
              <p>
                Flow AI Studio is provided “as is,” without warranties of any kind. To the maximum
                extent permitted by law, the developer is not liable for indirect, incidental, or
                consequential damages arising from your use of the extension.
              </p>
            </section>

            <section id="changes">
              <h2>7. Changes</h2>
              <p>
                We may update these Terms as Flow AI Studio changes. Material changes will be
                reflected by updating the “Last updated” date at the top of this page.
              </p>
            </section>

            <section id="contact">
              <h2>8. Contact</h2>
              <p>
                Questions about these Terms can be sent to{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
