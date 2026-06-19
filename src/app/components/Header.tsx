import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Personal",
    href: "/personal",
    children: [
      { label: "Everyday Accounts", href: "/personal#accounts" },
      { label: "Savings & Goals", href: "/personal#savings" },
      { label: "Cards", href: "/personal#cards" },
    ],
  },
  {
    label: "Business",
    href: "/business",
    children: [
      { label: "SME Accounts", href: "/business#accounts" },
      { label: "Payments & POS", href: "/business#payments" },
      { label: "Business Loans", href: "/business#loans" },
    ],
  },
  {
    label: "Digital Banking",
    href: "/digital-banking",
    children: [
      { label: "Mobile App", href: "/digital-banking#app" },
      { label: "Online Banking", href: "/digital-banking#online" },
      { label: "Security & Safety", href: "/digital-banking#security" },
    ],
  },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
  { label: "Learning Hub", href: "/learning-hub" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-sm border-b border-border" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z" fill="white" opacity="0.3" />
                <path d="M9 2L15.5 6V9H9V2Z" fill="white" />
                <path d="M9 9H15.5V12L9 16V9Z" fill="white" opacity="0.6" />
              </svg>
            </div>
            <span
              className="text-foreground"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.02em" }}
            >
              Lumina<span style={{ color: "var(--primary)" }}>Bank</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-border py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`
                  }
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              Open an account
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive ? "text-primary bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`
                  }
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
              <Link
                to="/login"
                className="text-center text-sm px-4 py-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-center text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                Open an account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
