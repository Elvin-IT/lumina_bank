import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, Phone, Mail, MapPin, Download, ArrowRight, Search, MessageCircle } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

const faqs = [
  { q: "How do I open an account?", a: "You can open an account entirely online or via the Lumina mobile app. You'll need your Malawi National ID (or passport) and a selfie. The process takes around 10 minutes." },
  { q: "What should I do if I forget my PIN?", a: "Open the Lumina app and tap 'Forgot PIN' on the login screen. You'll be guided through identity verification and can set a new PIN in minutes." },
  { q: "How do I report a lost or stolen card?", a: "Freeze your card instantly in the app under Cards → Freeze. Then contact us by phone at +265 1 800 100 or visit any branch to request a replacement." },
  { q: "Can I use my Lumina card abroad?", a: "Yes. Your Lumina Visa Debit card is accepted worldwide wherever Visa is accepted. Standard foreign exchange rates apply. Check our fee schedule for international transaction fees." },
  { q: "How long does an EFT transfer take?", a: "Lumina-to-Lumina transfers are instant. EFT transfers to other Malawian banks typically arrive within 1 business day. RTGS transfers for amounts above MK 1M are usually same-day." },
  { q: "Is there a minimum balance requirement?", a: "No. Lumina Everyday accounts have zero minimum balance. You won't be charged if your balance falls to MK 0." },
  { q: "How is my money protected?", a: "Lumina Bank is licensed by the Reserve Bank of Malawi. Deposits up to MK 5,000,000 per depositor are protected under the Deposit Protection Fund of Malawi." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-5 gap-4 text-left"
      >
        <span className="text-sm text-foreground" style={{ ...PJS, fontWeight: 600 }}>{q}</span>
        <ChevronDown
          size={17}
          style={{ color: "var(--primary)", flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && (
        <div className="pb-5 -mt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function SupportPage() {
  const [search, setSearch] = useState("");
  const filtered = faqs.filter((f) =>
    f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="pt-24 pb-16" style={{ background: "var(--secondary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
            How can we help?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers, reach our team, or download what you need.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Phone, title: "Call us", desc: "Mon–Sat, 7am–8pm", value: "+265 1 800 100", action: "tel:+2651800100" },
              { icon: Mail, title: "Email us", desc: "Response within 1 business day", value: "hello@luminabank.mw", action: "mailto:hello@luminabank.mw" },
              { icon: MessageCircle, title: "Live chat", desc: "Available in the app", value: "Open the Lumina app", action: "#" },
            ].map(({ icon: Icon, title, desc, value, action }) => (
              <a key={title} href={action} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-white hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--secondary)" }}>
                  <Icon size={18} style={{ color: "var(--primary)" }} />
                </div>
                <div>
                  <div className="text-sm text-foreground mb-0.5" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                  <div className="text-xs text-muted-foreground mb-1">{desc}</div>
                  <div className="text-sm text-primary" style={{ ...PJS, fontWeight: 600 }}>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-10 text-center" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Frequently asked questions
          </h2>
          <div className="bg-white rounded-2xl border border-border px-8">
            {filtered.length > 0 ? (
              filtered.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)
            ) : (
              <div className="py-10 text-center text-muted-foreground text-sm">
                No results for "{search}". <button onClick={() => setSearch("")} className="text-primary underline">Clear search</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section id="contact" className="py-20" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-10 text-center" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Visit a branch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: "Lilongwe", address: "Capital City, Area 3", hours: "Mon–Fri 8am–4pm, Sat 8am–12pm" },
              { city: "Blantyre", address: "Ginnery Corner, Chilobwe", hours: "Mon–Fri 8am–4pm, Sat 8am–12pm" },
              { city: "Mzuzu", address: "Orton Chirwa Ave, Mzuzu City", hours: "Mon–Fri 8am–3:30pm, Sat 8am–12pm" },
              { city: "Zomba", address: "Matawale, Zomba CBD", hours: "Mon–Fri 8am–3:30pm" },
            ].map(({ city, address, hours }) => (
              <div key={city} className="bg-white rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={16} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div className="text-sm text-foreground" style={{ ...PJS, fontWeight: 700 }}>{city}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{address}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">{hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section id="forms" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-foreground mb-10 text-center" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Forms & downloads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Account Opening Form", type: "PDF", size: "210 KB" },
              { title: "Business Account Application", type: "PDF", size: "340 KB" },
              { title: "Loan Application Form", type: "PDF", size: "275 KB" },
              { title: "Card Replacement Request", type: "PDF", size: "145 KB" },
              { title: "Direct Debit Authority", type: "PDF", size: "190 KB" },
              { title: "Tariff Guide", type: "PDF", size: "520 KB" },
            ].map(({ title, type, size }) => (
              <a key={title} href="#" className="flex items-center justify-between p-5 rounded-2xl border border-border bg-white hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--muted)" }}>
                    <Download size={16} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground" style={{ ...PJS, fontWeight: 600 }}>{title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{type} · {size}</div>
                  </div>
                </div>
                <ArrowRight size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud */}
      <section id="fraud" className="py-12 border-t border-border" style={{ background: "#FFF7ED" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl text-foreground mb-3" style={{ ...PJS, fontWeight: 700 }}>Suspect fraud?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
            Call our 24/7 fraud line immediately: <strong>+265 1 800 999</strong>. We'll help you freeze your account and investigate.
          </p>
          <Link to="/digital-banking#security" className="inline-flex items-center gap-2 text-sm" style={{ ...PJS, fontWeight: 600, color: "var(--primary)" }}>
            Read our security advice <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
