import type { ReactNode } from "react";
import { Icon, Phone, StatusBar } from "./ui";

const NAME = "Sample Bistro";
const CITY = "Sample City";
const REVIEW_URL = "https://review.samplebistro.example/sample-bistro";
const GOOGLE_URL = "https://g.page/sample-bistro/review";

function Shell({
  children,
  label,
  className = "",
  back = false,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  back?: boolean;
}) {
  return (
    <Phone className={className} label={label}>
      <div className="relative flex h-full flex-col bg-[linear-gradient(180deg,#eef3ff_0%,#f6f8fc_42%,#ffffff_100%)] font-sans text-[#1c2740]" aria-hidden>
        <StatusBar />
        <div className="flex items-center justify-between px-3.5 pt-1">
          {back ? (
            <span className="text-[13px] font-semibold text-[#1a73e8]">‹ Menu</span>
          ) : (
            <span />
          )}
          <span className="ml-auto flex items-center gap-1">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e6eef8] text-[11px] font-bold text-[#44556e]">S</span>
            <span className="text-[9px] text-[#9aa6b8]">▾</span>
          </span>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden px-3 pt-2">{children}</div>
        <div className="px-3 pb-3">
          <p className="text-[8px] text-[#98a2b3]">© 2026 Restrosights. All rights reserved.</p>
          <p className="text-[9px] font-medium text-[#1a73e8]">
            Helping businesses get real feedback <span className="text-[#e11d48]">♥</span>
          </p>
        </div>
        <span className="absolute bottom-14 right-3 grid h-10 w-10 place-items-center rounded-[14px] bg-[#111] text-[9px] font-black text-[#25D366] shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
          WA
        </span>
      </div>
    </Phone>
  );
}

function TileIcon({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`grid h-9 w-9 place-items-center rounded-xl ${className}`}>{children}</span>;
}

const TILES: { label: string; bg: string; fg: string; icon: ReactNode }[] = [
  { label: "Overview", bg: "bg-[#e7f0ff]", fg: "text-[#3b82f6]", icon: <Icon name="store" className="h-4 w-4" /> },
  { label: "Feedback", bg: "bg-[#fff1e4]", fg: "text-[#f59e0b]", icon: <Icon name="star" className="h-4 w-4" /> },
  { label: "Notifications", bg: "bg-[#e7f8ee]", fg: "text-[#22a06b]", icon: <Icon name="bell" className="h-4 w-4" /> },
  { label: "Review Link & QR", bg: "bg-[#f3e8ff]", fg: "text-[#8b5cf6]", icon: <Icon name="qr" className="h-4 w-4" /> },
  { label: "Business Profile", bg: "bg-[#fff6d8]", fg: "text-[#d4a017]", icon: <Icon name="card" className="h-4 w-4" /> },
  { label: "Subscription", bg: "bg-[#e8f1ff]", fg: "text-[#3b82f6]", icon: <Icon name="chart" className="h-4 w-4" /> },
  { label: "Account", bg: "bg-[#e7f1ff]", fg: "text-[#3b82f6]", icon: <Icon name="shield" className="h-4 w-4" /> },
  { label: "Install Restrosights", bg: "bg-[#e7f1ff]", fg: "text-[#3b82f6]", icon: <Icon name="arrow" className="h-4 w-4 rotate-90" /> },
];

