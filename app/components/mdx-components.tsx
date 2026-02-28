import {
  Children,
  Fragment,
  isValidElement,
  type ComponentPropsWithoutRef,
  type JSX,
  type ReactElement,
  type ReactNode,
} from "react";
import { ProseList } from "@/components/ProseList";
import { TaskList } from "@/components/TaskList";
import { CodeBlock } from "./CodeBlock";
import { DefinitionList, type DefinitionItem } from "./DefinitionList";
import { NumberedSteps, type NumberedStepItem } from "./NumberedSteps";

type LiElement = ReactElement<ComponentPropsWithoutRef<"li">, "li">;
type PElement = ReactElement<ComponentPropsWithoutRef<"p">, "p">;

function isWhitespaceText(node: ReactNode) {
  return typeof node === "string" && node.trim().length === 0;
}

function isElementType(node: ReactNode, type: keyof JSX.IntrinsicElements): boolean {
  return isValidElement(node) && typeof node.type === "string" && node.type === type;
}

function isLiElement(node: ReactNode): node is LiElement {
  return isElementType(node, "li");
}

function isParagraphElement(node: ReactNode): node is PElement {
  return isElementType(node, "p");
}

function splitNodesAtFirstBreak(nodes: ReactNode[]) {
  const before: ReactNode[] = [];
  const after: ReactNode[] = [];
  let hasBreak = false;

  for (const node of nodes) {
    if (!hasBreak && isElementType(node, "br")) {
      hasBreak = true;
      continue;
    }

    if (hasBreak) {
      after.push(node);
    } else {
      before.push(node);
    }
  }

  return { before, after: after.length > 0 ? after : null };
}

function stripLeadingDefinitionDelimiter(nodes: ReactNode[]): { nodes: ReactNode[]; matched: boolean } {
  const next = [...nodes];

  for (let index = 0; index < next.length; index += 1) {
    const current = next[index];

    if (isWhitespaceText(current)) {
      continue;
    }

    if (typeof current === "string") {
      const replaced = current.replace(/^\s*:\s*/, "");
      if (replaced !== current) {
        if (replaced.length === 0) {
          next.splice(index, 1);
        } else {
          next[index] = replaced;
        }
        return { nodes: next, matched: true };
      }

      if (current.trim() === ":") {
        next.splice(index, 1);
        return { nodes: next, matched: true };
      }

      return { nodes: next, matched: false };
    }

    return { nodes: next, matched: false };
  }

  return { nodes: next, matched: false };
}

function collectText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (!isValidElement(node)) {
    return "";
  }

  const element = node as ReactElement<{ children?: ReactNode }>;

  return Children.toArray(element.props.children)
    .map((child) => collectText(child))
    .join("");
}

function findCodeElement(node: ReactNode): ReactElement<ComponentPropsWithoutRef<"code">, "code"> | null {
  if (isElementType(node, "code")) {
    return node as ReactElement<ComponentPropsWithoutRef<"code">, "code">;
  }

  if (!isValidElement(node)) {
    return null;
  }

  const element = node as ReactElement<{ children?: ReactNode }>;
  const children = Children.toArray(element.props.children);

  for (const child of children) {
    const found = findCodeElement(child);
    if (found) {
      return found;
    }
  }

  return null;
}

function parseDefinitionItem(node: LiElement): DefinitionItem | null {
  const children = Children.toArray(node.props.children).filter((child) => !isWhitespaceText(child));
  if (children.length === 0) {
    return null;
  }

  const allInline = children.flatMap((child) => {
    if (isParagraphElement(child)) {
      return Children.toArray(child.props.children).filter((part) => !isWhitespaceText(part));
    }

    return [child];
  });

  const keywordIndex = allInline.findIndex((part) => findCodeElement(part) !== null);
  if (keywordIndex !== 0) {
    return null;
  }

  const keywordElement = findCodeElement(allInline[keywordIndex]);
  if (!keywordElement) {
    return null;
  }

  const keyword = collectText(keywordElement.props.children).trim();

  if (!keyword || !/^[A-Z][A-Z0-9_-]*$/.test(keyword)) {
    return null;
  }

  const trailing = allInline.slice(keywordIndex + 1);
  const stripped = stripLeadingDefinitionDelimiter(trailing);
  if (!stripped.matched) {
    return null;
  }

  const hasDescription = stripped.nodes.some((part) => collectText(part).trim().length > 0);
  if (!hasDescription) {
    return null;
  }

  return {
    keyword,
    description: <>{stripped.nodes}</>,
  };
}

function parseNumberedStep(node: LiElement): NumberedStepItem | null {
  const children = Children.toArray(node.props.children).filter((child) => !isWhitespaceText(child));
  if (children.length === 0) {
    return null;
  }

  const allParagraphs = children.every((child) => isParagraphElement(child));

  if (allParagraphs) {
    const paragraphs = children as PElement[];
    const firstParagraphChildren = Children.toArray(paragraphs[0].props.children).filter(
      (child) => !isWhitespaceText(child),
    );
    const split = splitNodesAtFirstBreak(firstParagraphChildren);
    const detailBlocks: ReactNode[] = [];

    if (split.after) {
      detailBlocks.push(<Fragment key="line-break-detail">{split.after}</Fragment>);
    }

    paragraphs.slice(1).forEach((paragraph, index) => {
      detailBlocks.push(<Fragment key={`detail-${index}`}>{paragraph.props.children}</Fragment>);
    });

    return {
      title: <>{split.before}</>,
      detail: detailBlocks.length > 0 ? <>{detailBlocks}</> : undefined,
    };
  }

  const split = splitNodesAtFirstBreak(children);
  if (split.after) {
    return {
      title: <>{split.before}</>,
      detail: <>{split.after}</>,
    };
  }

  return {
    title: <>{children}</>,
  };
}

function MdxUl(props: ComponentPropsWithoutRef<"ul">) {
  const items = Children.toArray(props.children).filter((child) => !isWhitespaceText(child));
  if (items.length === 0) {
    return <ProseList {...props} />;
  }

  if (!items.every((item) => isLiElement(item))) {
    return <ProseList {...props} />;
  }

  const hasTaskItems = items.some(
    (item) =>
      isLiElement(item) &&
      Children.toArray(item.props.children).some(
        (child) =>
          isValidElement(child) &&
          (child as ReactElement<{ type?: string }>).props.type === "checkbox",
      ),
  );
  if (hasTaskItems) {
    return <TaskList {...props} />;
  }

  const parsedItems = items.map((item) => parseDefinitionItem(item));
  if (parsedItems.some((item) => item === null)) {
    return <ProseList {...props} />;
  }

  return <DefinitionList items={parsedItems as DefinitionItem[]} />;
}

function MdxOl(props: ComponentPropsWithoutRef<"ol">) {
  const items = Children.toArray(props.children).filter((child) => !isWhitespaceText(child));
  if (!items.every((item) => isLiElement(item))) {
    return <ol {...props} />;
  }

  const parsedItems = items
    .map((item) => parseNumberedStep(item))
    .filter((item): item is NumberedStepItem => item !== null);

  if (parsedItems.length === 0) {
    return <ol {...props} />;
  }

  return <NumberedSteps items={parsedItems} />;
}

function MdxPre(props: ComponentPropsWithoutRef<"pre">) {
  return <CodeBlock {...props} />;
}

export const mdxComponents = {
  ul: MdxUl,
  ol: MdxOl,
  pre: MdxPre,
};
