import { Link } from "react-router-dom";
import { SUPPORT_EMAIL } from "../config/constants";

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "For trying Flow AI Studio and light, occasional use.",
    features: ["10 prompts per day", "Prompt Studio & queueing", "Auto-download & organize"],
    featured: false,
  },
  {
    name: "Max",
    price: "₹249",
    period: "/ month",
    description: "For running larger batches without a daily cap.",
    features: [
      "Unlimited prompts per day",
      "Everything in Free",
      "Priority support",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section className="legal">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h1>Simple, transparent pricing</h1>
        <p className="updated">Prices shown in INR. Cancel your Max plan anytime.</p>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div
              className={`card pricing-card${plan.featured ? " pricing-card--featured" : ""}`}
              key={plan.name}
            >
              <h2>{plan.name}</h2>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>
              <p className="pricing-desc">{plan.description}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pricing-footnote">
          See our <Link to="/refund-policy">Refund &amp; Cancellation Policy</Link> for billing
          details, or{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>contact us</a> with questions.
        </p>
      </div>
    </section>
  );
}
