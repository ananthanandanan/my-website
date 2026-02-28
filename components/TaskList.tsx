import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";

type LiElement = ReactElement<ComponentPropsWithoutRef<"li">, "li">;

function isWhitespaceText(node: ReactNode) {
  return typeof node === "string" && node.trim().length === 0;
}

function isLiElement(node: ReactNode): node is LiElement {
  return isValidElement(node) && typeof node.type === "string" && node.type === "li";
}

export function TaskList({ children, className, ...props }: ComponentPropsWithoutRef<"ul">) {
  const items = Children.toArray(children).filter((child) => !isWhitespaceText(child));

  return (
    <ul
      {...props}
      className={[
        "my-5 flex list-none flex-col p-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, index) => {
        if (!isLiElement(item)) {
          return item;
        }

        const contentChildren = Children.toArray(item.props.children).filter(
          (child) => !isValidElement(child) || (child as ReactElement<{ type?: string }>).props.type !== "checkbox",
        );

        return (
          <li
            key={item.key ?? `task-list-item-${index}`}
            className="flex items-center gap-3 border-b border-[var(--border-soft)] py-[11px] font-['DM_Mono'] text-[13px] leading-[1.5] text-[var(--text-mid)] last:border-b-0"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none h-[14px] w-[14px] shrink-0 rounded-[2px] border border-[var(--border)] bg-[var(--surface)]"
            />
            <span>{contentChildren}</span>
          </li>
        );
      })}
    </ul>
  );
}
