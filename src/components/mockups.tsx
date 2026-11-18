import type { ReactNode } from "react";
import { Icon, Phone } from "./ui";

/** Light app canvas and the real mobile header: ‹ Menu and the account avatar. */
function Screen({
  children,
  menu = true,
}: {
  children: ReactNode;
  menu?: boolean;
}) {
  return (
    <div className="flex h-full flex-col bg-[#f4f7fb] px-3.5 pb-6 pt-8 font-sans text-[#17233f]">
      <div className="mb-4 flex items-center justify-between">
        {menu ? (
          <span className="text-[13px] font-semibold text-[#1a73e8]">‹ Menu</span>
        ) : (
          <span />
        )}
        <span className="ml-auto flex items-center gap-1">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e7eef8] text-[11px] font-bold text-[#3e4e68]">S</span>
          <span className="text-[8px] text-[#9aa6b8]">▾</span>
        </span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

const panel = "rounded-[18px] border border-[#e7edf4] bg-white shadow-[0_8px_24px_rgba(23,42,78,0.05)]";

function Stat({
  label,
  value,
  icon,
  tone,
}: {
  label: string;
  value: string;
  icon: ReactNode;
  tone: string;
}) {
  return (
    <div className="rounded-xl bg-[#f6f8fc] px-2.5 py-2.5">
      <span className={`grid h-5 w-5 place-items-center rounded-full ${tone}`}>{icon}</span>
      <p className="mt-2 text-[9px] leading-tight text-[#7b8798]">{label}</p>
      <p className="mt-0.5 text-[16px] font-semibold leading-none tracking-[-0.03em] text-[#17233f]">{value}</p>
    </div>
  );
}

const BARS: [string, string, string][] = [
  ["5", "42%", "10"],
  ["4", "33%", "8"],
  ["3", "8%", "2"],
  ["2", "8%", "2"],
  ["1", "8%", "2"],
];

export function RatingBars({ compact = false }: { compact?: boolean }) {
  const rows = compact ? BARS.slice(0, 3) : BARS;
  return (
    <div>
      {rows.map(([star, width, count]) => (
        <div key={star} className="my-1.5 grid grid-cols-[32px_1fr_46px] items-center gap-1.5">
          <span className="text-[10px] text-[#5c6b82]">
            {star} <span className="text-[#f5b400]">★</span>
          </span>
          <span className="h-[5px] overflow-hidden rounded-full bg-[#e8eef5]">
            <span className="block h-full rounded-full bg-[#3dce7a]" style={{ width }} />
          </span>
          <span className="text-right text-[8px] text-[#98a2b3]">
            {count} ({width})
          </span>
        </div>
      ))}
    </div>
  );
}

function OverviewCard({ withBars = true }: { withBars?: boolean }) {
  return (
    <div className={`${panel} p-3`}>
      <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-semibold">Review Overview</h3>
        <span className="text-[10px] font-semibold text-[#1a73e8]">View All</span>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        <Stat label="Total Feedback" value="24" icon={<Icon name="star" className="h-3 w-3" />} tone="bg-[#e7f0ff] text-[#3b82f6]" />
        <Stat label="Positive Reviews" value="18" icon={<span className="text-[10px]">☺</span>} tone="bg-[#e7f8ee] text-[#16a34a]" />
        <Stat label="Negative Reviews" value="4" icon={<span className="text-[10px]">☹</span>} tone="bg-[#ffecec] text-[#ef4444]" />
        <Stat label="Top Concern" value="Service" icon={<span className="text-[9px]">⚑</span>} tone="bg-[#fff6d8] text-[#d4a017]" />
      </div>
      {withBars && (
        <div className="mt-3 border-t border-[#f0f3f8] pt-2.5">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-[13px] font-semibold">Rating Distribution</h3>
            <span className="text-[10px] font-semibold text-[#1a73e8]">View All</span>
          </div>
          <RatingBars />
        </div>
      )}
    </div>
  );
}

function OverviewScreen() {
  return (
    <Screen>
      <OverviewCard />
    </Screen>
  );
}

export function SplashPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Restrosights opens on a white splash, then the Review Overview">
      <div className="relative h-full bg-white">
        <div className="splash-layer absolute inset-0 flex flex-col bg-white text-[#102329]">
          <div className="flex items-center justify-between px-5 pt-8 text-[11px] font-semibold">
            <span>9:41</span>
            <span className="flex items-center gap-1" aria-hidden>
              <span className="inline-block h-2 w-3 rounded-sm bg-current opacity-80" />
              <span className="inline-block h-2.5 w-2 rounded-sm bg-current" />
              <span className="inline-block h-[10px] w-[16px] rounded-[3px] border border-current" />
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <img
              src="/app-icon.png"
              alt=""
              className="splash-icon h-[92px] w-[92px] rounded-[24px] shadow-[0_16px_30px_rgba(16,35,41,0.12)]"
            />
            <img src="/wordmark-on-light.svg" alt="Restrosights" className="mt-6 h-7 w-auto max-w-[76%]" />
          </div>
          <p className="pb-7 text-center text-[11px] tracking-wide text-[#102329]/60">Reviews, understood.</p>
        </div>
        <div className="home-layer absolute inset-0">
          <OverviewScreen />
        </div>
      </div>
    </Phone>
  );
}

