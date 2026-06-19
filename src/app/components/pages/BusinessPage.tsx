import { Link } from "react-router";
import { CheckCircle2, ArrowRight, Building2, CreditCard, Banknote, BarChart3, Zap, Globe, Phone, ChevronRight } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ ...PJS, background: "var(--secondary)", color: "var(--primary)" }}>
      {children}
    </div>
  );
}

export function BusinessPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="pt-24 pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1729 0%, #1B3FA0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 w-fit" style={{ ...PJS, background: "rgba(13,170,130,0.2)", color: "#0DAA82" }}>
                Lumina Business
              </div>
              <h1 className="text-4xl lg:text-5xl text-white mb-5 leading-tight" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
                Banking built<br />
                <span style={{ color: "#0DAA82" }}>for your business.</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                From side hustles to growing SMEs, Lumina Business keeps your payments, accounts, and credit in one place — so you can focus on customers, not paperwork.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="#accounts" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm text-foreground transition-colors hover:opacity-90" style={{ ...PJS, fontWeight: 700, background: "#ffffff" }}>
                  Open a business account <ArrowRight size={15} />
                </Link>
                <Link to="#loans" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm transition-colors" style={{ ...PJS, fontWeight: 600, background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Talk to business team
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "420px", background: "#1e4d78" }}>
              <img
                src="https://images.unsplash.com/photo-1687422808311-a776f467a468?w=900&h=700&fit=crop&auto=format"
                alt="Small business owner with Lumina Business account"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SME Accounts */}
      <section id="accounts" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>SME Accounts</SectionLabel>
          <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>The right account for your size.</h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Whether you're a sole trader or running a team of 50, we have a business account that fits your cash flow and ambition.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Starter Business", fee: "MK 3,000/mo", ideal: "Sole traders & freelancers",
                features: ["Business current account", "Up to 50 transactions/month", "Free debit card", "Mobile & online banking"],
              },
              {
                name: "SME Growth", fee: "MK 7,500/mo", ideal: "Growing businesses", popular: true,
                features: ["Unlimited transactions", "Multi-user access (up to 5)", "Bulk payroll payments", "Business analytics dashboard", "Dedicated relationship manager"],
              },
              {
                name: "Corporate", fee: "Custom", ideal: "Larger enterprises",
                features: ["Unlimited users", "API banking access", "Dedicated credit facility", "Multi-currency accounts", "Trade finance support"],
              },
            ].map(({ name, fee, ideal, popular, features }) => (
              <div key={name} className={`rounded-2xl p-7 border transition-shadow hover:shadow-lg ${popular ? "border-primary" : "border-border"}`} style={{ position: "relative" }}>
                {popular && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs text-primary-foreground" style={{ ...PJS, fontWeight: 600, background: "var(--primary)" }}>
                    Most popular
                  </div>
                )}
                <h3 className="text-base text-foreground mb-1" style={{ ...PJS, fontWeight: 700 }}>{name}</h3>
                <div className="text-xs text-muted-foreground mb-4">{ideal}</div>
                <div className="text-2xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800 }}>{fee}</div>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="#"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm transition-colors"
                  style={popular
                    ? { ...PJS, fontWeight: 600, background: "var(--primary)", color: "white" }
                    : { ...PJS, fontWeight: 600, border: "1px solid var(--border)", color: "var(--foreground)" }
                  }
                >
                  Get started <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payments & POS */}
      <section id="payments" className="py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Payments & POS</SectionLabel>
              <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Accept payment — anywhere, any way.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our POS terminals and payment links work at your counter, on delivery, or online. Accept cards, mobile money, and QR payments in one device.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: CreditCard, title: "POS Terminals", desc: "Countertop and portable terminals for retail and hospitality." },
                  { icon: Smartphone, title: "Mobile POS", desc: "Turn any Android phone into a card reader with our app." },
                  { icon: Globe, title: "Payment Links", desc: "Share a link via WhatsApp or SMS to get paid instantly." },
                  { icon: Zap, title: "Mobile Money", desc: "Accept Airtel Money and TNM Mpamba alongside card payments." },
                  { icon: BarChart3, title: "Sales Analytics", desc: "Real-time dashboard showing revenue, peak hours, and top products." },
                  { icon: Building2, title: "Bulk Payouts", desc: "Pay suppliers, staff, and agents in one batch upload." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-2xl p-5 border border-border hover:shadow-sm transition-shadow">
                    <Icon size={18} style={{ color: "var(--primary)" }} className="mb-3" />
                    <div className="text-sm text-foreground mb-1" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "480px", background: "#E0E7FF" }}>
              <img
                src="https://images.unsplash.com/photo-1687422810663-c316494f725a?w=800&h=700&fit=crop&auto=format"
                alt="Business owner using Lumina POS payment solution"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Loans */}
      <section id="loans" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Business Loans</SectionLabel>
          <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Credit that moves at the speed of business.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Get fast-tracked credit from MK 500,000 with repayment terms that reflect how your business actually earns.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {[
              {
                title: "Working Capital Loan",
                range: "MK 500K – MK 10M",
                term: "3–18 months",
                rate: "From 22% p.a.",
                desc: "Bridge cash flow gaps, stock up for busy seasons, or fund operational costs without selling equity.",
                steps: ["Apply online in 15 minutes", "Decision within 4 business days", "Funds in your account same day as approval"],
              },
              {
                title: "Asset Finance",
                range: "MK 1M – MK 50M",
                term: "12–60 months",
                rate: "From 18% p.a.",
                desc: "Finance vehicles, equipment, or machinery for your business. The asset acts as security — no extra collateral required.",
                steps: ["Get a quote based on asset value", "Submit business financials", "Structured monthly repayments"],
              },
            ].map(({ title, range, term, rate, desc, steps }) => (
              <div key={title} className="rounded-2xl border border-border p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl text-foreground mb-1" style={{ ...PJS, fontWeight: 700 }}>{title}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[range, term, rate].map((v) => (
                    <span key={v} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--muted)", color: "var(--muted-foreground)", ...PJS }}>{v}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <h4 className="text-xs text-foreground mb-3" style={{ ...PJS, fontWeight: 700 }}>How it works</h4>
                <ul className="flex flex-col gap-2 mb-6">
                  {steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: "var(--secondary)", color: "var(--primary)", ...PJS, fontWeight: 700 }}>{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link to="#" className="inline-flex items-center gap-2 text-sm" style={{ ...PJS, fontWeight: 600, color: "var(--primary)" }}>
                  Apply for this loan <ChevronRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: "var(--foreground)" }}>
            <div>
              <h3 className="text-xl text-white mb-2" style={{ ...PJS, fontWeight: 700 }}>Ready to grow?</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Talk to a Lumina Business specialist — free, no obligation, no jargon.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="tel:+2651800100" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm text-white transition-colors" style={{ ...PJS, fontWeight: 600, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Phone size={15} /> Call us
              </a>
              <Link to="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm text-foreground transition-colors hover:opacity-90" style={{ ...PJS, fontWeight: 700, background: "#ffffff" }}>
                Request a call back <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
