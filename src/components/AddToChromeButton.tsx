import { useState } from "react";
import { CHROME_STORE_URL, CHROME_STORE_CONFIGURED } from "../config/constants";

type Props = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

/**
 * Renders as a real link to the Chrome Web Store once CHROME_STORE_URL is
 * configured. Until then, it renders as a "launching soon" control that
 * never navigates anywhere — so visitors are never sent to a broken or
 * placeholder URL.
 */
export default function AddToChromeButton({ className = "", children, style }: Props) {
  const [notice, setNotice] = useState(false);

  if (CHROME_STORE_CONFIGURED) {
    return (
      <a
        className={className}
        href={CHROME_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {children ?? "Add to Chrome"}
      </a>
    );
  }

  return (
    <span className="add-to-chrome-pending">
      <button
        type="button"
        className={className}
        aria-describedby={notice ? "add-to-chrome-notice" : undefined}
        onClick={() => setNotice(true)}
        style={style}
      >
        {children ?? "Add to Chrome"}
      </button>
      {notice && (
        <span id="add-to-chrome-notice" role="status" className="add-to-chrome-notice">
          Launching soon on the Chrome Web Store.
        </span>
      )}
    </span>
  );
}
