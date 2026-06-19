import { useState } from "react";
import { Link } from "react-router";
import { BookOpen, TrendingUp, Building2, Shield, Clock, ArrowRight, ChevronRight } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

const categories = ["All", "Saving", "Budgeting", "Business", "Credit", "Security"];

const articles = [
  {
    category: "Saving",
    title: "How to build a six-month emergency fund on any salary",
    excerpt: "An emergency fund is your financial safety net. Here's a step-by-step plan to build one — even if you're starting from zero.",
    readTime: "5 min read",
    date: "12 Jun 2026",
    icon: TrendingUp,
    color: "#F0FDF9",
    iconColor: "var(--accent)",
  },
  {
    category: "Budgeting",
    title: "The 50/30/20 rule: a simple framework for your money",
    excerpt: "Allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment. We break down how to apply this to a Malawian household budget.",
    readTime: "4 min read",
    date: "8 Jun 2026",
    icon: BookOpen,
    color: "#EEF2FF",
    iconColor: "var(--primary)",
  },
  {
    category: "Business",
    title: "How to separate your business and personal finances",
    excerpt: "Mixing personal and business money is one of the most common mistakes SME owners make. Here's why it matters and how to fix it.",
    readTime: "6 min read",
    date: "3 Jun 2026",
    icon: Building2,
    color: "#FFF7ED",
    iconColor: "#D97706",
  },
  {
    category: "Credit",
    title: "What your credit history means — and how to improve it",
    excerpt: "A good credit record opens doors to better loan terms. Learn how credit scoring works in Malawi and what steps to take right now.",
    readTime: "7 min read",
    date: "28 May 2026",
    icon: TrendingUp,
    color: "#F0FDF9",
    iconColor: "var(--accent)",
  },
  {
    category: "Security",
    title: "5 scams targeting bank customers in 2026 — and how to spot them",
    excerpt: "Fraudsters are getting more sophisticated. We break down the most common scams circulating right now and the red flags to watch for.",
    readTime: "5 min read",
    date: "22 May 2026",
    icon: Shield,
    color: "#EEF2FF",
    iconColor: "var(--primary)",
  },
  {
    category: "Business",
    title: "Understanding your cash flow: a guide for small business owners",
    excerpt: "Profit and cash flow are not the same thing. This guide explains the difference and how to forecast your business cash position month by month.",
    readTime: "8 min read",
    date: "15 May 2026",
    icon: Building2,
    color: "#FFF7ED",
    iconColor: "#D97706",
  },
  {
    category: "Saving",
    title: "Fixed deposits vs. savings accounts: which is right for you?",
    excerpt: "Higher rates or more flexibility? We compare Lumina's fixed deposit and savings account options so you can choose what fits your goals.",
    readTime: "4 min read",
    date: "10 May 2026",
    icon: TrendingUp,
    color: "#F0FDF9",
    iconColor: "var(--accent)",
  },
  {
    category: "Budgeting",
    title: "How to plan for school fees without stress",
    excerpt: "School fees are predictable — yet many families scramble when they arrive. Here's a straightforward plan to save in advance and avoid the crunch.",
    readTime: "5 min read",
    date: "5 May 2026",
    icon: BookOpen,
    color: "#EEF2FF",
    iconColor: "var(--primary)",
  },
  {
    category: "Credit",
    title: "What to expect when applying for a business loan",
    excerpt: "A step-by-step guide to the SME loan application process at Lumina Bank — documents needed, timeline, and how decisions are made.",
    readTime: "6 min read",
    date: "28 Apr 2026",
    icon: Building2,
    color: "#FFF7ED",
    iconColor: "#D97706",
  },
];

export function LearningHubPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="pt-24 pb-16" style={{ background: "var(--muted)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "var(--secondary)" }}>
            <BookOpen size={24} style={{ color: "var(--primary)" }} />
          </div>
          <h1 className="text-4xl lg:text-5xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
            Learning Hub
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Practical guides on saving, budgeting, growing a business, and understanding credit — written in plain language for everyone.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 rounded-full text-sm transition-colors"
                style={
                  active === cat
                    ? { ...PJS, fontWeight: 600, background: "var(--primary)", color: "white" }
                    : { ...PJS, fontWeight: 500, background: "var(--muted)", color: "var(--muted-foreground)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.title}
                  to="#"
                  className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="h-44 flex items-center justify-center" style={{ background: article.color }}>
                    <Icon size={40} style={{ color: article.iconColor, opacity: 0.4 }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ ...PJS, fontWeight: 600, background: "var(--secondary)", color: "var(--primary)" }}>
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={11} />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-base text-foreground mb-2 leading-snug group-hover:text-primary transition-colors" style={{ ...PJS, fontWeight: 700 }}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <div className="flex items-center gap-1 text-xs group-hover:gap-2 transition-all" style={{ ...PJS, fontWeight: 600, color: "var(--primary)" }}>
                        Read more <ChevronRight size={13} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">No articles in this category yet.</div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-border" style={{ background: "var(--secondary)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-foreground mb-3" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Get new guides in your inbox
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We publish 2–4 guides each month. No spam, no sales pitches — just practical financial knowledge.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            />
            <button
              className="px-5 py-3 rounded-xl text-sm text-primary-foreground transition-colors hover:opacity-90"
              style={{ ...PJS, fontWeight: 600, background: "var(--primary)" }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Unsubscribe any time. We respect your privacy.</p>
        </div>
      </section>
    </div>
  );
}
