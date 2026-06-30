import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Personal: [
    { label: "Everyday Accounts", href: "/personal#accounts" },
    { label: "Savings & Goals", href: "/personal#savings" },
    { label: "Debit & Credit Cards", href: "/personal#cards" },
    { label: "Open an Account", href: "/personal" },
  ],
  Business: [
    { label: "SME Accounts", href: "/business#accounts" },
    { label: "Payments & POS", href: "/business#payments" },
    { label: "Business Loans", href: "/business#loans" },
    { label: "Talk to Business Team", href: "/business" },
  ],
  "Digital Banking": [
    { label: "Mobile App", href: "/digital-banking#app" },
    { label: "Online Banking", href: "/digital-banking#online" },
    { label: "Security & Safety", href: "/digital-banking#security" },
    { label: "Download App", href: "/digital-banking" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Regulation & Compliance", href: "/about#compliance" },
    { label: "Careers", href: "/about#careers" },
    { label: "Learning Hub", href: "/learning-hub" },
  ],
  Support: [
    { label: "Help Centre & FAQs", href: "/support" },
    { label: "Contact & Branches", href: "/support#contact" },
    { label: "Forms & Downloads", href: "/support#forms" },
    { label: "Report Fraud", href: "/support#fraud" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5">
              <img src="https://i.ibb.co/WvfLZcNC/design-White-version-3x-8.png" alt="Lumina Bank Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              A digital-first regional bank serving individuals and businesses across Southern and East Africa. Headquartered in Lilongwe, Malawi.
            </p>
            <div className="flex flex-col gap-2.5 mb-8">
              <a href="tel:+2651800100" className="flex items-center gap-2 text-sm hover:text-accent transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                <Phone size={14} />
                +265 1 800 100
              </a>
              <a href="mailto:hello@luminabank.mw" className="flex items-center gap-2 text-sm hover:text-accent transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                <Mail size={14} />
                hello@luminabank.mw
              </a>
              <span className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <MapPin size={14} />
                Capital City, Lilongwe, Malawi
              </span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/luminabank", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/luminabank", label: "Twitter" },
                { Icon: Instagram, href: "https://instagram.com/luminabank", label: "Instagram" },
                { Icon: Linkedin, href: "https://linkedin.com/company/luminabank", label: "LinkedIn" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="text-white text-sm mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                >
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm hover:text-accent transition-colors"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regulatory bar */}
      <div style={{ background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "600px" }}>
              Lumina Bank Limited is licensed and regulated by the Reserve Bank of Malawi. Registration No. MWB-2019-0042. Deposits are protected up to MK 5,000,000 per depositor under the Deposit Protection Fund.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { label: "Privacy Policy", href: "/support#privacy" },
                { label: "Terms & Conditions", href: "/support#terms" },
                { label: "Cookie Policy", href: "/support#cookies" },
                { label: "Regulatory Info", href: "/about#compliance" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Lumina Bank Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
