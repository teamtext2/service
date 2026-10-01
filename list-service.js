/**
 * Spac2 Services Data List
 * Path: /service/list-service.js
 * Easily add, edit, or remove services here.
 */

const SPAC2_SERVICES = [
  {
    id: "spac2-mail-service",
    title: "Spac2 Mail Service",
    img: "email",
    desc: "Lifetime business email solution with zero monthly fees. Send and receive custom branded emails (@yourcompany.com) directly inside your familiar Gmail interface.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Spac2%20Mail%20Service",
    detailUrl: "mail/",
    category: "email",
    badge: "Lifetime — No Monthly Fee",
    price: "One-time payment",
    features: [
      "One-time payment for lifetime access — no monthly renewal fees",
      "Professional custom domain email (e.g. contact@yourcompany.com)",
      "Direct integration with your existing, familiar Gmail interface",
      "Easily create multiple accounts (staff@, contact@, ceo@)",
      "15GB free cloud storage per Gmail account for company archives",
      "Full SPF, DKIM, DMARC security setup for 100% Inbox delivery"
    ]
  },
  {
    id: "web-design",
    title: "Website Design & Development",
    img: "website",
    desc: "Bespoke corporate websites and high-speed PWAs built on global CDN with DDoS defense. Includes free lifetime business email, SEO indexing setup, and 100% source code ownership.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Web%20Development",
    detailUrl: "web/",
    category: "website",
    badge: "PWA & CDN Powered",
    price: "From $150 / project",
    features: [
      "Custom UI/UX from any design format (PNG, PDF, Figma, HTML demo)",
      "Standard PWA installable web app with optional offline support",
      "Global CDN high-speed delivery with enterprise DDoS defense",
      "Unlimited traffic and bandwidth capacity",
      "1 Free Lifetime Business Email included (@yourcompany.com)",
      "Google Search Console & Bing Search indexing setup",
      "100% full source code and data ownership handover"
    ]
  }
];

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SPAC2_SERVICES };
}

