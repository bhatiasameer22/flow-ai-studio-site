type Props = {
  src: string;
  alt: string;
  url?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export default function BrowserFrame({
  src,
  alt,
  url = "labs.google/fx/tools/flow",
  caption,
  className,
  priority = false,
}: Props) {
  return (
    <figure className={`browser-frame ${className ?? ""}`}>
      <div className="browser-frame__bar">
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__url">{url}</span>
      </div>
      <div className="browser-frame__body">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {caption && <figcaption className="browser-frame__caption">{caption}</figcaption>}
    </figure>
  );
}
