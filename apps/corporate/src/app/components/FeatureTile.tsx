import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface FeatureTileProps {
  icon?: LucideIcon;
  title: string;
  description?: ReactNode;
  className?: string;
}

export function FeatureTile({ icon: Icon, title, description, className = "" }: FeatureTileProps) {
  return (
    <div className={`feature-tile p-6 sm:p-7 ${className}`}>
      {Icon ? (
        <span className="icon-chip mb-5" aria-hidden>
          <Icon size={22} />
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {description ? <p className="mt-2.5 text-sm leading-7 text-white/60">{description}</p> : null}
    </div>
  );
}
