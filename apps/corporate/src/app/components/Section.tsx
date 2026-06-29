import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

interface SectionProps {
  children?: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  width?: "narrow" | "default" | "wide";
  headingClassName?: string;
  className?: string;
  id?: string;
}

const widths: Record<NonNullable<SectionProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-[1240px]",
  wide: "max-w-[1360px]",
};

export function Section({
  children,
  eyebrow,
  title,
  intro,
  align = "left",
  width = "default",
  headingClassName = "",
  className = "",
  id,
}: SectionProps) {
  const hasHeading = Boolean(eyebrow || title || intro);

  return (
    <section id={id} className={`relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-36 ${className}`}>
      <div className={`mx-auto ${widths[width]}`}>
        {hasHeading ? (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            align={align}
            className={`${children ? "mb-12 sm:mb-16" : ""} ${headingClassName}`}
          />
        ) : null}
        {children}
      </div>
    </section>
  );
}