const TILES: { label: string; bg: string; fg: string; icon: "store" | "star" | "bell" | "qr" | "card" | "chart" }[] = [
  { label: "Overview", bg: "bg-[#e7f0ff]", fg: "text-[#3b82f6]", icon: "store" },
  { label: "Feedback", bg: "bg-[#fff1e4]", fg: "text-[#f59e0b]", icon: "star" },
  { label: "Notifications", bg: "bg-[#e7f8ee]", fg: "text-[#22a06b]", icon: "bell" },
  { label: "Review Link & QR", bg: "bg-[#f3e8ff]", fg: "text-[#8b5cf6]", icon: "qr" },
  { label: "Business Profile", bg: "bg-[#fff6d8]", fg: "text-[#d4a017]", icon: "card" },
  { label: "Subscription", bg: "bg-[#e8f1ff]", fg: "text-[#3b82f6]", icon: "chart" },
];

export function MenuPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample Bistro home menu in the Restrosights app">
      <Screen menu={false}>
        <p className="px-0.5 text-[15px] font-semibold leading-snug tracking-[-0.03em]">
          Welcome back, Sample Bistro! <span aria-hidden>👋</span>
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {TILES.map((tile) => (
            <div key={tile.label} className="flex min-h-[72px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#eef2f7] bg-white shadow-[0_4px_14px_rgba(23,42,78,0.04)]">
              <span className={`grid h-8 w-8 place-items-center rounded-xl ${tile.bg} ${tile.fg}`}>
                <Icon name={tile.icon} className="h-3.5 w-3.5" />
              </span>
              <span className="px-1 text-center text-[9px] font-medium leading-tight text-[#24324a]">{tile.label}</span>
            </div>
          ))}
        </div>
      </Screen>
    </Phone>
  );
}

export function FeedbackSnippet() {
  return (
    <article className="rounded-xl border border-[#eef2f7] border-l-[3px] border-l-[#f43f5e] bg-white px-3 py-2.5 shadow-[0_4px_14px_rgba(23,42,78,0.04)]">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] tracking-tight text-[#f5b400]">★★☆☆☆ <span className="text-[#98a2b3]">2/5</span></span>
        <span className="text-[9px] text-[#98a2b3]">12 Oct</span>
      </div>
      <p className="mt-1.5 text-[12px] leading-5 text-[#24324a]">The wait was longer than we expected.</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="rounded-full bg-[#f3f5f8] px-2 py-0.5 text-[9px] text-[#66758a]">Service</span>
        <span className="text-[10px] font-semibold text-[#e11d48]">Needs attention</span>
      </div>
    </article>
  );
}

