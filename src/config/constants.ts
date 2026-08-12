// Single source of truth for the Chrome Web Store listing URL.
// Replace this with the real Chrome Web Store URL once the listing is live.
export const CHROME_STORE_URL = "YOUR_CHROME_WEB_STORE_URL";

// True once CHROME_STORE_URL has been set to a real listing URL.
// While false, "Add to Chrome" buttons render in a launching-soon state
// instead of linking out to a placeholder / broken URL.
export const CHROME_STORE_CONFIGURED = /^https:\/\//.test(CHROME_STORE_URL);

export const SUPPORT_EMAIL = "bhatiasameer22@gmail.com";

export const PRODUCT_NAME = "Flow AI Studio";
export const PRODUCT_VERSION = "0.2.0";
