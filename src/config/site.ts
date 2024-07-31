import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Astronomy",
  description:
    "An modern example app built using Astro v4 & shadcn/ui. Inspired by shadcn/taxonomy.",
  url: "https://astro-nomy.vercel.app",
  ogImage: "https://astro-nomy.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/astro-nomy",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "طراحی وب سایت",
    items: [
      { title: "وب سایت فروشگاهی", href: "#" },
      { title: "وب سایت وبلاگی", href: "#" },
      { title: "وب سایت شخصی", href: "#" },
      { title: "وب سایت آموزشی", href: "#" },
      { title: "وب سایت آگهی", href: "#" },
      { title: "وب سایت شرکتی", href: "#" },
    ],
  },
  
];