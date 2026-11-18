import type { ReactNode } from "react";
import { Icon, Phone, StatusBar } from "./ui";

const card = "rounded-[20px] bg-white p-3.5 shadow-[0_1px_4px_rgba(12,12,13,0.05),0_1px_4px_rgba(12,12,13,0.1)]";

function GlowScreen({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-[#0085ee] font-sans text-white">
      <StatusBar light />
      <div className="px-4 pb-5 pt-1">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <img src="/app-icon.png" alt="" className="h-7 w-7 rounded-lg" />
            <span className="text-[13px] font-semibold">Sample Bistro</span>
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
            <Icon name="bell" className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-4 flex gap-2 text-[12px] font-medium">
          <span className="rounded-full bg-white px-3 py-1 text-[#102329]">Overview</span>
          <span className="px-2 py-1 text-white/80">Feedback</span>
          <span className="px-2 py-1 text-white/80">QR</span>
        </div>
        <p className="mt-4 text-[13px] text-white/80">{kicker}</p>
        <p className="font-display text-[34px] font-medium leading-none tracking-[-0.04em]">{title}</p>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden rounded-t-[28px] bg-[#f8f7f7] px-3 pb-4 pt-3">
        {children}
      </div>
    </div>
  );
}

const BARS: [string, string][] = [
  ["5", "42%"],
  ["4", "33%"],
  ["3", "8%"],
  ["2", "13%"],
  ["1", "4%"],
];

export function RatingBars({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      {BARS.map(([star, width]) => (
        <div key={star} className={`grid grid-cols-[28px_1fr_36px] items-center gap-2 ${compact ? "my-1" : "my-1.5"}`}>
          <span className="text-[12px] text-[#526b89]">
            {star} <span className="text-[#f5b400]">★</span>
          </span>
          <span className="h-1.5 overflow-hidden rounded-full bg-[#edf2f8]">
            <span className="block h-full rounded-full bg-[#0085ee]" style={{ width }} />
          </span>
          <span className="text-right text-[11px] text-[#8b97a8]">{width}</span>
        </div>
      ))}
    </div>
  );
}

function OverviewBody() {
  return (
    <GlowScreen kicker="Overall rating" title="4.6">
      <div className={card}>
        {[
          ["Total feedback", "24", "bg-[#e8f1ff] text-[#0085ee]"],
          ["Positive reviews", "18", "bg-[#e7f8ee] text-[#15945b]"],
          ["Needs attention", "4", "bg-[#ffecec] text-[#ee5656]"],
        ].map(([label, value, tone]) => (
          <div key={label} className="flex items-center gap-3 border-b border-[#f3f4f6] py-2 last:border-0">
            <span className={`grid h-8 w-8 place-items-center rounded-full text-[12px] ${tone}`}>●</span>
            <span className="flex-1 text-[13px] text-[#212121]">{label}</span>
            <span className="text-[15px] font-semibold text-[#102329]">{value}</span>
          </div>
        ))}
      </div>
      <div className={card}>
        <p className="text-[14px] font-medium text-[#102329]">Rating distribution</p>
        <RatingBars compact />
      </div>
      <div className={card}>
        <p className="text-[12px] text-[#696969]">Recent feedback</p>
        <p className="mt-1 text-[13px] text-[#212121]">The wait was longer than we expected.</p>
        <p className="mt-1 text-[12px] text-[#f5b400]">★★☆☆☆ · Service</p>
      </div>
    </GlowScreen>
  );
}

export function SplashPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Restrosights app opening on the splash screen, then the home overview">
      <div className="relative h-full bg-[#071433]">
        <div className="splash-layer absolute inset-0 flex flex-col bg-[radial-gradient(ellipse_at_50%_82%,#1d4ed8_0%,#0c2f86_42%,#071433_78%)] text-white">
          <StatusBar light />
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <img
              src="/app-icon.png"
              alt=""
              className="splash-icon h-[112px] w-[112px] rounded-[28px] shadow-[0_24px_40px_rgba(0,0,0,0.28)]"
            />
            <img src="/wordmark-white.svg" alt="Restrosights" className="mt-7 h-8 w-auto max-w-[78%]" />
          </div>
          <p className="pb-8 text-center text-[12px] tracking-wide text-white/75">Reviews, understood.</p>
        </div>
        <div className="home-layer absolute inset-0 bg-white">
          <OverviewBody />
        </div>
      </div>
    </Phone>
  );
}

