import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.beraborrowex.metabest.tech/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "Community",
        href: "https://docs.beraborrowex.metabest.tech/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.beraborrowex.metabest.tech/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.beraborrowex.metabest.tech/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.beraborrowex.metabest.tech/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.beraborrowex.metabest.tech/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.beraborrowex.metabest.tech",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.beraborrowex.metabest.tech/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.beraborrowex.metabest.tech/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/beraborrow",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/beraborrow",
      },
      {
        label: "中文",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Italiano",
        href: "https://t.me/beraborrow",
      },
      {
        label: "русский",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Türkiye",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Português",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Español",
        href: "https://t.me/beraborrow",
      },
      {
        label: "日本語",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Français",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Deutsch",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Filipino",
        href: "https://t.me/beraborrow",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/beraborrow",
      },
      {
        label: "Announcements",
        href: "https://t.me/beraborrow",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/beraborrow",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/beraborrow",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/Beraborrowofficial/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/invite/beraborrowofficial",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/beraborrow",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
