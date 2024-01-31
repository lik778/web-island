export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "构建智能体",
      href: "/detail",
    }
  ],
  links: {
    github: "https://github.com/wangfengyuan/frontend-nav",
    docs: "",
  },
}
