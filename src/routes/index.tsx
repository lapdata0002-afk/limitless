import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Infinity as InfinityIcon,
  Zap,
  Lock,
  KeyRound,
  Gift,
  MessageCircle,
  Download,
  PlayCircle,
  Star,
  Check,
  ChevronDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const WHATSAPP = "+91 73200 91112";
const WA_LINK = "https://wa.me/917320091112";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Limitless — Unlimited Credits for Lovable. Build Without Limits." },
      {
        name: "description",
        content:
          "Limitless is a Chrome extension that unlocks unlimited credits for your existing Lovable workspace. No limits, no workspace transfer, instant activation. Free 15-minute trial.",
      },
      { property: "og:title", content: "Limitless — Build Without Any Limits" },
      {
        property: "og:description",
        content:
          "Unlock unlimited credits for Lovable with the Limitless Chrome extension. Free 15-minute trial, instant WhatsApp activation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* ---------------------------------- Data ---------------------------------- */

const NAV = ["Home", "Features", "Reviews", "Pricing", "Setup", "FAQ"];

const FEATURES = [
  {
    icon: Gift,
    title: "15-Minute Free Trial",
    desc: "Test every feature with unlimited credits before you pay a cent.",
  },
  {
    icon: Zap,
    title: "Unlimited Prompts & Chat",
    desc: "No credit deductions, no token restrictions. Just keep building.",
  },
  {
    icon: Lock,
    title: "Works On Current Projects",
    desc: "No project migrations, no workspace transfer. It just works.",
  },
  {
    icon: KeyRound,
    title: "Instant Key Delivery",
    desc: "Your activation key arrives instantly via WhatsApp, 24/7.",
  },
];

const MARQUEE = [
  "⚡ Instant Activation",
  "✅ 15-Min Free Trial",
  "🔒 No Workspace Transfer",
  "♾️ No Credit Limits",
  "💬 WhatsApp Support",
  "🚀 Works Immediately",
];

const STEPS = [
  {
    icon: MessageCircle,
    n: "01",
    title: "Message Us on WhatsApp",
    desc: "Tap the button and send us a message. We reply within minutes, every day.",
    cta: "Message Now",
  },
  {
    icon: KeyRound,
    n: "02",
    title: "Receive Your Access Key",
    desc: "After payment (or for a free trial) we instantly send you a unique activation key.",
    cta: "Get Trial Key",
  },
  {
    icon: Rocket,
    n: "03",
    title: "Install, Activate & Build",
    desc: "Load the extension in Chrome, enter your key, and build with unlimited credits.",
    cta: "See Setup Guide",
  },
];

const REVIEWS = [
  {
    quote:
      "Limitless saved me over ₹8,000 in credit costs. I built and launched my SaaS MVP in under 24 hours without hitting a single limit.",
    name: "Amit S.",
    role: "Indie Hacker",
    emoji: "💻",
  },
  {
    quote:
      "Not needing to migrate my workspace or projects was the best part. I just enabled the extension and kept building immediately.",
    name: "David K.",
    role: "React Developer",
    emoji: "🚀",
  },
  {
    quote:
      "The short pass was exactly what I needed for a hackathon. Activates instantly via WhatsApp and works flawlessly.",
    name: "Rajesh M.",
    role: "Startup Founder",
    emoji: "⚙️",
  },
];

const PLANS = [
  {
    name: "1 Month Pass",
    sub: "30 days of unlimited building",
    inr: "₹2,499",
    usd: "$29.99",
    badge: "Best Value",
  },
  { name: "7 Days Pass", sub: "Week-long unlimited access", inr: "₹1,299", usd: "$14.99" },
  { name: "24 Hours Pass", sub: "Full-day build marathon", inr: "₹349", usd: "$4.99" },
  { name: "12 Hours Pass", sub: "Half-day builder session", inr: "₹199", usd: "$2.99" },
];

const PLAN_PERKS = [
  "No credit limits",
  "Existing workspace",
  "No workspace transfer",
  "Instant activation",
];

const SETUP_STEPS = [
  {
    t: "Download the ZIP",
    d: "Download the extension ZIP file. After unzipping you'll see the extension folder — don't open the folder contents directly.",
  },
  {
    t: "Load in Chrome",
    d: "Open chrome://extensions, enable Developer Mode (top right), then click Load unpacked. Double-click the extracted folder — you should see the files inside before selecting.",
  },
  {
    t: "Open Your Workspace",
    d: "Open your AI builder workspace. We strongly recommend using a backup (remixed) project when making changes.",
  },
  {
    t: "Activate",
    d: "Get your activation code after payment (or your trial code) and enter it into the extension.",
  },
  {
    t: "Reload & Turn On",
    d: "Press F5 to reload the page, then click the Turn On button in the extension.",
  },
  {
    t: "Start Building",
    d: "Open the Chat button inside the extension and enjoy unlimited credits.",
  },
];

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes. Try unlimited credit usage for 15 minutes before choosing a plan. No payment or registration required to start.",
  },
  {
    q: "How does the hourly pass work? Is the time continuous?",
    a: "Each pass runs continuously from activation for its full duration (e.g. a 24 Hours Pass = 24 consecutive hours of unlimited building).",
  },
  {
    q: "Do I need to transfer my workspace or projects?",
    a: "No. Limitless works directly on your existing workspace — there are no migrations or workspace transfers required.",
  },
  {
    q: "How fast is activation?",
    a: "Instant. Once you message us on WhatsApp and complete payment (or request a trial), your key is delivered within minutes.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is hourly: ₹20/hr in India and $0.50/hr in the US. Use the calculator to estimate your cost, or pick a pass for bigger savings.",
  },
  {
    q: "What is the Chrome extension called?",
    a: "It's called Limitless — a Chrome extension that unlocks unlimited credits for your AI builder.",
  },
  {
    q: "Is support available?",
    a: "Yes. We provide friendly WhatsApp support and reply within minutes, every day.",
  },
];

