import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, intro, align = "left", className = "" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto max-w-3xl text-center" : "measure"} ${className}`}>
      {eyebrow ? <span className={`eyebrow ${isCenter ? "justify-center" : ""}`}>{eyebrow}</span> : null}
      {title ? <h2 className="display-lg mt-5 text-white">{title}</h2> : null}
      {intro ? (
        <p className={`mt-5 text-base leading-8 text-white/60 sm:text-lg ${isCenter ? "mx-auto" : ""}`}>{intro}</p>
      ) : null}
    </div>
  );
}
