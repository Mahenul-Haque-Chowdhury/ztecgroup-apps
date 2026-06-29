import type { ReactNode } from "react";

interface FeatureGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

const cols: Record<NonNullable<FeatureGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ children, columns = 3, className = "" }: FeatureGridProps) {
  return <div className={`grid grid-cols-1 gap-4 sm:gap-5 ${cols[columns]} ${className}`}>{children}</div>;
}
