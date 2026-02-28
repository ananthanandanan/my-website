import type { ReactNode } from "react";

export interface DefinitionItem {
  keyword: string;
  description: ReactNode;
}

export function DefinitionList({ items }: { items: DefinitionItem[] }) {
  return (
    <div className="definition-list my-8">
      {items.map((item, index) => (
        <div
          key={`${item.keyword}-${index}`}
          className="definition-list__row border-border-soft flex gap-5 border-b py-3.5"
        >
          <div className="w-[110px] shrink-0 pt-0.5">
            <span className="definition-list__badge">{item.keyword}</span>
          </div>
          <div className="definition-list__description flex-1">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
