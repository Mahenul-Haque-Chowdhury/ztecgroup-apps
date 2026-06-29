import type { ReactNode } from "react";

interface Step {
  title: string;
  description?: ReactNode;
}

interface StepperProps {
  steps: Step[];
  className?: string;
}

export function Stepper({ steps, className = "" }: StepperProps) {
  return (
    <ol className={`space-y-3 ${className}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="feature-tile flex gap-5 p-6 sm:p-7">
          <span className="font-display text-2xl font-bold tabular-nums text-white/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white sm:text-lg">{step.title}</h3>
            {step.description ? <p className="mt-1.5 text-sm leading-7 text-white/60">{step.description}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
