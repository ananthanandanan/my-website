import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: false,
  defaultLang: "bash",
};

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
      [rehypePrettyCode, rehypePrettyCodeOptions],
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