export function FeedbackPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample recent feedback in the Restrosights app">
      <Screen>
        <div className={`${panel} p-3`}>
          <h3 className="text-[14px] font-semibold">Recent Feedback</h3>
          <p className="mt-0.5 text-[10px] leading-4 text-[#7b8798]">Customer messages received through Restrosights.</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="rounded-lg border border-[#e6ebf2] bg-white px-2 py-1 text-[9px] text-[#44556e]">All ratings ▾</span>
            <span className="rounded-full bg-[#1a73e8] px-2 py-1 text-[9px] font-semibold text-white">Refresh</span>
          </div>
          <div className="mt-2 flex gap-1">
            <span className="rounded-full bg-[#1a73e8] px-2 py-0.5 text-[9px] font-semibold text-white">All</span>
            <span className="rounded-full bg-[#f2f5f9] px-2 py-0.5 text-[9px] font-semibold text-[#52627a]">Service 1</span>
            <span className="rounded-full bg-[#f2f5f9] px-2 py-0.5 text-[9px] font-semibold text-[#52627a]">Food 1</span>
          </div>
          <div className="mt-2.5">
            <FeedbackSnippet />
          </div>
        </div>
      </Screen>
    </Phone>
  );
}

function QrMark({ className = "h-16 w-16" }: { className?: string }) {
  const cells = [
    1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 1, 0,
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 0, 1, 0, 1, 1, 1, 0,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 1,
  ];
  return (
    <svg viewBox="0 0 10 5" className={className} aria-hidden>
      {cells.map((on, i) => (on ? <rect key={i} x={(i % 10) * 1} y={Math.floor(i / 10)} width="0.86" height="0.86" fill="#10203c" /> : null))}
    </svg>
  );
}

export function QrStand({ className = "" }: { className?: string }) {
  return (
    <div className={`${panel} p-3 ${className}`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[13px] font-semibold">Sample Bistro</p>
          <p className="text-[10px] text-[#7b8798]">Sample City</p>
        </div>
        <span className="rounded-full bg-[#e8f8ef] px-2 py-0.5 text-[8px] font-semibold text-[#15803d]">Single location</span>
      </div>
      <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">Restrosights link</p>
      <p className="mt-1 truncate rounded-lg bg-[#f4f7fb] px-2 py-1.5 text-[9px] text-[#64748b]">review.samplebistro.example/s</p>
      <div className="mt-2 flex items-center gap-2">
        <div className="rounded-lg border border-[#e6ebf2] bg-white p-1.5">
          <QrMark className="h-14 w-14" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <span className="rounded-lg bg-[#1a73e8] py-1.5 text-center text-[9px] font-semibold text-white">View Review Page</span>
          <span className="rounded-lg border border-[#b9d4ff] py-1.5 text-center text-[9px] font-semibold text-[#1a73e8]">Copy Link</span>
        </div>
      </div>
    </div>
  );
}

export function QrPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample outlet review link and QR code">
      <Screen>
        <div className={`${panel} p-3.5`}>
          <h3 className="text-[14px] font-semibold leading-snug">Outlet Review Links & QR Codes</h3>
          <p className="mt-1 text-[10px] leading-4 text-[#7b8798]">Use the QR/link labelled for each outlet so your team can easily identify what belongs at each location.</p>
          <div className="mt-3 rounded-xl border border-[#e6ebf2] p-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[13px] font-semibold">Sample Bistro</p>
                <p className="text-[10px] text-[#7b8798]">Sample City</p>
              </div>
              <span className="rounded-full bg-[#e8f8ef] px-2 py-0.5 text-[8px] font-semibold text-[#15803d]">Single location</span>
            </div>
            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#98a2b3]">Restrosights link</p>
            <p className="mt-1 truncate rounded-lg bg-[#f4f7fb] px-2 py-1.5 text-[9px] text-[#64748b]">review.samplebistro.example/s</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="text-center">
                <div className="rounded-lg border border-[#e6ebf2] bg-white p-1.5">
                  <QrMark className="h-14 w-14" />
                </div>
                <p className="mt-1 text-[8px] text-[#98a2b3]">Tap to enlarge</p>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="rounded-lg bg-[#1a73e8] py-1.5 text-center text-[9px] font-semibold text-white">View Review Page</span>
                <span className="rounded-lg border border-[#b9d4ff] py-1.5 text-center text-[9px] font-semibold text-[#1a73e8]">Copy Link</span>
                <span className="rounded-lg border border-[#b7e7cf] bg-[#f3fff8] py-1.5 text-center text-[9px] font-semibold text-[#15803d]">Download QR</span>
              </div>
            </div>
          </div>
        </div>
      </Screen>
    </Phone>
  );
}

