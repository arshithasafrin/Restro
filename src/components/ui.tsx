import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "arrow"
    | "check"
    | "star"
    | "menu"
    | "close"
    | "bell"
    | "pin"
    | "chart"
    | "qr"
    | "shield"
    | "video"
    | "instagram"
    | "card"
    | "users"
    | "store"
    | "message"
    | "globe"
    | "spark"
    | "plus"
    | "mail"
    | "phone"
    | "play";
  className?: string;
}) {
  const props = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 12.5 9.2 17 19 7" />
        </svg>
      );
    case "star":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="m12 3 2.4 5.4 5.8.6-4.4 3.8 1.3 5.7L12 15.8 6.9 18.5 8.2 12.8 3.8 9l5.8-.6L12 3Z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M6 16V10a6 6 0 1 1 12 0v6l1.5 2H4.5L6 16Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
          <circle cx="12" cy="11" r="1.6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M4 19V5M4 19h16" />
          <path d="m7 14 4-4 3 2 5-6" />
        </svg>
      );
    case "qr":
      return (
        <svg {...props}>
          <path d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h2M18 14v2M14 18h5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "video":
      return (
        <svg {...props}>
          <rect x="3" y="6" width="12" height="12" rx="2" />
          <path d="m15 10 6-3v10l-6-3" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.2" />
          <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "card":
      return (
        <svg {...props}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="9" r="3" />
          <path d="M4 18c.6-2.4 2.4-3.5 5-3.5s4.4 1.1 5 3.5" />
          <circle cx="17" cy="9.5" r="2.2" />
          <path d="M16 14.6c1.8.3 3 .9 3.6 2.4" />
        </svg>
      );
    case "store":
      return (
        <svg {...props}>
          <path d="M4 10 6 5h12l2 5" />
          <path d="M4 10h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Z" />
          <path d="M9 19v-5h6v5" />
        </svg>
      );
    case "message":
      return (
        <svg {...props}>
          <path d="M5 16.5 4 20l3.8-1.4A8 8 0 1 0 5 16.5Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.2 2.4 3.2 5 3.2 8s-1 5.6-3.2 8c-2.2-2.4-3.2-5-3.2-8s1-5.6 3.2-8Z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.2 2.2M15.8 15.8 18 18M18 6l-2.2 2.2M8.2 15.8 6 18" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M8 4h2l1.2 3-1.6 1.2a12 12 0 0 0 6.2 6.2L17 13l3 1.2v2A2 2 0 0 1 18 18 14 14 0 0 1 6 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "play":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M9 7.5v9l8-4.5-8-4.5Z" />
        </svg>
      );
  }
}

export function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#c2a463] ${className}`} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < value ? "text-[#c2a463]" : "text-[#e4e4e4]"}`}
        />
      ))}
    </span>
  );
}

export function SampleTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-white px-2 py-0.5 font-geist text-[10px] font-semibold uppercase tracking-[0.08em] text-blue ring-1 ring-blue/20 ${className}`}
    >
      Sample
    </span>
  );
}

export function Phone({
  children,
  label,
  className = "",
  size = "lg",
}: {
  children: ReactNode;
  label: string;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <div
      className={`glow-phone relative mx-auto ${size === "md" ? "max-w-[280px]" : "max-w-[300px]"} w-full ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="glow-btn glow-btn-l1" />
      <span className="glow-btn glow-btn-l2" />
      <span className="glow-btn glow-btn-l3" />
      <span className="glow-btn glow-btn-r" />
      <div className="glow-rim" />
      <div className="glow-body" />
      <div className="glow-screen">
        <div className="glow-island" />
        {children}
      </div>
    </div>
  );
}

