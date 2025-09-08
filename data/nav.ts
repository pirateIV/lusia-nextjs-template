import { Icons } from "@/components/icons";
import { SiteLink } from "@/types";

export const siteLinks: SiteLink = {
  pages: [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "All Posts",
      url: "/blog",
    },
    {
      text: "Travel",
      url: "/travel",
    },
    {
      text: "Lifestyle",
      url: "/lifestyle",
    },
    {
      text: "Destination",
      url: "/destination",
    },
  ],
  socials: [
    {
      name: "Facebook",
      icon: Icons.Facebook,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: Icons.Twitter,
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: Icons.Instagram,
      url: "https://instagram.com",
    },
    {
      name: "Pinterest",
      icon: Icons.Pinterest,
      url: "https://pinterest.com",
    },
  ],
};