export function ProfileSnippet() {
  return (
    <div className={`${panel} p-3`}>
      <div className="flex items-center gap-2.5">
        <img src="/app-icon.png" alt="" className="h-11 w-11 rounded-xl bg-[#f4f7fb]" />
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-[13px] font-semibold">Sample Bistro</p>
            <span className="rounded-full bg-[#e8f8ef] px-1.5 py-0.5 text-[8px] font-semibold text-[#15803d]">Active</span>
          </div>
          <p className="mt-0.5 text-[11px] text-[#64748b]">⌖ Sample City</p>
        </div>
      </div>
    </div>
  );
}

export function ProfilePhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample Bistro business profile">
      <Screen>
        <div className={`${panel} p-3.5`}>
          <div className="flex items-center gap-2.5">
            <img src="/app-icon.png" alt="" className="h-12 w-12 rounded-xl bg-[#f4f7fb]" />
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[14px] font-semibold">Sample Bistro</p>
                <span className="rounded-full bg-[#e8f8ef] px-1.5 py-0.5 text-[8px] font-semibold text-[#15803d]">Active</span>
              </div>
              <p className="mt-0.5 text-[11px] text-[#64748b]">⌖ Sample City</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e8f1ff] text-[11px] font-bold text-[#1a73e8]">G</span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold">Google Review Link</p>
              <p className="truncate rounded-lg bg-[#eef5ff] px-2 py-1 text-[9px] text-[#3b82f6]">g.page/sample-bistro/review</p>
            </div>
          </div>
          <span className="mt-3 inline-flex rounded-lg border border-[#b9d4ff] px-3 py-2 text-[11px] font-semibold text-[#1a73e8]">Copy Link</span>
        </div>
      </Screen>
    </Phone>
  );
}

export function NotificationsPhone({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  return (
    <Phone className={className} size={size} label="Sample notifications screen">
      <Screen>
        <div className={`${panel} p-3.5`}>
          <h3 className="text-[15px] font-semibold">Notifications & Updates</h3>
          <p className="mt-1 text-[11px] leading-4 text-[#52627a]">Monthly reports, promotions and important Restrosights updates.</p>
          <div className="mt-3 rounded-2xl bg-[#f4f7ff] p-3">
            <p className="text-[13px] font-semibold">Phone Push Notifications</p>
            <p className="mt-1 text-[10px] leading-4 text-[#52627a]">Enable this once to receive Restrosights reports, promotions and important updates on this phone, even when Restrosights is closed.</p>
            <div className="mt-3 rounded-xl bg-[#6d5efc] py-2.5 text-center text-[12px] font-semibold text-white">Enable Notifications</div>
          </div>
        </div>
      </Screen>
    </Phone>
  );
}

export function MiniKpis() {
  return (
    <Stat label="Total Feedback" value="24" icon={<Icon name="star" className="h-3 w-3" />} tone="bg-[#e7f0ff] text-[#3b82f6]" />
  );
}

export function MiniConcern() {
  return (
    <Stat label="Top Concern" value="Service" icon={<span className="text-[9px]">⚑</span>} tone="bg-[#fff6d8] text-[#d4a017]" />
  );
}

export function ReportCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${panel} p-3 ${className}`}>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-[#17233f]">Rating Distribution</p>
        <span className="text-[10px] font-semibold text-[#1a73e8]">View All</span>
      </div>
      <RatingBars compact />
    </div>
  );
}

