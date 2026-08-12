import { SUPPORT_EMAIL } from "../config/constants";

const TOC = [
  ["introduction", "1. Introduction"],
  ["what-it-does", "2. What Flow AI Studio Does"],
  ["information-processed", "3. Information the Extension Processes"],
  ["how-used", "4. How Information Is Used"],
  ["google-flow", "5. Google Flow Interaction"],
  ["browser-storage", "6. Browser Storage"],
  ["downloaded-files", "7. Downloaded Files"],
  ["tabs-content", "8. Browser Tabs and Page Content"],
  ["data-sharing", "9. Data Sharing"],
  ["third-party", "10. Third-Party Services"],
  ["retention", "11. Data Retention"],
  ["deletion", "12. Data Deletion"],
  ["security", "13. Security"],
  ["children", "14. Children's Privacy"],
  ["changes", "15. Changes to This Privacy Policy"],
  ["contact", "16. Contact"],
] as const;

export default function Privacy() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: August 12, 2026</p>

        <div className="legal-body">
          <nav className="legal-toc" aria-label="Privacy policy sections">
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
                This Privacy Policy explains how Flow AI Studio (“the extension,” “we,” “us”)
                handles information when you install and use it. Flow AI Studio is an independent
                third-party Chrome extension and is not affiliated with, endorsed by, or operated
                by Google.
              </p>
            </section>

            <section id="what-it-does">
              <h2>2. What Flow AI Studio Does</h2>
              <p>
                Flow AI Studio provides a workspace inside your browser for writing image and
                video generation prompts, queuing generation jobs, monitoring progress, and
                organizing files that Google Flow generates. It is designed to be used alongside
                Google Flow, which runs at <code>https://labs.google</code>.
              </p>
            </section>

            <section id="information-processed">
              <h2>3. Information the Extension Processes</h2>
              <p>
                Flow AI Studio requests the following Chrome permissions, each used for a specific
                part of the workflow:
              </p>
              <ul>
                <li>
                  <strong>storage</strong> — saves your settings, saved prompts, prompt library,
                  and queue state inside your browser.
                </li>
                <li>
                  <strong>sidePanel</strong> — displays the Flow AI Studio workspace in Chrome's
                  side panel.
                </li>
                <li>
                  <strong>downloads</strong> — saves generated images and videos to the download
                  location you choose, using Chrome's downloads system.
                </li>
                <li>
                  <strong>tabs</strong> — identifies the open Google Flow tab so the extension can
                  coordinate the generation workflow with it.
                </li>
                <li>
                  <strong>scripting</strong> — runs scripts on Google Flow pages to drive prompt
                  submission, queueing, and progress monitoring.
                </li>
                <li>
                  <strong>debugger</strong> — supports the advanced page interaction with Google
                  Flow that the generation and queueing workflow relies on.
                </li>
              </ul>
              <p>
                Flow AI Studio's host access is limited to <code>https://labs.google/*</code>, the
                domain Google Flow runs on. It is not designed to read or modify pages on other
                websites.
              </p>
            </section>

            <section id="how-used">
              <h2>4. How Information Is Used</h2>
              <p>
                Information the extension processes is used to operate its own features: showing
                your prompts and queue, driving the generation workflow on Google Flow, and saving
                generated files to the folder you select. Flow AI Studio does not use this
                information for advertising, and does not operate its own backend servers.
              </p>
            </section>

            <section id="google-flow">
              <h2>5. Google Flow Interaction</h2>
              <p>
                Flow AI Studio interacts with Google Flow through your browser, on pages under{" "}
                <code>https://labs.google/*</code>. It does not control Google Flow's own systems,
                and your use of Google Flow remains subject to Google's own terms and privacy
                policy. Flow AI Studio does not bypass Google Flow's usage limits, restrictions, or
                safety systems, and does not guarantee Google Flow's availability or generation
                speed.
              </p>
            </section>

            <section id="browser-storage">
              <h2>6. Browser Storage</h2>
              <p>
                Your settings, saved prompts, prompt library, and queue state are stored using
                Chrome's extension storage, inside your own browser profile on your device.
              </p>
            </section>

            <section id="downloaded-files">
              <h2>7. Downloaded Files</h2>
              <p>
                Generated images and videos are saved directly to your device using Chrome's
                downloads system, to the location you choose. Flow AI Studio does not upload or
                store copies of these files on its own servers.
              </p>
            </section>

            <section id="tabs-content">
              <h2>8. Browser Tabs and Page Content</h2>
              <p>
                Flow AI Studio uses the <code>tabs</code>, <code>scripting</code>, and{" "}
                <code>debugger</code> permissions to identify the Google Flow tab and interact with
                the Google Flow page itself, so it can submit prompts, queue jobs, and monitor
                generation progress on your behalf. This interaction is limited to Google Flow
                pages under <code>https://labs.google/*</code>.
              </p>
            </section>

            <section id="data-sharing">
              <h2>9. Data Sharing</h2>
              <p>
                Flow AI Studio does not sell your information and does not share it with third
                parties for advertising. The extension is not designed to transmit your prompts,
                your generated files, or Google Flow page content to any external server.
              </p>
            </section>

            <section id="third-party">
              <h2>10. Third-Party Services</h2>
              <p>
                Flow AI Studio is built to work with Google Flow, a Google product. Your use of
                Google Flow is governed by Google's own terms and privacy policy, which we
                encourage you to review separately. Flow AI Studio does not integrate any other
                third-party service.
              </p>
            </section>

            <section id="retention">
              <h2>11. Data Retention</h2>
              <p>
                Settings, prompts, and queue state remain in your browser's local storage until you
                clear them, reset the extension's data, or remove the extension from Chrome.
              </p>
            </section>

            <section id="deletion">
              <h2>12. Data Deletion</h2>
              <p>
                You can clear locally stored extension data at any time from Settings → Data →
                Reset all data, or by removing the extension from Chrome, which deletes its local
                storage.
              </p>
            </section>

            <section id="security">
              <h2>13. Security</h2>
              <p>
                Flow AI Studio relies on Chrome's extension security model and Chrome's built-in
                storage and downloads systems to handle your data. No method of storage or
                transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section id="children">
              <h2>14. Children's Privacy</h2>
              <p>
                Flow AI Studio is not directed at children and is not intended for use by anyone
                who does not meet the age requirements of Google Flow under Google's own terms.
              </p>
            </section>

            <section id="changes">
              <h2>15. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy as Flow AI Studio changes. Material changes will
                be reflected by updating the “Last updated” date at the top of this page.
              </p>
            </section>

            <section id="contact">
              <h2>16. Contact</h2>
              <p>
                Questions about this Privacy Policy can be sent to{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
