const STEPS = ["Create", "Queue", "Generate", "Download", "Organize"];

export default function WorkflowRibbon({ activeIndex = -1 }: { activeIndex?: number }) {
  return (
    <div className="ribbon" role="img" aria-label={`Workflow: ${STEPS.join(" → ")}`}>
      <div className="flow-line">
        {STEPS.map((step, i) => (
          <span key={step} style={{ display: "contents" }}>
            <span className={`flow-node ${i <= activeIndex ? "active" : ""}`} />
            {i < STEPS.length - 1 && (
              <span className={`flow-line__seg ${i < activeIndex ? "active" : ""}`} />
            )}
          </span>
        ))}
      </div>
      <div className="ribbon__labels">
        {STEPS.map((step, i) => (
          <span key={step} className={i <= activeIndex ? "active" : ""}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}
