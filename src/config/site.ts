/**
 * Single source of truth for company facts used across the site.
 * Update here and every page, footer, and JSON-LD block picks it up.
 */
export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
}

export const SITE = {
  name: "Unspecified Software Co.",
  shortName: "Unspecified",
  url: "https://unspecified.io",
  tagline: "Software that brings people closer.",
  description:
    "Unspecified is an independent software company founded by Clark and Carrie Sell in Spring Grove, Illinois. We build Troth, a private, encrypted home for your marriage, and we help companies build real communities.",
  email: "hello@unspecified.io",
  location: "Spring Grove, Illinois",
  address: { locality: "Spring Grove", region: "IL", country: "US" },
  founders: [
    { name: "Clark Sell", role: "Founder" },
    { name: "Carrie Sell", role: "Chief Operating Officer" },
  ],
  /** Clark and Carrie's story, used to compute "married N years" at build time. */
  story: { togetherSince: 2000, marriedIn: 2003 },
  products: {
    troth: {
      name: "Troth",
      url: "https://jointroth.co",
      tagline: "A private, encrypted home for your marriage.",
      email: "hello@jointroth.co",
    },
    rehuman: {
      name: "re/Human",
      url: "https://joinrehuman.com",
    },
  },
  /**
   * Where to follow along. Clark and Troth are the active accounts;
   * Unspecified itself mostly lives on GitHub.
   */
  socials: {
    clark: {
      label: "Clark Sell",
      handle: "@theclarksell",
      links: [
        {
          name: "X",
          url: "https://x.com/theclarksell",
          handle: "@TheClarkSell",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/theclarksell/",
          handle: "@theclarksell",
        },
        {
          name: "Threads",
          url: "https://www.threads.net/@theclarksell",
          handle: "@theclarksell",
        },
        {
          name: "TikTok",
          url: "https://www.tiktok.com/@theclarksell",
          handle: "@theclarksell",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@clarksell",
          handle: "@clarksell",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/csell5",
          handle: "csell5",
        },
      ] as SocialLink[],
    },
    troth: {
      label: "Troth",
      handle: "@joinTroth",
      links: [
        { name: "X", url: "https://x.com/joinTroth", handle: "@joinTroth" },
        {
          name: "Instagram",
          url: "https://www.instagram.com/jointroth/",
          handle: "@jointroth",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/jointroth",
          handle: "Troth",
        },
      ] as SocialLink[],
    },
    unspecified: {
      label: "Unspecified",
      handle: "",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/HelloUnspecified",
          handle: "HelloUnspecified",
        },
      ] as SocialLink[],
    },
  },
  /** Optional: https://web3forms.com access key. Leave unset to show email-only contact. */
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined,
} as const;

/** Years married, computed when the site is built. Rebuild after the anniversary to bump it. */
export const YEARS_MARRIED = new Date().getFullYear() - SITE.story.marriedIn;
