import type { ReactNode } from "react";
export function Section({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number: number;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="resume-section">
      <div className="section-label">
        <span className="eyebrow section-number">
          {String(number).padStart(2, "0")}
        </span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
