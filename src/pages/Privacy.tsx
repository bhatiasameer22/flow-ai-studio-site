import { SUPPORT_EMAIL } from "../config/constants";

const TOC = [
  ["introduction", "1. Introduction"],
  ["what-it-does", "2. What Flow AI Studio Does"],
  ["information-processed", "3. Information the Extension Processes"],
  ["account-sign-in", "4. Account & Sign-In"],
  ["how-used", "5. How Information Is Used"],
  ["google-flow", "6. Google Flow Interaction"],
  ["browser-storage", "7. Browser Storage"],
  ["downloaded-files", "8. Downloaded Files"],
  ["tabs-content", "9. Browser Tabs and Page Content"],
  ["data-sharing", "10. Data Sharing"],
  ["third-party", "11. Third-Party Services"],
  ["retention", "12. Data Retention"],
  ["deletion", "13. Data Deletion"],
  ["security", "14. Security"],
  ["children", "15. Children's Privacy"],
  ["changes", "16. Changes to This Privacy Policy"],
  ["contact", "17. Contact"],
] as const;

export default function Privacy() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: September 12, 2026</p>

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
                  <strong>scripting</strong> — runs scripts on Google Flow pages to drive prompt
                  submission, queueing, and progress monitoring.
                </li>
                <li>
                  <strong>identity</strong> — used only if you choose to sign in, to authenticate
                  you with your Google account via Chrome's identity API. See{" "}
                  <a href="#account-sign-in">Account &amp; Sign-In</a> below.
                </li>
              </ul>
              <p>
                Flow AI Studio's host access is limited to <code>https://labs.google/*</code> and{" "}
                <code>https://flow.google.com/*</code>, the domains Google Flow runs on. It is not
                designed to read or modify pages on other websites.
              </p>
            </section>

            <section id="account-sign-in">
              <h2>4. Account &amp; Sign-In</h2>
              <p>
                Signing in is optional. Flow AI Studio's core prompt, queue, and generation
                features work fully without an account. Signing in with Google is only needed to
                use the Free/Max plan feature — tracking your daily prompt count and, if you
                subscribe, unlocking unlimited daily prompts.
              </p>
              <p>
                If you sign in, we receive your Google account's email address and a unique user
                ID from Google Sign-In. We store your plan (Free or Max), your daily prompt count,
                and — only if you subscribe to Max — a Razorpay subscription ID, associated with
                that user ID in our database (Google Firebase/Firestore). This information is used
                solely to enforce the Free plan's daily limit and to determine Max plan access; it
                is not used for advertising and is not shared with third parties beyond the service
                providers described in{" "}
                <a href="#third-party">Third-Party Services</a> below.
              </p>
              <p>
                Your prompts, generated files, and Google Flow page content are never sent to this
                account system — it only ever stores the plan/usage information described above.
                You can sign out at any time from Settings; signing out does not delete your
                account data, which continues to reflect your plan and usage the next time you
                sign in.
              </p>
            </section>

            <section id="how-used">
              <h2>5. How Information Is Used</h2>
              <p>
                Information the extension processes locally — your prompts, queue, settings, and
                generated files — is used only to operate its own features: showing your prompts
                and queue, driving the generation workflow on Google Flow, and saving generated
                files to the folder you select. This local information is never sent to any
                server.
              </p>
              <p>
                Separately, if you sign in, the account information described in{" "}
                <a href="#account-sign-in">Account &amp; Sign-In</a> is sent to and stored by our
                backend (Google Firebase) solely to enforce the Free/Max plan limit. Flow AI Studio
                does not use any information it processes for advertising.
              </p>
            </section>

            <section id="google-flow">
              <h2>6. Google Flow Interaction</h2>
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
              <h2>7. Browser Storage</h2>
              <p>
                Your settings, saved prompts, prompt library, and queue state are stored using
                Chrome's extension storage, inside your own browser profile on your device.
              </p>
            </section>

            <section id="downloaded-files">
              <h2>8. Downloaded Files</h2>
              <p>
                Generated images and videos are saved directly to your device using Chrome's
                downloads system, to the location you choose. Flow AI Studio does not upload or
                store copies of these files on its own servers.
              </p>
            </section>

            <section id="tabs-content">
              <h2>9. Browser Tabs and Page Content</h2>
              <p>
                Flow AI Studio uses the <code>scripting</code> permission to interact with the
                Google Flow page itself, so it can submit prompts, queue jobs, and monitor
                generation progress on your behalf. This interaction is limited to Google Flow
                pages under <code>https://labs.google/*</code> and{" "}
                <code>https://flow.google.com/*</code>.
              </p>
            </section>

            <section id="data-sharing">
              <h2>10. Data Sharing</h2>
              <p>
                Flow AI Studio does not sell your information and does not share it with third
                parties for advertising. The extension is not designed to transmit your prompts,
                your generated files, or Google Flow page content to any external server. The only
                information ever sent to a server is the account/plan information described in{" "}
                <a href="#account-sign-in">Account &amp; Sign-In</a>, and only if you choose to
                sign in.
              </p>
            </section>

            <section id="third-party">
              <h2>11. Third-Party Services</h2>
              <p>
                Flow AI Studio is built to work with Google Flow, a Google product. Your use of
                Google Flow is governed by Google's own terms and privacy policy, which we
                encourage you to review separately.
              </p>
              <p>
                If you sign in, Flow AI Studio uses the following third-party services to provide
                the Free/Max plan feature:
              </p>
              <ul>
                <li>
                  <strong>Google Firebase</strong> (Authentication, Firestore database, and Cloud
                  Functions) — used to sign you in, store your plan and daily usage count, and
                  enforce the Free plan's daily limit.
                </li>
                <li>
                  <strong>Razorpay</strong> — used to process Max plan subscription payments.
                  Payment details (card, UPI, etc.) are entered directly into Razorpay's own
                  checkout and are never seen by or stored on Flow AI Studio's own systems.
                </li>
              </ul>
              <p>
                Each of these providers processes information under its own privacy policy, which
                we encourage you to review separately.
              </p>
            </section>

            <section id="retention">
              <h2>12. Data Retention</h2>
              <p>
                Settings, prompts, and queue state remain in your browser's local storage until you
                clear them, reset the extension's data, or remove the extension from Chrome. If you
                sign in, your account's plan and usage data remains in our database until you
                request its deletion (see <a href="#deletion">Data Deletion</a>).
              </p>
            </section>

            <section id="deletion">
              <h2>13. Data Deletion</h2>
              <p>
                You can clear locally stored extension data at any time from Settings → Data →
                Reset all data, or by removing the extension from Chrome, which deletes its local
                storage. To request deletion of your account's plan/usage data from our database,
                contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            </section>

            <section id="security">
              <h2>14. Security</h2>
              <p>
                Flow AI Studio relies on Chrome's extension security model and Chrome's built-in
                storage and downloads systems to handle locally stored data, and on Google
                Firebase's security infrastructure for account/plan data. No method of storage or
                transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section id="children">
              <h2>15. Children's Privacy</h2>
              <p>
                Flow AI Studio is not directed at children and is not intended for use by anyone
                who does not meet the age requirements of Google Flow under Google's own terms.
              </p>
            </section>

            <section id="changes">
              <h2>16. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy as Flow AI Studio changes. Material changes will
                be reflected by updating the “Last updated” date at the top of this page.
              </p>
            </section>

            <section id="contact">
              <h2>17. Contact</h2>
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
