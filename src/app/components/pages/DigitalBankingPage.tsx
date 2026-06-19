import { Link } from "react-router";
import { Shield, Smartphone, Lock, Zap, Eye, AlertTriangle, CheckCircle2, ArrowRight, Monitor, Fingerprint, Bell } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ ...PJS, background: "var(--secondary)", color: "var(--primary)" }}>
      {children}
    </div>
  );
}

export function DigitalBankingPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="pt-24 pb-16" style={{ background: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ ...PJS, background: "rgba(27,63,160,0.1)", color: "var(--primary)" }}>
            Digital Banking
          </div>
          <h1 className="text-4xl lg:text-5xl text-foreground mb-5" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
            Bank on your terms — <br />
            <span style={{ color: "var(--primary)" }}>wherever life takes you.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Bank on your phone, tablet, or laptop with a consistent, secure experience. Check balances at a glance, move money between accounts, and manage cards in real time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="#app" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm text-primary-foreground" style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}>
              <Smartphone size={15} /> Download the app
            </Link>
            <Link to="#online" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm border transition-colors hover:bg-background" style={{ ...PJS, fontWeight: 600, borderColor: "var(--border)", color: "var(--foreground)" }}>
              <Monitor size={15} /> Use online banking
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section id="app" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Mobile App</SectionLabel>
              <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Everything, in one app.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Lumina app gives you full control of your money, 24/7. Available on iOS and Android, with a simple interface designed for everyone.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {[
                  { icon: Bell, title: "Instant push notifications", desc: "A real-time alert for every transaction, login, and account change." },
                  { icon: Fingerprint, title: "Biometric login", desc: "Sign in with your fingerprint or Face ID — no password needed." },
                  { icon: Zap, title: "Instant transfers", desc: "Send money to anyone in Malawi in seconds. RTGS transfers arrive same day." },
                  { icon: Eye, title: "Full account overview", desc: "See all your accounts, cards, and goals in one clean dashboard." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-2xl border border-border hover:bg-muted transition-colors">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--secondary)" }}>
                      <Icon size={17} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground mb-0.5" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition-colors"
                  style={{ ...PJS, fontWeight: 600, background: "var(--foreground)", color: "white" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition-colors"
                  style={{ ...PJS, fontWeight: 600, background: "var(--foreground)", color: "white" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.37.21.8.23 1.2.06l12.29-6.87-2.55-2.55-10.94 9.36zM.54 1.63C.21 2 0 2.56 0 3.28v17.44c0 .72.21 1.28.54 1.65l.09.09L9.8 12v-.24L.63 1.54l-.09.09zM20.5 10.12l-2.61-1.46-2.85 2.85 2.85 2.85 2.64-1.48c.75-.42.75-1.11-.03-1.76zM4.38.18L16.67 7.05l-2.55 2.55L3.18.24C3.58.07 4.01.09 4.38.18z" /></svg>
                  Google Play
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "500px", background: "#E0E7FF" }}>
              <img
                src="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=800&h=700&fit=crop&auto=format"
                alt="Lumina Bank mobile app on smartphone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Online Banking */}
      <section id="online" className="py-24" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Online Banking</SectionLabel>
          <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Full power from your browser.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Our web banking platform gives you everything you need, without needing to download anything. Works on any device, any browser.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Monitor, title: "Account overview", desc: "See balances, recent transactions, and statements across all accounts." },
              { icon: ArrowRight, title: "Transfers & payments", desc: "Send money, pay bills, and schedule future payments." },
              { icon: Eye, title: "eStatements", desc: "Download PDF or CSV statements for any date range." },
              { icon: Lock, title: "Card management", desc: "Freeze, unfreeze, set limits, or report a card lost or stolen." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--secondary)" }}>
                  <Icon size={18} style={{ color: "var(--primary)" }} />
                </div>
                <div className="text-sm text-foreground mb-2" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm text-primary-foreground" style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}>
              Login to online banking <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Security & Safety</SectionLabel>
              <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Your security is our first priority.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We use multiple layers of protection so you can bank with confidence — online and in the app.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Lock, title: "Bank-grade encryption", desc: "256-bit TLS encryption protects every connection between you and Lumina." },
                  { icon: Smartphone, title: "Two-factor authentication (2FA)", desc: "Every login requires a one-time code sent to your registered phone number." },
                  { icon: Fingerprint, title: "Biometric options", desc: "Use your fingerprint or face ID to authenticate on supported devices." },
                  { icon: Bell, title: "Real-time transaction alerts", desc: "Push notifications for every debit, credit, and login attempt." },
                  { icon: Shield, title: "Fraud monitoring", desc: "Our systems flag unusual activity 24/7. Our fraud team investigates and acts fast." },
                  { icon: AlertTriangle, title: "Device management", desc: "See all devices linked to your account and revoke access to any device, instantly." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--secondary)" }}>
                      <Icon size={16} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground mb-1" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-8">
              <div className="rounded-2xl p-7" style={{ background: "var(--foreground)" }}>
                <h3 className="text-white text-base mb-4" style={{ ...PJS, fontWeight: 700 }}>Think something's wrong?</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                  If you notice a transaction you don't recognise, or think your account has been compromised, contact us immediately.
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    "Freeze your card instantly in the app",
                    "Call our 24/7 fraud line: +265 1 800 999",
                    "Report fraud online or in-branch",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                      <CheckCircle2 size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-7 border border-border">
                <h3 className="text-foreground text-base mb-4" style={{ ...PJS, fontWeight: 700 }}>Protect yourself from scams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Lumina Bank will NEVER ask for your PIN, password, or OTP by phone, SMS, or email. If someone claims to be from Lumina and asks for these details, hang up and call us directly.
                </p>
                <Link to="/support" className="inline-flex items-center gap-1.5 text-sm" style={{ ...PJS, fontWeight: 600, color: "var(--primary)" }}>
                  Read our security guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
