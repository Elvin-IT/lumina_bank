import { Link } from "react-router";
import { CheckCircle2, ArrowRight, Banknote, TrendingUp, CreditCard, Shield, Smartphone, Zap, ChevronRight } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

function PageHero({ badge, title, subtitle, cta, href, img, imgAlt }: {
  badge: string; title: React.ReactNode; subtitle: string; cta: string; href: string; img: string; imgAlt: string;
}) {
  return (
    <section className="pt-24 pb-16 overflow-hidden" style={{ background: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 w-fit" style={{ ...PJS, background: "rgba(27,63,160,0.1)", color: "var(--primary)" }}>
              {badge}
            </div>
            <h1 className="text-4xl lg:text-5xl text-foreground mb-5 leading-tight" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{subtitle}</p>
            <Link
              to={href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm text-primary-foreground transition-colors hover:opacity-90"
              style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}
            >
              {cta} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ height: "420px", background: "#D1D5DB" }}>
            <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ ...PJS, background: "var(--secondary)", color: "var(--primary)" }}>
      {children}
    </div>
  );
}

export function PersonalPage() {
  return (
    <div className="bg-background">
      <PageHero
        badge="Personal Banking"
        title={<>Accounts built for<br /><span style={{ color: "var(--primary)" }}>real life.</span></>}
        subtitle="Whether you're getting paid, paying others, or putting something aside each month, Lumina Bank gives you accounts and tools that keep your money in motion without getting in your way."
        cta="Open an account today"
        href="#accounts"
        img="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&h=700&fit=crop&auto=format"
        imgAlt="Lumina Bank personal banking customer"
      />

      {/* Everyday Accounts */}
      <section id="accounts" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Everyday Accounts</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                A current account with no surprises.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Open in minutes with just your Malawi National ID or passport. No minimum balance. No monthly maintenance fee. Just a clean, simple account that works.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Lumina Everyday", badge: "Most popular", fee: "MK 0/month", desc: "For individuals needing a reliable everyday account with no fees.", features: ["Zero monthly fee", "Free debit card", "Mobile & online banking", "RTGS & EFT transfers"] },
                  { label: "Lumina Plus", badge: "Premium", fee: "MK 2,500/month", desc: "For those who want premium benefits and higher transfer limits.", features: ["Higher transaction limits", "Priority support", "Cashback on card spend", "Free international wires"] },
                ].map(({ label, badge, fee, desc, features }) => (
                  <div key={label} className="rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-foreground" style={{ ...PJS, fontWeight: 700 }}>{label}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--secondary)", color: "var(--primary)", ...PJS }}>{badge}</span>
                    </div>
                    <div className="text-2xl text-foreground mb-1" style={{ ...PJS, fontWeight: 800 }}>{fee}</div>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{desc}</p>
                    <ul className="flex flex-col gap-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link to="#" className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl text-sm text-primary-foreground" style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}>
                Open an account <ArrowRight size={15} />
              </Link>
            </div>
            <div className="pt-8">
              <h3 className="text-lg text-foreground mb-5" style={{ ...PJS, fontWeight: 700 }}>How to open an account</h3>
              <div className="flex flex-col gap-6">
                {[
                  { step: "01", title: "Download the app or visit online", desc: "Get the Lumina app on iOS or Android, or open your browser." },
                  { step: "02", title: "Verify your identity", desc: "Upload your Malawi National ID, passport, or driver's licence." },
                  { step: "03", title: "Choose your account type", desc: "Select Everyday or Plus based on your needs." },
                  { step: "04", title: "You're ready to bank", desc: "Your account is live. Your card arrives in 3–5 business days." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs" style={{ background: "var(--secondary)", color: "var(--primary)", ...PJS, fontWeight: 800 }}>
                      {step}
                    </div>
                    <div>
                      <div className="text-sm text-foreground mb-1" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings */}
      <section id="savings" className="py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Savings & Goals</SectionLabel>
          <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Save smarter, not harder.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Set targets, automate deposits, and watch interest build. Our savings tools are designed to help you reach goals — big and small.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, color: "#F0FDF9", iconColor: "var(--accent)", title: "Goal Savings", rate: "10% p.a.", desc: "Name your goal, set a target date, and track progress with a visual dashboard." },
              { icon: Banknote, color: "#EEF2FF", iconColor: "var(--primary)", title: "Fixed Deposit", rate: "12% p.a.", desc: "Lock funds for 3, 6, or 12 months for the highest available interest rate." },
              { icon: Zap, color: "#FFF7ED", iconColor: "#D97706", title: "Round-Up Savings", rate: "8% p.a.", desc: "Every purchase rounds up to the nearest MK 100. The spare change goes straight to savings." },
            ].map(({ icon: Icon, color, iconColor, title, rate, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-border">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={{ background: color }}>
                  <Icon size={20} style={{ color: iconColor }} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base text-foreground" style={{ ...PJS, fontWeight: 700 }}>{title}</h3>
                  <span className="text-sm px-2.5 py-1 rounded-full" style={{ background: "#DCFCE7", color: "#15803D", ...PJS, fontWeight: 600 }}>{rate}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section id="cards" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Cards</SectionLabel>
          <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            One card, endless possibilities.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Accepted at millions of merchants across Malawi, the SADC region, and online worldwide. Full card control from your phone.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              {[
                { icon: Shield, title: "Freeze & unfreeze instantly", desc: "Lost your card? Freeze it in seconds from the app. Found it? Unfreeze just as fast." },
                { icon: Zap, title: "Real-time transaction alerts", desc: "A push notification for every swipe, tap, or online purchase." },
                { icon: CreditCard, title: "Virtual card for online purchases", desc: "Generate a virtual card number for secure online shopping — never expose your physical card." },
                { icon: Smartphone, title: "Contactless & mobile pay", desc: "Tap to pay with your card or add it to your phone's wallet." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:bg-muted transition-colors">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--secondary)" }}>
                    <Icon size={17} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground mb-1" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl p-10 flex flex-col gap-8" style={{ background: "var(--primary)" }}>
              <div>
                <div className="text-white text-lg mb-1" style={{ ...PJS, fontWeight: 700 }}>Lumina Debit Card</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Included free with every account</div>
              </div>
              {[
                { label: "Annual fee", value: "MK 0" },
                { label: "ATM withdrawals (Lumina ATMs)", value: "Free" },
                { label: "Point-of-sale payments", value: "Free" },
                { label: "Online transactions", value: "Free" },
                { label: "SADC region ATM fee", value: "MK 500" },
                { label: "Card replacement", value: "MK 2,000" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)", ...PJS }}>{label}</span>
                  <span className="text-sm text-white" style={{ ...PJS, fontWeight: 600 }}>{value}</span>
                </div>
              ))}
              <Link to="#" className="inline-flex items-center gap-2 text-sm" style={{ ...PJS, fontWeight: 600, color: "var(--accent)" }}>
                Apply for a card <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