export function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-5 pt-3.5 text-[11px] font-semibold ${light ? "text-white" : "text-ink"}`}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2 w-3 rounded-sm bg-current opacity-80" />
        <span className="inline-block h-2.5 w-2 rounded-sm bg-current" />
        <span className="inline-block h-[10px] w-[18px] rounded-[3px] border border-current" />
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-geist text-[16px] font-medium leading-4 tracking-[-0.03em] text-blue">{children}</p>
  );
}

export function H2({
  children,
  light = false,
  className = "",
  id,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={`display text-[28px] md:text-[48px] md:leading-[52.8px] ${light ? "text-mist" : "text-black"} ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[17px] leading-[25.5px] tracking-[-0.02em] text-body ${className}`}>{children}</p>
  );
}

export function Blue({ children }: { children: ReactNode }) {
  return <span className="text-blue">{children}</span>;
}

export function TextLink({
  href,
  children,
  light = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.02em] ${light ? "text-white" : "text-ink"} hover:text-blue`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onDemo }: { onDemo: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = NAV.map((item) => item.href.slice(1)).filter((id) => id !== "contact");
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 120) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled || open ? "bg-white/95 shadow-[0_1px_0_rgba(16,35,41,0.06)] backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-4 md:px-8">
        <a href="#home" className="relative z-10 shrink-0" aria-label="Restrosights home">
          <img src="/logo-light.png" alt="Restrosights" className="h-8 w-auto md:h-9" />
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`font-geist text-[15px] font-medium ${active === item.href ? "text-blue" : "text-black"} hover:text-blue`}
              onClick={() => {
                if (item.href === "#contact") onDemo();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="relative z-10 flex items-center gap-2">
          <button type="button" className="btn btn-primary hidden sm:inline-flex" onClick={onDemo}>
            Book a Free Demo
            <Icon name="arrow" className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-mist py-3 text-[16px] font-medium text-ink"
                onClick={() => {
                  setOpen(false);
                  if (item.href === "#contact") onDemo();
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="btn btn-primary mt-4 w-full"
            onClick={() => {
              setOpen(false);
              onDemo();
            }}
          >
            Book a Free Demo
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
}

export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const node = ref.current;
    const focusable = node?.querySelector<HTMLElement>("input, textarea, button");
    focusable?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !node) return;
      const items = [...node.querySelectorAll<HTMLElement>("input, textarea, button, a")].filter(
        (el) => !el.hasAttribute("disabled"),
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-[#102329]/45 p-4" onMouseDown={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-[480px] overflow-auto rounded-[24px] bg-white p-6 shadow-[0_30px_80px_rgba(16,35,41,0.2)] md:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 id={titleId} className="display mt-2 text-[28px] text-black">
              Book a Free Demo
            </h2>
          </div>
          <button type="button" className="grid h-9 w-9 place-items-center rounded-lg text-ink" onClick={onClose} aria-label="Close dialog">
            <Icon name="close" />
          </button>
        </div>
        <p className="mt-3 text-[15px] leading-6 text-body">
          Talk to our team about a more consistent review process, earlier guest feedback and multi-location groups.
        </p>
        {sent ? (
          <div className="mt-6 rounded-2xl bg-mist p-5" role="status">
            <p className="font-medium text-ink">Thanks. Your demo request is noted on this page.</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              This preview does not send email yet. Use the placeholder contact details in the footer until the official inbox is connected.
            </p>
            <button type="button" className="btn btn-primary mt-4" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Name" name="name" autoComplete="name" required />
            <Field label="Restaurant" name="restaurant" autoComplete="organization" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
            <label className="block text-sm font-medium text-ink" htmlFor="demo-message">
              Message <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id="demo-message"
              name="message"
              rows={3}
              className="w-full rounded-xl border border-line bg-white px-3 py-2 text-[15px] text-ink outline-none focus:border-blue"
            />
            <button type="submit" className="btn btn-primary w-full">
              Book a Free Demo
              <Icon name="arrow" className="h-4 w-4" />
            </button>
            <p className="text-xs leading-5 text-muted">
              Confirm the final billing terms, setup charges and subscription conditions before publishing.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const id = `demo-${name}`;
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-[15px] text-ink outline-none focus:border-blue"
      />
    </div>
  );
}

export function Footer({ onDemo }: { onDemo: () => void }) {
  return (
    <footer className="bg-white">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <img src="/logo-light.png" alt="Restrosights" className="h-9 w-auto" />
          <p className="mt-4 max-w-md text-[15px] leading-6 text-body">
            A restaurant reputation and guest-experience system designed to help restaurants collect genuine reviews, understand customer feedback and build stronger online trust.
          </p>
        </div>
        <div>
          <p className="font-geist text-sm font-semibold text-ink">Quick Links</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-body hover:text-blue"
                  onClick={() => {
                    if (item.href === "#contact") onDemo();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-geist text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-4 space-y-3 text-[15px] text-body">
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 text-blue" />
              <span>
                <span className="block text-xs uppercase tracking-wide text-muted">Email placeholder</span>
                <a className="hover:text-blue" href="mailto:hello@restrosights.com">
                  hello@restrosights.com
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="phone" className="mt-0.5 h-4 w-4 text-blue" />
              <span>
                <span className="block text-xs uppercase tracking-wide text-muted">Phone placeholder</span>
                <a className="hover:text-blue" href="tel:+910000000000">
                  +91 00000 00000
                </a>
              </span>
            </li>
          </ul>
          <div className="mt-4 flex gap-2" aria-label="Social media placeholders">
            {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((name) => (
              <a
                key={name}
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  onDemo();
                }}
                className="grid h-9 w-9 place-items-center rounded-full bg-mist text-xs font-semibold text-ink hover:text-blue"
                aria-label={`${name} placeholder`}
              >
                {name.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Ready to improve your restaurant’s reputation? Book a demo today.</p>
          <button type="button" className="font-medium text-blue hover:underline" onClick={onDemo}>
            Book a Free Demo
          </button>
        </div>
      </div>
    </footer>
  );
}
