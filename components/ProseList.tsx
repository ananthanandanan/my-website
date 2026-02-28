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

export function ProseList({ children, className, ...props }: ComponentPropsWithoutRef<"ul">) {
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

        return (
          <div
            key={item.key ?? `prose-list-item-${index}`}
            className="flex items-start gap-3 border-b border-[var(--border-soft)] py-[10px] font-['DM_Mono'] text-[13px] leading-[1.75] text-[var(--text-mid)] last:border-b-0"
          >
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-none bg-[var(--accent)]" />
            <span>{item.props.children}</span>
          </div>
        );
      })}
    </ul>
  );
}
