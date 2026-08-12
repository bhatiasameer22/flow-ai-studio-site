import { SUPPORT_EMAIL } from "../config/constants";

const TOPICS = [
  {
    title: "Installation",
    items: [
      "Add Flow AI Studio from the Chrome Web Store and pin it for quick access.",
      "Open Google Flow at labs.google in a tab — Flow AI Studio works alongside it.",
    ],
  },
  {
    title: "Generation",
    items: [
      "Write one prompt per line in the Prompt Studio — a blank line starts a separate job.",
      "Choose Text to Image or Text to Video, set outputs and aspect ratio, then start generation.",
      "Keep the Google Flow tab open while a job runs.",
    ],
  },
  {
    title: "Google Flow connection",
    items: [
      "Flow AI Studio interacts with Google Flow through your browser tab — it does not replace your Google account or Google Flow itself.",
      "If the extension can't reach Google Flow, make sure a Google Flow tab is open and you're signed in to your Google account.",
    ],
  },
  {
    title: "Downloads",
    items: [
      "Set a download location from Creative settings — generated files are saved there automatically.",
      "Downloads are saved inside your browser's Downloads folder.",
    ],
  },
  {
    title: "Custom folders",
    items: [
      "Use Change next to Download location to pick a different folder for a prompt or session.",
    ],
  },
  {
    title: "Prompt Library",
    items: [
      "Use Save Prompt to add a prompt to your library for later reuse.",
      "Search, edit, duplicate, or delete saved prompts from the library.",
    ],
  },
  {
    title: "Import & Export",
    items: [
      "Export Prompts or Import Prompts to move your saved prompts between browsers or as a backup.",
      "Export backup / Import backup covers a full app backup: settings, library, characters, and queue.",
    ],
  },
  {
    title: "Common issues",
    items: [
      "If generation looks stuck, check that the Google Flow tab is still open and signed in.",
      "If settings don't seem to save, try Reset all data as a last resort — this clears local extension data.",
    ],
  },
];

export default function Support() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Support</span>
        <h1>How can we help?</h1>
        <p className="updated">Browse topics below, or contact us directly.</p>

        <div className="support-grid">
          {TOPICS.map((t) => (
            <div className="card support-card" key={t.title}>
              <h2>{t.title}</h2>
              <ul>
                {t.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card support-contact" id="contact">
          <h2>Contact Support</h2>
          <p>Can't find what you're looking for? Send us a message and we'll get back to you.</p>
          <a className="btn btn-primary" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
