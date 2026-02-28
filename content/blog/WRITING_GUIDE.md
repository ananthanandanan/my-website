# Blog Writing Guide

Use this guide when writing or updating `.mdx` posts in `content/blog/**`.

## General formatting

- Leave one blank line before and after headings, lists, blockquotes, and code fences.
- Keep one list type per list (`-` bullets or `1.` ordered steps).
- Keep prose paragraphs separate from structured lists.

## Definition list format (custom styled)

Use this format only when you want the custom Definition List component:

```mdx
- `KEY`: Description text
```

Rules:

- `KEY` must be uppercase command style (`FROM`, `WORKDIR`, `ENTRYPOINT`).
- The item must start with the key code token.
- A `:` delimiter must appear immediately after the key.
- Keep every item in that list in this same pattern.
- Put explanatory intro bullets in normal prose or a separate normal list.

## Normal bullet lists

Use normal bullets for regular content that should not render as a definition list:

```mdx
- Here is an example of a service that reads variables from a `.env` file.
```

Avoid starting normal bullets with `` `KEY`: ``.

## Numbered steps format (custom styled)

Use ordered lists for procedural content:

```mdx
1. Build the Docker image.
2. Run the container.
```

Optional extra detail can continue on the next indented line in the same item.

## Code blocks

- Always use fenced code blocks with a language (`bash`, `yaml`, `dockerfile`, etc.).
- Use inline code for short tokens only (`NODE_ENV`, `.env`, `docker-compose up`).