export function MenuPhone({ className = "" }: { className?: string }) {
  return (
    <Shell className={className} label="Sample Restrosights mobile menu for Sample Bistro">
      <p className="px-1 text-[15px] font-semibold tracking-[-0.03em] text-[#1b2740]">Welcome back, {NAME}! <span aria-hidden>👋</span></p>
      <div className="mt-3 rounded-[22px] bg-white/70 p-2.5 shadow-[0_10px_30px_rgba(40,70,120,0.06)]">
        <div className="grid grid-cols-2 gap-2">
          {TILES.map((tile) => (
            <div key={tile.label} className="flex min-h-[78px] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white shadow-[0_4px_14px_rgba(28,51,83,0.05)]">
              <TileIcon className={`${tile.bg} ${tile.fg}`}>{tile.icon}</TileIcon>
              <span className="px-1 text-center text-[10px] font-medium leading-tight text-[#24324a]">{tile.label}</span>
            </div>
          ))}
          <div className="flex min-h-[78px] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white shadow-[0_4px_14px_rgba(28,51,83,0.05)]">
            <TileIcon className="bg-[#fde8e8] text-[#ef4444]">
              <Icon name="arrow" className="h-4 w-4" />
            </TileIcon>
            <span className="text-[10px] font-medium text-[#24324a]">Logout</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Kpi({
  icon,
  iconClass,
  label,
  value,
}: {
  icon: ReactNode;
  iconClass: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-[#f6f8fc] px-2 py-2">
      <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${iconClass}`}>{icon}</span>
      <p className="mt-1 text-[8px] leading-tight text-[#7b8798]">{label}</p>
      <p className="text-[16px] font-semibold leading-tight tracking-[-0.03em] text-[#1b2740]">{value}</p>
    </div>
  );
}

const BARS: [string, string, string][] = [
  ["5", "42%", "10"],
  ["4", "33%", "8"],
  ["3", "8%", "2"],
  ["2", "13%", "3"],
  ["1", "4%", "1"],
];

export function RatingBars({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      {BARS.map(([star, width, count]) => (
        <div key={star} className={`grid grid-cols-[28px_1fr_52px] items-center gap-1.5 ${compact ? "my-1" : "my-[5px]"}`}>
          <span className="text-[10px] text-[#5c6b82]">
            {star} <span className="text-[#f5b400]">★</span>
          </span>
          <span className="h-[6px] overflow-hidden rounded-full bg-[#e7edf5]">
            <span className="block h-full rounded-full bg-[#3dce7a]" style={{ width }} />
          </span>
          <span className="text-right text-[8px] text-[#8b97a8]">
            {count} ({width})
          </span>
        </div>
      ))}
    </div>
  );
}

export function OverviewPhone({ className = "" }: { className?: string }) {
  return (
    <Shell back className={className} label="Sample Restrosights Review Overview for Sample Bistro">
      <div className="rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(28,51,83,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] font-semibold">Review Overview</h3>
          <span className="text-[10px] font-semibold text-[#1a73e8]">View All</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <Kpi icon="★" iconClass="bg-[#e7f0ff] text-[#3b82f6]" label="Total Feedback" value="24" />
          <Kpi icon="☺" iconClass="bg-[#e7f8ee] text-[#22a06b]" label="Positive Reviews" value="18" />
          <Kpi icon="☹" iconClass="bg-[#ffecec] text-[#ef4444]" label="Negative Reviews" value="4" />
          <Kpi icon="⚑" iconClass="bg-[#fff6d8] text-[#d4a017]" label="Top Concern" value="Service" />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-[#f0f3f8] pt-2">
          <h3 className="text-[13px] font-semibold">Rating Distribution</h3>
          <span className="text-[10px] font-semibold text-[#1a73e8]">View All</span>
        </div>
        <RatingBars />
      </div>
    </Shell>
  );
}

const FEEDBACK = [
  { stars: 2, text: "The wait was longer than we expected.", tag: "Service", tone: "attention" as const, when: "12 Oct, 2:14 pm" },
  { stars: 5, text: "Lovely food and a calm dining room.", tag: "Food", tone: "positive" as const, when: "11 Oct, 8:02 pm" },
  { stars: 4, text: "Staff were polite and the table was ready.", tag: "Service", tone: "positive" as const, when: "9 Oct, 1:20 pm" },
];

function StarsRow({ value }: { value: number }) {
  return (
    <span className="text-[11px] tracking-tight">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? "text-[#f5b400]" : "text-[#d5dbe3]"}>
          ★
        </span>
      ))}
    </span>
  );
}

function FeedbackCard({ item }: { item: (typeof FEEDBACK)[number] }) {
  const attention = item.tone === "attention";
  return (
    <article className={`rounded-xl border border-[#eef2f7] bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(28,51,83,0.04)] ${attention ? "border-l-[3px] border-l-[#f43f5e]" : "border-l-[3px] border-l-[#22c55e]"}`}>
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1">
          <StarsRow value={item.stars} />
          <span className="text-[9px] text-[#8b97a8]">{item.stars}/5</span>
        </span>
        <span className="text-[8px] text-[#98a2b3]">{item.when}</span>
      </div>
      <p className="mt-1 text-[11px] leading-4 text-[#24324a]">{item.text}</p>
      <div className="mt-1.5 flex items-center justify-between">
        <span className="rounded-full bg-[#f3f5f8] px-2 py-0.5 text-[8px] text-[#66758a]">{item.tag}</span>
        <span className={`text-[9px] font-semibold ${attention ? "text-[#e11d48]" : "text-[#16a34a]"}`}>
          {attention ? "Needs attention" : "Positive"}
        </span>
      </div>
    </article>
  );
}

export function FeedbackPhone({ className = "" }: { className?: string }) {
  return (
    <Shell back className={className} label="Sample Restrosights customer feedback list">
      <div className="rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(28,51,83,0.06)]">
        <h3 className="text-[15px] font-semibold">Recent Feedback</h3>
        <p className="mt-0.5 text-[9px] leading-4 text-[#7b8798]">Customer messages received through Restrosights.</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="rounded-lg border border-[#e6ebf2] bg-white px-2 py-1 text-[9px] text-[#44556e]">All ratings ▾</span>
          <span className="rounded-full bg-[#1a73e8] px-2 py-1 text-[9px] font-semibold text-white">↻ Refresh</span>
          <span className="text-[8px] text-[#98a2b3]">Updated just now</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {[
            ["All", true],
            ["Service 2", false],
            ["Food 1", false],
          ].map(([label, on]) => (
            <span key={String(label)} className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${on ? "bg-[#1a73e8] text-white" : "bg-[#f2f5f9] text-[#52627a]"}`}>
              {label}
            </span>
          ))}
        </div>
        <div className="mt-2 space-y-1.5">
          {FEEDBACK.slice(0, 2).map((item) => (
            <FeedbackCard key={item.text} item={item} />
          ))}
        </div>
        <div className="mt-3 border-t border-[#f0f3f8] pt-2">
          <h4 className="text-[13px] font-semibold">Top Customer Concerns</h4>
          <p className="text-[9px] text-[#98a2b3]">Based on private feedback</p>
          {[
            ["Service Related", "2"],
            ["Food Related", "1"],
          ].map(([label, count]) => (
            <div key={label} className="mt-1.5 flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1.5 text-[#334155]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#93a0b4]" /> {label}
              </span>
              <span className="font-semibold">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function QrMark({ className = "h-16 w-16" }: { className?: string }) {
  const cells = [
    1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1,
    1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1,
    0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0,
    1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1,
  ];
  return (
    <svg viewBox="0 0 11 11" className={className} aria-hidden>
      {cells.map((on, i) => (on ? <rect key={i} x={i % 11} y={Math.floor(i / 11)} width="1" height="1" rx="0.15" fill="#10203c" /> : null))}
    </svg>
  );
}

export function QrPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`rounded-[18px] border border-[#e7edf5] bg-white ${compact ? "p-3" : "p-3"}`}>
      {!compact && (
        <>
          <h3 className="text-[14px] font-semibold leading-tight">Outlet Review Links & QR Codes</h3>
          <p className="mt-1 text-[9px] leading-4 text-[#7b8798]">Use the QR/link labelled for each outlet so your team can easily identify what belongs at each location.</p>
        </>
      )}
      <div className={`${compact ? "" : "mt-2"} rounded-xl border border-[#e6ebf2] p-2.5`}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[13px] font-semibold">{NAME}</p>
            <p className="text-[10px] text-[#7b8798]">{CITY}</p>
          </div>
          <span className="rounded-full bg-[#e8f8ef] px-2 py-0.5 text-[8px] font-semibold text-[#15803d]">Single location</span>
        </div>
        <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">Restrosights link</p>
        <p className="mt-1 truncate rounded-lg bg-[#f4f7fb] px-2 py-1.5 text-[8px] text-[#64748b]">{REVIEW_URL}</p>
        <div className="mt-2 flex items-start gap-2">
          <div className="text-center">
            <div className="rounded-lg border border-[#e6ebf2] bg-white p-1">
              <QrMark className="h-14 w-14" />
            </div>
            <p className="mt-1 text-[8px] text-[#98a2b3]">Tap to enlarge</p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="rounded-lg bg-[#1a73e8] py-1.5 text-center text-[9px] font-semibold text-white">↗ View Review Page</span>
            <span className="rounded-lg border border-[#8eb6ff] py-1.5 text-center text-[9px] font-semibold text-[#1a73e8]">Copy Link</span>
            <span className="rounded-lg border border-[#8cdeb8] bg-[#f3fff8] py-1.5 text-center text-[9px] font-semibold text-[#15803d]">↓ Download QR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QrPhone({ className = "" }: { className?: string }) {
  return (
    <Shell back className={className} label="Sample Restrosights review link and QR screen for Sample Bistro">
      <div className="rounded-[20px] bg-white p-1 shadow-[0_8px_24px_rgba(28,51,83,0.06)]">
        <QrPanel />
      </div>
    </Shell>
  );
}

export function ProfilePhone({ className = "" }: { className?: string }) {
  return (
    <Shell back className={className} label="Sample Restrosights business profile for Sample Bistro">
      <div className="rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(28,51,83,0.06)]">
        <div className="flex items-center gap-2.5">
          <img src="/apple-touch-icon.png" alt="" className="h-12 w-12 rounded-xl bg-[#f4f7fb]" />
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-[14px] font-semibold">{NAME}</p>
              <span className="rounded-full bg-[#e8f8ef] px-1.5 py-0.5 text-[8px] font-semibold text-[#15803d]">● Active</span>
            </div>
            <p className="mt-0.5 text-[11px] text-[#64748b]">⌖ {CITY}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e8f1ff] text-[11px] font-bold text-[#1a73e8]">G</span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold">Google Review Link</p>
            <p className="truncate rounded-lg bg-[#eef5ff] px-2 py-1 text-[8px] text-[#3b82f6]">{GOOGLE_URL}</p>
          </div>
          <span className="shrink-0 rounded-lg border border-[#8eb6ff] px-2 py-1.5 text-[9px] font-semibold text-[#1a73e8]">Copy Link</span>
        </div>
      </div>
    </Shell>
  );
}

export function SubscriptionPhone({ className = "" }: { className?: string }) {
  const cells = [
    ["Plan", "Growth"],
    ["Billing", "Monthly"],
    ["Amount", "₹4,999"],
    ["Renewal", "Each month"],
  ];
  return (
    <Shell back className={className} label="Sample Restrosights subscription screen showing the Growth plan at ₹4,999 a month">
      <div className="rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(28,51,83,0.06)]">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[16px] font-semibold">Subscription</h3>
          <span className="rounded-full bg-[#fff4d6] px-2 py-1 text-center text-[8px] font-semibold leading-tight text-[#b7791f]">
            Renewal Due
            <br /> Soon
          </span>
        </div>
        <p className="mt-1 text-[11px] leading-4 text-[#52627a]">Your current Restrosights plan and renewal details.</p>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {cells.map(([label, value]) => (
            <div key={label} className="rounded-xl bg-[#f6f8fc] px-2.5 py-2">
              <p className="text-[9px] text-[#8b97a8]">{label}</p>
              <p className="text-[13px] font-semibold text-[#1b2740]">{value}</p>
            </div>
          ))}
          <div className="rounded-xl bg-[#f6f8fc] px-2.5 py-2">
            <p className="text-[9px] text-[#8b97a8]">Days Remaining</p>
            <p className="text-[13px] font-semibold">30</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

export function NotificationsPhone({ className = "" }: { className?: string }) {
  return (
    <Shell back className={className} label="Sample Restrosights notifications screen">
      <div className="rounded-[20px] bg-white p-3 shadow-[0_8px_24px_rgba(28,51,83,0.06)]">
        <h3 className="text-[15px] font-semibold">Notifications & Updates</h3>
        <p className="mt-1 text-[11px] leading-4 text-[#52627a]">Monthly reports, promotions and important Restrosights updates.</p>
        <div className="mt-3 rounded-2xl bg-[#f4f7ff] p-3">
          <p className="text-[13px] font-semibold">Phone Push Notifications</p>
          <p className="mt-1 text-[10px] leading-4 text-[#52627a]">
            Enable this once to receive Restrosights reports, promotions and important updates on this phone, even when Restrosights is closed.
          </p>
          <div className="mt-3 rounded-xl bg-[#6d5efc] py-2.5 text-center text-[12px] font-semibold text-white">Enable Notifications</div>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#98a2b3]">No notifications or updates yet.</p>
      </div>
    </Shell>
  );
}

export function QrStand({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <QrPanel compact />
    </div>
  );
}

export function FeedbackSnippet() {
  return <FeedbackCard item={FEEDBACK[0]} />;
}

export function ReportCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-[16px] border border-[#e7edf5] bg-white p-3 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-[#1b2740]">Rating Distribution</p>
        <span className="text-[10px] font-semibold text-[#1a73e8]">View All</span>
      </div>
      <RatingBars compact />
    </div>
  );
}

export function ProfileSnippet() {
  return (
    <div className="rounded-[14px] border border-[#e7edf5] bg-white p-3">
      <div className="flex items-center gap-2">
        <img src="/apple-touch-icon.png" alt="" className="h-10 w-10 rounded-lg" />
        <div>
          <p className="text-[13px] font-semibold text-[#1b2740]">{NAME}</p>
          <p className="text-[11px] text-[#64748b]">⌖ {CITY}</p>
        </div>
        <span className="ml-auto rounded-full bg-[#e8f8ef] px-1.5 py-0.5 text-[8px] font-semibold text-[#15803d]">Active</span>
      </div>
      <p className="mt-2 truncate rounded-lg bg-[#eef5ff] px-2 py-1 text-[9px] text-[#3b82f6]">{GOOGLE_URL}</p>
    </div>
  );
}

export function MiniKpis() {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <Kpi icon="★" iconClass="bg-[#e7f0ff] text-[#3b82f6]" label="Total Feedback" value="24" />
      <Kpi icon="☺" iconClass="bg-[#e7f8ee] text-[#22a06b]" label="Positive Reviews" value="18" />
    </div>
  );
}

export function MiniConcern() {
  return (
    <div className="rounded-xl bg-[#f6f8fc] px-3 py-2">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-[#fff6d8] text-[10px] text-[#d4a017]">⚑</span>
      <p className="mt-1 text-[8px] text-[#7b8798]">Top Concern</p>
      <p className="text-[16px] font-semibold text-[#1b2740]">Service</p>
    </div>
  );
}

export function CardStack() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[460px]" role="img" aria-label="Stacked sample Restrosights cards: feedback, review link and QR">
      <div className="absolute left-0 top-16 w-[230px] -rotate-6 rounded-[18px] bg-white p-3 shadow-xl ring-1 ring-black/5">
        <FeedbackCard item={FEEDBACK[0]} />
      </div>
      <div className="absolute left-16 top-6 w-[240px] rotate-3 rounded-[18px] bg-white p-3 shadow-xl ring-1 ring-black/5">
        <p className="text-[12px] font-semibold">{NAME}</p>
        <p className="text-[10px] text-[#7b8798]">{CITY}</p>
        <div className="mt-2 flex justify-center rounded-lg border border-[#e6ebf2] p-2">
          <QrMark className="h-20 w-20" />
        </div>
        <p className="mt-1 text-center text-[9px] text-[#98a2b3]">Tap to enlarge</p>
      </div>
      <div className="absolute right-0 top-0 w-[210px] rotate-6 rounded-[18px] bg-[#1a73e8] p-4 text-white shadow-[0_18px_40px_rgba(26,115,232,0.35)]">
        <img src="/logo-dark.png" alt="" className="h-5 w-auto" />
        <p className="mt-6 text-[18px] font-semibold leading-6">View Review Page</p>
        <p className="mt-2 text-[11px] text-white/80">Sample link for {NAME}</p>
      </div>
    </div>
  );
}

export function PolicyCard() {
  return (
    <div>
      <FeedbackCard item={FEEDBACK[0]} />
      <p className="mt-2 text-[11px] leading-4 text-[#71809a]">Legitimate customer criticism is not removed.</p>
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
        <div key={label} className="rounded-2xl border border-[#e7edf5] bg-white p-2 text-center">
          <p className="text-[9px] font-bold uppercase tracking-wide text-[#98a2b3]">{label}</p>
          <img src="/apple-touch-icon.png" alt="" className="mx-auto mt-1 h-8 w-8 rounded-lg" />
          <p className="mt-1 text-[11px] font-semibold text-[#1b2740]">{NAME}</p>
          <p className="text-[10px] text-[#64748b]">{line}</p>
        </div>
      ))}
    </div>
  );
}

export function VideoThumbs() {
  return (
    <div className="grid grid-cols-2 gap-2" role="img" aria-label="Sample Brand Story and Location Highlight video thumbnails">
      {[
        ["Brand Story", "from-[#1a73e8] to-[#8eb6ff]"],
        ["Location Highlight", "from-[#10203c] to-[#1a73e8]"],
      ].map(([title, gradient]) => (
        <div key={title} className={`relative flex h-24 items-end overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-2 text-white`}>
          <span className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1a73e8]">
            <Icon name="play" className="h-3.5 w-3.5" />
          </span>
          <p className="text-[11px] font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
}

const PARTNERS = [
  ["Bistro Ipsum", "from-[#f7c1d9] to-[#d982b4]"],
  ["Cafe Lorem", "from-[#d9c7ff] to-[#8d74d6]"],
  ["Kitchen Dolor", "from-[#ffe0a8] to-[#e2a84b]"],
  ["Table Amet", "from-[#b7f0d2] to-[#3aaa78]"],
  ["Grill Sit", "from-[#ffd0b8] to-[#e07a4c]"],
  ["Bar Elit", "from-[#c6e4ff] to-[#4aa0e8]"],
];

export function PartnerMarquee() {
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <div className="marquee overflow-hidden" aria-label="Placeholder restaurant names, not real brands">
      {[false, true].map((rev) => (
        <div key={String(rev)} className={`marquee-track py-2 ${rev ? "marquee-rev mt-4" : ""}`}>
          {loop.map(([name, gradient], index) => (
            <article key={`${name}-${index}-${String(rev)}`} className={`relative h-[210px] w-[168px] shrink-0 overflow-hidden rounded-[22px] bg-gradient-to-br ${gradient} shadow-[0_10px_30px_rgba(16,35,41,0.08)]`}>
              <span className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/25">
                  <Icon name="store" className="h-3.5 w-3.5" />
                </span>
                <span className="text-[13px] font-semibold">{name}</span>
              </span>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}
