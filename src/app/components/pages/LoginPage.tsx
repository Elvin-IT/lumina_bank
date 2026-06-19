import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

export function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful! (Demo)");
    }, 1500);
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F0FDF9 50%, #ffffff 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ minHeight: "calc(100vh - 80px)" }}>
            {/* Left: Form */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" style={PJS}>
                  ← Back to home
                </Link>

                <h1 className="text-4xl lg:text-5xl text-foreground mb-3 leading-tight" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
                  Welcome back
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Sign in to your Lumina Bank account to manage your money.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                    Email address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      style={PJS}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      style={PJS}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-700" style={PJS}>
                      {error}
                    </p>
                  </div>
                )}

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-border rounded" />
                    <span className="text-muted-foreground hover:text-foreground" style={PJS}>
                      Remember me
                    </span>
                  </label>
                  <a href="#forgot-password" className="text-primary hover:underline font-semibold" style={PJS}>
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-primary-foreground transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                  {!isLoading && <ArrowRight size={16} />}
                </button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground" style={PJS}>
                      Don't have an account?
                    </span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <Link
                  to="/signup"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border text-foreground transition-colors hover:bg-muted"
                  style={{ ...PJS, fontWeight: 600 }}
                >
                  Create an account
                  <ArrowRight size={16} />
                </Link>
              </form>

              {/* Security Info */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3" style={PJS}>
                  🔐 Bank-grade security
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground" style={PJS}>
                  <li>✓ 256-bit SSL encryption</li>
                  <li>✓ Two-factor authentication available</li>
                  <li>✓ 24/7 fraud monitoring</li>
                </ul>
              </div>
            </div>

            {/* Right: Info */}
            <div className="hidden lg:flex flex-col justify-center">
              <div className="rounded-3xl p-10 bg-white border border-border" style={{ background: "linear-gradient(135deg, rgba(27, 63, 160, 0.05) 0%, rgba(13, 170, 130, 0.05) 100%)" }}>
                <div className="mb-8">
                  <h2 className="text-3xl text-foreground mb-4" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.02em" }}>
                    Secure Login
                  </h2>
                  <p className="text-muted-foreground leading-relaxed" style={PJS}>
                    Your Lumina Bank account is protected with bank-grade security measures.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Multi-factor authentication",
                      desc: "Protect your account with 2FA via SMS or email",
                    },
                    {
                      title: "Real-time monitoring",
                      desc: "We monitor all access and notify you of suspicious activity",
                    },
                    {
                      title: "Biometric login",
                      desc: "Use fingerprint or face recognition on your mobile device",
                    },
                    {
                      title: "24/7 support",
                      desc: "Our team is available to help with any security concerns",
                    },
                  ].map(({ title, desc }) => (
                    <div key={title}>
                      <h3 className="text-sm font-semibold text-foreground mb-1" style={PJS}>
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground" style={PJS}>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