/* ------------------------------- Components ------------------------------- */

function WaButton({
  children,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const styles = {
    primary:
      "bg-gradient-to-r from-brand to-brand-2 text-brand-foreground shadow-[0_8px_30px_-6px_var(--brand)] hover:shadow-[0_12px_44px_-8px_var(--brand)] hover:-translate-y-0.5",
    outline:
      "border border-border bg-card/40 text-foreground hover:bg-card hover:-translate-y-0.5",
    ghost: "text-muted-foreground hover:text-foreground",
  }[variant];
  return (
    <a href={WA_LINK} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
      {children}
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-brand-foreground">
            <InfinityIcon className="h-5 w-5" />
          </span>
          Limitless
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n}
            </a>
          ))}
        </div>
        <WaButton className="!px-5 !py-2.5">Get Access</WaButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24">
      {/* glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute right-[5%] top-[20%] h-[360px] w-[360px] rounded-full bg-brand-2/20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-5xl px-5 text-center">
        <SectionLabel>
          <Sparkles className="h-3.5 w-3.5" /> Instant Delivery · Free Trial
        </SectionLabel>
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Unlimited Credits.
          <br />
          <span className="text-gradient">Build Without Any Limits.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          No credit limits. No workspace transfer. The Limitless Chrome extension works
          with your existing workspace — so you just keep building.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WaButton className="!px-7 !py-3.5 !text-base">
            <Download className="h-5 w-5" /> Download Extension (ZIP)
          </WaButton>
          <a
            href="#setup"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-base font-semibold transition-all hover:bg-card hover:-translate-y-0.5"
          >
            <PlayCircle className="h-5 w-5 text-brand" /> Watch Setup · 2 Min
          </a>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          🎁 Free 15-minute trial built in — unlimited credits, no card required.
        </p>

        {/* feature cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass group rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/30 py-4">
      <div className="flex w-max animate-marquee gap-10">
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <span key={i} className="text-sm font-medium text-muted-foreground">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function Steps() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <SectionLabel>⚡ Simple 3-Step Process</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Get Started
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From zero to building in under 5 minutes.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="glass relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-brand-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-5xl font-bold text-muted/40">{s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
              >
                {s.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaBanner({ title }: { title: string }) {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-brand/15 via-card to-brand-2/15 p-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-brand-foreground">
            <MessageCircle className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">{title}</p>
            <p className="text-sm text-muted-foreground">
              {WHATSAPP} · We reply within minutes, every day
            </p>
          </div>
        </div>
        <WaButton className="shrink-0">💬 Start on WhatsApp</WaButton>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <SectionLabel>⭐️ Loved by Builders</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            What Developers Say
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            See how indie hackers and developers are scaling their builds.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="glass rounded-3xl p-8">
              <div className="flex gap-1 text-brand-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-pretty text-sm leading-relaxed text-foreground/90">
                "{r.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-xl">
                  {r.emoji}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCalculator() {
  const [hours, setHours] = useState(24);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const cost = useMemo(() => {
    const rate = currency === "INR" ? 20 : 0.5;
    const total = hours * rate;
    return currency === "INR"
      ? `₹${total.toFixed(2)}`
      : `$${total.toFixed(2)}`;
  }, [hours, currency]);

  return (
    <div className="glass mt-10 rounded-3xl p-8">
      <h3 className="text-xl font-semibold">Price Calculator</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Estimate your cost based on how many hours you plan to build.
      </p>

      <div className="mt-7 grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Duration</span>
            <span className="font-semibold text-brand">{hours} hours</span>
          </div>
          <input
            type="range"
            min={1}
            max={168}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[oklch(0.72_0.19_300)]"
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>1 hr</span>
            <span>1 week</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[6, 12, 24, 48, 168].map((h) => (
              <button
                key={h}
                onClick={() => setHours(h)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  hours === h
                    ? "bg-brand text-brand-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {h >= 24 ? `${h / 24}d` : `${h}h`}
              </button>
            ))}
          </div>
          <div className="mt-5">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Currency</p>
            <div className="inline-flex rounded-full border border-border p-1">
              {(["INR", "USD"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    currency === c ? "bg-secondary text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {c === "INR" ? "🇮🇳 INR (₹20/hr)" : "🇺🇸 USD ($0.50/hr)"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-brand-2/15 p-6 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Estimated cost for {hours}h
          </p>
          <p className="mt-2 font-display text-4xl font-bold text-gradient">{cost}</p>
          <WaButton className="mt-5 w-full">Order This Plan</WaButton>
        </div>
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        * Calculated at the standard hourly rate. For heavier use, the 1 Month Pass
        (₹2,499 / $29.99) offers massive savings.
      </p>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <SectionLabel>💰 Transparent Hourly Pricing</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose Your Access Pass
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            ₹20/hr (India) · $0.50/hr (US) — or grab a pass for bigger savings.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                p.badge
                  ? "border-2 border-brand bg-gradient-to-b from-brand/10 to-card"
                  : "glass"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-4 py-1 text-xs font-bold text-brand-foreground">
                  {p.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-3xl font-bold">{p.inr}</span>
                <span className="pb-1 text-sm text-muted-foreground">{p.usd}</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {PLAN_PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-brand-2" />
                    {perk}
                  </li>
                ))}
              </ul>
              <WaButton className="mt-7 w-full" variant={p.badge ? "primary" : "outline"}>
                💬 Buy on WhatsApp
              </WaButton>
            </div>
          ))}
        </div>

        <PriceCalculator />
      </div>
    </section>
  );
}

function Setup() {
  return (
    <section id="setup" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <SectionLabel>🛠 Setup & Usage Guide</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Install in Minutes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Download, load in Chrome, activate your key, and start building.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="glass flex flex-col items-center justify-center rounded-3xl p-10 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-brand-foreground">
              <PlayCircle className="h-10 w-10" />
            </span>
            <h3 className="mt-6 text-xl font-semibold">Complete Setup & Activation Guide</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Follow along step-by-step to download the ZIP, load it in Chrome under
              Developer Mode, activate your key, and unlock unlimited credits.
            </p>
            <WaButton className="mt-6">
              <PlayCircle className="h-5 w-5" /> Watch the Tutorial
            </WaButton>
          </div>

          <ol className="space-y-4">
            {SETUP_STEPS.map((s, i) => (
              <li key={s.t} className="glass flex gap-4 rounded-2xl p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{s.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <SectionLabel>❓ FAQ</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-brand/20 via-card to-brand-2/15 p-10 text-center md:p-16">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]" />
        <SectionLabel>🎁 15-Minute Free Trial — No Payment Needed</SectionLabel>
        <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to Build <span className="text-gradient">Without Limits?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Message us on WhatsApp right now. We'll send your trial code within minutes —
          no card, no signup.
        </p>
        <WaButton className="mt-8 !px-8 !py-4 !text-base">
          <MessageCircle className="h-5 w-5" /> Start Free Trial on WhatsApp
        </WaButton>
        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-brand-2" /> No credit card required
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-brand-2" /> Works with existing workspace
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-brand-2" /> Instant activation
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-brand-foreground">
            <InfinityIcon className="h-4 w-4" />
          </span>
          Limitless
        </a>
        <p className="text-sm text-muted-foreground">© 2026 Limitless. All rights reserved.</p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-brand hover:underline"
        >
          Need Help? WhatsApp
        </a>
      </div>
    </footer>
  );
}

function FloatingWa() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_8px_30px_-4px_var(--brand)] transition-transform hover:scale-105 animate-float"
    >
      <MessageCircle className="h-5 w-5" /> Get Free Trial
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Steps />
        <WaBanner title="Questions? Chat with us on WhatsApp — we reply in minutes!" />
        <Reviews />
        <WaBanner title="Get your FREE 15-minute trial key right now on WhatsApp!" />
        <Pricing />
        <Setup />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
