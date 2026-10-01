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
    desc: "Premium corporate websites, high-converting landing pages, and custom e-commerce web apps optimized for Google PageSpeed 95+ and Top SEO ranking.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Web%20Development",
    category: "website",
    badge: "5-Star Quality",
    price: "From $150 / project",
    features: [
      "Bespoke modern UI/UX design & micro-animations",
      "Blazing fast Google PageSpeed 90 - 100 score",
      "On-page SEO & Conversion Rate Optimization (CRO)",
      "100% responsive on Mobile, Tablet & Desktop"
    ]
  },
  {
    id: "cloud-vps",
    title: "Cloud VPS & Web Hosting",
    img: "cloud",
    desc: "High-performance enterprise NVMe Gen4 SSD cloud servers with unmetered bandwidth, Tier-3+ global data center reliability, and 99.99% SLA uptime.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Cloud%20VPS",
    category: "cloud",
    badge: "High Performance",
    price: "From $3.99 / mo",
    features: [
      "100% Enterprise NVMe SSD read/write speeds",
      "Unmetered high-speed domestic & global bandwidth",
      "Intelligent WAF firewall & DDoS mitigation",
      "1-Click daily automated backups & instant restore"
    ]
  },
  {
    id: "domain-ssl",
    title: "Domain & SSL Security",
    img: "domain",
    desc: "Register global (.com, .net, .co, .org) & local domain names with Anycast DNS resolution, Domain Lock privacy, and 256-bit SSL encryption.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Domain%20and%20SSL",
    category: "cloud",
    badge: "Essential",
    price: "From $9.99 / year",
    features: [
      "Lightning-fast Anycast DNS propagation",
      "256-bit TLS/SSL encryption certificates",
      "Domain Privacy & Theft Protection Lock",
      "Free DNS & MX record email configuration"
    ]
  },
  {
    id: "custom-software",
    title: "Enterprise Software & AI",
    img: "software",
    desc: "Tailor-made internal management software (CRM/ERP), 24/7 autonomous AI Chatbots, intelligent workflow automation, and Spac2 Web OS sync.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Enterprise%20Software",
    category: "software",
    badge: "Digital Solution",
    price: "Custom quotation",
    features: [
      "Tailor-made CRM/ERP systems for business workflows",
      "Autonomous 24/7 AI customer service chatbots",
      "Robotic process automation (RPA) & workflows",
      "Native sync with the Spac2 Web OS ecosystem"
    ]
  },
  {
    id: "seo-maintenance",
    title: "Speed Optimization & SEO",
    img: "seo",
    desc: "Comprehensive technical audit, Core Web Vitals fixes, periodic security patches, malware eradication, and organic search ranking growth.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20SEO%20and%20Maintenance",
    category: "software",
    badge: "Growth",
    price: "From $49 / mo",
    features: [
      "Malware/virus cleanup & vulnerability patching",
      "Google Core Web Vitals optimization",
      "Strategic on-page SEO & keyword architecture",
      "24/7 uptime monitoring & instant alerts"
    ]
  },
  {
    id: "security-waf",
    title: "System Security & WAF",
    img: "security",
    desc: "Complete cybersecurity suite with proactive Web Application Firewall (WAF), Layer 3/4/7 DDoS defense, VPN setup, and infrastructure auditing.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20System%20Security",
    category: "security",
    badge: "Security",
    price: "Consultation",
    features: [
      "Proactive Cloud WAF attack prevention",
      "Multi-layered DDoS defense for websites & APIs",
      "Internal encrypted Virtual Private Network (VPN)",
      "Security audit & penetration testing"
    ]
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Integration",
    img: "payment",
    desc: "Seamlessly integrate multi-channel online payment gateways (Stripe, PayPal, Apple Pay, Google Pay, Credit/Debit cards) with automated order fulfillment.",
    link: "mailto:hi@spac2.com?subject=Inquiry%20Payment%20Gateway",
    category: "website",
    badge: "E-Commerce",
    price: "From $65",
    features: [
      "Support for global credit cards & local payment gateways",
      "Instant automated order fulfillment & webhooks",
      "PCI-DSS compliant secure transaction handling",
      "Real-time balance synchronization & reports"
    ]
  }
];

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SPAC2_SERVICES };
}
