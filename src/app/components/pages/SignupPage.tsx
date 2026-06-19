import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Phone, User, Building2, CheckCircle2 } from "lucide-react";

const PJS = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

type AccountType = "personal" | "business";

export function SignupPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [accountType, setAccountType] = useState<AccountType>("personal");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    idType: "national",
    idNumber: "",
    employmentStatus: "employed",
    incomeRange: "10k-50k",
    businessName: "",
    businessType: "sole-proprietor",
    agreeTerms: false,
    agreePrivacy: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (accountType === "personal") {
      if (!formData.idNumber.trim()) newErrors.idNumber = "ID number is required";
    } else {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";
    if (!formData.agreePrivacy) newErrors.agreePrivacy = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully! (Demo)\n\nYou can now log in with your credentials.");
    }, 1500);
  };

  return (
    <div className="bg-background">
      <section className="relative pt-20 pb-12 overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F0FDF9 50%, #ffffff 100%)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center">
            {/* Header */}
            <div className="mb-10">
              <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6" style={PJS}>
                ← Back to home
              </Link>

              <h1 className="text-4xl lg:text-5xl text-foreground mb-3 leading-tight" style={{ ...PJS, fontWeight: 800, letterSpacing: "-0.03em" }}>
                Open your Lumina account
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Join thousands of Malawians who are banking smarter. Choose your account type and get started in minutes.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="mb-8 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      s <= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                    style={PJS}
                  >
                    {s < step ? "✓" : s}
                  </div>
                  {s < 3 && (
                    <div className={`h-0.5 w-12 transition-all ${s < step ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Account Type Selection (Visible on all steps) */}
              <div className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-foreground mb-4" style={PJS}>
                  Account Type
                </h3>
                <div className="space-y-3">
                  {[
                    { type: "personal" as const, label: "Personal Banking", icon: User, desc: "For individuals" },
                    { type: "business" as const, label: "Business Banking", icon: Building2, desc: "For SMEs & entrepreneurs" },
                  ].map(({ type, label, icon: Icon, desc }) => (
                    <button
                      key={type}
                      onClick={() => {
                        setAccountType(type);
                        setFormData((prev) => ({ ...prev, businessName: "", businessType: "sole-proprietor" }));
                      }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        accountType === type
                          ? "border-primary bg-primary/5"
                          : "border-border bg-white hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon size={18} style={{ color: accountType === type ? "var(--primary)" : "var(--muted-foreground)" }} className="mt-1" />
                        <div>
                          <div className="text-sm font-semibold text-foreground" style={PJS}>
                            {label}
                          </div>
                          <div className="text-xs text-muted-foreground" style={PJS}>
                            {desc}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-border">
                <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="space-y-5">
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl text-foreground font-semibold" style={PJS}>
                          Your Information
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1" style={PJS}>
                          We'll use this to set up your account
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            style={PJS}
                          />
                          {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            style={PJS}
                          />
                          {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                          Email address
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            style={PJS}
                          />
                        </div>
                        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                          Phone number
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+265 1 23 45 6789"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            style={PJS}
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                      </div>
                    </>
                  )}

                  {/* Step 2: Security & Verification */}
                  {step === 2 && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl text-foreground font-semibold" style={PJS}>
                          Secure your account
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1" style={PJS}>
                          Create a strong password and verify your identity
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                          Password
                        </label>
                        <div className="relative">
                          <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password (min 8 characters)"
                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            style={PJS}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                          Confirm password
                        </label>
                        <div className="relative">
                          <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            style={PJS}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>}
                      </div>

                      {/* Personal Account Verification */}
                      {accountType === "personal" && (
                        <>
                          <div className="pt-4 border-t border-border">
                            <h3 className="text-sm font-semibold text-foreground mb-4" style={PJS}>
                              Identity Verification
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  ID Type
                                </label>
                                <select
                                  name="idType"
                                  value={formData.idType}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                >
                                  <option value="national">National ID</option>
                                  <option value="passport">Passport</option>
                                  <option value="drivers">Driver's License</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  ID Number
                                </label>
                                <input
                                  type="text"
                                  name="idNumber"
                                  value={formData.idNumber}
                                  onChange={handleChange}
                                  placeholder="Enter your ID number"
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                />
                                {errors.idNumber && <p className="text-xs text-red-600 mt-1">{errors.idNumber}</p>}
                              </div>

                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  Employment Status
                                </label>
                                <select
                                  name="employmentStatus"
                                  value={formData.employmentStatus}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                >
                                  <option value="employed">Employed</option>
                                  <option value="self-employed">Self-employed</option>
                                  <option value="student">Student</option>
                                  <option value="retired">Retired</option>
                                  <option value="unemployed">Unemployed</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  Monthly Income Range
                                </label>
                                <select
                                  name="incomeRange"
                                  value={formData.incomeRange}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                >
                                  <option value="under-10k">Under 10,000 MK</option>
                                  <option value="10k-50k">10,000 - 50,000 MK</option>
                                  <option value="50k-100k">50,000 - 100,000 MK</option>
                                  <option value="100k-250k">100,000 - 250,000 MK</option>
                                  <option value="over-250k">Over 250,000 MK</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Business Account Verification */}
                      {accountType === "business" && (
                        <>
                          <div className="pt-4 border-t border-border">
                            <h3 className="text-sm font-semibold text-foreground mb-4" style={PJS}>
                              Business Information
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  Business Name
                                </label>
                                <input
                                  type="text"
                                  name="businessName"
                                  value={formData.businessName}
                                  onChange={handleChange}
                                  placeholder="Your business name"
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                />
                                {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
                              </div>

                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  Business Type
                                </label>
                                <select
                                  name="businessType"
                                  value={formData.businessType}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                >
                                  <option value="sole-proprietor">Sole Proprietor</option>
                                  <option value="partnership">Partnership</option>
                                  <option value="limited-company">Limited Company</option>
                                  <option value="ngo">NGO/Non-profit</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2" style={PJS}>
                                  Company Registration Number
                                </label>
                                <input
                                  type="text"
                                  name="idNumber"
                                  value={formData.idNumber}
                                  onChange={handleChange}
                                  placeholder="CIPA registration number (if applicable)"
                                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  style={PJS}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}

                  {/* Step 3: Terms & Conditions */}
                  {step === 3 && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl text-foreground font-semibold" style={PJS}>
                          Review & Agree
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1" style={PJS}>
                          Please review and accept our terms before opening your account
                        </p>
                      </div>

                      {/* Summary */}
                      <div className="bg-muted rounded-xl p-4 space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground" style={PJS}>Account Type:</span>
                          <span className="text-sm font-semibold text-foreground" style={PJS}>
                            {accountType === "personal" ? "Personal" : "Business"} Banking
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground" style={PJS}>Name:</span>
                          <span className="text-sm font-semibold text-foreground" style={PJS}>
                            {formData.firstName} {formData.lastName}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground" style={PJS}>Email:</span>
                          <span className="text-sm font-semibold text-foreground" style={PJS}>
                            {formData.email}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6 max-h-48 overflow-y-auto rounded-lg border border-border p-4 bg-white">
                        <h3 className="font-semibold text-sm text-foreground" style={PJS}>
                          Terms of Service
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed" style={PJS}>
                          By opening a Lumina Bank account, you agree to comply with all applicable laws and regulations. You understand that Lumina Bank may conduct identity verification, credit checks, and other due diligence as required by Malawian banking regulations and Reserve Bank requirements. Your account may be subject to monitoring for suspicious activity and anti-money laundering compliance.
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed" style={PJS}>
                          You acknowledge that Lumina Bank reserves the right to refuse service, close accounts, or report suspicious activity to relevant authorities. All transactions are subject to our full terms and conditions.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="w-4 h-4 mt-1 rounded border-border"
                          />
                          <span className="text-sm text-muted-foreground hover:text-foreground" style={PJS}>
                            I agree to the Terms of Service and understand the account requirements
                          </span>
                        </label>
                        {errors.agreeTerms && <p className="text-xs text-red-600 ml-7">{errors.agreeTerms}</p>}

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreePrivacy"
                            checked={formData.agreePrivacy}
                            onChange={handleChange}
                            className="w-4 h-4 mt-1 rounded border-border"
                          />
                          <span className="text-sm text-muted-foreground hover:text-foreground" style={PJS}>
                            I agree to the Privacy Policy and consent to the processing of my personal data
                          </span>
                        </label>
                        {errors.agreePrivacy && <p className="text-xs text-red-600 ml-7">{errors.agreePrivacy}</p>}
                      </div>
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-6">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep((step - 1) as 1 | 2)}
                        className="flex-1 px-6 py-3.5 rounded-xl border border-border text-foreground transition-colors hover:bg-muted"
                        style={{ ...PJS, fontWeight: 600 }}
                      >
                        Back
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-primary-foreground transition-all hover:opacity-90 active:scale-95"
                        style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}
                      >
                        Next <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-primary-foreground transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ ...PJS, fontWeight: 700, background: "var(--primary)" }}
                      >
                        {isLoading ? "Creating account..." : "Create account"}
                        {!isLoading && <CheckCircle2 size={16} />}
                      </button>
                    )}
                  </div>

                  {/* Login Link */}
                  {step === 1 && (
                    <div className="pt-2 text-center">
                      <span className="text-sm text-muted-foreground" style={PJS}>
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary font-semibold hover:underline" style={PJS}>
                          Sign in
                        </Link>
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