export function MenuPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  const tiles = [
    ["Overview", "bg-[#e8f1ff] text-[#0085ee]"],
    ["Feedback", "bg-[#fff4e5] text-[#d99400]"],
    ["QR link", "bg-[#efeaff] text-[#6d5efc]"],
    ["Outlets", "bg-[#e7f8ee] text-[#15945b]"],
  ];
  return (
    <Phone className={className} size={size} label="Sample Restrosights home inside a Glow-style phone">
      <GlowScreen kicker="Welcome back" title="Sample Bistro">
        <div className="grid grid-cols-2 gap-2">
          {tiles.map(([label, tone]) => (
            <div key={label} className={`${card} flex flex-col items-start gap-2`}>
              <span className={`grid h-9 w-9 place-items-center rounded-full ${tone}`}>●</span>
              <span className="text-[13px] font-medium text-[#102329]">{label}</span>
            </div>
          ))}
        </div>
      </GlowScreen>
    </Phone>
  );
}

export function FeedbackPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  const rows = [
    ["The wait was longer than we expected.", "Service", "★★☆☆☆", true],
    ["Lovely food and a calm dining room.", "Food", "★★★★★", false],
    ["Staff were polite and the table was ready.", "Service", "★★★★☆", false],
  ] as const;
  return (
    <Phone className={className} size={size} label="Sample recent feedback in a Glow-style phone">
      <GlowScreen kicker="Recent feedback" title="3 new">
        {rows.map(([text, tag, stars, attention]) => (
          <article key={text} className={card}>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-[#f5b400]">{stars}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${attention ? "bg-[#ffecec] text-[#ee5656]" : "bg-[#e7f8ee] text-[#15945b]"}`}>
                {attention ? "Needs attention" : "Positive"}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-5 text-[#212121]">{text}</p>
            <p className="mt-2 text-[11px] text-[#696969]">{tag} · Sample Bistro</p>
          </article>
        ))}
      </GlowScreen>
    </Phone>
  );
}

function QrMark() {
  const cells = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1];
  return (
    <svg viewBox="0 0 5 5" className="h-24 w-24" aria-hidden>
      {cells.map((on, i) => (on ? <rect key={i} x={i % 5} y={Math.floor(i / 5)} width="1" height="1" fill="#102329" /> : null))}
    </svg>
  );
}

export function QrPanel() {
  return (
    <div className={card}>
      <p className="text-[14px] font-medium text-[#102329]">Review link & QR</p>
      <p className="mt-1 text-[12px] text-[#696969]">Sample Bistro · Sample City</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="rounded-2xl bg-[#f8f7f7] p-2">
          <QrMark />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <p className="truncate rounded-full bg-[#f8f7f7] px-3 py-1.5 text-[10px] text-[#696969]">review.samplebistro.example</p>
          <span className="block rounded-full bg-[#0085ee] py-2 text-center text-[12px] font-medium text-white">Copy link</span>
          <span className="block rounded-full bg-white py-2 text-center text-[12px] font-medium text-[#102329] shadow-[0_1px_2px_rgba(16,35,41,0.08)]">Download QR</span>
        </div>
      </div>
    </div>
  );
}

export function QrPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample review link and QR in a Glow-style phone">
      <GlowScreen kicker="Guest entry" title="Scan">
        <QrPanel />
        <div className={card}>
          <p className="text-[13px] font-medium text-[#102329]">Outlet</p>
          <p className="mt-1 rounded-full bg-[#f8f7f7] px-3 py-2 text-[13px] text-[#212121]">Sample City · selected</p>
        </div>
      </GlowScreen>
    </Phone>
  );
}

export function ProfilePhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample business profile in a Glow-style phone">
      <GlowScreen kicker="Business profile" title="Active">
        <div className={card}>
          <div className="flex items-center gap-3">
            <img src="/app-icon.png" alt="" className="h-12 w-12 rounded-2xl" />
            <div>
              <p className="text-[15px] font-semibold text-[#102329]">Sample Bistro</p>
              <p className="text-[12px] text-[#696969]">Sample City</p>
            </div>
          </div>
          <p className="mt-3 truncate rounded-full bg-[#e8f1ff] px-3 py-2 text-[11px] text-[#0085ee]">g.page/sample-bistro/review</p>
          <span className="mt-3 block rounded-full bg-[#0085ee] py-2 text-center text-[12px] font-medium text-white">Copy link</span>
        </div>
      </GlowScreen>
    </Phone>
  );
}

export function NotificationsPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  const notes = [
    ["Low rating", "2-star feedback captured privately"],
    ["New response", "A guest continued toward Google"],
    ["Outlet", "Sample City needs a look"],
  ];
  return (
    <Phone className={className} size={size} label="Sample notifications in a Glow-style phone">
      <GlowScreen kicker="Notifications" title="Updates">
        {notes.map(([title, body]) => (
          <article key={title} className={`${card} flex gap-3`}>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e8f1ff] text-[#0085ee]">
              <Icon name="bell" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[13px] font-semibold text-[#102329]">{title}</span>
              <span className="mt-0.5 block text-[12px] leading-5 text-[#696969]">{body}</span>
            </span>
          </article>
        ))}
      </GlowScreen>
    </Phone>
  );
}

