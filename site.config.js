const CONFIG = {
  // profile setting (required)
  profile: {
    name: "INSEONG KIM",
    image: "/notion-avatar-1689097908459.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Devops Engineer 준비생",
    bio: "I develop data ETL and ML cycle",
    email: "kixx97xx@gmail.com",
    linkedin: "merlin_kim",
    github: "https://github.com/Merlinkim",
    instagram: "",
  },
  projects: [
    {
      name: `coin`,
      href: "https://github.com/Merlinkim/coin_project",
    },
  ],
  // blog setting (required)
  blog: {
    title: "magician-merlin",
    description: "welcome to magic world!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion","airflow"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }