import { Link } from "react-router";
import { Shield, CheckCircle2, ArrowRight, Users, TrendingUp, Globe, Briefcase } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ ...PJS, background: "var(--secondary)", color: "var(--primary)" }}>
      {children}
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="pt-24 pb-16" style={{ background: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 w-fit" style={{ ...PJS, background: "rgba(13,170,130,0.2)", color: "#0DAA82" }}>
                About Lumina Bank
              </div>
              <h1 className="text-4xl lg:text-5xl text-white mb-5 leading-tight" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
                Built in Malawi.<br />
                <span style={{ color: "#0DAA82" }}>Built for Africa.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                Lumina Bank was founded with one mission: to make modern, reliable banking accessible to every person and business across Southern and East Africa.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                We believe that trustworthy financial services — clear, affordable, and digital-first — are the foundation of economic progress in our region.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "420px", background: "#1a3050" }}>
              <img
                src="https://images.unsplash.com/photo-1573497491207-618cc224f243?w=900&h=700&fit=crop&auto=format"
                alt="Lumina Bank team member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-3xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                From a bold idea to a trusted bank.
              </h2>
              <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
                <p>
                  Lumina Bank was licensed by the Reserve Bank of Malawi in 2019, born from the conviction that millions of Malawians deserved better than queues, paper forms, and opaque fees.
                </p>
                <p>
                  We opened our first branch in Lilongwe's Capital City and launched our digital platform simultaneously — proving that a bank could serve both walk-in customers and mobile-native users on day one.
                </p>
                <p>
                  Today we serve over 120,000 customers and hundreds of SMEs across Malawi. We're expanding into Zambia and Tanzania — bringing the same clear, honest banking to more of the region.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Users, value: "120K+", label: "Active customers", color: "var(--secondary)", iconColor: "var(--primary)" },
                { icon: Globe, value: "4", label: "Cities with branches", color: "#F0FDF9", iconColor: "var(--accent)" },
                { icon: TrendingUp, value: "MK 4B+", label: "Total deposits held", color: "#FFF7ED", iconColor: "#D97706" },
                { icon: Briefcase, value: "2,500+", label: "SME customers", color: "var(--secondary)", iconColor: "var(--primary)" },
              ].map(({ icon: Icon, value, label, color, iconColor }) => (
                <div key={label} className="rounded-2xl p-7 border border-border" style={{ background: color }}>
                  <Icon size={20} style={{ color: iconColor }} className="mb-4" />
                  <div className="text-2xl text-foreground mb-1" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Regulation & Compliance</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Regulated, transparent, and accountable.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Lumina Bank Limited is fully licensed and supervised by the Reserve Bank of Malawi under the Banking Act. We hold ourselves to the highest standards of financial regulation, anti-money laundering compliance, and customer protection.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Licensed by Reserve Bank of Malawi (Reg. No. MWB-2019-0042)",
                  "Member of the Bankers Association of Malawi",
                  "Deposits protected up to MK 5,000,000 under the Deposit Protection Fund",
                  "Full AML/KYC programme compliant with FATF standards",
                  "Annual independent external audit — reports available on request",
                  "Complaints handled under the Financial Services Act framework",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <Shield size={28} style={{ color: "var(--primary)" }} className="mb-5" />
              <h3 className="text-xl text-foreground mb-4" style={{ ...PJS, fontWeight: 700 }}>Your deposits are protected</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Under the Deposit Protection Fund of Malawi, eligible deposits up to MK 5,000,000 per depositor are protected in the event of bank failure. This protection is automatic — you don't need to register.
              </p>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {[
                  { label: "Regulator", value: "Reserve Bank of Malawi" },
                  { label: "Licence number", value: "MWB-2019-0042" },
                  { label: "Deposit protection limit", value: "MK 5,000,000" },
                  { label: "Incorporated", value: "Companies Registry of Malawi" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="text-foreground" style={{ ...PJS, fontWeight: 600 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Careers</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Join the team building Africa's future bank.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're looking for curious, mission-driven people who want to make a real difference in how financial services work across the region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Roles span technology, operations, customer experience, credit, and compliance. We offer competitive packages, learning budgets, and flexible working.
              </p>
              <Link to="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm text-primary-foreground" style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}>
                View open roles <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Competitive salary & benefits",
                "Annual learning & development budget",
                "Flexible & hybrid working",
                "Health insurance for you & family",
                "Performance bonuses",
                "Clear progression paths",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-4 rounded-xl border border-border bg-muted text-sm text-foreground" style={{ ...PJS, fontWeight: 500 }}>
                  <CheckCircle2 size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
