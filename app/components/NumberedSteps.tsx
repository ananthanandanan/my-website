import type { ReactNode } from "react";

export interface NumberedStepItem {
  title: ReactNode;
  detail?: ReactNode;
}

export function NumberedSteps({ items }: { items: NumberedStepItem[] }) {
  return (
    <div className="numbered-steps my-8">
      {items.map((item, index) => {
        const stepLabel = String(index + 1).padStart(2, "0");
        const isLast = index === items.length - 1;

        return (
          <div
            key={`step-${stepLabel}`}
            className={`numbered-steps__row flex gap-5 py-3.5 ${isLast ? "" : "border-border-soft border-b"}`}
          >
            <div className="numbered-steps__index w-6 shrink-0 pt-0.5">{stepLabel}</div>
            <div className="flex-1">
              <div className="numbered-steps__title">{item.title}</div>
              {item.detail ? <div className="numbered-steps__detail mt-1.5">{item.detail}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
