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
    title: "Website & Web App Development",
    img: "website",
    desc: "All types of websites & installable PWAs with limitless UI/UX design, Edge Server speed (unlimited traffic), 3–7 day handover, one-time payment with zero monthly fees, and an optional exclusive Admin Dashboard at a very low add-on cost.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Web%20Development",
    detailUrl: "web/",
    category: "website",
    badge: "3–7 Days · One-Time Pay",
    price: "From $150 / project",
    features: [
      "Limitless UI/UX: Custom-designed from scratch, templates, or your samples (all web apps & PWA)",
      "Exclusive Dedicated Admin Dashboard: Separate per website (never shared), very low add-on fee",
      "One-time payment — zero monthly hosting fees (only annual domain renewal)",
      "Edge Server & Global CDN: Unlimited traffic & queries, speed check before handover",
      "Fast 3–7 day handover with full revisions; affordable post-handover edits",
      "Legally compliant domain in your name, annual renewal support & VAT invoices (incl. Google Workspace)",
      "Free Business Email included when registering a domain with Spac2",
      "Core worker.js retained by Spac2 for security & partner safety"
    ]
  },
  {
    id: "bio-cv",
    title: "Personal Bio CV Page",
    img: "bio",
    desc: "Custom personal Bio CV page with a dedicated Admin Dashboard built directly on your bio design. Manage all links, profile info, and portfolio unrestricted with one-time payment, lifetime ownership, free default Spac2 domain, PWA, and global CDN.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Personal%20Bio%20CV%20Service",
    detailUrl: "bio/",
    category: "bio",
    badge: "Bio & Admin Dashboard",
    price: "Custom quotation",
    features: [
      "Dedicated Custom Admin Dashboard: Tailored directly to your Bio design for 100% unrestricted management of all links, profile info, and media",
      "One-time payment with lifetime ownership — zero recurring monthly subscription fees",
      "Unrestricted adjustments & full customization of all components without limitations",
      "Free default Spac2 subdomain or custom domain setup option",
      "Multi-platform search indexing (Google, Bing, Coc Coc) & AI search bot ready",
      "Global CDN zero latency delivery and PWA mobile app support",
      "100% tailored UI/UX according to your personal branding and design preferences",
      "Dedicated technical support, rich custom widgets, and direct 1-on-1 consultation"
    ]
  }
];

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SPAC2_SERVICES };
}

