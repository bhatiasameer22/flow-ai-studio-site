// Single source of truth for the Chrome Web Store listing URL.
export const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/flowpilot-%E2%80%94-batch-ai-gene/pdooommbpmbklpeffcafeicakgkpjcmc";

// True once CHROME_STORE_URL has been set to a real listing URL.
// While false, "Add to Chrome" buttons render in a launching-soon state
// instead of linking out to a placeholder / broken URL.
export const CHROME_STORE_CONFIGURED = /^https:\/\//.test(CHROME_STORE_URL);

export const SUPPORT_EMAIL = "bhatiasameer22@gmail.com";

export const PRODUCT_NAME = "Flow AI Studio";
export const PRODUCT_VERSION = "0.4.0";
