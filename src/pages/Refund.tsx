import { SUPPORT_EMAIL } from "../config/constants";

const TOC = [
  ["free-plan", "1. Free Plan"],
  ["paid-plan", "2. Paid Plan Billing"],
  ["cancellation", "3. Cancellation"],
  ["refunds", "4. Refunds"],
  ["failed-payments", "5. Failed / Disputed Payments"],
  ["contact", "6. Contact"],
] as const;

export default function Refund() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Refund &amp; Cancellation Policy</h1>
        <p className="updated">Last updated: September 12, 2026</p>

        <div className="legal-body">
          <nav className="legal-toc" aria-label="Refund policy sections">
            {TOC.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="legal-content">
            <section id="free-plan">
              <h2>1. Free Plan</h2>
              <p>
                Flow AI Studio's Free plan does not require payment and has no billing to cancel
                or refund.
              </p>
            </section>

            <section id="paid-plan">
              <h2>2. Paid Plan Billing</h2>
              <p>
                The Max plan is billed monthly in advance, in Indian Rupees (₹), through our
                payment processor. Your subscription renews automatically each month until you
                cancel.
              </p>
            </section>

            <section id="cancellation">
              <h2>3. Cancellation</h2>
              <p>
                You can cancel your Max plan subscription at any time from Settings within the
                extension, or by contacting us directly. Cancelling stops future renewals — your
                Max plan access continues until the end of the billing period you've already paid
                for, and your account then reverts to the Free plan.
              </p>
            </section>

            <section id="refunds">
              <h2>4. Refunds</h2>
              <p>
                Because the Max plan is billed monthly and can be cancelled at any time to prevent
                future charges, payments already made for a billing period are generally
                non-refundable, including for partially used months.
              </p>
              <p>
                If you were charged in error — for example, a duplicate charge, or a charge after
                you had already cancelled — contact us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will review and
                correct it.
              </p>
            </section>

            <section id="failed-payments">
              <h2>5. Failed / Disputed Payments</h2>
              <p>
                If a renewal payment fails, your account may be moved back to the Free plan until
                payment succeeds. If you believe a charge was unauthorized, please contact us
                before raising a dispute with your bank or payment provider so we can resolve it
                directly.
              </p>
            </section>

            <section id="contact">
              <h2>6. Contact</h2>
              <p>
                Billing questions can be sent to{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
