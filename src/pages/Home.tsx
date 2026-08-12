import { useState } from "react";
import BrowserFrame from "../components/BrowserFrame";
import WorkflowRibbon from "../components/WorkflowRibbon";
import AddToChromeButton from "../components/AddToChromeButton";

const FEATURES = [
  {
    title: "Prompt Studio",
    desc: "Create image and video prompts from one focused workspace.",
  },
  {
    title: "Generation Queue",
    desc: "Queue multiple generation jobs and manage their progress.",
  },
  {
    title: "Custom Downloads",
    desc: "Choose where generated images and videos are saved.",
  },
  {
    title: "Prompt Library",
    desc: "Save, search and reuse your prompts.",
  },
  {
    title: "Import & Export",
    desc: "Export and import prompt configurations.",
  },
  {
    title: "Dark & Light Themes",
    desc: "Use the workspace appearance you prefer.",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Create",
    desc: "Write or paste your image and video prompts.",
  },
  {
    n: "02",
    title: "Queue",
    desc: "Add multiple prompts to the generation queue.",
  },
  {
    n: "03",
    title: "Generate",
    desc: "Start generation and keep Google Flow open while generation runs.",
  },
  {
    n: "04",
    title: "Organize",
    desc: "Automatically organize generated files into the folders you choose.",
  },
];

const SCREENSHOTS = [
  {
    src: "/screenshots/create-prompt.png",
    label: "01 — Create",
    caption: "Write image and video prompts in a focused workspace.",
  },
  {
    src: "/screenshots/queue-empty.png",
    label: "02 — Queue",
    caption: "Track generation jobs from a dedicated queue panel.",
  },
  {
    src: "/screenshots/settings-appearance-generation.png",
    label: "03 — Settings",
    caption: "Control generation pacing, quality defaults, and appearance.",
  },
];

