import { Link } from "react-router";
import {
  Shield, Smartphone, ArrowRight, CheckCircle2, Clock, Lock,
  TrendingUp, CreditCard, Building2, Banknote, Zap, LifeBuoy,
  BookOpen, ChevronRight, Star, Users
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1563132337-f159f484226c?w=900&h=1100&fit=crop&auto=format";
const BUSINESS_IMG = "https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e?w=800&h=600&fit=crop&auto=format";
const FAMILY_IMG = "https://images.unsplash.com/photo-1624272864537-8ecc72b67958?w=800&h=600&fit=crop&auto=format";
const MOBILE_IMG = "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=800&h=600&fit=crop&auto=format";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ ...PJS, background: "var(--secondary)", color: "var(--primary)" }}>
      {children}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="bg-background">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-16 overflow-hidden" style={{ minHeight: "92vh" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F0FDF9 50%, #ffffff 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ minHeight: "calc(92vh - 64px)", paddingTop: "3rem", paddingBottom: "3rem" }}>

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 w-fit" style={{ ...PJS, background: "#DCFCE7", color: "#15803D" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Licensed by Reserve Bank of Malawi
              </div>

              <h1
                className="text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
                style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Banking that fits
                <br />
                <span style={{ color: "var(--primary)" }}>your everyday.</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
                Lumina Bank helps you send, save, and grow your money with clear fees, smart tools, and support that's always a tap away.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  to="/personal"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-primary-foreground transition-all hover:opacity-90 active:scale-95"
                  style={{ ...PJS, fontWeight: 700, background: "var(--primary)", boxShadow: "0 4px 20px rgba(27,63,160,0.25)" }}
                >
                  Open an account
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/business"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border transition-colors hover:bg-muted"
                  style={{ ...PJS, fontWeight: 600, borderColor: "var(--border)", color: "var(--foreground)" }}
                >
                  Bank for my business
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "120K+", label: "Active customers" },
                  { value: "MK 4B+", label: "Deposits held" },
                  { value: "24/7", label: "Digital access" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl text-foreground" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>{value}</div>
                    <div className="text-sm text-muted-foreground mt-0.5" style={PJS}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ height: "520px", background: "#E0E7FF" }}
                >
                  <img
                    src={HERO_IMG}
                    alt="Lumina Bank customer — confident professional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating card */}
                <div
                  className="absolute -bottom-4 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border"
                  style={{ minWidth: "200px" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                      <TrendingUp size={16} style={{ color: "var(--accent)" }} />
                    </div>
                    <span className="text-xs text-muted-foreground" style={PJS}>Savings goal</span>
                  </div>
                  <div className="text-xl text-foreground mb-2" style={{ ...PJS, fontWeight: 700 }}>MK 450,000</div>
                  <div className="w-full rounded-full h-1.5 mb-1" style={{ background: "var(--muted)" }}>
                    <div className="h-1.5 rounded-full" style={{ width: "72%", background: "var(--accent)" }} />
                  </div>
                  <div className="text-xs text-muted-foreground" style={PJS}>72% of goal reached</div>
                </div>
                {/* Security badge */}
                <div
                  className="absolute -top-3 -right-3 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border flex items-center gap-2"
                >
                  <Lock size={16} style={{ color: "var(--primary)" }} />
                  <span className="text-xs text-foreground" style={{ ...PJS, fontWeight: 600 }}>Bank-grade secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────── */}
      <section className="border-y border-border" style={{ background: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {[
              { icon: Shield, text: "Bank-grade encryption & secure login" },
              { icon: Smartphone, text: "Two-factor & biometric authentication" },
              { icon: Zap, text: "Real-time alerts on all transactions" },
              { icon: Clock, text: "Support available Mon–Sat, 7am–8pm" },
              { icon: CheckCircle2, text: "Regulated by Reserve Bank of Malawi" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon size={16} style={{ color: "var(--accent)" }} />
                <span className="text-sm" style={{ ...PJS, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────── */}
      <section className="py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Everything you need</SectionLabel>
            <h2 className="text-4xl text-foreground" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
              One bank, every journey
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                color: "#EEF2FF",
                iconColor: "var(--primary)",
                title: "Personal Banking",
                desc: "Whether you're getting paid, paying others, or putting something aside each month, Lumina gives you accounts and tools that keep your money in motion.",
                cta: "Explore Personal",
                href: "/personal",
              },
              {
                icon: Building2,
                color: "#F0FDF9",
                iconColor: "var(--accent)",
                title: "Business Banking",
                desc: "From side hustles to growing SMEs, Lumina Business keeps your payments, accounts, and credit in one place — so you can focus on customers, not paperwork.",
                cta: "Explore Business",
                href: "/business",
              },
              {
                icon: Smartphone,
                color: "#FFF7ED",
                iconColor: "#D97706",
                title: "Digital Banking",
                desc: "Bank on your phone, tablet, or laptop with a consistent, secure experience. Check balances, move money, and manage cards in real time.",
                cta: "Explore Digital",
                href: "/digital-banking",
              },
            ].map(({ icon: Icon, color, iconColor, title, desc, cta, href }) => (
              <Link
                key={title}
                to={href}
                className="group bg-white rounded-3xl p-8 border border-border hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: color }}
                >
                  <Icon size={22} style={{ color: iconColor }} />
                </div>
                <h3 className="text-xl text-foreground mb-3" style={{ ...PJS, fontWeight: 700 }}>{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <div className="flex items-center gap-1.5 text-sm group-hover:gap-2.5 transition-all" style={{ ...PJS, fontWeight: 600, color: "var(--primary)" }}>
                  {cta} <ChevronRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT HIGHLIGHTS ───────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel>Our products</SectionLabel>
            <h2 className="text-4xl text-foreground" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
              Built around how you live
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--secondary)" }}>
                <Banknote size={20} style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>Everyday Account</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A current account with no hidden charges. Receive salary, pay bills, and transfer to anyone across Malawi and the region. No minimum balance required.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Zero monthly maintenance fee",
                  "Instant mobile & online transfers",
                  "Free debit card on account opening",
                  "ATM access across the SADC region",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/personal#accounts"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm border transition-colors hover:bg-muted"
                style={{ ...PJS, fontWeight: 600, borderColor: "var(--border)", color: "var(--foreground)" }}
              >
                Learn about accounts <ArrowRight size={15} />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "400px", background: "#E0E7FF" }}>
              <img src={FAMILY_IMG} alt="Lumina Bank customer family" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden" style={{ height: "400px", background: "#F0FDF9" }}>
              <img src={BUSINESS_IMG} alt="Small business owner using Lumina Bank" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "#F0FDF9" }}>
                <TrendingUp size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>Savings & Goals</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Set targets, automate deposits, and earn competitive interest while your money grows. Whether it's school fees, a new vehicle, or a rainy-day fund — we'll help you get there.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Competitive interest rates up to 12% p.a.",
                  "Named goal pots to track progress",
                  "Automatic round-up from everyday spending",
                  "Flexible access — withdraw any time",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/personal#savings"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm border transition-colors hover:bg-muted"
                style={{ ...PJS, fontWeight: 600, borderColor: "var(--border)", color: "var(--foreground)" }}
              >
                Start saving <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Cards highlight */}
          <div className="rounded-3xl p-10 lg:p-14" style={{ background: "var(--primary)" }}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 w-fit" style={{ ...PJS, background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                  Lumina Cards
                </div>
                <h3 className="text-3xl text-white mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                  Cards that work<br />as hard as you do.
                </h3>
                <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Lumina Debit and Prepaid cards are accepted across Malawi and the SADC region. Control spending, freeze/unfreeze in seconds, and get real-time notifications for every transaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/personal#cards"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition-colors"
                    style={{ ...PJS, fontWeight: 600, background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    Explore cards <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Card visual */}
                  <div
                    className="w-72 h-44 rounded-2xl p-6 flex flex-col justify-between"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-7 rounded-md" style={{ background: "rgba(255,255,255,0.3)" }} />
                      <CreditCard size={22} style={{ color: "rgba(255,255,255,0.6)" }} />
                    </div>
                    <div>
                      <div className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        •••• •••• •••• 4829
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm" style={PJS}>Amara Banda</span>
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)", ...PJS }}>VISA</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 w-72 h-44 rounded-2xl"
                    style={{ background: "rgba(13,170,130,0.25)", border: "1px solid rgba(255,255,255,0.1)", zIndex: -1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIGITAL EXPERIENCE ───────────────────── */}
      <section className="py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Digital experience</SectionLabel>
              <h2 className="text-4xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Your bank — in your pocket, on your desk.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bank on your phone, tablet, or laptop with a consistent, secure experience. Check balances at a glance, move money between accounts, and manage cards in real time.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Lock, title: "Bank-grade encryption", desc: "256-bit TLS encryption on every connection." },
                  { icon: Smartphone, title: "Biometric login", desc: "Fingerprint and face ID on supported devices." },
                  { icon: Zap, title: "Real-time alerts", desc: "Instant push notifications for key activity." },
                  { icon: Shield, title: "Fraud monitoring", desc: "24/7 dedicated fraud response team." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-2xl p-5 border border-border">
                    <Icon size={18} style={{ color: "var(--primary)" }} className="mb-3" />
                    <div className="text-sm text-foreground mb-1" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/digital-banking"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm text-primary-foreground transition-colors hover:opacity-90"
                  style={{ ...PJS, fontWeight: 600, background: "var(--primary)" }}
                >
                  Download the app <ArrowRight size={15} />
                </Link>
                <Link
                  to="/digital-banking#online"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm border transition-colors hover:bg-background"
                  style={{ ...PJS, fontWeight: 600, borderColor: "var(--border)", color: "var(--foreground)" }}
                >
                  Explore online banking
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "500px", background: "#E0E7FF" }}>
              <img
                src={MOBILE_IMG}
                alt="Person using Lumina Bank mobile app"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SME HIGHLIGHT ────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden" style={{ height: "440px", background: "#F0FDF9" }}>
              <img
                src="https://images.unsplash.com/photo-1687422808565-929533931584?w=800&h=600&fit=crop&auto=format"
                alt="Small business owner with Lumina Business account"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SectionLabel>Lumina Business</SectionLabel>
              <h2 className="text-4xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Banking that grows with your business.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From side hustles to growing SMEs, Lumina Business keeps your payments, accounts, and credit in one place — so you can focus on customers, not paperwork.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {[
                  { icon: Building2, label: "SME Current Accounts", desc: "Dedicated business account with bulk payment tools." },
                  { icon: CreditCard, label: "POS & Payment Solutions", desc: "Accept cards and mobile money at your counter or on delivery." },
                  { icon: Banknote, label: "Business Loans", desc: "Fast-tracked credit from MK 500,000 with flexible repayment." },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-2xl border border-border hover:bg-muted transition-colors">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#F0FDF9" }}>
                      <Icon size={17} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground mb-0.5" style={{ ...PJS, fontWeight: 600 }}>{label}</div>
                      <div className="text-xs text-muted-foreground">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/business"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm text-accent-foreground transition-colors hover:opacity-90"
                style={{ ...PJS, fontWeight: 700, background: "var(--accent)" }}
              >
                Talk to our business team <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section className="py-20" style={{ background: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Customer stories</SectionLabel>
            <h2 className="text-3xl text-foreground" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
              Trusted by people across Malawi
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Opening my account took less than 10 minutes on my phone. The savings goals feature helped me put aside school fees without even thinking about it.",
                name: "Chisomo Phiri",
                role: "Teacher, Blantyre",
                rating: 5,
              },
              {
                quote: "The POS solution changed my shop. Customers who used to walk past because they had no cash now pay by card every day. My revenue has grown 30%.",
                name: "Emmanuel Banda",
                role: "Grocery owner, Lilongwe",
                rating: 5,
              },
              {
                quote: "I run a small tailoring business. The business loan came through in four days and the repayment schedule actually fits my monthly cash flow.",
                name: "Grace Mkandawire",
                role: "Entrepreneur, Mzuzu",
                rating: 5,
              },
            ].map(({ quote, name, role, rating }) => (
              <div key={name} className="bg-white rounded-3xl p-7 border border-border">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-6">"{quote}"</p>
                <div>
                  <div className="text-sm text-foreground" style={{ ...PJS, fontWeight: 600 }}>{name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT TEASER ────────────────────────── */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-border hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--muted)" }}>
                <LifeBuoy size={20} style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-xl text-foreground mb-3" style={{ ...PJS, fontWeight: 700 }}>We're here to help</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Browse our Help Centre for quick answers, or reach our team by phone, chat, or at any branch Monday to Saturday.
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-1.5 text-sm hover:gap-2.5 transition-all"
                style={{ ...PJS, fontWeight: 600, color: "var(--primary)" }}
              >
                Visit Help Centre <ChevronRight size={15} />
              </Link>
            </div>
            <div className="rounded-3xl p-8 border border-border hover:shadow-md transition-shadow" style={{ background: "var(--foreground)" }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.1)" }}>
                <BookOpen size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ ...PJS, fontWeight: 700 }}>Learning Hub</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Practical guides on saving, budgeting, growing a business, and understanding credit — written in plain language for everyone.
              </p>
              <Link
                to="/learning-hub"
                className="inline-flex items-center gap-1.5 text-sm hover:gap-2.5 transition-all"
                style={{ ...PJS, fontWeight: 600, color: "var(--accent)" }}
              >
                Start learning <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Open a Lumina account in minutes — no paperwork, no queues. Just your phone and a valid ID.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/personal"
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-primary-foreground transition-all hover:opacity-90"
              style={{ ...PJS, fontWeight: 700, background: "var(--primary)", boxShadow: "0 4px 20px rgba(27,63,160,0.2)" }}
            >
              Open an account <ArrowRight size={16} />
            </Link>
            <Link
              to="/support"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border transition-colors hover:bg-muted"
              style={{ ...PJS, fontWeight: 600, borderColor: "var(--border)", color: "var(--foreground)" }}
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