export function QrStand({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <QrPanel />
    </div>
  );
}

export function FeedbackSnippet() {
  return (
    <article className={card}>
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-[#f5b400]">★★☆☆☆</span>
        <span className="rounded-full bg-[#ffecec] px-2 py-0.5 text-[10px] font-semibold text-[#ee5656]">Needs attention</span>
      </div>
      <p className="mt-2 text-[13px] leading-5 text-[#212121]">The wait was longer than we expected.</p>
    </article>
  );
}

export function ReportCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${card} ${className}`}>
      <p className="text-[14px] font-medium text-[#102329]">Rating distribution</p>
      <RatingBars compact />
    </div>
  );
}

export function ProfileSnippet() {
  return (
    <div className={card}>
      <div className="flex items-center gap-2">
        <img src="/app-icon.png" alt="" className="h-10 w-10 rounded-xl" />
        <div>
          <p className="text-[13px] font-semibold text-[#102329]">Sample Bistro</p>
          <p className="text-[11px] text-[#0085ee]">Google review link</p>
        </div>
      </div>
    </div>
  );
}

export function MiniKpis() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className={card}>
        <p className="text-[11px] text-[#696969]">Total feedback</p>
        <p className="text-[22px] font-semibold text-[#102329]">24</p>
      </div>
      <div className={card}>
        <p className="text-[11px] text-[#696969]">Positive</p>
        <p className="text-[22px] font-semibold text-[#102329]">18</p>
      </div>
    </div>
  );
}

export function MiniConcern() {
  return (
    <div className={card}>
      <p className="text-[11px] text-[#696969]">Top concern</p>
      <p className="text-[22px] font-semibold text-[#102329]">Service</p>
    </div>
  );
}

export function CardStack() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[460px]" role="img" aria-label="Stacked sample cards for feedback, QR and a review link">
      <div className={`absolute left-2 top-16 w-[220px] -rotate-6 ${card}`}>
        <p className="text-[12px] font-medium text-[#102329]">Needs attention</p>
        <p className="mt-2 text-[13px] text-[#212121]">The wait was longer than we expected.</p>
      </div>
      <div className={`absolute left-16 top-8 w-[230px] rotate-2 ${card}`}>
        <p className="text-[13px] font-semibold text-[#102329]">Sample Bistro</p>
        <div className="mt-2 flex justify-center">
          <QrMark />
        </div>
      </div>
      <div className="absolute right-0 top-0 w-[210px] rotate-6 rounded-[22px] bg-[#0085ee] p-4 text-white shadow-[0_18px_40px_rgba(0,133,238,0.35)]">
        <img src="/logo-dark.png" alt="" className="h-5 w-auto" />
        <p className="mt-8 text-[20px] font-medium leading-6">Copy link</p>
        <p className="mt-2 text-[12px] text-white/80">Sample review page</p>
      </div>
    </div>
  );
}

export function PolicyCard() {
  return (
    <div className={card}>
      <p className="text-[13px] font-semibold text-[#102329]">Report status</p>
      <p className="mt-1 text-[12px] font-medium text-[#0085ee]">Policy review</p>
      <p className="mt-2 text-[12px] leading-5 text-[#696969]">Legitimate customer criticism is not removed.</p>
    </div>
  );
}

export function InstagramCompare() {
  return (
    <div className="grid grid-cols-2 gap-2" role="img" aria-label="Sample Instagram profile before and after">
      {[
        ["Before", "link in bio"],
        ["After", "Hours · Location · Menu"],
      ].map(([label, line]) => (
        <div key={label} className={`${card} text-center`}>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#696969]">{label}</p>
          <img src="/app-icon.png" alt="" className="mx-auto mt-2 h-8 w-8 rounded-lg" />
          <p className="mt-1 text-[12px] font-semibold text-[#102329]">Sample Bistro</p>
          <p className="text-[11px] text-[#696969]">{line}</p>
        </div>
      ))}
    </div>
  );
}

export function VideoThumbs() {
  return (
    <div className="grid grid-cols-2 gap-2" role="img" aria-label="Sample Brand Story and Location Highlight video thumbnails">
      {[
        ["Brand Story", "from-[#0085ee] to-[#72bdf7]"],
        ["Location Highlight", "from-[#102329] to-[#0085ee]"],
      ].map(([title, gradient]) => (
        <div key={title} className={`relative flex h-24 items-end rounded-[20px] bg-gradient-to-br ${gradient} p-2 text-white shadow-[0_8px_20px_rgba(16,35,41,0.12)]`}>
          <span className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0085ee]">
            <Icon name="play" className="h-3.5 w-3.5" />
          </span>
          <p className="text-[12px] font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
}
