import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

type Status = "loading" | "ready" | "success" | "dismissed" | "error";

const CHECKOUT_SCRIPT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CHECKOUT_SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Failed to load checkout script")));
      return;
    }
    const script = document.createElement("script");
    script.src = CHECKOUT_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load checkout script"));
    document.body.appendChild(script);
  });
}

/**
 * Bridge page opened by the FlowPilot extension in a new browser tab —
 * Manifest V3's CSP blocks remotely-hosted scripts inside the extension
 * itself, so this ordinary web page is what actually loads Razorpay's
 * Checkout.js and opens the payment modal.
 *
 * Two modes, both driven entirely by which query params are present:
 *  - subscription_id + key_id: a real recurring ₹ Subscription (India).
 *  - order_id + key_id + amount + currency: a one-time $ payment via
 *    PayPal (international) — see functions/src/razorpay.ts in the
 *    flow-ai-studio repo for why this is one-time rather than recurring.
 *
 * This page's own success/failure state is UX only. The user's plan
 * actually changes server-side via Razorpay's webhook straight to the
 * FlowPilot Cloud Function — never through anything that happens here —
 * so a user can't spoof an upgrade by tampering with this page.
 */
export default function Checkout() {
  const [params] = useSearchParams();
  const subscriptionId = params.get("subscription_id");
  const orderId = params.get("order_id");
  const keyId = params.get("key_id");
  const amount = params.get("amount");
  const currency = params.get("currency");
  const [status, setStatus] = useState<Status>("loading");

  const isSubscription = Boolean(subscriptionId && keyId);
  const isOneTimeOrder = Boolean(orderId && keyId && amount && currency);

  useEffect(() => {
    if (!isSubscription && !isOneTimeOrder) {
      setStatus("error");
      return;
    }

    let cancelled = false;

    loadRazorpayScript()
      .then(() => {
        if (cancelled || !window.Razorpay) return;
        setStatus("ready");

        const options: Record<string, unknown> = isSubscription
          ? { key: keyId, subscription_id: subscriptionId }
          : { key: keyId, order_id: orderId, amount, currency };

        const razorpay = new window.Razorpay({
          ...options,
          name: "FlowPilot",
          description: isSubscription
            ? "Max plan — unlimited daily prompts"
            : "Max plan — 30 days of unlimited daily prompts",
          theme: { color: "#7c5cff" },
          handler: () => {
            if (!cancelled) setStatus("success");
          },
          modal: {
            ondismiss: () => {
              if (!cancelled) setStatus("dismissed");
            },
          },
        });
        razorpay.open();
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [isSubscription, isOneTimeOrder, subscriptionId, orderId, keyId, amount, currency]);

  return (
    <section className="legal">
      <div className="container checkout-container">
        <span className="eyebrow">FlowPilot</span>

        {status === "loading" && (
          <>
            <h1>Loading secure checkout…</h1>
            <p className="updated">Hang on a moment.</p>
          </>
        )}

        {status === "ready" && (
          <>
            <h1>Complete your upgrade</h1>
            <p className="updated">Finish payment in the window that just opened.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h1>Payment received 🎉</h1>
            <p className="updated">
              {isOneTimeOrder
                ? "Your Max plan will activate within a few seconds and last 30 days. You can close this tab and go back to FlowPilot."
                : "Your Max plan will activate within a few seconds. You can close this tab and go back to FlowPilot."}
            </p>
          </>
        )}

        {status === "dismissed" && (
          <>
            <h1>Checkout closed</h1>
            <p className="updated">
              You closed the payment window before finishing. No charge was made — go back to
              FlowPilot and click Upgrade to Max to try again.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1>Something went wrong</h1>
            <p className="updated">
              This checkout link looks invalid or expired. Go back to FlowPilot and click
              Upgrade to Max again to get a fresh link.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