const FAQS = [
  {
    q: "What is Flow AI Studio?",
    a: "Flow AI Studio is a Chrome extension that gives you a focused workspace for writing prompts, queuing generation jobs, and organizing the images and videos you create with Google Flow.",
  },
  {
    q: "Does Flow AI Studio work with Google Flow?",
    a: "Yes. Flow AI Studio is designed to work alongside Google Flow in your browser. You keep the Google Flow tab open while Flow AI Studio helps you manage prompts, queueing, and downloads.",
  },
  {
    q: "Is Flow AI Studio made by Google?",
    a: "No. Flow AI Studio is an independent third-party Chrome extension. It is not made by, affiliated with, or endorsed by Google.",
  },
  {
    q: "Do I need Google Flow?",
    a: "Yes. Flow AI Studio is built to work with Google Flow, so you'll need access to Google Flow to generate images and videos.",
  },
  {
    q: "Where are my generated files saved?",
    a: "Generated images and videos are saved to the download location you choose on your own device, using your browser's downloads system.",
  },
  {
    q: "Does Flow AI Studio store my generated images or videos?",
    a: "Flow AI Studio's generation and download flow runs in your browser. For full detail on how information is processed, see our Privacy Policy.",
  },
  {
    q: "Do I need an account?",
    a: "Flow AI Studio itself does not require you to create a separate account. You'll still need your own Google account to use Google Flow.",
  },
  {
    q: "Is Flow AI Studio free?",
    a: "V1 launch availability and pricing will be announced on this website.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <DownloadOrganization />
      <QueueShowcase />
      <ScreenshotShowcase />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="glow glow-green" style={{ width: 480, height: 480, top: -120, left: "8%" }} />
      <div className="glow glow-yellow" style={{ width: 420, height: 420, top: 40, right: "4%" }} />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Flow AI Studio · v0.2.0</span>
          <h1>Create. Generate. Organize.</h1>
          <p className="hero__sub">
            A focused workspace for managing image and video generation workflows with Google Flow.
          </p>
          <p className="hero__body">
            Create prompts, queue multiple generations, monitor your workflow, and automatically
            organize generated images and videos into the folders you choose.
          </p>

          <div className="hero__ribbon">
            <WorkflowRibbon activeIndex={4} />
          </div>

          <div className="hero__cta">
            <AddToChromeButton className="btn btn-primary" />
            <a className="btn btn-secondary" href="#how-it-works">
              See How It Works
            </a>
          </div>
          <p className="hero__disclaimer">
            Independent third-party Chrome extension. Not affiliated with or endorsed by Google.
          </p>
        </div>

        <div className="hero__visual">
          <BrowserFrame
            src="/screenshots/create-prompt.png"
            alt="Flow AI Studio Create screen showing a prompt for two image generation jobs"
            url="labs.google/fx/tools/flow"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section problem">
      <div className="container">
        <div className="section-head" style={{ margin: "0 auto 64px", textAlign: "center", maxWidth: 560 }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            The problem
          </span>
          <h2>Stop managing every generation manually.</h2>
        </div>

        <div className="problem__compare">
          <div className="problem__col">
            <span className="problem__col-label">Without Flow AI Studio</span>
            <ol className="problem__steps">
              <li>Write prompt</li>
              <li>Open Flow</li>
              <li>Generate</li>
              <li>Find the file</li>
              <li>Rename</li>
              <li>Move the file</li>
              <li>Repeat</li>
            </ol>
          </div>

          <div className="problem__col problem__col--accent">
            <span className="problem__col-label problem__col-label--accent">With Flow AI Studio</span>
            <ol className="problem__steps problem__steps--accent">
              <li>Create</li>
              <li>Queue</li>
              <li>Generate</li>
              <li>Download</li>
              <li>Organize</li>
            </ol>
          </div>
        </div>

        <p className="problem__tagline">Your creative workflow, without the busywork.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Four steps from idea to organized output.</h2>
        </div>

        <div className="steps-grid">
          {HOW_IT_WORKS.map((s) => (
            <div className="card steps-grid__card" key={s.n}>
              <span className="steps-grid__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything the V1 workspace includes.</h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="card features-grid__card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadOrganization() {
  return (
    <section className="section download-org">
      <div className="glow glow-green" style={{ width: 400, height: 400, bottom: -100, left: "-6%" }} />
      <div className="container download-org__inner">
        <div className="download-org__copy">
          <span className="eyebrow">Downloads</span>
          <h2>Your files. Your folders. Automatically organized.</h2>
          <p>
            Choose your download location and keep generated images and videos organized without
            manually moving files after every generation.
          </p>

          <div className="folder-tree card">
            <div className="folder-tree__row folder-tree__row--dir">
              <FolderIcon /> Downloads/
            </div>
            <div className="folder-tree__row folder-tree__row--dir" style={{ paddingLeft: 18 }}>
              <FolderIcon /> finaltesting/
            </div>
            <div className="folder-tree__row folder-tree__row--dir" style={{ paddingLeft: 36, marginTop: 4 }}>
              <FolderIcon /> Images/
            </div>
            <div className="folder-tree__row" style={{ paddingLeft: 54 }}>image-01.jpeg</div>
            <div className="folder-tree__row" style={{ paddingLeft: 54 }}>image-02.jpeg</div>
            <div className="folder-tree__row" style={{ paddingLeft: 54 }}>image-03.jpeg</div>
            <div className="folder-tree__row" style={{ paddingLeft: 54 }}>image-04.jpeg</div>
            <div className="folder-tree__row folder-tree__row--dir" style={{ paddingLeft: 36, marginTop: 8 }}>
              <FolderIcon /> Videos/
            </div>
            <div className="folder-tree__row" style={{ paddingLeft: 54 }}>video-01.mp4</div>
          </div>
          <p className="folder-tree__note">
            Example folder layout — your download location and folder names are yours to choose.
          </p>
        </div>

        <div className="download-org__visual">
          <BrowserFrame
            src="/screenshots/create-settings-top.png"
            alt="Flow AI Studio creative settings showing the download location set to Flow AI Studio slash Images inside the Chrome Downloads folder"
            url="labs.google/fx/tools/flow"
            caption="Actual download location control from the Create screen."
          />
        </div>
      </div>
    </section>
  );
}

function FolderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 3.5C1.5 2.67 2.17 2 3 2h3.17c.4 0 .78.16 1.06.44l.83.83c.28.28.66.44 1.06.44H13c.83 0 1.5.67 1.5 1.5v6.29c0 .83-.67 1.5-1.5 1.5H3c-.83 0-1.5-.67-1.5-1.5V3.5z"
        stroke="#9FE066"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function QueueShowcase() {
  return (
    <section className="section queue-showcase">
      <div className="container queue-showcase__inner">
        <div className="queue-showcase__visual">
          <BrowserFrame
            src="/screenshots/queue-empty.png"
            alt="Flow AI Studio Queue tab showing an empty state with a Create Something button"
            url="labs.google/fx/tools/flow"
          />
        </div>
        <div className="queue-showcase__copy">
          <span className="eyebrow">Queue</span>
          <h2>Queue your creative work.</h2>
          <p>
            Organize multiple generation jobs and monitor their progress from one workspace.
          </p>
        </div>
      </div>
    </section>
  );
}

function ScreenshotShowcase() {
  return (
    <section className="section" id="screenshots">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Product</span>
          <h2>A closer look at the workspace.</h2>
        </div>

        <div className="showcase-grid">
          {SCREENSHOTS.map((s) => (
            <figure className="showcase-grid__item" key={s.src}>
              <BrowserFrame src={s.src} alt={s.label} />
              <figcaption>
                <span className="showcase-grid__label">{s.label}</span>
                <span className="showcase-grid__caption">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="section social-proof">
      <div className="container">
        <p className="social-proof__text">Built for creators who want a simpler generation workflow.</p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item card ${open ? "faq-item--open" : ""}`}>
      <button className="faq-item__q" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {q}
        <span className="faq-item__icon">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="glow glow-yellow" style={{ width: 500, height: 500, top: -160, left: "50%", transform: "translateX(-50%)" }} />
      <div className="container final-cta__inner">
        <h2>Ready to simplify your creative workflow?</h2>
        <p>
          Create prompts.
          <br />
          Queue your work.
          <br />
          Generate with Flow.
          <br />
          Keep your files organized.
        </p>
        <AddToChromeButton className="btn btn-primary">Add Flow AI Studio to Chrome</AddToChromeButton>
        <p className="final-cta__disclaimer">
          Flow AI Studio is an independent third-party Chrome extension and is not affiliated with or
          endorsed by Google.
        </p>
      </div>
    </section>
  );
}
