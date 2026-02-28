export const siteMetadata = {
  title: "A.N.K — K N Anantha Nandanan",
  author: "K N Anantha Nandanan",
  headerTitle: "A.N.K",
  description:
    "Software engineer focused on scalable backend systems, DevOps, and applied AI. Writing about things I learn and systems I build.",
  language: "en-US",
  siteUrl: "https://ananthanandanan.com",
  siteRepo: "https://github.com/ananthanandanan/my-website",
  locale: "en-US",
  social: [
    { name: "GitHub", href: "https://github.com/ananthanandanan", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/de-blank", icon: "linkedin" },
    { name: "Twitter", href: "https://x.com/Ananthan2k", icon: "twitter" },
    { name: "Email", href: "mailto:ananthanandanan@gmail.com", icon: "email" },
  ],
  analytics: {
    enabled: false,
    provider: undefined as "plausible" | "umami" | "google" | undefined,
    plausibleDataDomain: undefined as string | undefined,
    umamiWebsiteId: undefined as string | undefined,
    googleAnalyticsId: undefined as string | undefined,
  },
  newsletter: undefined as { provider: string; endpoint?: string } | undefined,
  comments: undefined as { provider: "giscus"; repo?: string; repoId?: string; category?: string; categoryId?: string } | undefined,
};

export type SiteMetadata = typeof siteMetadata;
