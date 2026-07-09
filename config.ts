export const SITE_NAME = "Universe Boosts";

export const LINKS = {
  DISCORD: "https://discord.gg/universeboosts",
  TELEGRAM: "",
  TWITTER: "https://x.com",
  TRUSTPILOT: "",
};

export const NOTIFICATION = {
  showNotification: true,
  notificationText: "Shop today.",
  notificationLink: LINKS.DISCORD,
};

export const LandingPageLinks = [
  {
    name: "Products",
    link: "/#products",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "FAQ",
    link: "/#faq",
  },
  {
    name: "Terms of Service",
    link: "/terms",
  },
  {
    name: "Privacy Policy",
    link: "/privacy",
  },
];

// Product Categories - Add your product keywords below to group them
export const PRODUCT_CATEGORIES = [
  {
    name: "All",
    keywords: [], // Empty means show all products
    description: "All Products"
  },
  {
    name: "Server Boosts",
    keywords: ["boost", "server boost", "boosting"],
    description: "Discord Server Boosters"
  },
  {
    name: "Tokens",
    keywords: ["token", "discord token", "tokens"],
    description: "Discord Tokens"
  },
];

// Map specific product titles to categories (overrides keyword matching)
export const PRODUCT_CATEGORY_MAPPING: { [productTitle: string]: string } = {
  // Example: "Discord Server Boost": "Server Boosts",
  // Add your products here to manually assign them to categories
};
