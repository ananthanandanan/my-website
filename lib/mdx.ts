import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const mdxOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        { behavior: "wrap", properties: { className: ["anchor"] } },
      ],
    ],
  },
};

/**
 * Compile MDX source (with optional frontmatter) for use in RSC.
 * Call from the page that needs to render the post.
 */
export async function compilePostMdx(source: string, components = {}) {
  return compileMDX<Record<string, unknown>>({
    source,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: mdxOptions as any,
    components,
  });
}
